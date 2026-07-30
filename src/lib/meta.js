import { useEffect } from "react"


/*
  The site's canonical home. The same address is also hard-coded in
  index.html, public/sitemap.xml and public/robots.txt — update all four
  together when the custom domain (adm-innovations.com) goes live.
*/
const SITE_URL = "https://adm-innovation-website.pages.dev"
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


/*
  Per-route document metadata: title, description, canonical and
  Open Graph tags. Values fall back to the defaults from index.html
  on the next route that sets its own.
*/
export default function usePageMeta({ title, description, path = "/" }) {
  useEffect(() => {
    const fullTitle =
      path === "/" ? title : `${title} · ${SITE_NAME}`

    document.title = fullTitle
    setMeta("name", "description", description)
    setMeta("property", "og:title", fullTitle)
    setMeta("property", "og:description", description)
    setMeta("property", "og:url", `${SITE_URL}${path}`)

    let canonical = document.head.querySelector('link[rel="canonical"]')

    if (!canonical) {
      canonical = document.createElement("link")
      canonical.setAttribute("rel", "canonical")
      document.head.appendChild(canonical)
    }

    canonical.setAttribute("href", `${SITE_URL}${path}`)
  }, [title, description, path])
}
