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
    kickerYear: T('FLINTA*SIALAND 2026', 'FLINTA*SIALAND 2026'),
    communitySpace: T('Community Space', 'Community Space'),
    infosFolgen: T('Infos folgen', 'More info soon'),
    translatedFromEn: T('Aus dem Englischen übersetzt', 'Translated from English'),
    translatedFromDe: T('Aus dem Deutschen übersetzt', 'Translated from German'),
  },

  /** Hero (Startseite). */
  hero: {
    // (html) — Zeilenumbrüche via <br>, Gendersterne via <span class="stern">*</span>.
    taglineHtml: T(
      'Festival für Sichtbarkeit<br />und Empowerment<br />von FLINTA<span class="stern">*</span>-Künstler<span class="stern">*</span>innen',
      'A festival for the visibility<br />and empowerment of<br />FLINTA<span class="stern">*</span> artists',
    ),
    // Für Screenreader (im h1) — reiner Text.
    taglineSr: T(
      'FLINTA*SIALAND — Festival für Sichtbarkeit und Empowerment von FLINTA*-Künstler*innen',
      'FLINTA*SIALAND — a festival for the visibility and empowerment of FLINTA* artists',
    ),
    // Präfix vor dem Datum (Screenreader).
    datePrefix: T('Am', 'On'),
  },

  /** Startseite. */
  home: {
    intro: {
      kicker: T('Was ist FLINTA*SIALAND?', 'What is FLINTA*SIALAND?'),
      headline: T(
        'Ein Festival als sicherer Raum: Von und für FLINTA* & Allies',
        'A festival as a safer space: by and for FLINTA* & allies',
      ),
      body: T(
        'FLINTA*SIALAND ist ein Tagesfestival für Sichtbarkeit und Empowerment von FLINTA*-Künstler*innen. Musik, Skillsharing-Workshops, Awareness und Community stehen im Fokus — unser Safer Space schafft Platz und eine schöne Zeit für alle.',
        'FLINTA*SIALAND is a one-day festival for the visibility and empowerment of FLINTA* artists. Music, skill-sharing workshops, awareness and community are at its heart — our safer space makes room for a good time for everyone.',
      ),
      ctaLineup: T('Line-Up entdecken', 'Discover the line-up'),
      ctaAwareness: T('Awareness-Konzept', 'Awareness concept'),
    },
  },

  /** Line-Up-Teaser (Startseite). */
  lineupTeaser: {
    kicker: T('Line-Up', 'Line-up'),
    headline: T('Wer spielt beim FLINTA*SIALAND?', 'Who’s playing at FLINTA*SIALAND?'),
    body: T(
      'Alle Acts auf einen Blick — von treibenden Live-Performances bis zu tiefen elektronischen DJ-Sets, auf zwei Bühnen im Speicher 100.',
      'Every act at a glance — from driving live performances to deep electronic DJ sets, on two stages at Speicher 100.',
    ),
    ctaFull: T('Ganzes Line-Up', 'Full line-up'),
    ctaTimetable: T('Timetable', 'Timetable'),
  },

  /** Community-/Workshops-Teaser (Startseite). */
  communityTeaser: {
    kicker: T('Community Space', 'Community Space'),
    headline: T('Workshops & Community zum Mitmachen', 'Workshops & community to join in'),
    // (html)
    body: T(
      'Neben der Musik ist der <strong>Community Space</strong> das Herz zum Mitmachen: Skillsharing-Workshops zum Ausprobieren und Lernen, die künstlerisch-politische Zone <strong>Gewalten Formen</strong> und die <strong>Queer Dating Stage</strong> — von und für FLINTA* & Allies.',
      'Beyond the music, the <strong>Community Space</strong> is the heart of joining in: skill-sharing workshops to try out and learn, the artistic-political zone <strong>Gewalten Formen</strong> and the <strong>Queer Dating Stage</strong> — by and for FLINTA* & allies.',
    ),
    cta: T('Workshops & Community', 'Workshops & community'),
    credit: T('Illustration: „Gewalten Formen“', 'Illustration: “Gewalten Formen”'),
  },

  /** Lageplan-Teaser (Startseite). */
  lageplanTeaser: {
    kicker: T('Location & Gelände', 'Location & grounds'),
    headline: T('Das Festivalgelände am Hafen', 'The festival grounds at the harbour'),
    // (html) — {ort} wird durch lageplan.name ersetzt.
    body: T(
      'Das FLINTA*SIALAND findet dieses Jahr im <strong>{ort}</strong> statt. Mitten im Dortmunder Hafen/Nordstadt erwartet dich ein abwechslungsreiches Areal: von Konzerten und DJ-Sets auf der Kieselwiese und in der Maschinerie bis hin zu Workshops und Ruhezonen.',
      'This year, FLINTA*SIALAND takes place at <strong>{ort}</strong>. Right in Dortmund’s harbour/Nordstadt, a varied area awaits you: from concerts and DJ sets on the Kieselwiese and in the Maschinerie to workshops and quiet zones.',
    ),
    addressLabel: T('Adresse:', 'Address:'),
    cta: T('Lageplan & Anreise', 'Location & directions'),
    credit: T('Foto: Adina Salome Harnischfeger', 'Photo: Adina Salome Harnischfeger'),
  },

  /** Awareness-Teaser (Startseite). */
  awarenessTeaser: {
    kicker: T('Awareness & Sicherer Raum', 'Awareness & safer space'),
    headline: T('Damit alle eine gute Zeit haben können.', 'So that everyone can have a good time.'),
    // (html)
    body1: T(
      'Das FLINTA*SIALAND ist ein <strong class="text-on-surface">safer space</strong> für alle FLINTA*-Personen. Wir stehen für eine <strong class="text-on-surface">Zero-Tolerance-Politik</strong> gegenüber Diskriminierung, Grenzüberschreitungen und jeder Form von Gewalt. Unser Awareness-Team ist den ganzen Tag und Abend vor Ort und ansprechbar — für alle.',
      'FLINTA*SIALAND is a <strong class="text-on-surface">safer space</strong> for all FLINTA* people. We stand for a <strong class="text-on-surface">zero-tolerance policy</strong> towards discrimination, boundary violations and any form of violence. Our awareness team is on site and approachable all day and evening — for everyone.',
    ),
    body2: T(
      'Wir bieten Pronomen-Sticker am Eingang an, damit du selbst entscheiden kannst, wie du angesprochen werden möchtest.',
      'We offer pronoun stickers at the entrance so you can decide for yourself how you’d like to be addressed.',
    ),
    ctaConcept: T('Awareness-Konzept', 'Awareness concept'),
    ctaCoc: T('Code of Conduct', 'Code of Conduct'),
    cardTitle: T('Awareness vor Ort', 'Awareness on site'),
    items: [
      {
        title: T('Awareness-Team', 'Awareness team'),
        text: T('Erkennbar an bunten Westen — jederzeit ansprechbar.', 'Recognisable by colourful vests — approachable any time.'),
      },
      {
        title: T('Rückzugsraum', 'Quiet room'),
        text: T('Ein ruhiger Ort zum Durchatmen — kein Grund nötig.', 'A calm place to breathe — no reason needed.'),
      },
      {
        title: T('Pronomen-Sticker', 'Pronoun stickers'),
        text: T('Am Eingang verfügbar.', 'Available at the entrance.'),
      },
    ],
  },

  /** Förder*innen-Block (Startseite). */
  foerderer: {
    kicker: T('Mit freundlicher Unterstützung', 'With the kind support of'),
    headline: T('Unsere Förderer & Partner', 'Our supporters & partners'),
  },

  /** Timetable-Gitter. */
  timetable: {
    note: T('Änderungen vorbehalten.', 'Subject to change.'),
  },

  /** Line-Up & Timetable (Seite). */
  lineup: {
    metaTitle: T('Line-Up & Timetable', 'Line-up & timetable'),
    metaDescription: T(
      'Das komplette Line-Up des FLINTA*SIALAND 2026 mit Bühne und Uhrzeit. Speicher 100, Dortmund.',
      'The full FLINTA*SIALAND 2026 line-up with stage and set times. Speicher 100, Dortmund.',
    ),
    headline: T('Line-Up & Timetable', 'Line-up & timetable'),
    body: T(
      'Samstag, 15. August 2026 · Speicher 100, Dortmunder Hafen. Ein Tag, zwei Bühnen.',
      'Saturday, 15 August 2026 · Speicher 100, Dortmund harbour. One day, two stages.',
    ),
    tabLineup: T('Line-Up', 'Line-up'),
    tabTimetable: T('Timetable', 'Timetable'),
    ctaPrint: T('Als PDF speichern / drucken', 'Save as PDF / print'),
    alsoAtDecks: T('Außerdem an den Decks', 'Also at the decks'),
    timeSuffix: T('Uhr', ''),
  },

  /** Community Space & Workshops (Seite). */
  workshops: {
    metaTitle: T('Community Space & Workshops', 'Community Space & workshops'),
    metaDescription: T(
      'Workshops, Gewalten Formen & Queer Dating Stage — der Community Space des FLINTA*SIALAND zum Mitmachen, von und für FLINTA* & Allies.',
      'Workshops, Gewalten Formen & Queer Dating Stage — the FLINTA*SIALAND Community Space to join in, by and for FLINTA* & allies.',
    ),
    headline: T('Community Space & Workshops', 'Community Space & workshops'),
    // (html)
    intro: T(
      'Neben Musik und Awareness ist der <strong>Community Space</strong> das Herz zum Mitmachen: Skillsharing-Workshops zum Ausprobieren, Lernen und Austauschen, die künstlerisch-politische Zone <strong>Gewalten Formen</strong> und die <strong>Queer Dating Stage</strong> — von und für FLINTA* & Allies.',
      'Beyond music and awareness, the <strong>Community Space</strong> is the heart of joining in: skill-sharing workshops to try out, learn and exchange, the artistic-political zone <strong>Gewalten Formen</strong> and the <strong>Queer Dating Stage</strong> — by and for FLINTA* & allies.',
    ),
    workshopsHeading: T('Workshops & Skillsharing', 'Workshops & skill-sharing'),
    gewalten: {
      heading: T('Gewalten Formen', 'Gewalten Formen'),
      // (html)
      p1: T(
        '<strong>„Gewalten Formen“</strong> ist eine mobile, künstlerisch-politische Installation, die über verschiedene Medienformate das Thema geschlechtsspezifische Gewalt in den öffentlichen Raum bringt. Das Projekt verbindet Kunst, Aktivismus und Aufklärung, um patriarchale Strukturen aufzudecken und kritisch zu hinterfragen.',
        '<strong>“Gewalten Formen”</strong> is a mobile, artistic-political installation that brings the topic of gender-based violence into public space through various media formats. The project combines art, activism and education to expose and critically question patriarchal structures.',
      ),
      // (html)
      p2: T(
        'In dieser Zone finden auch Workshops statt — u. a. der <strong>Mut-Muskel-Workshop</strong> der Radikalen Töchter und der Vortrag <strong>„Psychische Gewalt & narzisstischen Missbrauch erkennen“</strong>.',
        'Workshops also take place in this zone — including the <strong>Mut-Muskel workshop</strong> by Radikale Töchter and the talk <strong>“Recognising psychological violence & narcissistic abuse”</strong>.',
      ),
      credit: T('Illustration: „Gewalten Formen“', 'Illustration: “Gewalten Formen”'),
    },
    queer: {
      heading: T('Queer Dating Stage', 'Queer Dating Stage'),
      format: T(
        'ANGEL Message — ein Sapphic Kitsch Dating-Format',
        'ANGEL Message — a sapphic kitsch dating format',
      ),
      // (html)
      body: T(
        'Angelehnt an die Kultshow Herzblatt erschafft <strong>ANGEL Message</strong> ein lesbian Dating-Erlebnis voller Sapphic Kitsch und bringt den Dating-Spaß von Love is Blind auf das FLINTA*SIALAND — serviert werden cunty, flirty Vibes für die Shys. Von 15:30 bis 18:00 Uhr können alle FLINTA*, die FLINTA* daten wollen, die Dating-Installation betreten und unbeobachtet blind daten. Moderiert und geleitet wird das Date von zwei queer Cupids, die ihre Pfeile schon bereithalten.',
        'Inspired by the cult TV show Blind Date, <strong>ANGEL Message</strong> creates a lesbian dating experience full of sapphic kitsch and brings the fun of Love is Blind to FLINTA*SIALAND — serving cunty, flirty vibes for the shy ones. From 3:30 to 6 pm, all FLINTA* who want to date FLINTA* can enter the dating installation and blind-date unobserved. The dates are hosted and guided by two queer cupids with their arrows at the ready.',
      ),
      meta: T(
        '15:30–18:00 Uhr · FLINTA* only · ohne Publikum',
        '3:30–6:00 pm · FLINTA* only · no audience',
      ),
      credit: T('Grafik: ANGEL Message', 'Artwork: ANGEL Message'),
    },
  },

  /** Awareness (Seite). */
  awareness: {
    metaTitle: T('Awareness', 'Awareness'),
    metaDescription: T(
      'Das Awareness-Konzept des FLINTA*SIALAND: Safer Space, Awareness-Team, Rückzugsraum und klare Haltung gegen Diskriminierung.',
      'The FLINTA*SIALAND awareness concept: safer space, awareness team, quiet room and a clear stance against discrimination.',
    ),
    kicker: T('Awareness & Sicherer Raum', 'Awareness & safer space'),
    headline: T('Damit alle eine gute Zeit haben können.', 'So that everyone can have a good time.'),
    // (html)
    intro: T(
      'Das FLINTA*SIALAND ist ein <strong class="text-on-surface">safer space</strong> für alle FLINTA*-Personen. Wir stehen für eine <strong class="text-on-surface">Zero-Tolerance-Politik</strong> gegenüber Diskriminierung, Grenzüberschreitungen und jeder Form von Gewalt. Dein Wohlbefinden steht im Zentrum.',
      'FLINTA*SIALAND is a <strong class="text-on-surface">safer space</strong> for all FLINTA* people. We stand for a <strong class="text-on-surface">zero-tolerance policy</strong> towards discrimination, boundary violations and any form of violence. Your wellbeing is at the centre.',
    ),
    contactLabel: T('Awareness-Team erreichen', 'Reach the awareness team'),
    grundsaetzeHeading: T('Awareness heißt für uns', 'For us, awareness means'),
    grundsaetze: [
      T('Wir achten aufeinander. Wir hören zu.', 'We look out for each other. We listen.'),
      T('Wir respektieren Grenzen.', 'We respect boundaries.'),
      T('Wir unterstützen, wenn sich jemand unwohl fühlt.', 'We support anyone who feels uncomfortable.'),
      T('Wir alle tragen Verantwortung füreinander.', 'We all share responsibility for one another.'),
    ],
    vorOrtHeading: T('Awareness vor Ort', 'Awareness on site'),
    angebote: [
      {
        title: T('Awareness-Team vor Ort', 'Awareness team on site'),
        text: T(
          'Den ganzen Tag und Abend ansprechbar — erkennbar an den pinken Westen mit der Aufschrift „Awareness“. Parteilich, unterstützend und vertraulich.',
          'Approachable all day and evening — recognisable by the pink vests reading “Awareness”. Partial, supportive and confidential.',
        ),
      },
      {
        title: T('Rückzugsraum', 'Quiet room'),
        text: T(
          'Ein ruhiger Ort zum Durchatmen, wenn dir alles zu viel wird. Du brauchst keinen Grund zu nennen.',
          'A calm place to breathe when it all gets too much. You don’t need to give a reason.',
        ),
      },
      {
        title: T('Pronomen-Sticker', 'Pronoun stickers'),
        text: T(
          'Am Eingang verfügbar. Du entscheidest selbst, wie du angesprochen werden möchtest.',
          'Available at the entrance. You decide how you’d like to be addressed.',
        ),
      },
      {
        title: T('Pinke Bänder gegen Fotos', 'Pink bands against photos'),
        text: T(
          'Wer nicht fotografiert werden möchte, nimmt sich am Eingang ein pinkes Band. Bitte respektiere das — und frage grundsätzlich vor jedem Foto.',
          'If you don’t want to be photographed, grab a pink band at the entrance. Please respect it — and always ask before taking any photo.',
        ),
      },
      {
        title: T('Barrierefreiheit & Toiletten', 'Accessibility & toilets'),
        text: T(
          'Das Gelände ist grundsätzlich barrierefrei. Ein barrierefreies Behinderten-WC findest du bei Toilette 1 (Toilette 2 hat keins). Brauchst du Unterstützung, sprich das Awareness-Team an oder ruf an: 01575 5885086.',
          'The grounds are generally accessible. You’ll find an accessible toilet at Toilette 1 (Toilette 2 doesn’t have one). If you need support, ask the awareness team or call: +49 1575 5885086.',
        ),
      },
    ],
    teamHeading: T('Das Awareness-Team ist für dich da', 'The awareness team is here for you'),
    teamBody: T(
      'Wenn du dich nicht sicher fühlst oder etwas erlebst, das unseren Grundsätzen widerspricht: Melde dich. Du entscheidest, was du erzählen möchtest und welche Unterstützung du annimmst. Wir hören zu, stellen deine Wahrnehmung nicht in Frage und behandeln alles vertraulich.',
      'If you don’t feel safe or experience something that goes against our principles: reach out. You decide what you want to share and what support you accept. We listen, we don’t question your perception, and we treat everything confidentially.',
    ),
    cocButton: T('Zum vollständigen Code of Conduct', 'To the full Code of Conduct'),
  },

  /** Lageplan (Seite). */
  lageplan: {
    kicker: T('Lageplan', 'Location'),
    // (html) — {osm} wird durch den OSM-Link ersetzt.
    mapTip: T(
      'Tipp: Zoomen per +/− oder zwei Fingern (Strg + Scrollen am Desktop). {osm}',
      'Tip: zoom with +/− or two fingers (Ctrl + scroll on desktop). {osm}',
    ),
    openOsm: T('In OpenStreetMap öffnen', 'Open in OpenStreetMap'),
    anreiseHeading: T('Anreise & Barrierefreiheit', 'Getting here & accessibility'),
    oepnvLabel: T('Mit ÖPNV', 'By public transport'),
    autoLabel: T('Mit dem Auto', 'By car'),
    barrierefreiheitLabel: T('Barrierefreiheit', 'Accessibility'),
  },

  /** 404. */
  notFound: {
    metaTitle: T('Seite nicht gefunden', 'Page not found'),
    metaDescription: T('Diese Seite gibt es leider nicht (mehr).', 'This page doesn’t exist (anymore).'),
    kicker: T('Fehler 404', 'Error 404'),
    headline: T('Hier ist es mucksmäuschenstill... 🐭', 'It’s dead quiet here... 🐭'),
    body: T(
      'Die Seite, die du suchst, gibt es leider nicht (mehr). Vielleicht hat sich ein Tippfehler eingeschlichen oder der Link ist veraltet.',
      'The page you’re looking for doesn’t exist (anymore). Maybe there’s a typo, or the link is out of date.',
    ),
    ctaHome: T('Zur Startseite', 'To the homepage'),
    ctaLineup: T('Zum Line-Up', 'To the line-up'),
  },
};
