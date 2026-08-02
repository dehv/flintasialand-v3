/**
 * Englische UI-Strings (Zweitsprache, unter /en/).
 *
 * WICHTIG: Nur UI-/Chrome-Texte (Navigation, Buttons, Labels). Struktur muss
 * exakt `de.ts` (Typ `Dict`) spiegeln — TypeScript erzwingt das über den
 * `Record<Locale, Dict>` in `index.ts`.
 */
import type { Dict } from './de';

export const en: Dict = {
  meta: {
    siteName: 'FLINTA*SIALAND',
    tagline: 'Festival',
  },
  nav: {
    menu: 'Menu',
    open: 'Open menu',
    close: 'Close menu',
    closeShort: 'Close',
    skipToContent: 'Skip to content',
    home: 'Home',
    language: 'Language',
    intro: 'About',
    lineup: 'Line-up',
    workshops: 'Workshops & Community',
    timetable: 'Timetable',
    lageplan: 'Location',
    awareness: 'Awareness',
    foerderer: 'Supporters',
  },
  actions: {
    tickets: 'Tickets',
    moreLineup: 'Full line-up',
    fullTimetable: 'Full timetable',
    openMap: 'Open location',
    readAwareness: 'Awareness concept',
    codeOfConduct: 'Code of Conduct',
    download: 'Download',
    back: 'Back',
  },
  footer: {
    info: 'Info',
    imprint: 'Imprint',
    privacy: 'Privacy',
    codeOfConduct: 'Code of Conduct',
    contact: 'Contact',
    social: 'Social media',
    collective: 'Flinta*sia Kollektiv',
    madeWith: 'A festival by the Flinta*sia Kollektiv.',
  },
  a11y: {
    starDecoration: 'Decorative gender star',
    logo: 'FLINTA*SIALAND — to the homepage',
    externalLink: 'Opens in a new tab',
  },
};
