/**
 * Deutsche UI-Strings (Primärsprache).
 *
 * WICHTIG: Nur UI-/Chrome-Texte (Navigation, Buttons, Labels) gehören hierher.
 * Redaktionelle Inhalte (Acts, Timetable, Texte) kommen aus dem Content-Layer
 * (Fixtures/Storyblok), NICHT aus dieser Datei.
 *
 * Englisch später: `en.ts` mit gleicher Struktur anlegen, in `index.ts`
 * registrieren — kein Umbau der Komponenten nötig.
 */
export const de = {
  meta: {
    siteName: 'Flinta*sialand',
    tagline: 'Festival',
  },
  nav: {
    menu: 'Menü',
    open: 'Menü öffnen',
    close: 'Menü schließen',
    closeShort: 'Schließen',
    skipToContent: 'Zum Inhalt springen',
    home: 'Start',
    language: 'Sprache',
    intro: 'Über',
    lineup: 'Line-Up',
    timetable: 'Timetable',
    lageplan: 'Lageplan',
    awareness: 'Awareness',
    foerderer: 'Förder*innen',
  },
  actions: {
    tickets: 'Tickets',
    moreLineup: 'Ganzes Line-Up',
    fullTimetable: 'Ganze Timetable',
    openMap: 'Lageplan öffnen',
    readAwareness: 'Awareness-Konzept',
    codeOfConduct: 'Code of Conduct',
    download: 'Herunterladen',
    back: 'Zurück',
  },
  footer: {
    info: 'Info',
    imprint: 'Impressum',
    privacy: 'Datenschutz',
    codeOfConduct: 'Code of Conduct',
    contact: 'Kontakt',
    social: 'Social Media',
    collective: 'Flinta*sia Kollektiv',
    madeWith: 'Ein Festival vom Flinta*sia Kollektiv.',
  },
  a11y: {
    starDecoration: 'Dekorativer Genderstern',
    logo: 'Flinta*sialand — zur Startseite',
    externalLink: 'Öffnet in neuem Tab',
  },
} as const;

export type Dict = typeof de;
