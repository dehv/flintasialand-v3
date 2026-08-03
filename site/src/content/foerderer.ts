import type { ImageMetadata } from 'astro';
import logoImu from '@assets/foerderer/initiative_musik.png';
import logoBkm from '@assets/foerderer/bkm.svg';
import logoLsbtiq from '@assets/foerderer/lsbtiq.png';
import logoKulturbuero from '@assets/foerderer/kulturbuero.png';
import logoStadtbezirk from '@assets/foerderer/stadtbezirksmarketing.png';
import logoHartkern from '@assets/foerderer/hartkern.svg';
import logoMaschinerie from '@assets/foerderer/maschinerie.png';
import logoSpeicher100 from '@assets/foerderer/speicher100.jpg';

export interface Sponsor {
  name: string;
  logo: ImageMetadata;
  url: string;
}

export const sponsors: Sponsor[] = [
  {
    name: 'Initiative Musik',
    logo: logoImu,
    url: 'https://www.initiative-musik.de/'
  },
  {
    name: 'Beauftragte der Bundesregierung für Kultur und Medien (BKM)',
    logo: logoBkm,
    url: 'https://www.kulturstaatsministerin.de/'
  },
  {
    name: 'Koordinierungsstelle LSBTIQ* Dortmund',
    logo: logoLsbtiq,
    url: 'https://www.dortmund.de/rathaus/verwaltung/amt-fuer-angelegenheiten-des-oberbuergermeisters-und-des-rates/koordinierungsstelle-fuer-lsbtiq/'
  },
  {
    name: 'Kulturbüro Dortmund',
    logo: logoKulturbuero,
    url: 'https://www.dortmund.de/kulturbuero'
  },
  {
    name: 'Stadtbezirksmarketing Dortmund-Nordstadt',
    logo: logoStadtbezirk,
    url: 'https://echt-nordstadt.de/'
  },
  {
    name: 'Hartkern',
    logo: logoHartkern,
    url: 'https://www.instagram.com/hartkern.ev/'
  },
  {
    name: 'Maschinerie e.V.',
    logo: logoMaschinerie,
    url: 'https://www.maschinerie.org/'
  },
  {
    name: 'Speicher 100',
    logo: logoSpeicher100,
    url: 'https://speicher100.org/'
  }
];
