import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export const reducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches

/** Fade-up reveal for every [data-reveal] element as it enters the viewport. */
export function initReveals(root: ParentNode = document) {
  const els = Array.from(root.querySelectorAll<HTMLElement>('[data-reveal]:not(.in)'))
  if (reducedMotion()) {
    els.forEach((el) => el.classList.add('in'))
    return () => {}
  }
  const io = new IntersectionObserver(
    (entries) => {
      for (const e of entries) {
        if (e.isIntersecting) {
          e.target.classList.add('in')
          io.unobserve(e.target)
        }
      }
    },
    { rootMargin: '0px 0px -10% 0px', threshold: 0.12 },
  )
  els.forEach((el) => io.observe(el))
  return () => io.disconnect()
}

export { gsap, ScrollTrigger }
