import { useEffect, useRef, useState } from 'react'
import { contact, experience, gallery, highlights, links, mindset, motivation, skills, socials, ui } from '../content/site'
import { useLang } from '../i18n'
import { openCv } from './CvPicker'
import { ScrollTrigger, gsap, reducedMotion } from '../hooks/motion'
import { Car } from './Car'
import { SectionHead } from './Intro'
import { Photo } from './Photo'

export function Motivation() {
  const { t, lang } = useLang()
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const ps = Array.from(ref.current?.querySelectorAll<HTMLElement>('.mot__p') ?? [])
    if (reducedMotion()) { ps.forEach((p) => p.classList.add('on')); return }
    const sts = ps.map((p) => ScrollTrigger.create({ trigger: p, start: 'top 70%', end: 'bottom 30%', toggleClass: 'on' }))
    return () => sts.forEach((s) => s.kill())
  }, [lang])
  return (
    <section className="section" id="motivation">
      <SectionHead label={t(motivation.label)} title={t(motivation.title)} />
      <div className="mot" ref={ref}>
        <div>
          <p className="mot__quote" data-reveal>{t(motivation.quote)}</p>
          {motivation.paras.map((p, i) => <p className="mot__p" key={i}>{t(p)}</p>)}
        </div>
        <div style={{ position: 'relative' }} data-reveal>
          <Car />
          <span className="car__label" style={{ left: '22%', top: '4%' }}>{t(motivation.carLabels[0])}</span>
          <span className="car__label" style={{ right: '4%', top: '16%' }}>{t(motivation.carLabels[1])}</span>
          <span className="car__label" style={{ left: '4%', bottom: '6%' }}>{t(motivation.carLabels[2])}</span>
        </div>
      </div>
    </section>
  )
}

export function Mindset() {
  const { t } = useLang()
  return (
    <section className="section dark" id="mindset">
      <SectionHead label={t(mindset.label)} title={t(mindset.title)} dark />
      <div className="mind">
        {mindset.items.map((m, i) => (
          <div className="mind__row" key={i} data-reveal style={{ ['--d' as string]: `${i * 0.08}s` }}>
            <i>{i + 1}</i>
            <div><b>{t(m.t)}</b><span>{t(m.s)}</span></div>
          </div>
        ))}
      </div>
    </section>
  )
}

