import { useEffect, useRef } from 'react'
import { band, statement, work } from '../content/site'
import { useLang } from '../i18n'
import { ScrollTrigger, reducedMotion } from '../hooks/motion'

export function Band() {
  const { t } = useLang()
  const items = [...band, ...band, ...band, ...band]
  return (
    <div className="band" aria-hidden>
      <div className="band__inner">
        <div className="band__track">
          {[0, 1].map((k) => items.map((b, i) => <span key={`${k}-${i}`}>{t(b)} &nbsp;·</span>))}
        </div>
      </div>
    </div>
  )
}

export function Statement() {
  const { t, lang } = useLang()
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const words = Array.from(el.querySelectorAll<HTMLElement>('.w'))
    if (reducedMotion()) { words.forEach((w) => w.classList.add('on')); return }
    const st = ScrollTrigger.create({
      trigger: el, start: 'top 75%', end: 'bottom 55%', scrub: true,
      onUpdate: (s) => {
        const n = Math.round(s.progress * words.length)
        words.forEach((w, i) => w.classList.toggle('on', i < n))
      },
    })
    return () => st.kill()
  }, [lang])
  return (
    <div className="statement" ref={ref}>
      {statement.map((line, li) => (
        <p key={li}>{t(line).split(' ').map((w, i) => <span className="w" key={i}>{w}&nbsp;</span>)}</p>
      ))}
    </div>
  )
}

export function SectionHead({ label, title, dark }: { label: string; title: string; dark?: boolean }) {
  return (
    <div data-reveal>
      <p className="eyebrow">{label}</p>
      <h2 className="h2"><span className="clip"><span>{title}</span></span></h2>
      {!dark && <div className="rule" />}
    </div>
  )
}

export function Work() {
  const { t } = useLang()
  return (
    <section className="section" id="work" style={{ paddingTop: 60 }}>
      <SectionHead label={t(work.label)} title={t(work.title)} />
      <div className="card role" data-reveal>
        <div className="role__left">
          <div className="role__logo">LOGO</div>
          <div>
            <div className="role__cur"><span className="dot" />{t(work.current)}</div>
            <h3>{t(work.role)}</h3>
            <p>{t(work.org)}</p>
            <p className="small">{t(work.before)}</p>
            <div className="tags">{work.rotations.map((r, i) => <span className="tag" key={i}>{t(r)}</span>)}</div>
            <p className="tiny">{t(work.program)}</p>
          </div>
        </div>
        <div className="role__note">
          <p>{t(work.note)}</p>
          <p className="small">{t(work.noteSub)}</p>
        </div>
      </div>
      <div className="card pipeline" data-reveal>
        <div className="pipeline__flow">
          {work.pipeline.map((s, i) => (
            <div key={s.t} style={{ display: 'contents' }}>
              <div className={`pipeline__box ${i === work.pipeline.length - 1 ? 'last' : ''}`} style={{ ['--d' as string]: `${i * 0.25}s` }}>
                <svg preserveAspectRatio="none" viewBox="0 0 170 64" aria-hidden><rect x="0.7" y="0.7" width="168.6" height="62.6" rx="12" /></svg>
                <b>{s.t}</b><span>{s.s}</span>
              </div>
              {i < work.pipeline.length - 1 && <div className="pipeline__arrow"><i className="pipeline__pulse" style={{ ['--d' as string]: `${i * 0.5}s` }} /></div>}
            </div>
          ))}
        </div>
        <p className="pipeline__cap">{t(work.pipelineCaption)}</p>
      </div>
      <div className="stack">
        {work.stack.map((c, i) => (
          <div className="card" key={i} data-reveal style={{ ['--d' as string]: `${(i % 3) * 0.12}s` }}>
            <div className="num">{String(i + 1).padStart(2, '0')}</div>
            <h4>{t(c.t)}</h4>
            <div className="chips">{c.items.map((x) => <span className="chip" key={x}>{x}</span>)}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
