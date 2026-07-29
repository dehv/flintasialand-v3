import type { ImageMetadata } from 'astro';
import imgTigrezz from '@assets/artists/tigrezz_punch.jpg';
import imgMakahaun from '@assets/artists/makahaun.jpg';
import imgDddr from '@assets/artists/dddr.jpg';
import imgArtemis from '@assets/artists/artemis_jade.jpg';

export interface Act {
  id: string;
  name: string;
  image: ImageMetadata;
  genre: string;
  bio: string;
  links: { label: string; href: string }[];
  highlight?: boolean;
}

export const acts: Act[] = [
  {
    id: 'tigrezz-punch',
    name: 'Tigrrez Punch',
    image: imgTigrezz,
    genre: 'Rrrriot Trap / Pop / Punk',
    bio: '„Put some respect on my name! Ich hab kein Cash, ich hab kein Fame“, ballert es lautstark aus den Boxen – was Tigrrez Punch dafür aber zu genüge hat, ist jede Menge queerfeministische Power, Fuck-Off-Attitüde und außergewöhnliches Talent. Zwischen Rrriot Trap, Pop und Punk sprengt Tigrrez Punch aus Bochum nicht nur liebend gerne Genregrenzen, auch die Fesseln des Patriarchats müssen regelmäßig dran glauben.',
    links: [
      { label: 'Instagram', href: 'https://www.instagram.com/tigrrez.punch/' }
    ],
    highlight: true,
  },
  {
    id: 'makahaun',
    name: 'makahaun',
    image: imgMakahaun,
    genre: 'Leftfield Techno / House / Breaks',
    bio: 'makahaun is a black queer dj and a rising force in the electronic music scene with a resident at tresor.west and the münster collective schick.standort. known for broad, carefully curated selections and a deep understanding of the music they play, their sound is leftfield, bold and deeply personal. rooted in the legacy of techno as black resistance, makahaun moves between techno and house.',
    links: [
      { label: 'Website', href: 'https://www.makahaun.com' },
      { label: 'Instagram', href: 'https://www.instagram.com/makahaun/' }
    ],
    highlight: true,
  },
  {
    id: 'dddr',
    name: 'DDDR',
    image: imgDddr,
    genre: 'Post-Punk / Synth / Wave',
    bio: 'DDDR bringt rohe Energie, treibende Drum-Machines und schneidende Synthesizer auf die Bühne. Ihre Live-Performance verbindet den Geist des Post-Punk mit elektronischen Club-Vibes und einer kompromisslosen Haltung.',
    links: [
      { label: 'Instagram', href: 'https://www.instagram.com/' }
    ],
    highlight: true,
  },
  {
    id: 'artemis-jade',
    name: 'Artemis Jade',
    image: imgArtemis,
    genre: 'Ambient R&B / Dream Pop',
    bio: 'Artemis Jade erschafft mit samtiger Stimme und sphärischen Synthesizern intime, emotionale Räume. Ihre Musik bewegt sich fließend zwischen verletzlichem R&B, Dream Pop und cinematischen Ambient-Klanglandschaften.',
    links: [
      { label: 'Instagram', href: 'https://www.instagram.com/' }
    ],
    highlight: true,
  }
];
