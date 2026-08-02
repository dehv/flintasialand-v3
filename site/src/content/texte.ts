/**
 * Zentrale, mehrsprachige Textquelle für ALLE redaktionellen Seitentexte.
 *
 * Ziel: EINE Datei, in der sich sämtliche Headlines, Intros, Labels und
 * Fließtexte pflegen lassen. Die Seiten lesen die Texte beim Build hier aus —
 * je nach Route in Deutsch (unter /) oder Englisch (unter /en/).
 *
 * ── So bearbeitest du Texte ────────────────────────────────────────────────
 *   T('Deutscher Text')                    → nur Deutsch (EN fällt auf DE zurück)
 *   T('Deutscher Text', 'English text')    → Deutsch + Englisch
 *
 * Enthält ein Text Inline-Markup (z. B. <strong>…</strong>), wird er im
 * Template mit `set:html` ausgegeben. Solche Bausteine sind unten mit „(html)"
 * gekennzeichnet.
 *
 * Hinweis: Strukturierte Inhalte mit Bildern/Zeiten (Acts, Workshops,
 * Timetable, Lageplan-Pins, Förder*innen) bleiben in ihren eigenen
 * Content-Dateien; dort werden Textfelder nach demselben {de, en}-Muster
 * mehrsprachig (siehe `acts.ts`: `bioEn?`).
 *
 * EN folgt später: aktuell sind die meisten Bausteine nur auf Deutsch gepflegt
 * und fallen auf Deutsch zurück. Zum Übersetzen einfach das zweite Argument
 * in `T('…', '…')` ergänzen.
 */
import { type Locale, defaultLocale } from '@lib/i18n';

/** Ein Textbaustein in allen Sprachen. `en` optional → Fallback auf `de`. */
export interface LocalizedText {
  de: string;
  en?: string;
}

/** Kurz-Factory für einen Textbaustein. */
const T = (de: string, en?: string): LocalizedText => ({ de, en });

/** Sprachauswahl mit Fallback auf Deutsch (solange EN noch fehlt). */
export function pick(text: LocalizedText, locale: Locale = defaultLocale): string {
  return locale === 'en' && text.en ? text.en : text.de;
}

