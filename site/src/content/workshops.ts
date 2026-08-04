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
import imgLiquidLatex from '@assets/workshops/liquid-latex.png';
import imgErasurePoetry from '@assets/workshops/erasure-poetry-miaina.jpg';
import imgNarzissmus from '@assets/workshops/narzisstischer-missbrauch.jpg';

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
  /** Bildnachweis (Fotograf*in), wird dezent unter dem Foto gerendert. */
  credit?: string;
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
    location: 'Landebahn',
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
    time: '15:00–19:30',
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
    image: imgNarzissmus,
    credit: 'Foto: Celia Wagner',
    focus: '46% 32%',
  },
  {
    id: 'erasure-poetry',
    title: 'Erasure Poetry',
    facilitator: 'Miaïna Razakamanantsoa',
    time: '16:00–18:00',
    location: 'Community Space',
    description:
      'Erasure Poetry ist eine politische Kunstpraxis: Aus diskriminierendem Material — rassistischen oder sexistischen Büchern, Zeitungsartikeln oder Programmen rechtsextremer Parteien — entsteht durch das Streichen von Wörtern und Zeilen eine neue, oft politische Gegenrede. Das Material (u. a. aus dem Dortmunder Stadtraum) wird bewusst nie gekauft, um keine unterdrückerischen Strukturen zu finanzieren. Historisch eng mit LGBTQIA2S+-, feministischen und Black-Liberation-Bewegungen verbunden — in Deutschland aber noch wenig verbreitet.',
    descriptionEn:
      'Erasure poetry is a political art practice: from discriminatory material — racist or sexist books, newspaper articles or far-right party manifestos — a new, often political counter-speech emerges by striking out words and lines. The material (partly from Dortmund’s urban space) is deliberately never bought, so as not to fund oppressive structures. Historically tied to LGBTQIA2S+, feminist and Black liberation movements — yet still little known in Germany.',
    image: imgErasurePoetry,
    focus: '50% 45%',
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
    location: 'Landebahn',
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
    location: 'Landebahn',
    description:
      'Ein weirdly wundervolles Material: Wir experimentieren mit flüssigem Latex — färben es mit Pigmenten, matschen damit rum, tragen es filigran in Schichten auf, erzeugen Membranen, durchbohren es mit Metall, formen Dinge ab. Es entstehen individuelle Anhänger und Deko-Objekte. Und wir quatschen über Barrieren für FLINTA* in Technik, Handwerk und Wissenstransfer — und wie man in schöner Atmosphäre Neues lernen kann.',
    descriptionEn:
      'A weirdly wonderful material: we experiment with liquid latex — colouring it with pigments, squishing it around, layering it delicately, creating membranes, piercing it with metal, casting objects. Individual pendants and decorative pieces emerge. And we chat about the barriers FLINTA* face in tech, craft and knowledge-sharing — and how to learn new things in a lovely atmosphere.',
    image: imgLiquidLatex,
    focus: '50% 45%',
  },
];
