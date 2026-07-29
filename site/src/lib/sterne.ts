/**
 * Genderstern-Registry — die organischen Stern-Silhouetten sind das zentrale
 * Markenzeichen. Hier zentral registriert, damit Komponenten (StarMaskedImage,
 * StarCornerImage) und später CMS-Felder aus derselben Quelle wählen.
 *
 * Die `mask-*.png` sind aus Janas Original-Sternen erzeugte, auf ihre Alpha-
 * Bounding-Box beschnittene Silhouetten (weiße Form auf Transparenz). Genutzt
 * werden sie als CSS `mask-image` — nur der Alpha-Kanal zählt, die Farbe kommt
 * aus den CI-Tokens. So bleibt jede Sternfläche CI-treu einfärbbar.
 *
 * `ratio` = natürliches Seitenverhältnis (Breite/Höhe) der beschnittenen Form.
 * Komponenten nutzen es als Default-`aspect-ratio`, damit die Form ohne
 * Verzerrung in ihre Box passt.
 */
import mask1 from '@assets/sterne/mask-01.png';
import mask2 from '@assets/sterne/mask-02.png';
import mask3 from '@assets/sterne/mask-03.png';
import mask4 from '@assets/sterne/mask-04.png';

export type StarShape = '1' | '2' | '3' | '4';

/** Akzentwahl. `auto` = Zonen-Akzent (teal auf dark / green auf light). */
export type StarAccent = 'teal' | 'green' | 'pink' | 'auto' | 'none';

interface StarDef {
  src: ImageMetadata;
  ratio: number;
}

export const STAR_SHAPES: Record<StarShape, StarDef> = {
  '1': { src: mask1, ratio: 0.929 },
  '2': { src: mask2, ratio: 1.041 },
  '3': { src: mask3, ratio: 1.091 },
  '4': { src: mask4, ratio: 0.984 },
};

export const STAR_SHAPE_KEYS = Object.keys(STAR_SHAPES) as StarShape[];

export function getStar(shape: StarShape = '1'): StarDef {
  return STAR_SHAPES[shape] ?? STAR_SHAPES['1'];
}

/**
 * Löst eine Akzent-Auswahl in einen CSS-Farbwert auf.
 * `auto` gibt den zonen-abhängigen `--accent` zurück, `none` ⇒ null (kein
 * Overlay / keine Füllung). Feste Werte ziehen die CI-Tokens.
 */
export function resolveAccent(accent: StarAccent = 'auto'): string | null {
  switch (accent) {
    case 'none':
      return null;
    case 'auto':
      return 'var(--accent)';
    case 'teal':
      return 'var(--color-accent-teal)';
    case 'green':
      return 'var(--color-accent-green)';
    case 'pink':
      return 'var(--color-accent-pink)';
  }
}
