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

/** Sticky-Anker-Navbar der Startseite + Deep-Link-Routen. */
export const primaryNav: NavItem[] = [
  { key: 'intro', label: 'Über', href: '/#intro', anchor: true },
  { key: 'lineup', label: 'Line-Up', href: '/line-up' },
  { key: 'timetable', label: 'Timetable', href: '/timetable' },
  { key: 'lageplan', label: 'Lageplan', href: '/lageplan' },
  { key: 'awareness', label: 'Awareness', href: '/awareness' },
];

export interface FooterLink {
  label: string;
  href: string;
  external?: boolean;
}

export const footerLinks = {
  legal: [
    { label: 'Impressum', href: '/impressum' },
    { label: 'Datenschutz', href: '/datenschutz' },
    { label: 'Code of Conduct', href: '/code-of-conduct' },
    { label: 'Awareness', href: '/awareness' },
  ] as FooterLink[],
  // TODO: finale Social-Links von Alia.
  social: [
    { label: 'Instagram', href: 'https://instagram.com/', external: true },
  ] as FooterLink[],
};

// TODO: finale Kontaktadresse von Alia.
export const contactEmail = 'hallo@flintasialand.de';
