import { createContext, useContext } from "react"


/*
  Hooks and context live apart from the provider component: a module that
  mixes components with other exports breaks React Fast Refresh.
*/
export const LanguageContext = createContext(null)


export function useLanguage() {
  const context = useContext(LanguageContext)

  if (!context) {
    throw new Error("useLanguage must be used inside a LanguageProvider")
  }

  return context
}


/* Shorthand for the common case of only needing the copy. */
export function useCopy() {
  return useLanguage().t
}
