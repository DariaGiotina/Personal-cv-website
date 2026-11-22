import { useEffect, useState } from 'react'
import { cvs, ui } from '../content/site'
import { useLang } from '../i18n'

/** Any "Download CV" button calls openCv(); the picker lets the employer choose the right CV. Also opens on #cv. */
export const openCv = () => window.dispatchEvent(new Event('open-cv'))

export function CvPicker() {
  const { t } = useLang()
  const [open, setOpen] = useState(() => window.location.hash === '#cv')
  useEffect(() => {
    const show = () => setOpen(true)
    const onHash = () => { if (window.location.hash === '#cv') setOpen(true) }
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(false) }
    window.addEventListener('open-cv', show)
    window.addEventListener('hashchange', onHash)
    window.addEventListener('keydown', onKey)
    return () => {
      window.removeEventListener('open-cv', show)
      window.removeEventListener('hashchange', onHash)
      window.removeEventListener('keydown', onKey)
    }
  }, [])
  useEffect(() => {
    document.documentElement.style.overflow = open ? 'hidden' : ''
    if (!open && window.location.hash === '#cv') history.replaceState(null, '', window.location.pathname)
  }, [open])
  const base = import.meta.env.BASE_URL + 'cv/'
  return (
    <div className={`cvp ${open ? 'open' : ''}`} role="dialog" aria-modal="true" aria-labelledby="cvp-title" aria-hidden={!open} onClick={() => setOpen(false)}>
      <div className="cvp__panel" onClick={(e) => e.stopPropagation()}>
        <button className="cvp__close" onClick={() => setOpen(false)} aria-label="Close">×</button>
        <p className="eyebrow">{t(ui.downloadCv)}</p>
        <h2 className="cvp__title" id="cvp-title">{t(ui.cvTitle)}</h2>
        <p className="cvp__sub">{t(ui.cvSub)}</p>
        <div className="cvp__grid">
          {cvs.map((c, i) => (
            <div className="cvp__card" key={c.file} style={{ ['--d' as string]: `${0.1 + i * 0.08}s` }}>
              <span className="cvp__num">{String(i + 1).padStart(2, '0')}</span>
              <h3>{t(c.title)}</h3>
              <p>{t(c.desc)}</p>
              <div className="chips">{c.tags.map((x) => <span className="chip" key={x}>{x}</span>)}</div>
              <div className="cvp__actions">
                <a className="btn btn--primary btn--sm" href={base + c.file} download>{t(ui.download)}</a>
                <a className="btn btn--ghost btn--sm" href={base + c.file} target="_blank" rel="noreferrer">{t(ui.view)}</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
