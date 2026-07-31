import { useMemo } from "react"
import { useLocation } from "react-router"

import { LanguageContext } from "./context"
import {
  DEFAULT_LANGUAGE,
  LANGUAGES,
  languageFromPath,
  pathWithoutLanguage,
} from "./config"

import en from "./en"
import bg from "./bg"


const dictionaries = { en, bg }


/*
  Derives the active language from the URL, so /bg/services is Bulgarian
  for everyone who opens it — no guessing from IP address, and the page
  stays shareable and cacheable.
*/
function LanguageProvider({ children }) {
  const { pathname } = useLocation()

  const value = useMemo(() => {
    const language = languageFromPath(pathname)

    return {
      language,
      meta: LANGUAGES[language],
      t: dictionaries[language] ?? dictionaries[DEFAULT_LANGUAGE],
      /* The current route with its language prefix removed. */
      basePath: pathWithoutLanguage(pathname),
    }
  }, [pathname])

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
}


export default LanguageProvider
