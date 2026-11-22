import { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { reducedMotion } from '../hooks/motion'

/** Low-poly wireframe car on a slow turntable. Tilts with the cursor; data points pulse. */
export function Car() {
  const host = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = host.current
    if (!el) return
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    el.appendChild(renderer.domElement)
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(32, 1, 1, 5000)
    camera.position.set(0, 140, 900)
    camera.lookAt(0, 0, 0)

    // side profile (SVG coords, y down) -> centred 3D coords
    const arc = (cx: number, cy: number, r: number, from: number, to: number, steps = 7) =>
      Array.from({ length: steps + 1 }, (_, i) => {
        const a = from + ((to - from) * i) / steps
        return [cx + Math.cos(a) * r, cy - Math.sin(a) * r] as [number, number]
      })
    const profile: [number, number][] = [
      [30, 195], [34, 168], [90, 156], [170, 146], [230, 100], [330, 96], [390, 140], [460, 148], [470, 180], [466, 200], [418, 200],
      ...arc(380, 200, 38, 0, Math.PI), [342, 200], [158, 200], ...arc(120, 200, 38, 0, Math.PI), [82, 200],
    ]
    const toV = ([x, y]: [number, number]) => new THREE.Vector2(x - 250, 160 - y)
    const shape = new THREE.Shape(profile.map(toV))
    const W = 170
    const body = new THREE.ExtrudeGeometry(shape, { depth: W, bevelEnabled: false, curveSegments: 1 })
    body.translate(0, 0, -W / 2)
    const lineMat = new THREE.LineBasicMaterial({ color: 0x1b1719, transparent: true, opacity: 0.75 })
    const group = new THREE.Group()
    group.add(new THREE.LineSegments(new THREE.EdgesGeometry(body, 1), lineMat))

    // windows + belt line on both sides
    const windows: [number, number][] = [[185, 148], [235, 108], [320, 106], [375, 144]]
    for (const z of [-W / 2 - 0.5, W / 2 + 0.5]) {
      const pts = windows.map(toV).map((v) => new THREE.Vector3(v.x, v.y, z * 0.92))
      group.add(new THREE.LineLoop(new THREE.BufferGeometry().setFromPoints(pts), lineMat))
      const b = [[80, 172], [460, 168]].map((p) => toV(p as [number, number])).map((v) => new THREE.Vector3(v.x, v.y, z))
      group.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints(b), lineMat))
      const pillar = [[280, 106], [278, 146]].map((p) => toV(p as [number, number])).map((v) => new THREE.Vector3(v.x, v.y, z * 0.92))
      group.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints(pillar), lineMat))
    }
    // wheels
    const wheel = new THREE.EdgesGeometry(new THREE.CylinderGeometry(34, 34, 26, 14), 1)
    for (const [x] of [[120], [380]]) for (const z of [-W / 2 + 6, W / 2 - 6]) {
      const m = new THREE.LineSegments(wheel, lineMat)
      m.rotation.x = Math.PI / 2
      const v = toV([x, 200])
      m.position.set(v.x, v.y, z)
      group.add(m)
    }
    // data points on key vertices
    const keyIdx = [1, 2, 3, 4, 5, 6, 7, 8]
    const ptsArr: number[] = []
    for (const z of [-W / 2, W / 2]) for (const i of keyIdx) { const v = toV(profile[i]); ptsArr.push(v.x, v.y, z) }
    const pg = new THREE.BufferGeometry()
    pg.setAttribute('position', new THREE.Float32BufferAttribute(ptsArr, 3))
    const pm = new THREE.PointsMaterial({ color: 0x7a3450, size: 7, sizeAttenuation: false })
    group.add(new THREE.Points(pg, pm))
    // ground
    const ground = new THREE.GridHelper(900, 18, 0xd4bfc3, 0xe4dad7)
    ground.position.y = toV([0, 238]).y
    ;(ground.material as THREE.Material).transparent = true
    ;(ground.material as THREE.Material).opacity = 0.6
    scene.add(ground)
    scene.add(group)

    const resize = () => {
      const w = el.clientWidth, h = el.clientHeight
      renderer.setSize(w, h, false)
      camera.aspect = w / h
      camera.updateProjectionMatrix()
    }
    resize()
    window.addEventListener('resize', resize)
    const mouse = { x: 0, y: 0 }
    const onMove = (e: PointerEvent) => { mouse.x = e.clientX / window.innerWidth - 0.5; mouse.y = e.clientY / window.innerHeight - 0.5 }
    window.addEventListener('pointermove', onMove)

    let visible = false
    const io = new IntersectionObserver(([e]) => { visible = e.isIntersecting })
    io.observe(el)
    const still = reducedMotion()
    let raf = 0
    let rot = -0.6
    const tick = (time: number) => {
      raf = requestAnimationFrame(tick)
      if (!visible && !still) return
      if (!still) rot += 0.0035
      group.rotation.y = rot + mouse.x * 0.5
      group.rotation.x = mouse.y * 0.15
      ground.rotation.y = group.rotation.y
      pm.size = 6 + Math.sin(time / 400) * 2
      renderer.render(scene, camera)
    }
    raf = requestAnimationFrame(tick)
    return () => {
      cancelAnimationFrame(raf); io.disconnect()
      window.removeEventListener('resize', resize)
      window.removeEventListener('pointermove', onMove)
      renderer.dispose(); renderer.domElement.remove()
    }
  }, [])

  return <div className="car" ref={host} aria-label="Rotating wireframe car" role="img" />
}
