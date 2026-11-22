import { useEffect, useRef, useState } from 'react'
import { reducedMotion } from '../hooks/motion'
import type { Project } from '../content/site'
import { ui } from '../content/site'
import { useLang } from '../i18n'
import { Photo } from './Photo'

function PhoneDemo() {
  const { t } = useLang()
  return (
    <div className="v v-phone">
      <div className="hand">{t(ui.appFlow)}
        <svg width="20" height="40" viewBox="0 0 20 40" fill="none"><path d="M10 0 C 8 14 12 24 10 36 M3 29 L10 37 L17 29" stroke="#8A7F82" strokeWidth="1.6" strokeLinecap="round" /></svg>
      </div>
      <div className="phone phone--video">
        <LoopVideo name="thesis-app" poster="thesis-app.jpg" label="Lumière app: photo capture, analysis and result screens" />
      </div>
    </div>
  )
}

function Rov() {
  const fish = (
    <svg width="60" height="28" viewBox="0 0 60 28" fill="none"><path d="M4 14 C 14 2 36 2 46 14 C 36 26 14 26 4 14 Z M46 14 L58 4 L58 24 Z" stroke="#1B1719" strokeWidth="1.4" /><circle cx="14" cy="12" r="1.6" fill="#1B1719" /></svg>
  )
  return (
    <div className="v v-card v-rov">
      <div className="frame">
        <span className="count">count: 2</span>
        <div style={{ position: 'absolute', left: 30, top: 40 }}>{fish}</div>
        <div className="bb" style={{ left: 22, top: 34, width: 76, height: 40 }}><small>fish 0.93</small></div>
        <div style={{ position: 'absolute', left: 140, top: 95 }}>{fish}</div>
        <div className="bb" style={{ left: 132, top: 89, width: 76, height: 40 }}><small>fish 0.88</small></div>
      </div>
      <span className="v-cap" style={{ position: 'absolute', left: 80, top: 270 }}>YOLOv8 fish counting</span>
      <svg className="draw" style={{ position: 'absolute', left: 345, top: 90 }} width="210" height="150" viewBox="0 0 210 150" fill="none">
        <rect x="20" y="40" width="170" height="70" rx="14" stroke="#1B1719" strokeWidth="1.4" />
        <rect x="60" y="20" width="90" height="24" rx="6" stroke="#1B1719" strokeWidth="1.4" />
        <circle cx="105" cy="75" r="16" stroke="#1B1719" strokeWidth="1.4" />
        <circle cx="105" cy="75" r="6" stroke="#7A3450" strokeWidth="1.4" />
        <path d="M20 60 H4 M20 90 H4 M190 60 H206 M190 90 H206 M50 110 V135 M160 110 V135 M40 135 H60 M150 135 H170" stroke="#1B1719" strokeWidth="1.4" />
      </svg>
      <span className="v-cap" style={{ position: 'absolute', left: 395, top: 270 }}>ROV sensor board</span>
      <span className="label" style={{ position: 'absolute', left: 405, top: 302, margin: 0 }}>pH · leak · rain</span>
    </div>
  )
}

function Browser() {
  const on = new Set([1, 2, 8, 9, 12, 15, 16, 22, 23, 26])
  return (
    <div className="v v-card v-browser">
      <div className="bar"><i /><i /><i /><span className="url">venues.app/dashboard</span></div>
      <h5>Bookings · March</h5>
      <div className="cal">{Array.from({ length: 28 }, (_, i) => <i key={i} className={on.has(i) ? 'on' : ''} style={{ ['--d' as string]: `${i * 0.03}s` }} />)}</div>
    </div>
  )
}

function Parallel() {
  const rows: [string, number][] = [['Gaussian blur', 2.3], ['Grayscale', 1.4], ['Sobel edges', 2.5]]
  return (
    <div className="v v-card v-par">
      <div className="flow"><b>INPUT</b><span /><b className="acc">FORK / JOIN · 20 THREADS</b><span /><b>OUTPUT</b></div>
      <p className="v-cap">identical to the sequential output, pixel for pixel</p>
      {rows.map(([l, v], i) => (
        <div className="row" key={l}>
          <span>{l}</span>
          <div className="track"><i className={v < 2 ? 'soft' : ''} style={{ ['--d' as string]: `${i * 0.2}s` }} data-w={`${(v / 2.6) * 100}%`} /></div>
          <em>{v}×</em>
        </div>
      ))}
    </div>
  )
}

