#!/usr/bin/env bash
#
# lettering-to-svg.sh — Janas Handlettering (.ai) zu eingecheckten Inline-SVGs.
#
# Einmaliges lokales Werkzeug, NICHT Teil des Builds. Der GitHub-Pages-Build
# hängt bewusst nicht von `gs`/`pdftocairo` ab — die fertigen SVGs landen fest
# im Repo unter site/src/assets/lettering/.
#
# Voraussetzungen (lokal, nicht in package.json):
#   - poppler (liefert `pdftocairo`)
#   - ghostscript (liefert `gs`)
#
# Erneut ausführen, wenn Jana neue oder geänderte Schriftzüge liefert.
#
# Ablauf pro Datei:
#   1. Enge Farb-Bounding-Box per `gs -sDEVICE=bbox` ermitteln (PDF-Koordinaten,
#      Ursprung unten links).
#   2. SVG per `pdftocairo -svg` erzeugen (viewBox = ganzes Artboard, y von oben).
#   3. Nachbearbeiten: viewBox auf die enge Bounding-Box zuschneiden, feste
#      width/height entfernen (Skalierung über CSS), Fill auf currentColor,
#      XML-Prolog/DOCTYPE/Kommentare/ungenutztes xlink-Namespace entfernen.

set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
SITE_DIR="$(cd "$SCRIPT_DIR/.." && pwd)"
REPO_ROOT="$(cd "$SITE_DIR/.." && pwd)"

SRC_DIR="$REPO_ROOT/änderungen 0908/Schrift_fuer_Website"
OUT_DIR="$SITE_DIR/src/assets/lettering"

mkdir -p "$OUT_DIR"

# Namens-Mapping: Quelle (ohne .ai) -> Ziel-Dateiname.
# (Kein `declare -A`: macOS liefert nur bash 3.2 aus, ohne assoziative Arrays —
# deshalb Mapping als case-Funktion statt als Array.)
map_target() {
  case "$1" in
    "lineup") echo "line-up.svg" ;;
    "workshops") echo "workshops.svg" ;;
    "awareness") echo "awareness.svg" ;;
    "CodeofConduct") echo "code-of-conduct.svg" ;;
    "timetable") echo "timetable.svg" ;;
    "anfahrt") echo "anfahrt.svg" ;;
    "community space") echo "community-space.svg" ;;
    "kieselwiese") echo "kieselwiese.svg" ;;
    "maschinerie") echo "maschinerie.svg" ;;
    "backstage") echo "backstage.svg" ;;
    "flintasiabar") echo "flintasia-bar.svg" ;;
    *) echo "" ;;
  esac
}

# Kleines Node-Hilfsskript für die Nachbearbeitung (kein sed/awk-Gefrickel mit
# Fließkommazahlen). Keine neue npm-Dependency — nutzt nur Node-Bordmittel.
POSTPROCESS="$SCRIPT_DIR/.lettering-postprocess.mjs"
cat > "$POSTPROCESS" <<'NODE'
// Nachbearbeitung eines pdftocairo-SVGs: enge viewBox, currentColor, Aufräumen.
// Aufruf: node .lettering-postprocess.mjs <input.svg> <llx> <lly> <urx> <ury> <output.svg>
import { readFileSync, writeFileSync } from 'node:fs';

const [, , inputPath, llxStr, llyStr, urxStr, uryStr, outputPath] = process.argv;
const [llx, lly, urx, ury] = [llxStr, llyStr, urxStr, uryStr].map(Number);

let svg = readFileSync(inputPath, 'utf8');

// Artboard-Höhe H aus der bestehenden viewBox lesen (y läuft dort schon von oben).
const viewBoxMatch = svg.match(/viewBox="0 0 ([\d.]+) ([\d.]+)"/);
if (!viewBoxMatch) {
  throw new Error(`Keine viewBox in ${inputPath} gefunden.`);
}
const H = Number(viewBoxMatch[2]);

const round2 = (n) => Math.round(n * 100) / 100;
const newViewBox = [round2(llx), round2(H - ury), round2(urx - llx), round2(ury - lly)].join(' ');

svg = svg
  // XML-Prolog, DOCTYPE, Kommentare raus.
  .replace(/<\?xml[\s\S]*?\?>\s*/, '')
  .replace(/<!DOCTYPE[\s\S]*?>\s*/, '')
  .replace(/<!--[\s\S]*?-->/g, '')
  // Enge Bounding-Box statt volles Artboard.
  .replace(/viewBox="0 0 [\d.]+ [\d.]+"/, `viewBox="${newViewBox}"`)
  // Feste Maße raus -> Skalierung über CSS.
  .replace(/\swidth="[^"]*"/, '')
  .replace(/\sheight="[^"]*"/, '')
  // Schwarz -> currentColor (Attribut- und Style-Schreibweise, mit/ohne Leerzeichen).
  .replace(/fill="rgb\(0%,\s*0%,\s*0%\)"/g, 'fill="currentColor"')
  .replace(/fill:\s*rgb\(0%,\s*0%,\s*0%\)/g, 'fill: currentColor');

// Ungenutztes xlink-Namespace entfernen, falls kein xlink: mehr im Dokument vorkommt.
if (!svg.includes('xlink:')) {
  svg = svg.replace(/\s*xmlns:xlink="[^"]*"/, '');
}

if (!svg.endsWith('\n')) svg += '\n';

writeFileSync(outputPath, svg);
NODE

for src in "$SRC_DIR"/*.ai; do
  base="$(basename "$src" .ai)"
  target="$(map_target "$base")"
  if [[ -z "$target" ]]; then
    echo "WARNUNG: kein Mapping für '$base' — übersprungen." >&2
    continue
  fi

  echo "→ $base.ai -> $target"

  bbox_line="$(gs -q -dBATCH -dNOPAUSE -sDEVICE=bbox "$src" 2>&1 | grep HiResBoundingBox)"
  read -r _ llx lly urx ury <<< "$bbox_line"

  tmp_svg="$(mktemp -t lettering-XXXX).svg"
  pdftocairo -svg "$src" "$tmp_svg"

  node "$POSTPROCESS" "$tmp_svg" "$llx" "$lly" "$urx" "$ury" "$OUT_DIR/$target"

  rm -f "$tmp_svg"
done

rm -f "$POSTPROCESS"

echo "Fertig: $(ls "$OUT_DIR" | wc -l | tr -d ' ') SVGs in $OUT_DIR"
