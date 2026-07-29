/**
 * i18n-Einstiegspunkt.
 *
 * v1: nur Deutsch. Der `t`-Helfer und `useTranslations(locale)` sind bereits
 * locale-fähig aufgesetzt, damit Englisch später ohne Umbau ergänzt werden kann:
 *   1. `en.ts` anlegen (gleiche Struktur wie `de.ts`)
 *   2. hier in `dictionaries` registrieren
 *   3. `locales` in astro.config.mjs erweitern
 */
import { de, type Dict } from './de';

export const defaultLocale = 'de' as const;
export type Locale = 'de'; // später: 'de' | 'en'

const dictionaries: Record<Locale, Dict> = {
  de,
};

export function useTranslations(locale: Locale = defaultLocale): Dict {
  return dictionaries[locale] ?? dictionaries[defaultLocale];
}

/** Bequemer Default-Export der aktiven Sprache. */
export const t: Dict = useTranslations(defaultLocale);
