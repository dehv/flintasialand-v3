import type { ImageMetadata } from 'astro';
import type { StarShape } from '@lib/sterne';
import imgTigrezz from '@assets/artists/tigrezz_punch.jpg';
import imgMakahaun from '@assets/artists/makahaun-neu.jpg';
import imgDddr from '@assets/artists/dddr-alt2.jpg';
import imgArtemis from '@assets/artists/artemis-jade-alt1.jpg';
import imgBaerte from '@assets/artists/baerte-mit-maedchen-alt2.jpg';
import imgBesteLiv from '@assets/artists/beste_und_liv.jpg';
import imgFlouse from '@assets/artists/flouse.jpg';
import imgIdeer from '@assets/artists/ideer.jpg';
import imgScherwin from '@assets/artists/scherwin-alias-shay-alt3.jpg';
import imgFloppyCorti from '@assets/artists/floppy_corti.jpg';
import imgShaxtarKisya from '@assets/artists/shaxtar_kisya.jpg';
import imgLilApple from '@assets/artists/lil_apple.jpg';
import imgCane from '@assets/artists/cane-schrotflinta.jpg';

/** Die beiden Bühnen des Festivals. */
export type Stage = 'Kieselwiese' | 'Maschinerie';

export interface Act {
  id: string;
  name: string;
  image: ImageMetadata;
  genre: string;
  /** Bio in der Primärsprache (Deutsch). */
  bio: string;
  /** Englische Bio (falls vorhanden) — sonst fällt die EN-Route auf `bio` zurück. */
  bioEn?: string;
  /**
   * Ursprungssprache, falls die Bio eine Übersetzung ist. Steuert den Hinweis
   * „Aus dem Englischen übersetzt“ (DE) bzw. „Translated from German“ (EN).
   */
  translatedFrom?: 'de' | 'en';
  links: { label: string; href: string }[];
  /** Bühne, auf der der Act spielt. */
  stage: Stage;
  /** Spielzeit, Format „HH:MM–HH:MM“. */
  time: string;
  /** object-position für den Bildausschnitt (Gesicht sichtbar halten). */
  focus?: string;
  /** Zoom-Faktor des Bildausschnitts (1 = kein Zoom, 1.4 = 40 % näher). */
  zoom?: number;
  /**
   * Bevorzugte Genderstern-Form ('1'–'4') dieses Acts. Ohne Angabe rotiert die
   * Form automatisch nach Position (Rhythmus in Line-Up & Marquee).
   */
  shape?: StarShape;
  /**
   * Zweites Foto — nur für b2b-Acts, bei denen die beiden Künstler*innen NICHT
   * auf einem gemeinsamen Bild sind. Wird als zweiter, kombinierter Genderstern
   * dargestellt.
   */
  image2?: ImageMetadata;
  focus2?: string;
  /** Zoom-Faktor für das zweite Foto. */
  zoom2?: number;
  /** Genderstern-Form des zweiten Fotos. */
  shape2?: StarShape;
  highlight?: boolean;
}

/** Sprechendes Label pro Bühne (für Badges/Untertitel). */
export const STAGE_LABEL: Record<Stage, string> = {
  Kieselwiese: 'Kieselwiese · Live',
  Maschinerie: 'Maschinerie · DJ',
};

