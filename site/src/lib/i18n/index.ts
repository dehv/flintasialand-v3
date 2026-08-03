/**
 * i18n-Einstiegspunkt.
 *
 * Deutsch (unter /) ist Primärsprache, Englisch (unter /en/) die Zweitsprache.
 * `t` ist der Default (Deutsch); locale-abhängige Komponenten holen ihr
 * Wörterbuch über `useTranslations(localeFromPath(...))`.
 *
 * Weitere Sprache ergänzen:
 *   1. `xx.ts` anlegen (gleiche Struktur wie `de.ts`)
 *   2. hier in `dictionaries` + `locales` registrieren
 *   3. `locales` in astro.config.mjs erweitern
 */
import { de, type Dict } from './de';
import { en } from './en';

export const defaultLocale = 'de' as const;
export const locales = ['de', 'en'] as const;
export type Locale = (typeof locales)[number];

const dictionaries: Record<Locale, Dict> = {
  de,
  en,
};

export function useTranslations(locale: Locale = defaultLocale): Dict {
  return dictionaries[locale] ?? dictionaries[defaultLocale];
}

/** Aktive Sprache robust aus dem Pfad ableiten (unabhängig von Astro.currentLocale). */
export function localeFromPath(pathname: string): Locale {
  return pathname === '/en' || pathname.startsWith('/en/') ? 'en' : 'de';
}

/**
 * Denselben Inhalt in der Zielsprache verlinken:
 *   ('/lageplan', 'en')     -> '/en/lageplan'
 *   ('/en/lageplan', 'de')  -> '/lageplan'
 */
export function switchLocalePath(pathname: string, target: Locale): string {
  const bare =
    pathname === '/en' || pathname.startsWith('/en/')
      ? pathname.replace(/^\/en/, '') || '/'
      : pathname;
  if (target === 'de') return bare;
  return bare === '/' ? '/en/' : `/en${bare}`;
}

/**
 * Einen internen Link in die aktive Sprache übersetzen:
 *   ('/line-up', 'en')  -> '/en/line-up'
 *   ('/', 'en')         -> '/en/'
 *   ('/#lineup', 'en')  -> '/en/#lineup'
 *   ('/line-up', 'de')  -> '/line-up'   (DE = Wurzel, unverändert)
 * Externe/relative Links (ohne führenden „/" bzw. „//") bleiben unangetastet.
 */
export function localizeHref(href: string, locale: Locale): string {
  if (locale === 'de') return href;
  if (!href.startsWith('/') || href.startsWith('//')) return href;
  if (href === '/') return '/en/';
  if (href.startsWith('/#')) return `/en/${href.slice(1)}`;
  return `/en${href}`;
}

/** Bequemer Default-Export der Primärsprache (Deutsch). */
export const t: Dict = useTranslations(defaultLocale);
