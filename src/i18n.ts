// Label shown on the language switcher. English is shown as "KE" (Kenya), to pair
// with "FR" and the flag-coloured buttons on the home page.
export const languages = { en: 'KE', fr: 'FR' } as const;
export type Lang = keyof typeof languages;
export const defaultLang: Lang = 'en';

export const routes = ['', 'details', 'registry'] as const;
export type Route = (typeof routes)[number];

/** Build a URL for a route in a given language. */
export function href(lang: Lang, route: Route | string = ''): string {
  const prefix = lang === defaultLang ? '' : `/${lang}`;
  const path = route ? `/${route}` : '/';
  return prefix + (path === '/' && prefix ? '/' : path);
}

/** Work out the language and route of the current URL path. */
export function parsePath(pathname: string): { lang: Lang; route: string } {
  const parts = pathname.replace(/^\/|\/$/g, '').split('/').filter(Boolean);
  if (parts[0] && parts[0] in languages) {
    return { lang: parts[0] as Lang, route: parts.slice(1).join('/') };
  }
  return { lang: defaultLang, route: parts.join('/') };
}
