import en from "./services.en"
import bg from "./services.bg"

import { DEFAULT_LANGUAGE } from "../i18n/config"


/*
  Service content per language. Both lists carry the same slugs in the
  same order, so /services/ai and /bg/services/ai are the same page in
  two languages — which is what makes the hreflang pairing valid.
*/
const servicesByLanguage = { en, bg }


export function getServices(language) {
  return servicesByLanguage[language] ?? servicesByLanguage[DEFAULT_LANGUAGE]
}


export function getService(slug, language) {
  return getServices(language).find((service) => service.slug === slug)
}


/* Old URLs → current services (keeps existing external links working) */
export const legacySlugMap = {
  "custom-software-development": "software",
  "web-development": "websites",
  "ai-solutions": "ai",
  "business-automation": "automation",
  "system-integration": "automation",
  "support-improvement": "support",
}


/* Every slug the site serves, for the sitemap and for validation. */
export const serviceSlugs = en.map((service) => service.slug)


export default servicesByLanguage
