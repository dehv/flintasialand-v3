/**
 * LetteringName — Union-Typ der 11 Handlettering-Schriftzüge (Dateiname ohne
 * `.svg`-Endung in src/assets/lettering/), damit Tippfehler beim Build auffallen.
 *
 * Eigene Datei statt Export aus Lettering.astro: der Astro-Compiler erzeugt
 * bei `export type ...` direkt im Frontmatter einer .astro-Datei fehlerhaften
 * Code für die Komponentenfunktion. Reines TS bleibt hier deshalb außerhalb.
 */
export type LetteringName =
  | 'line-up'
  | 'workshops'
  | 'awareness'
  | 'code-of-conduct'
  | 'timetable'
  | 'anfahrt'
  | 'community-space'
  | 'kieselwiese'
  | 'maschinerie'
  | 'backstage'
  | 'flintasia-bar';
