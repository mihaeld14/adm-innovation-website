/*
  Language configuration.

  English lives at the root (/services) and Bulgarian under a prefix
  (/bg/services). The URL is the single source of truth for language —
  never the visitor's IP — so every page stays shareable, cacheable and
  indexable, and search engines can crawl both versions.
*/

export const DEFAULT_LANGUAGE = "en"

export const LANGUAGES = {
  en: {
    code: "en",
    /* No prefix: English is served from the root. */
    prefix: "",
    label: "English",
    short: "EN",
    htmlLang: "en",
    ogLocale: "en_GB",
  },
  bg: {
    code: "bg",
    prefix: "/bg",
    label: "Български",
    short: "BG",
    htmlLang: "bg",
    ogLocale: "bg_BG",
  },
}

export const LANGUAGE_CODES = Object.keys(LANGUAGES)


/* Reads the language out of a pathname, e.g. "/bg/services" → "bg". */
export function languageFromPath(pathname) {
  const segments = pathname.split("/").filter(Boolean)

  return LANGUAGE_CODES.includes(segments[0])
    ? segments[0]
    : DEFAULT_LANGUAGE
}


/*
  Strips the language prefix, giving the route as it is written in the
  route table: "/bg/services" → "/services", "/bg" → "/".
*/
export function pathWithoutLanguage(pathname) {
  const language = languageFromPath(pathname)
  const { prefix } = LANGUAGES[language]

  if (!prefix) {
    return pathname || "/"
  }

  const stripped = pathname.slice(prefix.length)

  return stripped === "" ? "/" : stripped
}


/* Builds a path in a given language: ("/services", "bg") → "/bg/services". */
export function localisePath(pathname, language) {
  const { prefix } = LANGUAGES[language] ?? LANGUAGES[DEFAULT_LANGUAGE]
  const bare = pathWithoutLanguage(pathname)

  if (!prefix) {
    return bare
  }

  return bare === "/" ? prefix : `${prefix}${bare}`
}
