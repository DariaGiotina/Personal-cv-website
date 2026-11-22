import { useEffect, useRef } from 'react'
import { hero, links, ui } from '../content/site'
import { useLang } from '../i18n'
import { openCv } from './CvPicker'
import { gsap, reducedMotion } from '../hooks/motion'
import { Particles } from './Particles'
import { Photo } from './Photo'

const POS = [
  { left: '12%', top: '29%', r: '-6deg', fd: '7s' },
  { right: '9%', top: '38%', r: '5deg', fd: '5.5s' },
  { left: '6%', top: '49%', r: '-4deg', fd: '6s' },
  { left: '15%', top: '70%', r: '4deg', fd: '6.5s' },
  { right: '13%', top: '74%', r: '-5deg', fd: '5s' },
]

export function Hero({ onDock }: { onDock: (v: boolean) => void }) {
  const { t } = useLang()
  const root = useRef<HTMLElement>(null)
  const fade = useRef(0)

  useEffect(() => {
    const el = root.current
    if (!el || reducedMotion()) return
    const ctx = gsap.context(() => {
      const sig = el.querySelector<SVGTextElement>('.hero__signature text')
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: el, start: 'top top', end: '+=150%', scrub: 0.6, pin: true, invalidateOnRefresh: true,
          onUpdate: (s) => { fade.current = Math.min(1, s.progress * 1.6); onDock(s.progress > 0.85) },
          onLeave: () => onDock(true),
        },
      })
      const small = () => window.innerWidth < 720
      tl.fromTo('.hero__photo', { width: () => window.innerWidth, height: () => window.innerHeight, borderRadius: 0 }, {
        width: () => (small() ? window.innerWidth * 0.72 : 480), height: () => (small() ? window.innerWidth * 0.92 : 560), borderRadius: 30,
        boxShadow: '0 30px 60px rgba(0,0,0,0.18)', ease: 'power2.inOut', duration: 1,
      }, 0)
        .fromTo('.hero__stickers', { opacity: 1, y: 0 }, { opacity: 0, y: -40, duration: 0.35 }, 0)
        .fromTo('.hero__scroll', { opacity: 0.8 }, { opacity: 0, duration: 0.2 }, 0)
        .fromTo('.hero__status', { backgroundColor: 'rgba(20,18,20,0.28)', color: '#f8f3f1', borderColor: 'rgba(255,255,255,0.4)' }, { backgroundColor: 'rgba(251,248,246,0.75)', color: '#1b1719', borderColor: '#e4dad7', duration: 0.5 }, 0.2)
        .fromTo('.hero__names', { opacity: 0 }, { opacity: 1, duration: 0.5 }, 0.35)
        .fromTo('.hero__row--outline', { xPercent: 8 }, { xPercent: -14, duration: 1.2, ease: 'none' }, 0.2)
        .fromTo('.hero__row--fill', { xPercent: -22 }, { xPercent: 0, duration: 1.2, ease: 'none' }, 0.2)
      if (sig) tl.fromTo(sig, { strokeDashoffset: 3200 }, { strokeDashoffset: 0, duration: 0.7, ease: 'none' }, 0.6)
        .fromTo(sig, { fill: '#7A3450', fillOpacity: 0 }, { fill: '#7A3450', fillOpacity: 0.9, duration: 0.25 }, 1.15)
    }, el)
    return () => ctx.revert()
  }, [onDock])
  const row = `${hero.name} · ${hero.name} · ${hero.name} · `

  return (
    <section className="hero" id="top" ref={root}>
      <div className="hero__names" aria-hidden>
        <div className="hero__row hero__row--outline"><div className="hero__track">{row}{row}</div></div>
        <div className="hero__row hero__row--fill"><div className="hero__track">{row}{row}</div></div>
      </div>
      <div className="hero__photo">
        <Photo file="portrait.jpg" label="Full-bleed B/W portrait · placeholder" />
      </div>
      <Particles fade={fade} />
      <svg className="hero__signature" viewBox="0 0 1000 300" aria-hidden>
        <text x="500" y="200" textAnchor="middle" strokeDasharray="3200" strokeDashoffset="3200">{hero.name}</text>
      </svg>
      <div className="hero__stickers" aria-hidden>
        {hero.stickers.map((s, i) => (
          <div key={i} className={`sticker sticker--${s.kind}`} style={{ ...POS[i], ['--pd' as string]: `${0.4 + i * 0.18}s`, ['--r' as string]: POS[i].r, ['--fd' as string]: POS[i].fd, ['--fdl' as string]: `${-i}s` }}>
            <div>{s.kind === 'card' ? <><b>{t(s.title)}</b><small>{s.sub && t(s.sub)}</small></> : t(s.title)}</div>
          </div>
        ))}
        <div className="sticker sticker--icon" style={{ right: '22%', top: '22%', ['--pd' as string]: '1.4s', ['--r' as string]: '6deg', ['--fd' as string]: '8s' }}>
          <div>
            <svg width="64" height="40" viewBox="0 0 64 40" fill="none"><path d="M4 28 L8 18 L20 12 L38 11 L50 18 L60 21 L60 28 Z" stroke="#F8F3F1" strokeWidth="2" strokeLinejoin="round" /><path d="M20 12 L24 19 L50 18 M34 11 L34 19" stroke="#F8F3F1" strokeWidth="1.5" /><circle cx="17" cy="29" r="5" stroke="#F8F3F1" strokeWidth="2" /><circle cx="48" cy="29" r="5" stroke="#F8F3F1" strokeWidth="2" /></svg>
          </div>
        </div>
      </div>
      <div className="hero__status"><span className="dot" /><span className="long">{t(ui.status)}</span><span className="short">{t(ui.statusShort)}</span></div>
      <div className="hero__ctas">
        <button className="btn btn--primary" onClick={openCv}>{t(ui.downloadCv)}</button>
        <a className="btn btn--ghost" href={`mailto:${links.email}`}>{t(ui.emailMe)}</a>
      </div>
      <div className="hero__scroll">{t(ui.scroll)} ↓</div>
    </section>
  )
}