export const acts: Act[] = [
  {
    id: 'tigrezz-punch',
    name: 'Tigrrez Punch',
    image: imgTigrezz,
    genre: 'Rrrriot Trap / Pop / Punk',
    bio: '„Put some respect on my name! Ich hab kein Cash, ich hab kein Fame“, ballert es lautstark aus den Boxen – was Tigrrez Punch dafür aber zu genüge hat, ist jede Menge queerfeministische Power, Fuck-Off-Attitüde und außergewöhnliches Talent. Zwischen Rrriot Trap, Pop und Punk sprengt Tigrrez Punch aus Bochum nicht nur liebend gerne Genregrenzen, auch die Fesseln des Patriarchats müssen regelmäßig dran glauben.',
    bioEn: '“Put some respect on my name! Ich hab kein Cash, ich hab kein Fame” blasts from the speakers — but what Tigrrez Punch has in abundance is queer-feminist power, a fuck-off attitude and extraordinary talent. Between riot trap, pop and punk, Tigrrez Punch from Bochum loves to blow up genre boundaries — and the shackles of patriarchy regularly get it too.',
    links: [
      { label: 'Instagram', href: 'https://www.instagram.com/tigrrez.punch/' }
    ],
    stage: 'Kieselwiese',
    time: '21:00–21:45',
    focus: '73% 45%',
    zoom: 1.9,
    shape: '3',
  },
  {
    id: 'makahaun',
    name: 'makahaun',
    image: imgMakahaun,
    genre: 'Leftfield Techno / House / Breaks',
    bio: 'makahaun ist Schwarze*r, queere*r DJ und eine aufstrebende Kraft in der elektronischen Musikszene – mit Residencies bei tresor.west und dem Münsteraner Kollektiv schick.standort. Bekannt für weite, sorgfältig kuratierte Selektionen und ein tiefes Verständnis für die Musik, die makahaun spielt, ist der Sound leftfield, mutig und zutiefst persönlich. Verwurzelt im Erbe des Techno als Schwarzer Widerstand, bewegt sich makahaun zwischen Techno und House.',
    bioEn: 'makahaun is a black queer dj and a rising force in the electronic music scene with a resident at tresor.west and the münster collective schick.standort. known for broad, carefully curated selections and a deep understanding of the music they play, their sound is leftfield, bold and deeply personal. rooted in the legacy of techno as black resistance, makahaun moves between techno and house.',
    translatedFrom: 'en',
    links: [
      { label: 'Website', href: 'https://www.makahaun.com' },
      { label: 'Instagram', href: 'https://www.instagram.com/makahaun/' }
    ],
    stage: 'Maschinerie',
    time: '23:00–01:00',
    focus: '58% 45%',
    zoom: 1.15,
    shape: '1',
  },
  {
    id: 'dddr',
    name: 'DDDR',
    image: imgDddr,
    genre: 'Post-Punk / Synth / Wave',
    bio: 'DDDR bringt rohe Energie, treibende Drum-Machines und schneidende Synthesizer auf die Bühne. Ihre Live-Performance verbindet den Geist des Post-Punk mit elektronischen Club-Vibes und einer kompromisslosen Haltung.',
    bioEn: 'DDDR bring raw energy, driving drum machines and cutting synths to the stage. Their live performance blends the spirit of post-punk with electronic club vibes and an uncompromising attitude.',
    links: [
      { label: 'Instagram', href: 'https://www.instagram.com/diedachdeckenderandgruppe' }
    ],
    stage: 'Kieselwiese',
    time: '19:45–20:30',
    focus: '48% 42%',
    zoom: 1.2,
  },
  {
    id: 'artemis-jade',
    name: 'Artemis Jade',
    image: imgArtemis,
    genre: 'Noise / Doom / Post-Punk',
    bio: 'Post Aggressive Noise, doomy und dark — feministisch, queer und laut, zuhause in Köln. Irgendwo zwischen melancholischem Grunge und experimentellem Noise, zuckersüßem Girly-Pop, rauem Post-Punk und kreischendem Doom Metal: Artemis Jade verbindet massive Lautstärke mit sanfter Dissonanz, die in dichten Klangsphären in sich zusammenfällt.',
    bioEn: 'Post aggressive noise, doomy and dark — feminist, queer and loud, based in Cologne. Lost somewhere between melancholic grunge and experimental noise, sugar-sweet girly pop, raspy post-punk and shrieking doom metal: Artemis Jade blends massive loudness and soft dissonance collapsing in dense sound spheres.',
    translatedFrom: 'en',
    links: [
      { label: 'Instagram', href: 'https://www.instagram.com/artemis__jade/' }
    ],
    stage: 'Kieselwiese',
    time: '17:45–18:30',
    focus: '37% 54%',
    zoom: 1.9,
    shape: '1',
  },
  {
    id: 'baerte-mit-maedchen',
    name: 'Bärte mit Mädchen',
    image: imgBaerte,
    genre: 'Pop Punk / Riot Grrrl',
    bio: 'Vier Musikerinnen aus Dortmund, die seit 2024 mit einer Mischung aus Pop Punk und Riot Grrrl die Bühnen aufmischen. Mit klarer Haltung und viel Humor stellen sie Gleichberechtigung, Selbstbestimmung und die Ablehnung traditioneller Geschlechterrollen ins Rampenlicht – und kleben sich dafür Bärte auf. Ihre Shows sind energiegeladen, wild und voller Ohrwurm-Melodien.',
    bioEn: 'Four musicians from Dortmund who’ve been shaking up stages since 2024 with a mix of pop punk and riot grrrl. With a clear stance and plenty of humour, they put equality, self-determination and the rejection of traditional gender roles in the spotlight — and stick on beards to do it. Their shows are high-energy, wild and full of earworm melodies.',
    links: [],
    stage: 'Kieselwiese',
    time: '19:00–19:45',
    focus: '4% 0%',
    shape: '1',
  },
  {
    id: 'beste-und-liv',
    name: 'Beste & Liv',
    image: imgBesteLiv,
    genre: 'Folk / Mehrsprachig',
    bio: 'Was als Freundinnenschaft begann, wurde durchs Singen zu einer künstlerischen Zusammenarbeit. Beste & Liv entdecken Lieder aus verschiedenen Sprachen und lassen sich von den Verbindungen zwischen Türkisch, Spanisch und Persisch inspirieren. Mit dunklen, warmen Stimmen und einer Gitarre erschaffen sie eine intime Atmosphäre, in der sich Erinnerungen und Emotionen begegnen.',
    bioEn: 'What began as a friendship turned, through singing, into an artistic collaboration. Beste & Liv explore songs from different languages, inspired by the connections between Turkish, Spanish and Persian. With dark, warm voices and a guitar, they create an intimate atmosphere where memories and emotions meet.',
    links: [],
    stage: 'Kieselwiese',
    time: '16:45–17:15',
    focus: '27% 41%',
    zoom: 1.55,
    shape: '4',
  },
  {
    id: 'flouse',
    name: 'FLouSe',
    image: imgFlouse,
    genre: 'Indie / Alternative / Punk',
    bio: 'FLouSe ist Newcomer-Singer-Songwriterin und die Solo-Version der Dortmunder Band FLouSe and the Flousen. Beim FLINTA*SIALAND bringt sie ihre selbstgeschriebenen Songs auf die Bühne – irgendwo zwischen Indie, Alternative und Punk. Wer Lust auf musikalischen Mischmasch, charmantes Chaos und eine ganz eigene Ordnung hat, sollte diesen Auftritt nicht verpassen.',
    bioEn: 'FLouSe is a newcomer singer-songwriter and the solo version of the Dortmund band FLouSe and the Flousen. At FLINTA*SIALAND she brings her self-written songs to the stage — somewhere between indie, alternative and punk. If you’re up for a musical mishmash, charming chaos and an order all its own, don’t miss this set.',
    links: [],
    stage: 'Kieselwiese',
    time: '15:30–16:15',
    focus: '44% 0%',
    zoom: 1.65,
  },
  {
    id: 'ideer',
    name: 'ideer',
    image: imgIdeer,
    genre: 'Dream Pop / Electronic',
    bio: 'ideer erschafft verträumte, feenhafte Klangwelten zwischen schimmernden Synths, sanften Melodien und persönlichen Tagtraum-Texten. Nach drei Jahren Großstadtchaos in Berlin kehrt sie in ihr Dortmunder Zuhause zurück und performt ihre Songs – die normalerweise um 3 Uhr nachts zwischen Kissen und Plüschhasen entstehen – zum ersten Mal auf der Bühne. An Glitzer und Magie wird nicht gespart.',
    bioEn: 'ideer creates dreamy, fairy-like sound worlds between shimmering synths, gentle melodies and personal daydream lyrics. After three years of big-city chaos in Berlin, she returns to her Dortmund home and performs her songs — usually written at 3 a.m. between pillows and plush bunnies — on stage for the first time. Glitter and magic in no short supply.',
    links: [],
    stage: 'Kieselwiese',
    time: '15:00–15:15',
    focus: '52% 20%',
    zoom: 1.85,
    shape: '3',
  },
  {
    id: 'scherwin-hosseini',
    name: 'Scherwin Hosseini',
    image: imgScherwin,
    genre: 'Bass / Multi-Genre',
    bio: 'Scherwin Hosseini ist freie Kurator*in, Community Organizerin & Gründerin von BLENDHAUS* – einem Raum für Kultur, kreative Zusammenarbeit und Gemeinschaft im Ruhrgebiet. Scherwins Arbeit konzentriert sich auf interdisziplinäre Projekte, kreative Bildungsformate sowie die Sichtbarmachung queerer und marginalisierter Perspektiven. Als DJ spielt Scherwin einen Mix aus kräftigem Bass und SWANA-infused Rhythmen und lässt sich dabei von der Stimmung und Atmosphäre des Moments leiten, statt von festen Genres.',
    bioEn: 'Scherwin Hosseini is an independent curator, community organizer, and founder of BLENDHAUS* — a space for culture, creative collaboration, and community in Germany’s Ruhr region. Their work focuses on interdisciplinary projects, creative education formats, and amplifying queer and marginalized perspectives. As a DJ, they play a mix of heavy bass and SWANA-infused rhythms, guided by the mood and atmosphere of the moment rather than fixed genres.',
    links: [],
    stage: 'Maschinerie',
    time: '21:00–23:00',
    focus: '50% 32%',
    zoom: 1,
    shape: '4',
  },
  {
    id: 'floppy-corti',
    name: 'Floppy b2b Corti',
    image: imgFloppyCorti,
    genre: 'Bass / Breakbeat',
    bio: 'Floppy b2b Corti sind Teil von SASSY, einem 2024 gegründeten Kollektiv von und für FLINTA* aus Bielefeld. Hinter den Decks bringen sie genau diese Energie: solidarisch, mit Spaß an frecher Bass Musik, Breakbeat und einem fotzigen Sound. Getragen von Freund*innenschaft, gegenseitigem Support und Clubkultur zum Selbermachen. Stay sassy!',
    bioEn: 'Floppy b2b Corti are part of SASSY, a collective founded in 2024 by and for FLINTA* in Bielefeld. Behind the decks they bring exactly that energy: in solidarity, with a love for cheeky bass music, breakbeat and a raunchy sound. Carried by friendship, mutual support and DIY club culture. Stay sassy!',
    links: [],
    stage: 'Maschinerie',
    time: '19:00–21:00',
    focus: '63% 0%',
    zoom: 1.55,
    shape: '1',
  },
  {
    id: 'shaxtar-kisya',
    name: 'Shaxtar b2b Kisya',
    image: imgShaxtarKisya,
    genre: 'Dub / Bass / Techno',
    bio: 'shaxtar ist ukrainischer DJ und Producer aus Dortmund, dessen Sound sich zwischen Dub, Dubstep, Leftfield Club und Electro bewegt. kisya ist Producerin und DJ aus Dortmund, deren Herz für deepen, hypnotischen Techno schlägt. Zusammen liefert das süßeste T4T-DJ-Duo NRWs eine Full-Body-Soundwash-Experience aus kraftvollem Bass und polyrhythmischen Beats.',
    bioEn: 'shaxtar is a Ukrainian DJ and producer from Dortmund whose sound moves between dub, dubstep, leftfield club and electro. kisya is a producer and DJ from Dortmund whose heart beats for deep, hypnotic techno. Together, NRW’s sweetest T4T DJ duo delivers a full-body soundwash experience of powerful bass and polyrhythmic beats.',
    links: [
      { label: 'Instagram shaxtar', href: 'https://www.instagram.com/shaxtar44/' },
      { label: 'Instagram kisya', href: 'https://www.instagram.com/kisya_909/' }
    ],
    stage: 'Maschinerie',
    time: '17:00–19:00',
    focus: '49% 0%',
    zoom: 1.55,
    shape: '3',
  },
  {
    id: 'lil-apple',
    name: 'lil apple',
    image: imgLilApple,
    genre: 'Synth Pop / Electroclash / House',
    bio: 'Bei lil apple sind keine ausgefuchsten Übergänge oder epischen Drops zu erwarten – dafür ein Ort, an dem sie einfach Musik zeigt, zu der sie euch gerne tanzen sieht. Mit einem Faible für female voices und Sounds abseits dessen, was man sonst in Dortmunder Clubs hört, bringt sie einen Mix aus Synth Pop, Electroclash und House.',
    bioEn: 'With lil apple, don’t expect slick transitions or epic drops — expect a place where she simply shares music she loves to see you dance to. With a soft spot for female voices and sounds off the beaten path of Dortmund’s clubs, she brings a mix of synth pop, electroclash and house.',
    links: [],
    stage: 'Maschinerie',
    time: '14:00–15:00',
    focus: '52% 5%',
    zoom: 1.55,
    shape: '2',
  },
  {
    id: 'cane-schrotflinta',
    name: 'canê b2b Schrotflinta',
    image: imgCane,
    genre: 'Punk / Disco / SWANA Pop',
    bio: 'Von booty shake bis heartbreak. canê & Schrotflinta schicken Vinyl und digitale Tracks gemeinsam auf die Reise. Von Punk und New Wave über Funk und Disco bis SWANA Pop und Electronics – mal soft, mal wild, aber immer magically pulsierend.',
    bioEn: 'From booty shake to heartbreak. canê & Schrotflinta send vinyl and digital tracks on a journey together. From punk and new wave through funk and disco to SWANA pop and electronics — sometimes soft, sometimes wild, but always magically pulsing.',
    links: [
      { label: 'Instagram canê', href: 'https://www.instagram.com/cane_3xo/' },
      { label: 'Instagram Schrotflinta', href: 'https://www.instagram.com/schrotflinta_/' }
    ],
    stage: 'Maschinerie',
    time: '15:00–17:00',
    focus: '50% 40%',
    zoom: 1,
  }
];

/**
 * Acts ohne eigenes Pressefoto — erscheinen im Line-Up als Text-Karten (mit
 * Bühne + Uhrzeit), aber nicht im bildbasierten Marquee/Portrait-Grid.
 */
export interface ActLite {
  name: string;
  genre?: string;
  stage: Stage;
  time: string;
}

export const actsOhneFoto: ActLite[] = [];
