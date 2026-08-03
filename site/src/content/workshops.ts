/**
 * Workshops-Daten (Community Space).
 *
 * Struktur bewusst ähnlich zu `acts.ts`, damit die Workshops wie die
 * Line-Up-Karten aussehen. Foto ist optional; ohne Foto rendert die Seite eine
 * Text-Karte mit Genderstern-Akzent.
 *
 * `tba: true` markiert Workshops, deren Details noch offen sind („Infos folgen“).
 */
import type { ImageMetadata } from 'astro';
import type { StarShape } from '@lib/sterne';
import imgAmenJuvlja from '@assets/workshops/amen-juvlja-girlande.jpg';
import imgRadioMakro from '@assets/workshops/radio-makro.png';

export interface Workshop {
  id: string;
  title: string;
  /** Wer leitet den Workshop (Person / Kollektiv). */
  facilitator?: string;
  /** Spielzeit, Format „HH:MM–HH:MM“ (oder frei, z. B. „noch offen“). */
  time?: string;
  /** Ort auf dem Gelände, z. B. „Community Space“. */
  location?: string;
  description: string;
  /** Englische Beschreibung (falls vorhanden) — sonst EN-Fallback auf `description`. */
  descriptionEn?: string;
  /** Optionales Foto (wie bei Acts). */
  image?: ImageMetadata;
  focus?: string;
  zoom?: number;
  /** Bevorzugte Genderstern-Form; ohne Angabe rotiert sie automatisch. */
  shape?: StarShape;
  /** Details noch offen — rendert einen dezenten „Infos folgen“-Hinweis. */
  tba?: boolean;
}

export const workshops: Workshop[] = [
  {
    id: 'amen-juvlja-mundial',
    title: 'Stich für Stich',
    facilitator: 'Amen Juvlja Mundial — Wir Frauen Weltweit',
    time: '14:00–18:00',
    location: 'Straßensperrung',
    description:
      'Entdecke dein Talent an der Nähmaschine! Ein offenes Schnupperangebot ohne Anmeldung: In entspannter Atmosphäre lernst du unter Anleitung die Grundlagen des Nähens. Zum Einstieg nähen wir alle gemeinsam an einer festlichen Girlande, die sich über das Gelände zieht. Besonders für Anfänger*innen — alles Nötige ist da.',
    descriptionEn:
      'Discover your talent at the sewing machine! An open taster session, no sign-up needed: in a relaxed atmosphere you’ll learn the basics of sewing with guidance. To start, we all sew together on a festive garland that stretches across the grounds. Especially for beginners — everything you need is provided.',
    image: imgAmenJuvlja,
    focus: '50% 45%',
  },
  {
    id: 'radio-makro',
    title: 'Radio Makro × FLINTA*SIALAND',
    facilitator: 'Radio Makro (Makroscope, Mülheim a. d. Ruhr)',
    time: '14:00–22:00',
    location: 'Kieselwiese',
    description:
      'Ein DIY-Onlineradio für unabhängige Musikkultur ist den ganzen Tag mit mobilem Studio vor Ort. Radio Makro streamt die Acts live auf makroscope.de/radio — und zwischendurch kannst du selbst ans Mikro: Probier deine Stimme aus, mach hörbar, was dich interessiert, oder grüß die Oma. Kommt einfach vorbei!',
    descriptionEn:
      'A DIY online radio for independent music culture is on site all day with a mobile studio. Radio Makro streams the acts live at makroscope.de/radio — and in between you can take the mic yourself: try out your voice, make what interests you audible, or say hi to your gran. Just drop by!',
    image: imgRadioMakro,
    focus: '50% 40%',
  },
  {
    id: 'mut-muskel',
    title: 'Mut-Muskel-Workshop',
    facilitator: 'Radikale Töchter',
    time: '15:00–16:30',
    location: 'Gewalten Formen',
    description:
      'Die Welt braucht neue radikale Ideen — vor allem aber mehr Mut. Gemeinsam trainieren wir unseren Mutmuskel: mit Ansätzen der Aktionskunst und des künstlerischen Aktivismus, mit Geschichten von Aktionen, Methoden und Visionen. Ein politischer, kreativer, aktivierender Workshop als Inspiration für die eigene Haltung.',
    descriptionEn:
      'The world needs new radical ideas — but above all, more courage. Together we train our courage muscle: with approaches from action art and artistic activism, with stories of actions, methods and visions. A political, creative, activating workshop as inspiration for your own stance.',
  },
  {
    id: 'narzisstischer-missbrauch',
    title: 'Psychische Gewalt & narzisstischen Missbrauch erkennen',
    facilitator: 'Lisa Jureczko · Projekt ECHO',
    time: '17:00–19:30',
    location: 'Gewalten Formen',
    description:
      'Ein Vortrag für alle, die Einblick in das Thema „Narzisstischer Missbrauch & seine Folgen“ suchen. Once you see it, you can’t unsee it: Wir schauen auf die oft subtilen Taktiken — von Gaslighting über Lovebombing bis Breadcrumbing —, auf Victim Blaming und darauf, wie Außenstehende Betroffene unterstützen können und wo es kosten- & barrierefreie Hilfe gibt. Intersektional, interdisziplinär und entstigmatisierend.',
    descriptionEn:
      'A talk for anyone seeking insight into the topic of “narcissistic abuse & its consequences”. Once you see it, you can’t unsee it: we look at the often subtle tactics — from gaslighting to lovebombing to breadcrumbing —, at victim blaming, and at how bystanders can support those affected and where to find free and accessible help. Intersectional, interdisciplinary and destigmatising.',
  },
  {
    id: 'erasure-poetry',
    title: 'Erasure Poetry',
    time: '16:00–18:00',
    location: 'Community Space',
    description:
      'Aus Vorhandenem Neues schaffen: Beim Erasure-Poetry-Workshop entstehen aus bestehenden Texten eigene Gedichte — durch Weglassen, Übermalen, Hervorheben. Details folgen in Kürze.',
    descriptionEn:
      'Making something new from what already exists: in the erasure poetry workshop, your own poems emerge from existing texts — through omitting, painting over, highlighting. Details coming soon.',
    tba: true,
  },
  {
    id: 'connection-through-movement',
    title: 'Connection through Movement',
    time: '14:00–16:00',
    location: 'Maschinerie',
    description:
      'Über Bewegung in Verbindung kommen — mit sich selbst und miteinander. Details folgen in Kürze.',
    descriptionEn:
      'Connecting through movement — with yourself and with each other. Details coming soon.',
    tba: true,
  },
  {
    id: 'queer-poetry-kollektiv',
    title: 'Queer Poetry Kollektiv',
    location: 'Community Space',
    description:
      'Ein Raum für queere Poesie zum Zuhören und Mitmachen. Details folgen in Kürze.',
    descriptionEn:
      'A space for queer poetry to listen to and join in. Details coming soon.',
    tba: true,
  },
  {
    id: 'graffiti-workshop',
    title: 'Graffiti Workshop',
    time: '16:00–20:00',
    location: 'Straßensperrung',
    description:
      'Farbe an die Wand: Ausprobieren, sprühen, gestalten. Details folgen in Kürze.',
    descriptionEn:
      'Paint on the wall: try it out, spray, create. Details coming soon.',
    tba: true,
  },
  {
    id: 'liquid-latex',
    title: 'Liquid Latex',
    time: '18:30–20:30',
    location: 'Community Space',
    description:
      'Body-Art zum Selbermachen mit flüssigem Latex. Details folgen in Kürze.',
    descriptionEn:
      'DIY body art with liquid latex. Details coming soon.',
    tba: true,
  },
];
