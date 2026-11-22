import { useEffect, useRef } from 'react'
import { contact, experience, gallery, highlights, links, mindset, motivation, skills, socials, ui } from '../content/site'
import { useLang } from '../i18n'
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

const GAL = [
  { x: '17%', y: 150, w: 240, h: 180, r: -3, s: -80 },
  { x: '39%', y: 250, w: 300, h: 220, r: 2, s: 60 },
  { x: '67%', y: 120, w: 220, h: 280, r: -2, s: -140 },
  { x: '72%', y: 540, w: 260, h: 190, r: 3, s: 100 },
  { x: '21%', y: 640, w: 220, h: 280, r: 2, s: -60 },
  { x: '50%', y: 660, w: 240, h: 240, r: -2, s: 140 },
]

export function Gallery() {
  const { t } = useLang()
  const ref = useRef<HTMLElement>(null)
  useEffect(() => {
    const el = ref.current
    if (!el || reducedMotion()) return
    const ctx = gsap.context(() => {
      el.querySelectorAll<HTMLElement>('[data-speed]').forEach((n) => {
        gsap.fromTo(n, { y: -Number(n.dataset.speed) }, { y: Number(n.dataset.speed), ease: 'none', scrollTrigger: { trigger: el, start: 'top bottom', end: 'bottom top', scrub: true } })
      })
    }, el)
    return () => ctx.revert()
  }, [])
  const mobile = typeof window !== 'undefined' && window.innerWidth < 720
  return (
    <section className="gallery" id="gallery" ref={ref}>
      <div className="gallery__word" data-speed="60" style={{ left: '30%', top: 40 }}>{t(gallery.words[0])}</div>
      <div className="gallery__word" data-speed="-60" style={{ left: '10%', top: mobile ? 700 : 560 }}>{t(gallery.words[1])}</div>
      {gallery.photos.map((p, i) => {
        const g = GAL[i]
        const style = mobile
          ? { left: i % 2 ? '44%' : '6%', top: 80 + i * 190, width: 180 }
          : { left: g.x, top: g.y, width: g.w }
        return (
          <div className="gallery__item" key={p.file} data-speed={g.s} style={style}>
            <div style={{ rotate: `${g.r}deg` }}>
              <Photo file={p.file} label="Photo" dark style={{ height: mobile ? 220 : g.h }} />
            </div>
            <small>{p.label}</small>
          </div>
        )
      })}
    </section>
  )
}

const FAN = [[-16, -330, 40, 170], [-9, -220, 20, 190], [-3, -110, 6, 210], [0, 0, 0, 230], [4, 110, 6, 210], [10, 220, 20, 190], [16, 330, 40, 170]]

export function Socials() {
  const { t } = useLang()
  return (
    <section className="section socials" id="socials">
      <h2 className="h2" data-reveal>{t(socials.title)}</h2>
      <div className="socials__sub">{t(socials.sub)}</div>
      <div className="fan" data-reveal>
        {FAN.map(([r, x, y, w], i) => (
          <div key={i} className="photo" style={{
            width: w, height: w * 1.3, marginLeft: -w / 2, zIndex: 10 - Math.abs(3 - i), ['--d' as string]: `${Math.abs(3 - i) * 0.06}s`,
            ['--open' as string]: `translate(${x}px, ${y}px) rotate(${r}deg)`, background: `hsl(345 6% ${58 + Math.abs(3 - i) * 7}%)`,
          }}>
            <Photo file={`social-${i + 1}.jpg`} label="" />
          </div>
        ))}
      </div>
      <div className="socials__links">
        {socials.items.map((s) => <div key={s.n}><span>{s.n}</span><a href={s.href} target="_blank" rel="noreferrer">{s.h}</a></div>)}
      </div>
    </section>
  )
}

export function Contact() {
  const { t } = useLang()
  const cv = import.meta.env.BASE_URL + links.cv
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
        <a href={cv} download>{t(ui.downloadCv)}</a>
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