export const texte = {
  /** Wiederkehrende Bausteine. */
  common: {
    kickerYear: T('FLINTA*SIALAND 2026'),
    communitySpace: T('Community Space'),
    infosFolgen: T('Infos folgen', 'More info soon'),
    translatedFromEn: T('Aus dem Englischen übersetzt', 'Translated from English'),
    translatedFromDe: T('Aus dem Deutschen übersetzt', 'Translated from German'),
  },

  /** Startseite. */
  home: {
    intro: {
      kicker: T('Was ist FLINTA*SIALAND?'),
      headline: T('Ein Festival als sicherer Raum: Von und für FLINTA* & Allies'),
      body: T(
        'FLINTA*SIALAND ist ein Tagesfestival für Sichtbarkeit und Empowerment von FLINTA*-Künstler*innen. Musik, Skillsharing-Workshops, Awareness und Community stehen im Fokus — unser Safer Space schafft Platz und eine schöne Zeit für alle.',
      ),
      ctaLineup: T('Line-Up entdecken'),
      ctaAwareness: T('Awareness-Konzept'),
    },
  },

  /** Line-Up-Teaser (Startseite). */
  lineupTeaser: {
    kicker: T('Line-Up'),
    headline: T('Wer spielt beim FLINTA*SIALAND'),
    body: T(
      'Alle Acts auf einen Blick — von treibenden Live-Performances bis zu tiefen elektronischen DJ-Sets, auf zwei Bühnen im Speicher 100.',
    ),
    ctaFull: T('Ganzes Line-Up'),
    ctaTimetable: T('Timetable'),
  },

  /** Community-/Workshops-Teaser (Startseite). */
  communityTeaser: {
    kicker: T('Community Space'),
    headline: T('Workshops & Community zum Mitmachen'),
    // (html)
    body: T(
      'Neben der Musik ist der <strong>Community Space</strong> das Herz zum Mitmachen: Skillsharing-Workshops zum Ausprobieren und Lernen, die künstlerisch-politische Zone <strong>Gewalten Formen</strong> und die <strong>Queer Dating Stage</strong> — von und für FLINTA* & Allies.',
    ),
    cta: T('Workshops & Community'),
    credit: T('Illustration: „Gewalten Formen“'),
  },

  /** Lageplan-Teaser (Startseite). */
  lageplanTeaser: {
    kicker: T('Location & Gelände'),
    headline: T('Das Festivalgelände am Hafen'),
    // (html) — {ort} wird durch lageplan.name ersetzt.
    body: T(
      'Das FLINTA*SIALAND findet dieses Jahr im <strong>{ort}</strong> statt. Mitten im Dortmunder Hafen/Nordstadt erwartet dich ein abwechslungsreiches Areal: von Konzerten und DJ-Sets auf der Kieselwiese und in der Maschinerie bis hin zu Workshops und Ruhezonen.',
    ),
    addressLabel: T('Adresse:'),
    cta: T('Lageplan & Anreise'),
    credit: T('Foto: Adina Salome Harnischfeger'),
  },

  /** Awareness-Teaser (Startseite). */
  awarenessTeaser: {
    kicker: T('Awareness & Sicherer Raum'),
    headline: T('Damit alle eine gute Zeit haben können.'),
    // (html)
    body1: T(
      'Das FLINTA*SIALAND ist ein <strong class="text-on-surface">safer space</strong> für alle FLINTA*-Personen. Wir stehen für eine <strong class="text-on-surface">Zero-Tolerance-Politik</strong> gegenüber Diskriminierung, Grenzüberschreitungen und jeder Form von Gewalt. Unser Awareness-Team ist den ganzen Tag und Abend vor Ort und ansprechbar — für alle.',
    ),
    body2: T(
      'Wir bieten Pronomen-Sticker am Eingang an, damit du selbst entscheiden kannst, wie du angesprochen werden möchtest.',
    ),
    ctaConcept: T('Awareness-Konzept'),
    ctaCoc: T('Code of Conduct'),
    cardTitle: T('Awareness vor Ort'),
    items: [
      { title: T('Awareness-Team'), text: T('Erkennbar an bunten Westen — jederzeit ansprechbar.') },
      { title: T('Rückzugsraum'), text: T('Ein ruhiger Ort zum Durchatmen — kein Grund nötig.') },
      { title: T('Pronomen-Sticker'), text: T('Am Eingang verfügbar.') },
    ],
  },

  /** Förder*innen-Block (Startseite). */
  foerderer: {
    kicker: T('Mit freundlicher Unterstützung'),
    headline: T('Unsere Förderer & Partner'),
  },

  /** Timetable-Gitter. */
  timetable: {
    note: T('Änderungen vorbehalten.'),
  },

  /** Line-Up & Timetable (Seite). */
  lineup: {
    metaTitle: T('Line-Up & Timetable'),
    metaDescription: T(
      'Das komplette Line-Up des FLINTA*SIALAND 2026 mit Bühne und Uhrzeit. Speicher 100, Dortmund.',
    ),
    headline: T('Line-Up & Timetable'),
    body: T(
      'Samstag, 15. August 2026 · Speicher 100, Dortmunder Hafen. Ein Tag, zwei Bühnen.',
    ),
    tabLineup: T('Line-Up'),
    tabTimetable: T('Timetable'),
    ctaPrint: T('Als PDF speichern / drucken'),
    alsoAtDecks: T('Außerdem an den Decks'),
    timeSuffix: T('Uhr', ''),
  },

  /** Community Space & Workshops (Seite). */
  workshops: {
    metaTitle: T('Community Space & Workshops'),
    metaDescription: T(
      'Workshops, Gewalten Formen & Queer Dating Stage — der Community Space des FLINTA*SIALAND zum Mitmachen, von und für FLINTA* & Allies.',
    ),
    headline: T('Community Space & Workshops'),
    // (html)
    intro: T(
      'Neben Musik und Awareness ist der <strong>Community Space</strong> das Herz zum Mitmachen: Skillsharing-Workshops zum Ausprobieren, Lernen und Austauschen, die künstlerisch-politische Zone <strong>Gewalten Formen</strong> und die <strong>Queer Dating Stage</strong> — von und für FLINTA* & Allies.',
    ),
    workshopsHeading: T('Workshops & Skillsharing'),
    gewalten: {
      heading: T('Gewalten Formen'),
      // (html)
      p1: T(
        '<strong>„Gewalten Formen“</strong> ist eine mobile, künstlerisch-politische Installation, die über verschiedene Medienformate das Thema geschlechtsspezifische Gewalt in den öffentlichen Raum bringt. Das Projekt verbindet Kunst, Aktivismus und Aufklärung, um patriarchale Strukturen aufzudecken und kritisch zu hinterfragen.',
      ),
      // (html)
      p2: T(
        'In dieser Zone finden auch Workshops statt — u. a. der <strong>Mut-Muskel-Workshop</strong> der Radikalen Töchter und der Vortrag <strong>„Psychische Gewalt & narzisstischen Missbrauch erkennen“</strong>.',
      ),
      credit: T('Illustration: „Gewalten Formen“'),
    },
    queer: {
      heading: T('Queer Dating Stage'),
      body: T(
        'Eine kleine Bühne für Begegnungen: spielerisch, selbstbestimmt und mit Augenzwinkern neue Menschen kennenlernen. Das genaue Format und die Zeiten geben wir hier in Kürze bekannt.',
      ),
    },
  },

  /** Awareness (Seite). */
  awareness: {
    metaTitle: T('Awareness'),
    metaDescription: T(
      'Das Awareness-Konzept des FLINTA*SIALAND: Safer Space, Awareness-Team, Rückzugsraum und klare Haltung gegen Diskriminierung.',
    ),
    kicker: T('Awareness & Sicherer Raum'),
    headline: T('Damit alle eine gute Zeit haben können.'),
    // (html)
    intro: T(
      'Das FLINTA*SIALAND ist ein <strong class="text-on-surface">safer space</strong> für alle FLINTA*-Personen. Wir stehen für eine <strong class="text-on-surface">Zero-Tolerance-Politik</strong> gegenüber Diskriminierung, Grenzüberschreitungen und jeder Form von Gewalt. Dein Wohlbefinden steht im Zentrum.',
    ),
    contactLabel: T('Awareness-Team erreichen'),
    grundsaetzeHeading: T('Awareness heißt für uns'),
    grundsaetze: [
      T('Wir achten aufeinander. Wir hören zu.'),
      T('Wir respektieren Grenzen.'),
      T('Wir unterstützen, wenn sich jemand unwohl fühlt.'),
      T('Wir alle tragen Verantwortung füreinander.'),
    ],
    vorOrtHeading: T('Awareness vor Ort'),
    angebote: [
      {
        title: T('Awareness-Team vor Ort'),
        text: T('Den ganzen Tag und Abend ansprechbar — erkennbar an den pinken Westen mit der Aufschrift „Awareness“. Parteilich, unterstützend und vertraulich.'),
      },
      {
        title: T('Rückzugsraum'),
        text: T('Ein ruhiger Ort zum Durchatmen, wenn dir alles zu viel wird. Du brauchst keinen Grund zu nennen.'),
      },
      {
        title: T('Pronomen-Sticker'),
        text: T('Am Eingang verfügbar. Du entscheidest selbst, wie du angesprochen werden möchtest.'),
      },
      {
        title: T('Pinke Bänder gegen Fotos'),
        text: T('Wer nicht fotografiert werden möchte, nimmt sich am Eingang ein pinkes Band. Bitte respektiere das — und frage grundsätzlich vor jedem Foto.'),
      },
    ],
    teamHeading: T('Das Awareness-Team ist für dich da'),
    teamBody: T(
      'Wenn du dich nicht sicher fühlst oder etwas erlebst, das unseren Grundsätzen widerspricht: Melde dich. Du entscheidest, was du erzählen möchtest und welche Unterstützung du annimmst. Wir hören zu, stellen deine Wahrnehmung nicht in Frage und behandeln alles vertraulich.',
    ),
    cocButton: T('Zum vollständigen Code of Conduct'),
  },

  /** Lageplan (Seite). */
  lageplan: {
    kicker: T('Lageplan'),
    // (html) — {osm} wird durch den OSM-Link ersetzt.
    mapTip: T(
      'Tipp: Zoomen per +/− oder zwei Fingern (Strg + Scrollen am Desktop). {osm}',
    ),
    openOsm: T('In OpenStreetMap öffnen'),
    anreiseHeading: T('Anreise & Barrierefreiheit'),
    oepnvLabel: T('Mit ÖPNV'),
    autoLabel: T('Mit dem Auto'),
    barrierefreiheitLabel: T('Barrierefreiheit'),
  },

  /** 404. */
  notFound: {
    metaTitle: T('Seite nicht gefunden'),
    metaDescription: T('Diese Seite gibt es leider nicht (mehr).'),
    kicker: T('Fehler 404'),
    headline: T('Hier ist es mucksmäuschenstill... 🐭'),
    body: T(
      'Die Seite, die du suchst, gibt es leider nicht (mehr). Vielleicht hat sich ein Tippfehler eingeschlichen oder der Link ist veraltet.',
    ),
    ctaHome: T('Zur Startseite'),
    ctaLineup: T('Zum Line-Up'),
  },
};
