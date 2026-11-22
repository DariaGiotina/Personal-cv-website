import { useEffect, useRef, useState } from 'react'
import { links, nav, ui } from '../content/site'
import { useLang } from '../i18n'
import { openCv } from './CvPicker'

export function Header({ docked }: { docked: boolean }) {
  const { t, lang, setLang } = useLang()
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('')
  const [open, setOpen] = useState(false)
  const bar = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > window.innerHeight * 0.6)
      const max = document.documentElement.scrollHeight - window.innerHeight
      if (bar.current) bar.current.style.transform = `scaleX(${max > 0 ? window.scrollY / max : 0})`
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-45% 0px -50% 0px' },
    )
    nav.forEach((n) => {
      const el = document.getElementById(n.id)
      if (el) io.observe(el)
    })
    return () => io.disconnect()
  }, [])

  return (
    <>
      <header className={`header ${scrolled ? 'scrolled' : ''} ${docked ? 'docked' : ''}`}>
        <a className="logo" href="#top" aria-label="Back to top">DG</a>
        <nav className="nav" aria-label="Sections">
          {nav.map((n) => (
            <a key={n.id} href={`#${n.id}`} className={active === n.id ? 'active' : ''}>{t(n.label)}</a>
          ))}
        </nav>
        <div className="header__right">
          <div className="header__ctas">
            <button className="btn btn--primary btn--sm" onClick={openCv}>{t(ui.downloadCv)}</button>
            <a className="btn btn--ghost btn--sm" href={`mailto:${links.email}`}>{t(ui.email)}</a>
          </div>
          <div className="lang" role="group" aria-label="Language">
            <button className={lang === 'en' ? 'on' : ''} onClick={() => setLang('en')}>EN</button>
            <button className={lang === 'ro' ? 'on' : ''} onClick={() => setLang('ro')}>RO</button>
          </div>
          <button className="menu-btn" onClick={() => setOpen(true)}>{t(ui.menu)}</button>
        </div>
        <div className="progress" ref={bar} />
      </header>
      <div className={`mobile-nav ${open ? 'open' : ''}`} onClick={() => setOpen(false)}>
        <button className="menu-btn close" aria-label="Close menu">×</button>
        {nav.map((n) => <a key={n.id} href={`#${n.id}`}>{t(n.label)}</a>)}
        <div className="lang" style={{ display: 'flex', alignSelf: 'flex-start', marginTop: 24 }} onClick={(e) => e.stopPropagation()}>
          <button className={lang === 'en' ? 'on' : ''} onClick={() => setLang('en')}>EN</button>
          <button className={lang === 'ro' ? 'on' : ''} onClick={() => setLang('ro')}>RO</button>
        </div>
      </div>
    </>
  )
}