function Shops() {
  const win = (title: string) => (
    <div className="win">
      <i />
      <h6>{title}</h6>
      <div className="items">{[0, 1, 2].map((k) => <div key={k}><u /><s /><em /></div>)}</div>
    </div>
  )
  return <div className="v v-shops">{win('ASP.NET Core storefront')}{win('Express + EJS shop')}</div>
}

/** Silent looping clip: loads only when near the screen, pauses when off-screen, poster only for reduced motion. */
function LoopVideo({ name, poster, label }: { name: string; poster: string; label: string }) {
  const ref = useRef<HTMLVideoElement>(null)
  useEffect(() => {
    const v = ref.current
    if (!v || reducedMotion()) return
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { v.preload = 'auto'; v.play().catch(() => {}) } else v.pause()
    }, { rootMargin: '200px 0px', threshold: 0.2 })
    io.observe(v)
    return () => io.disconnect()
  }, [])
  const base = `${import.meta.env.BASE_URL}images/`
  return (
    <div className="photo">
      <video ref={ref} muted loop playsInline preload="none" poster={base + poster} aria-label={label}>
        <source src={`${base}${name}.webm`} type="video/webm" />
        <source src={`${base}${name}.mp4`} type="video/mp4" />
      </video>
    </div>
  )
}

function Shot({ p }: { p: Project }) {
  const { t } = useLang()
  const s = p.shot!
  return (
    <div className="v v-shot">
      <div className="print">
        <div style={{ position: 'relative' }}>
          <span className={`chip-live ${s.live ? 'live' : ''}`}>{s.live && <span className="dot" />}{t(s.chip)}</span>
          {s.video ? <LoopVideo name={s.video} poster={s.file} label={`${p.title}: ${s.label}`} /> : <Photo file={s.file} label={s.label} />}
        </div>
        <p className="v-cap">{t(s.caption)}</p>
      </div>
    </div>
  )
}

const isSafari = typeof navigator !== 'undefined' && /^((?!chrome|chromium|android|edg).)*safari/i.test(navigator.userAgent)

/** Character with a transparent background: WebM with alpha (Chrome/Edge/Firefox), animated WebP for Safari, a still for reduced motion. */
function Boss({ p }: { p: Project }) {
  const { t } = useLang()
  const s = p.shot!
  const base = `${import.meta.env.BASE_URL}images/`
  const ref = useRef<HTMLVideoElement>(null)
  const host = useRef<HTMLDivElement>(null)
  const [near, setNear] = useState(false)
  const still = reducedMotion()
  useEffect(() => {
    const el = host.current
    if (!el || still) return
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) setNear(true)
      const v = ref.current
      if (v) { if (e.isIntersecting) v.play().catch(() => {}); else v.pause() }
    }, { rootMargin: '200px 0px', threshold: 0.2 })
    io.observe(el)
    return () => io.disconnect()
  }, [still, near])
  const label = `${p.title}: ${s.label}`
  return (
    <div className="v v-boss" ref={host}>
      <span className="chip-live">{t(s.chip)}</span>
      <div className="v-boss__stage">
        <span className="v-boss__shadow" aria-hidden />
        {still || (isSafari && !near) ? (
          <img src={base + s.file} alt={label} />
        ) : isSafari ? (
          <img src={`${base}${s.video}.webp`} alt={label} />
        ) : (
          <video ref={ref} muted loop playsInline preload="none" poster={base + s.file} aria-label={label}>
            <source src={`${base}${s.video}.webm`} type="video/webm" />
          </video>
        )}
      </div>
      <p className="v-cap">{t(s.caption)}</p>
    </div>
  )
}

export function Visual({ p }: { p: Project }) {
  switch (p.visual) {
    case 'phone': return <PhoneDemo />
    case 'rov': return <Rov />
    case 'browser': return <Browser />
    case 'parallel': return <Parallel />
    case 'shops': return <Shops />
    case 'shot': return <Shot p={p} />
    case 'boss': return <Boss p={p} />
  }
}
