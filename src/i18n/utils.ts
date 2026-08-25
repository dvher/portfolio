import { ui, defaultLang, type Lang, type UIKey } from "./ui";

/** Extract the active language from a URL pathname (base-prefix aware). */
export function getLangFromUrl(url: URL): Lang {
  // Strip the configured base path (e.g. "/portfolio_project") before matching.
  const base = import.meta.env.BASE_URL.replace(/\/$/, "");
  const path = url.pathname.startsWith(base) ? url.pathname.slice(base.length) : url.pathname;
  const [, seg] = path.split("/");
  if (seg in ui) return seg as Lang;
  return defaultLang;
}

/** Returns a translator function bound to the given language. */
export function useTranslations(lang: Lang) {
  return function t(key: UIKey): string {
    return ui[lang][key] ?? ui[defaultLang][key];
  };
}

/** Pick the correct string from a bilingual content field. */
export function pick<T>(field: { es: T; en: T }, lang: Lang): T {
  return field[lang];
}

/**
 * Build an href that respects both the configured base path and the active
 * language prefix. `path` is language-agnostic and should start with "/"
 * (use "/" for the home page, "#contact" for in-page anchors).
 */
export function localizedPath(path: string, lang: Lang): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, "");
  const langPrefix = lang === defaultLang ? "" : `/${lang}`;
  if (path.startsWith("#")) return `${base}${langPrefix}/${path}`.replace(/\/#/, "/#");
  const clean = path === "/" ? "" : path;
  const result = `${base}${langPrefix}${clean}` || "/";
  return result;
}

/** URL of the current page in the other language (for the language toggle). */
export function getAltLangUrl(lang: Lang): string {
  const other: Lang = lang === "es" ? "en" : "es";
  return localizedPath("/", other);
}

export { type Lang } from "./ui";
