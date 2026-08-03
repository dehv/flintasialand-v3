# Flinta\*sialand — Website

Website für das **Flinta\*sialand Festival** — gebaut als erste Instanz eines
wiederverwendbaren **Event**-Typs. Später wächst daraus die Seite des
**Flinta\*sia Kollektivs** (Übersicht aller Events); das Festival ist bereits
ein Event mit `slug: flintasialand`.

## Tech-Stack

| Bereich     | Wahl                                                          |
| ----------- | ------------------------------------------------------------ |
| Framework   | [Astro](https://astro.build) (SSG, Islands, minimales JS)    |
| Styling     | Tailwind CSS v4 mit CI-Tokens als Theme                      |
| Fonts       | Bricolage Grotesque, self-hosted (`@fontsource-variable`)    |
| CMS (Ph. 6) | Storyblok, gekapselt hinter einem Content-Adapter-Layer      |
| Karte       | MapLibre GL + OSM (eigene Island, lädt nur auf `/lageplan`)  |
| Deployment  | Statischer Export (Netlify/Vercel), Base-Verzeichnis `site/` |

## Setup

```bash
cd site
npm install
cp .env.example .env   # Werte sind für v1 optional (Fixtures als Fallback)
npm run dev            # http://localhost:4321
```

Weitere Skripte: `npm run build` (statischer Export nach `dist/`),
`npm run preview`, `npm run check` (TypeScript/Astro-Diagnose).

## Ordnerstruktur

```
site/
├─ src/
│  ├─ assets/            # optimierte Bilder/SVGs (Logos, Sterne, Datum)
│  ├─ components/
│  │  ├─ ui/             # Navbar, Footer, Section, Button, Heading …
│  │  └─ blocks/         # CMS-Blocks (1 Astro-Komponente pro Block-Typ)
│  ├─ layouts/           # BaseLayout (head, SEO/OG, Navbar, Footer)
│  ├─ lib/
│  │  ├─ i18n/           # UI-Strings (de.ts); i18n-ready für EN
│  │  ├─ cms/            # Content-Adapter (Fixtures ↔ Storyblok)
│  │  └─ site.ts         # Navigation, Social, Kontakt
│  ├─ content/           # lokale Fixtures (Event, Acts, Timetable …)
│  ├─ pages/             # Routen (index, line-up, timetable, lageplan …)
│  └─ styles/            # tokens.css (CI) + global.css (Tailwind-Mapping)
└─ public/               # favicon, OG-Bild, statische Downloads (PDF/ICS)
```

## Design-System (CI-verbindlich)

Farbwerte **nur** über Tokens verwenden, keine Ad-hoc-Hexwerte im Markup.

- **Kontrast-Variante A (Berry & Mint).** `berry #5D3E51`, `mint #EDF5ED`.
- **Akzente:** `accent-teal` (UI auf Dark), `accent-green` (UI auf Light),
  `accent-pink` (nur Gendersterne/Deko).
- **Theme-Zonen:** Jede `<Section theme="dark|light">` setzt `data-theme` und
  damit die semantischen Farbrollen. Komponenten nutzen nur
  `bg-surface` / `text-on-surface` / `text-accent` (bzw. `bg-accent`) und ziehen
  automatisch die passende Farbe für den Kontext. Details:
  [`src/styles/tokens.css`](src/styles/tokens.css).

### Überschriften & Janas Lettering

Überschriften laufen über `<Heading>`. Aktuell Bricolage Grotesque Bold über
`--font-display`. Sobald Janas Custom-Lettering (WOFF2 **oder** SVG-Wortbilder)
vorliegt, wird es an genau einer Stelle eingesetzt — ohne Layout-Umbau.

## Wie füge ich einen Act / einen Block hinzu?

> Ab Phase 2/6 vollständig. Kurzüberblick des Zielmodells:

- **Act:** Referenz-Typ `Act` (Name, Bild, Bio, Links, Genre). In v1 als
  Eintrag in den Fixtures unter `src/content/`, später als Storyblok-Entry.
- **Block:** Redaktion setzt Blocks (`HeroBlock`, `LineupBlock`,
  `TimetableBlock`, `MapBlock`, `AwarenessBlock`, `FoerdererBlock`,
  `MediaGalleryBlock`) frei zusammen. Jeder Block rendert über eine
  gleichnamige Komponente in `src/components/blocks/`. **Farben und Layout sind
  in den Komponenten fixiert** → Redaktion kann das Design nicht brechen. Pro
  Block optional ein `theme`-Feld (dark|light) mit sinnvollem Default.

## Status (Phasenplan)

- [x] **Phase 1** — Setup, Design-System, Theme-Zonen, Fonts, Layout, Navbar
      (sticky + mobiler Burger), Footer, Demo-Sektionen.
- [ ] Phase 2 — Stern-/Bild-Komponenten (`StarMaskedImage`, `StarCornerImage`)
- [ ] Phase 3 — Hero v1 (Video + wabernde/maus-reaktive Logo-Ebene)
- [ ] Phase 4 — Startseite-One-Pager (Teaser-Sektionen)
- [ ] Phase 5 — Routen (`/line-up`, `/timetable`, `/lageplan`, `/awareness`, `/code-of-conduct`)
- [ ] Phase 6 — CMS-Adapter (Storyblok), Fixtures als Fallback
- [ ] Phase 7 — Politur (Performance, A11y, SEO), Three.js-Hero-Gerüst
