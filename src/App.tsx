import { useCallback, useEffect, useState } from 'react'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Band, Statement, Work } from './components/Intro'
import { Projects } from './components/Projects'
import { Contact, Experience, Footer, Gallery, Highlights, Mindset, Motivation, Skills, Socials } from './components/Rest'
import { ScrollTrigger, initReveals } from './hooks/motion'
import { useLang } from './i18n'

export default function App() {
  const [docked, setDocked] = useState(false)
  const onDock = useCallback((v: boolean) => setDocked(v), [])
  const { lang } = useLang()

  useEffect(() => {
    const stop = initReveals()
    const refresh = () => ScrollTrigger.refresh()
    document.fonts?.ready.then(refresh)
    window.addEventListener('load', refresh)
    return () => { stop(); window.removeEventListener('load', refresh) }
  }, [lang])

  return (
    <>
      <Header docked={docked} />
      <main>
        <Hero onDock={onDock} />
        <Band />
        <Statement />
        <Work />
        <Projects />
        <Motivation />
        <Mindset />
        <Experience />
        <Highlights />
        <Skills />
        <Gallery />
        <Socials />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
