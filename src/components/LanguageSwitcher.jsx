import { Link } from "react-router"

import { useLanguage } from "../i18n/context"
import { LANGUAGE_CODES, LANGUAGES, localisePath } from "../i18n/config"


/*
  Always-visible language switch.

  It links to the same page in the other language rather than resetting
  to the home page, and it is a real link — so it can be opened in a new
  tab, and search engines can follow it to discover the other version.
  Language is never chosen for the visitor based on their location.
*/
function LanguageSwitcher({ className = "" }) {
  const { language, basePath, t } = useLanguage()

  return (
    <div
      className={`flex items-center gap-0.5 rounded-full border border-white/10 bg-white/3 p-0.5 ${className}`}
      role="group"
      aria-label={t.common.switchLanguage}
    >
      {LANGUAGE_CODES.map((code) => {
        const isActive = code === language

        return (
          <Link
            key={code}
            to={localisePath(basePath, code)}
            hrefLang={LANGUAGES[code].htmlLang}
            aria-current={isActive ? "true" : undefined}
            className={`
              flex
              min-h-10
              items-center
              rounded-full
              px-3
              font-mono
              text-xs
              font-medium
              transition
              duration-200
              ${
                isActive
                  ? "bg-white/10 text-white"
                  : "text-gray-500 hover:bg-white/5 hover:text-gray-200"
              }
            `}
          >
            <span className="sr-only">{LANGUAGES[code].label}</span>
            <span aria-hidden="true">{LANGUAGES[code].short}</span>
          </Link>
        )
      })}
    </div>
  )
}


export default LanguageSwitcher
