import { createContext, useContext, useEffect, useState, type ReactNode } from 'react'
import type { L, Lang } from './content/site'

type Ctx = { lang: Lang; setLang: (l: Lang) => void; t: (s: L) => string }
const LangContext = createContext<Ctx>({ lang: 'en', setLang: () => {}, t: (s) => s.en })

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(() => (localStorage.getItem('lang') === 'ro' ? 'ro' : 'en'))
  useEffect(() => {
    localStorage.setItem('lang', lang)
    document.documentElement.lang = lang
  }, [lang])
  return <LangContext.Provider value={{ lang, setLang, t: (s) => s[lang] }}>{children}</LangContext.Provider>
}

export const useLang = () => useContext(LangContext)
