/**
 * Lageplan-Daten (Fixtures) — Venue Speicher 100, Dortmund.
 *
 * CMS-ready: Dieses Objekt spiegelt die spätere `MapBlock`-Struktur (Zentrum,
 * Zoom, Pins). In Phase 6 liefert der Content-Adapter die gleiche Form aus
 * Keystatic; die Karten-Komponente bleibt unverändert.
 *
 * ⚠️ Pin-Koordinaten sind aktuell NÄHERUNGSWERTE (aus Davids Planungs-Map
 * abgeleitet). Venue-Zentrum + Adresse sind via OSM/Nominatim verifiziert.
 * Feinjustierung der Pins später einfach hier (bzw. im CMS) möglich.
 */

export type PinCategory =
  | 'area'
  | 'eingang'
  | 'buehne'
  | 'stand'
  | 'workshop'
  | 'service';

export interface MapPin {
  id: string;
  title: string;
  category: PinCategory;
  lat: number;
  lng: number;
  description?: string;
}

/** Kategorie-Metadaten: Label + CI-Akzentfarbe für Marker & Legende. */
export const pinCategories: Record<
  PinCategory,
  { label: string; color: string }
> = {
  area: { label: 'Areal', color: '#5d3e51' }, // berry
  eingang: { label: 'Eingang', color: '#7a8b48' }, // accent-green
  buehne: { label: 'Bühne', color: '#5d3e51' }, // berry
  stand: { label: 'Stand', color: '#aad2cc' }, // accent-teal
  workshop: { label: 'Workshop', color: '#aad2cc' }, // accent-teal
  service: { label: 'Service', color: '#dc95bb' }, // pink (nur hier als Info-Marker)
};

export interface VenueLageplan {
  name: string;
  address: string;
  area: string;
  center: { lat: number; lng: number };
  zoom: number;
  pins: MapPin[];
  /** Anfahrt / Barrierefreiheit (redaktionell). */
  anreise: { oepnv: string; auto: string; barrierefreiheit: string };
  /** Englische Anfahrt / Barrierefreiheit (Fallback auf `anreise`). */
  anreiseEn?: { oepnv: string; auto: string; barrierefreiheit: string };
}

export const lageplan: VenueLageplan = {
  name: 'Speicher 100',
  address: 'Speicherstraße 100, 44147 Dortmund',
  area: 'Hafen / Nordstadt, Dortmund',
  center: { lat: 51.5308, lng: 7.4463 }, // verifiziert (OSM)
  zoom: 16.5,

  pins: [
    {
      id: 'maschinerie',
      title: 'Maschinerie',
      category: 'buehne',
      lat: 51.53118,
      lng: 7.44599,
      description: 'Hier spielen unsere DJs',
    },
    {
      id: 'communityspace',
      title: 'Community Space',
      category: 'area',
      lat: 51.53041,
      lng: 7.44616,
      description: 'Zentraler Bereich mit zusätzlichen Ständen.',
    },
    {
      id: 'kieselwiese',
      title: 'Kieselwiese',
      category: 'area',
      lat: 51.5305,
      lng: 7.44689,
      description: 'Hier spielen unsere Live Acts',
    },
    {
      id: 'eingang',
      title: 'Eingang',
      category: 'eingang',
      lat: 51.53036,
      lng: 7.44671,
      description: 'Begrüßung, Bändchen, Pronomen-Sticker.',
    },
    {
      id: 'infostand',
      title: 'Infostand',
      category: 'service',
      lat: 51.53045,
      lng: 7.44657,
      description: 'Wegweiser*in, Infos Awareness COC, Timetable, Pronomensticker, Stifte',
    },
    {
      id: 'queer-dating-stage',
      title: 'Queer Dating Stage',
      category: 'buehne',
      lat: 51.53076,
      lng: 7.44612,
    },
    {
      id: 'toiletten',
      title: 'Toiletten',
      category: 'service',
      lat: 51.5308,
      lng: 7.44647,
    },
    {
      id: 'toiletten-2',
      title: 'Toiletten 2',
      category: 'service',
      lat: 51.53132,
      lng: 7.44598,
    },
    {
      id: 'essensstaende',
      title: 'Essensstände',
      category: 'stand',
      lat: 51.53096,
      lng: 7.44654,
    },
  ],

  anreise: {
    oepnv:
      'Mit den Öffentlichen bis zur Haltestelle „Hafen“, von dort sind es rund 15 Minuten zu Fuß zum Speicher 100.',
    auto: 'Speicherstraße 100, 44147 Dortmund. Bitte möglichst mit ÖPNV oder Rad anreisen, Parkmöglichkeiten im Hafenareal sind begrenzt.',
    barrierefreiheit:
      'Das Gelände liegt am Kai (teils Kopfsteinpflaster/unebener Untergrund). Angaben zu barrierefreien Zugängen und Toiletten ergänzen wir hier, sobald final.',
  },

  anreiseEn: {
    oepnv:
      'Take public transport to the “Hafen” stop; from there it’s about a 15-minute walk to Speicher 100.',
    auto: 'Speicherstraße 100, 44147 Dortmund. Please travel by public transport or bike if you can — parking in the harbour area is limited.',
    barrierefreiheit:
      'The grounds sit on the quay (partly cobblestones/uneven surface). We’ll add details on accessible entrances and toilets here as soon as they’re final.',
  },
};
