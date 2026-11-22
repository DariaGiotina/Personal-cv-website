import { useState, type CSSProperties } from 'react'

/** Shows /images/<file> if it exists, otherwise a labelled placeholder you can replace later. */
export function Photo({ file, label, className = '', dark = false, style }: { file: string; label: string; className?: string; dark?: boolean; style?: CSSProperties }) {
  const [failed, setFailed] = useState(false)
  const src = `${import.meta.env.BASE_URL}images/${file}`
  return (
    <div className={`photo ${dark ? 'photo--dark' : ''} ${className}`} style={style}>
      {!failed && <img src={src} alt={label} loading="lazy" onError={() => setFailed(true)} />}
      {failed && <span className="photo__label">{label}</span>}
    </div>
  )
}