export function Experience() {
  const { t } = useLang()
  const sec = useRef<HTMLElement>(null)
  useEffect(() => {
    const el = sec.current
    if (!el || reducedMotion() || window.innerWidth < 900) return
    const track = el.querySelector<HTMLElement>('.exp__track')!
    const bar = el.querySelector<HTMLElement>('.exp__progress i')!
    const ctx = gsap.context(() => {
      const dist = () => Math.max(0, track.scrollWidth - window.innerWidth + 120)
      gsap.timeline({ scrollTrigger: { trigger: el, start: 'top top', end: () => `+=${dist()}`, scrub: 0.6, pin: true, invalidateOnRefresh: true } })
        .to(track, { x: () => -dist(), ease: 'none' }, 0)
        .fromTo(bar, { scaleX: 0.1 }, { scaleX: 1, ease: 'none' }, 0)
    }, el)
    return () => ctx.revert()
  }, [])
  return (
    <section className="section exp" id="experience" ref={sec}>
      <SectionHead label={t(experience.label)} title={t(experience.title)} />
      <div className="exp__scroller" style={{ overflowX: window.innerWidth < 900 ? 'auto' : 'visible' }}>
        <div className="exp__track">
          {experience.items.map((x, i) => (
            <div className={`exp__item ${x.current ? 'current' : ''}`} key={i}>
              <div className="tl" />
              <div className="card">
                <i>{t(x.when)}</i>
                <h4>{t(x.title)}</h4>
                <small>{x.org}</small>
                <p>{t(x.desc)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="exp__progress"><i /></div>
    </section>
  )
}

export function Highlights() {
  const { t } = useLang()
  return (
    <section className="section" id="highlights">
      <SectionHead label={t(highlights.label)} title={t(highlights.title)} />
      <div className="hl__photos" data-reveal>
        {highlights.photos.map((p) => <Photo key={p.file} file={p.file} label={p.label} />)}
      </div>
      <div className="hl__grid">
        {highlights.items.map((h, i) => (
          <div className="card" key={i} data-reveal style={{ ['--d' as string]: `${(i % 3) * 0.12}s` }}>
            <h4>{t(h.t)}</h4><p>{t(h.s)}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export function Skills() {
  const { t } = useLang()
  return (
    <section className="section" id="skills">
      <SectionHead label={t(skills.label)} title={t(skills.title)} />
      <div className="sk__group" data-reveal>
        <p className="label">{t(skills.interests.label)}</p>
        <div className="chips">{skills.interests.items.map((s) => <span className="chip chip--serif" key={s}>{s}</span>)}</div>
      </div>
      {skills.groups.map((g, i) => (
        <div className="sk__group" key={i} data-reveal>
          <p className="label">{t(g.label)}</p>
          <div className="chips">{g.items.map((s) => <span className="chip" key={s}>{s}</span>)}</div>
        </div>
      ))}
      <div className="sk__group" data-reveal>
        <p className="label">{t(skills.spoken.label)}</p>
        <div className="spoken">{skills.spoken.items.map((s) => <div key={s.n}><b>{s.n}</b><small>{t(s.l)}</small></div>)}</div>
      </div>
    </section>
  )
}

// cx = centre x (% of viewport), sp = horizontal speed while scrolling (negative = moves the other way)
const GAL = [
  { cx: 26, top: '10vh', h: 'min(34vh, 52vw)', ar: 4 / 3, r: -3, sp: 0.9, z: 3 },
  { cx: 66, top: '24vh', h: 'min(40vh, 60vw)', ar: 4 / 3, r: 2, sp: -0.55, z: 2 },
  { cx: 80, top: '62vh', h: 'min(26vh, 40vw)', ar: 16 / 9, r: -2, sp: 1.25, z: 4 },
  { cx: 34, top: '78vh', h: 'min(32vh, 48vw)', ar: 4 / 3, r: 3, sp: -0.8, z: 3 },
  { cx: 58, top: '112vh', h: 'min(28vh, 44vw)', ar: 16 / 9, r: -2, sp: 0.6, z: 2 },
]

export function Gallery() {
  const { t } = useLang()
  const ref = useRef<HTMLElement>(null)
  useEffect(() => {
    const sec = ref.current
    if (!sec) return
    const els = Array.from(sec.querySelectorAll<HTMLElement>('[data-gal]'))
    let ticking = false
    const update = () => {
      ticking = false
      const vw = window.innerWidth, vh = window.innerHeight
      const r = sec.getBoundingClientRect()
      if (r.bottom < -vh || r.top > vh * 2) return
      for (const el of els) {
        const cx = Number(el.dataset.cx), sp = reducedMotion() ? 0 : Number(el.dataset.sp)
        const d = r.top + el.offsetTop + el.offsetHeight / 2 - vh / 2
        const x = (cx / 100) * vw - el.offsetWidth / 2 + d * sp
        el.style.transform = `translate3d(${x.toFixed(1)}px,0,0)`
      }
    }
    const onScroll = () => { if (!ticking) { ticking = true; requestAnimationFrame(update) } }
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', update)
    update()
    return () => { window.removeEventListener('scroll', onScroll); window.removeEventListener('resize', update) }
  }, [])
  return (
    <section className="gallery" id="gallery" ref={ref}>
      <div className="gallery__dots" aria-hidden />
      <div className="gallery__word" data-gal data-cx="58" data-sp="0.3" style={{ top: '16vh' }} aria-hidden>{t(gallery.words[0])}</div>
      <div className="gallery__word" data-gal data-cx="42" data-sp="-0.3" style={{ top: '92vh' }} aria-hidden>{t(gallery.words[1])}</div>
      {gallery.photos.map((p, i) => {
        const g = GAL[i]
        return (
          <figure className="gallery__item" key={p.file} data-gal data-cx={g.cx} data-sp={g.sp} style={{ top: g.top, zIndex: g.z }}>
            <div className="gallery__frame" style={{ height: g.h, aspectRatio: g.ar, ['--r' as string]: `${g.r}deg` }}>
              <Photo file={p.file} label={p.label} dark />
            </div>
            <figcaption>{p.label}</figcaption>
          </figure>
        )
      })}
    </section>
  )
}

// [rotation, x offset, y offset, card width, full-photo aspect ratio]
const FAN: [number, number, number, number, number][] = [
  [-16, -330, 40, 170, 0.6], [-9, -220, 20, 190, 0.75], [-3, -110, 6, 210, 0.75], [0, 0, 0, 230, 0.75],
  [4, 110, 6, 210, 0.75], [10, 220, 20, 190, 0.75], [16, 330, 40, 170, 1.496],
]

export function Socials() {
  const { t } = useLang()
  const [hover, setHover] = useState<number | null>(null)
  const [shown, setShown] = useState(false)
  const fanRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const el = fanRef.current
    if (!el) return
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setShown(true); io.disconnect() } }, { threshold: 0.25 })
    io.observe(el)
    return () => io.disconnect()
  }, [])
  const base = import.meta.env.BASE_URL + 'images/'
  return (
    <section className="section socials" id="socials">
      <h2 className="h2" data-reveal>{t(socials.title)}</h2>
      <div className="socials__sub">{t(socials.sub)}</div>
      <div ref={fanRef} className={`fan ${shown ? 'in' : ''} ${hover !== null ? 'has-hover' : ''}`} onMouseLeave={() => setHover(null)}>
        {FAN.map(([r, x, y, w, ar], i) => {
          const on = hover === i
          const W = on ? Math.min(340 * ar, 440) : w
          const H = on ? W / ar : w * 1.3
          const ox = on ? Math.max(-500 + W / 2, Math.min(500 - W / 2, x)) : x
          return (
            <div key={i} className={`fan__card ${on ? 'on' : ''}`} onMouseEnter={() => setHover(i)} onFocus={() => setHover(i)} tabIndex={0}
              style={{
                width: W, height: H, marginLeft: -W / 2, zIndex: on ? 50 : 10 - Math.abs(3 - i), ['--d' as string]: `${Math.abs(3 - i) * 0.06}s`,
                ['--open' as string]: on ? `translate(${ox}px, -24px) rotate(0deg)` : `translate(${x}px, ${y}px) rotate(${r}deg)`,
              }}>
              <img className="crop" src={`${base}social-${i + 1}.jpg`} alt="" loading="lazy" />
              <img className="full" src={`${base}social-${i + 1}-full.jpg`} alt="" loading="lazy" />
            </div>
          )
        })}
      </div>
      <div className="socials__links">
        {socials.items.map((s) => <div key={s.n}><span>{s.n}</span><a href={s.href} target="_blank" rel="noreferrer">{s.h}</a></div>)}
      </div>
    </section>
  )
}

export function Contact() {
  const { t } = useLang()
  const title = t(contact.title)
  return (
    <section className="section contact" id="contact">
      <div data-reveal><Photo file="avatar.jpg" label="" className="avatar" /></div>
      <p className="eyebrow" data-reveal>{t(contact.label)}</p>
      <h2 className="contact__big" data-reveal aria-label={title}>
        {title.split('').map((c, i) => <span className="clip" key={i}><span style={{ ['--d' as string]: `${i * 0.03}s` }}>{c === ' ' ? ' ' : c}</span></span>)}
      </h2>
      <div className="contact__links" data-reveal>
        <a href={`mailto:${links.email}`}>{links.email}</a>
        <a href={links.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
        <a href={links.github} target="_blank" rel="noreferrer">GitHub</a>
        <a href="#cv" onClick={(e) => { e.preventDefault(); openCv() }}>{t(ui.downloadCv)}</a>
      </div>
    </section>
  )
}

export function Footer() {
  const { t } = useLang()
  return (
    <footer className="footer">
      <span>© {new Date().getFullYear()} Daria Giotina · Craiova, Romania</span>
      <span>{t(ui.footerRight)}</span>
    </footer>
  )
}
