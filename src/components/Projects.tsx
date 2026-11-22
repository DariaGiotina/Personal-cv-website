import { useEffect, useState } from 'react'
import { alsoOnGithub, artist, projectsIntro, tracks, ui } from '../content/site'
import { useLang } from '../i18n'
import { SectionHead } from './Intro'
import { Visual } from './Visuals'

export function Projects() {
  const { t } = useLang()
  const [active, setActive] = useState(tracks[0].key)

  // highlight the track currently on screen
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.getAttribute('data-track')!)),
      { rootMargin: '-40% 0px -55% 0px' },
    )
    document.querySelectorAll('[data-track]').forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])

  // grow the speed-up bars once they are visible
  useEffect(() => {
    const io = new IntersectionObserver((entries) => entries.forEach((e) => {
      if (e.isIntersecting) {
        const i = e.target as HTMLElement
        i.style.width = i.dataset.w || '0'
        io.unobserve(i)
      }
    }), { threshold: 0.5 })
    document.querySelectorAll<HTMLElement>('.v-par .track i').forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])

  let n = 0
  return (
    <section className="section" id="projects" style={{ paddingTop: 60 }}>
      <SectionHead label={t(projectsIntro.label)} title={t(projectsIntro.title)} />
      <div className="switcher-wrap">
        <div className="switcher" role="tablist">
          {tracks.map((tr) => (
            <button key={tr.key} role="tab" aria-selected={active === tr.key} className={active === tr.key ? 'on' : ''}
              onClick={() => document.getElementById(`track-${tr.key}`)?.scrollIntoView({ behavior: 'smooth' })}>
              {t(tr.name)} <small>{tr.projects.length}</small>
            </button>
          ))}
        </div>
      </div>
      <span className="switcher-hint">{t(ui.pickTrack)}</span>

      {tracks.map((tr) => (
        <div key={tr.key} data-track={tr.key}>
          <div className="track-head" id={`track-${tr.key}`} data-reveal>
            <i>{tr.letter}</i><h3>{t(tr.name)}</h3><span>{t(tr.sub)}</span>
          </div>
          {tr.projects.map((p, i) => {
            n += 1
            return (
              <article className={`prow ${i % 2 === 1 ? 'rev' : ''}`} key={p.title}>
                <div className="prow__text">
                  <div data-reveal className="prow__num">{n}</div>
                  <h4 data-reveal style={{ ['--d' as string]: '0.06s' }}>{p.title}</h4>
                  <div className="tags" data-reveal style={{ ['--d' as string]: '0.12s' }}>
                    {p.tags.map((x) => <span className="tag" key={x}>{x}</span>)}
                    <span className="tag tag--status">{t(p.status)}</span>
                  </div>
                  <div data-reveal style={{ ['--d' as string]: '0.24s' }}>
                    {p.paras.map((x, k) => <p key={k}>{t(x)}</p>)}
                    {p.credit && (
                      <div className="credit"><span className="av" />{t(ui.artBy)} {artist.name} · {t(artist.school)}</div>
                    )}
                    <p className="meta">{t(ui.myPart)} · {t(p.part)}</p>
                    <p className="meta meta--stack">{t(ui.stack)} · {p.stack}</p>
                    {p.link && <a className="btn btn--ghost" href={p.link.href} target="_blank" rel="noreferrer">{t(p.link.label)}</a>}
                  </div>
                </div>
                <div className="prow__visual" data-reveal style={{ ['--d' as string]: '0.15s' }}>
                  <Visual p={p} />
                </div>
              </article>
            )
          })}
        </div>
      ))}

      <div className="more" data-reveal>
        <i>{t(ui.alsoOnGithub)}</i>
        {alsoOnGithub.map((a) => <a className="chip" key={a.label} href={a.href} target="_blank" rel="noreferrer">{a.label}</a>)}
        <a className="gh" href="https://github.com/DariaGiotina" target="_blank" rel="noreferrer">github.com/DariaGiotina →</a>
      </div>
    </section>
  )
}
