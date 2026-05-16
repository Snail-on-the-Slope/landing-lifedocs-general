import type { Locale } from '@/lib/types';

export const defaultLocale: Locale = 'en';
export const supportedLocales: Locale[] = ['en', 'ru', 'es'];
export const LOCALE_STORAGE_KEY = 'lifedocs_landing_locale';
export const LOCALE_CHANGE_EVENT = 'lifedocs:locale-change';

export const localeLabels: Record<Locale, { short: string; label: string }> = {
  en: { short: 'EN', label: 'English' },
  ru: { short: 'RU', label: 'Русский' },
  es: { short: 'ES', label: 'Español' },
};

export function isSupportedLocale(value: string | null | undefined): value is Locale {
  return value === 'en' || value === 'ru' || value === 'es';
}

export function normalizeLocale(value: string | null | undefined): Locale | null {
  if (!value) return null;

  const normalized = value.toLowerCase();
  if (normalized.startsWith('ru')) return 'ru';
  if (normalized.startsWith('es')) return 'es';
  if (normalized.startsWith('en')) return 'en';

  return isSupportedLocale(normalized) ? normalized : null;
}

export function getStoredLocale(): Locale | null {
  if (typeof window === 'undefined') return null;
  return normalizeLocale(window.localStorage.getItem(LOCALE_STORAGE_KEY));
}

export function detectBrowserLocale(): Locale {
  if (typeof navigator === 'undefined') return defaultLocale;

  const candidates = [navigator.language, ...(navigator.languages ?? [])];

  for (const candidate of candidates) {
    const normalized = normalizeLocale(candidate);
    if (normalized) {
      return normalized;
    }
  }

  return defaultLocale;
}

export function resolveClientLocale(): Locale {
  return getStoredLocale() ?? detectBrowserLocale() ?? defaultLocale;
}

export function getLocaleSnapshot(): Locale {
  if (typeof window === 'undefined') return defaultLocale;
  return resolveClientLocale();
}

export function getLocaleServerSnapshot(): Locale {
  return defaultLocale;
}

export function subscribeLocale(onStoreChange: () => void) {
  if (typeof window === 'undefined') {
    return () => {};
  }

  const handleStorage = (event: StorageEvent) => {
    if (event.key === null || event.key === LOCALE_STORAGE_KEY) {
      onStoreChange();
    }
  };

  const handleLocaleChange = () => {
    onStoreChange();
  };

  window.addEventListener('storage', handleStorage);
  window.addEventListener(LOCALE_CHANGE_EVENT, handleLocaleChange);

  return () => {
    window.removeEventListener('storage', handleStorage);
    window.removeEventListener(LOCALE_CHANGE_EVENT, handleLocaleChange);
  };
}

export function persistLocale(locale: Locale) {
  if (typeof window === 'undefined') return;
  window.localStorage.setItem(LOCALE_STORAGE_KEY, locale);
  window.dispatchEvent(new Event(LOCALE_CHANGE_EVENT));
}

export function interpolate(template: string, values: Record<string, string>) {
  return Object.entries(values).reduce((result, [key, value]) => {
    return result.split(`{{${key}}}`).join(value);
  }, template);
}
