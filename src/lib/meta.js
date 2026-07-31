import { useEffect } from "react"

import {
  DEFAULT_LANGUAGE,
  LANGUAGES,
  LANGUAGE_CODES,
  localisePath,
} from "../i18n/config"


/*
  The site's canonical home. The same address is also hard-coded in
  index.html, public/sitemap.xml and public/robots.txt — if the domain
  ever changes, update all four together.
*/
const SITE_URL = "https://adm-innovations.com"
const SITE_NAME = "ADM Innovations"


function setMeta(attribute, key, content) {
  let tag = document.head.querySelector(`meta[${attribute}="${key}"]`)

  if (!tag) {
    tag = document.createElement("meta")
    tag.setAttribute(attribute, key)
    document.head.appendChild(tag)
  }

  tag.setAttribute("content", content)
}


function setLink(rel, href, hreflang) {
  const selector = hreflang
    ? `link[rel="${rel}"][hreflang="${hreflang}"]`
    : `link[rel="${rel}"]:not([hreflang])`

  let tag = document.head.querySelector(selector)

  if (!tag) {
    tag = document.createElement("link")
    tag.setAttribute("rel", rel)

    if (hreflang) {
      tag.setAttribute("hreflang", hreflang)
    }

    document.head.appendChild(tag)
  }

  tag.setAttribute("href", href)
}


/*
  Per-route document metadata.

  `path` is the language-free route ("/services"). Everything else is
  derived, including the alternate-language links that tell search
  engines these are the same page in another language. Without those,
  the Bulgarian pages would compete with the English ones instead of
  being offered to Bulgarian searchers.
*/
export default function usePageMeta({
  title,
  description,
  path = "/",
  language = DEFAULT_LANGUAGE,
}) {
  useEffect(() => {
    const meta = LANGUAGES[language] ?? LANGUAGES[DEFAULT_LANGUAGE]
    const localised = localisePath(path, language)
    const url = `${SITE_URL}${localised === "/" ? "/" : localised}`

    const fullTitle = path === "/" ? title : `${title} · ${SITE_NAME}`

    document.title = fullTitle
    document.documentElement.setAttribute("lang", meta.htmlLang)

    setMeta("name", "description", description)
    setMeta("property", "og:title", fullTitle)
    setMeta("property", "og:description", description)
    setMeta("property", "og:url", url)
    setMeta("property", "og:locale", meta.ogLocale)

    setLink("canonical", url)

    /* One alternate per language, plus x-default pointing at English. */
    LANGUAGE_CODES.forEach((code) => {
      const alternate = localisePath(path, code)

      setLink(
        "alternate",
        `${SITE_URL}${alternate === "/" ? "/" : alternate}`,
        LANGUAGES[code].htmlLang,
      )
    })

    const fallback = localisePath(path, DEFAULT_LANGUAGE)

    setLink(
      "alternate",
      `${SITE_URL}${fallback === "/" ? "/" : fallback}`,
      "x-default",
    )
  }, [title, description, path, language])
}
