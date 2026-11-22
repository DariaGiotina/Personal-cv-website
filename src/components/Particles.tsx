import { useEffect, useRef, type MutableRefObject } from 'react'
import * as THREE from 'three'
import { reducedMotion } from '../hooks/motion'

/**
 * Drifting point field over the hero photo. Points are denser towards the right edge,
 * drift slowly and get pushed away from the cursor. `fade` (0..1) scatters and hides them on scroll.
 */
export function Particles({ fade }: { fade: MutableRefObject<number> }) {
  const host = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = host.current
    if (!el || reducedMotion()) return
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: false })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    el.appendChild(renderer.domElement)
    const scene = new THREE.Scene()
    const camera = new THREE.OrthographicCamera(0, 1, 0, 1, -1, 1)

    const N = window.innerWidth < 720 ? 380 : 850
    const base = new Float32Array(N * 2)
    const pos = new Float32Array(N * 3)
    const seed = new Float32Array(N)
    for (let i = 0; i < N; i++) {
      let x = Math.random()
      if (Math.random() < 0.65) x = 0.66 + Math.random() * 0.38
      base[i * 2] = x
      base[i * 2 + 1] = Math.random()
      seed[i] = Math.random() * 100
    }
    const geo = new THREE.BufferGeometry()
    geo.setAttribute('position', new THREE.BufferAttribute(pos, 3))
    const mat = new THREE.PointsMaterial({ color: 0x241f21, size: 1.9, transparent: true, opacity: 0.42, sizeAttenuation: false })
    scene.add(new THREE.Points(geo, mat))

    let w = 1, h = 1
    const resize = () => {
      w = el.clientWidth; h = el.clientHeight
      renderer.setSize(w, h, false)
      renderer.domElement.style.width = '100%'
      renderer.domElement.style.height = '100%'
      camera.right = w; camera.bottom = h; camera.updateProjectionMatrix()
    }
    resize()
    window.addEventListener('resize', resize)
    const mouse = { x: -9999, y: -9999 }
    const onMove = (e: PointerEvent) => {
      const r = el.getBoundingClientRect()
      mouse.x = e.clientX - r.left; mouse.y = e.clientY - r.top
    }
    window.addEventListener('pointermove', onMove)

    let raf = 0
    const tick = (time: number) => {
      const t = time / 1000
      const f = fade.current
      for (let i = 0; i < N; i++) {
        const s = seed[i]
        let x = base[i * 2] * w + Math.sin(t * 0.3 + s) * 12
        let y = base[i * 2 + 1] * h + Math.cos(t * 0.25 + s) * 12
        // scatter outward as the hero scrolls
        x += (base[i * 2] - 0.5) * w * f * 0.8
        y += (base[i * 2 + 1] - 0.5) * h * f * 0.8
        const dx = x - mouse.x, dy = y - mouse.y
        const d2 = dx * dx + dy * dy
        if (d2 < 14000) {
          const k = (1 - d2 / 14000) * 40
          const d = Math.sqrt(d2) || 1
          x += (dx / d) * k; y += (dy / d) * k
        }
        pos[i * 3] = x; pos[i * 3 + 1] = y; pos[i * 3 + 2] = 0
      }
      geo.attributes.position.needsUpdate = true
      mat.opacity = 0.42 * (1 - f * 0.85)
      renderer.render(scene, camera)
      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
      window.removeEventListener('pointermove', onMove)
      geo.dispose(); mat.dispose(); renderer.dispose()
      renderer.domElement.remove()
    }
  }, [fade])

  return <div className="hero__particles" ref={host} aria-hidden />
}
