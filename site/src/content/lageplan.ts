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
  /** Anfahrt / Barrierefreiheit (redaktionell, i18n später). */
  anreise: { oepnv: string; auto: string; barrierefreiheit: string };
}

export const lageplan: VenueLageplan = {
  name: 'Speicher 100',
  address: 'Speicherstraße 100, 44147 Dortmund',
  area: 'Hafen / Nordstadt, Dortmund',
  center: { lat: 51.5308, lng: 7.4463 }, // verifiziert (OSM)
  zoom: 16.5,

  pins: [
    // — Areale —
    {
      id: 'maschinerie',
      title: 'Maschinerie',
      category: 'area',
      lat: 51.5313,
      lng: 7.4451,
      description: 'Halle im Westen des Geländes.',
    },
    {
      id: 'communityspace',
      title: 'Community Space',
      category: 'area',
      lat: 51.5308,
      lng: 7.4463,
      description: 'Zentraler Bereich mit zusätzlichen Ständen.',
    },
    {
      id: 'kieselwiese',
      title: 'Kieselwiese',
      category: 'area',
      lat: 51.5304,
      lng: 7.4479,
      description: 'Areal im Osten am Kai.',
    },

    // — Eingang & Orientierung —
    {
      id: 'eingang',
      title: 'Eingang',
      category: 'eingang',
      lat: 51.5302,
      lng: 7.4474,
      description: 'Begrüßung, Bändchen, Pronomen-Sticker.',
    },
    {
      id: 'infostand',
      title: 'Infostand',
      category: 'service',
      lat: 51.5305,
      lng: 7.447,
      description: 'Awareness, Trans* Assurances, Pronomen-Sticker.',
    },
    {
      id: 'strassensperrung',
      title: 'Straßensperrung',
      category: 'service',
      lat: 51.5303,
      lng: 7.4471,
    },

    // — Bühnen & Stände (Auswahl) —
    {
      id: 'queer-dating-stage',
      title: 'Queer Dating Stage',
      category: 'buehne',
      lat: 51.5307,
      lng: 7.4457,
    },
    {
      id: 'toiletten',
      title: 'Toiletten',
      category: 'service',
      lat: 51.531,
      lng: 7.4464,
    },
  ],

  anreise: {
    oepnv:
      'Mit den Öffentlichen bis zur Haltestelle „Hafen“ — von dort sind es rund 15 Minuten zu Fuß zum Speicher 100.',
    auto: 'Speicherstraße 100, 44147 Dortmund. Bitte möglichst mit ÖPNV oder Rad anreisen und Autos vermeiden — Parkmöglichkeiten im Hafenareal sind begrenzt.',
    barrierefreiheit:
      'Das Gelände liegt am Kai (teils Kopfsteinpflaster/unebener Untergrund). Angaben zu barrierefreien Zugängen und Toiletten ergänzen wir hier, sobald final.',
  },
};
