/**
 * Site-weite Konfiguration (Navigation, Social, Kontakt).
 *
 * Bewusst getrennt vom Event-Content: das hier ist "Chrome" (Navbar/Footer),
 * das später fürs ganze Kollektiv gilt. Event-spezifische Inhalte kommen aus
 * dem Content-Layer (siehe src/content).
 */

export interface NavItem {
  /** i18n-Key relativ zu dict.nav */
  key: string;
  label: string;
  href: string;
  /** true = Anker auf der Startseite (One-Pager), false = eigene Route */
  anchor?: boolean;
}

/**
 * Sticky-Navbar. Die meisten Items sind Anker auf den One-Pager (scrollen zu
 * den Teaser-Sektionen); „Line-Up“ führt direkt auf die kombinierte Line-Up/
 * Timetable-Seite (/line-up), da Timetable dort als Umschalt-Ansicht lebt.
 * Von Unterseiten aus springt z. B. `/#lageplan` zurück auf die Startseite.
 */
export const primaryNav: NavItem[] = [
  { key: 'intro', label: 'Über', href: '/#intro', anchor: true },
  { key: 'lineup', label: 'Line-Up', href: '/line-up' },
  { key: 'lageplan', label: 'Lageplan', href: '/lageplan' },
  { key: 'awareness', label: 'Awareness', href: '/awareness' },
];

export interface FooterLink {
  label: string;
  href: string;
  external?: boolean;
  /** Nur auf Deutsch verfügbar → Link bleibt auch auf /en auf der DE-Route. */
  deOnly?: boolean;
}

export const footerLinks = {
  legal: [
    { label: 'Impressum', href: '/impressum', deOnly: true },
    { label: 'Datenschutz', href: '/datenschutz', deOnly: true },
    { label: 'Code of Conduct', href: '/code-of-conduct' },
    { label: 'Awareness', href: '/awareness' },
  ] as FooterLink[],
  social: [
    {
      label: 'Instagram',
      href: 'https://instagram.com/flintasia_kollektiv',
      external: true,
    },
  ] as FooterLink[],
};

export const contactEmail = 'flintafestival.dortmund@gmail.com';
