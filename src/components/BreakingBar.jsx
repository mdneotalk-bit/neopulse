import { useLayoutEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { gsap, prefersReducedMotion } from '../lib/gsap'
import { POSTS } from '../data/posts'
import { Flame } from './Icons'
import './BreakingBar.css'

export default function BreakingBar() {
  const track = useRef(null)
  const items = POSTS.slice(0, 8)

  useLayoutEffect(() => {
    if (prefersReducedMotion) return
    const ctx = gsap.context(() => {
      gsap.fromTo(
        track.current,
        { xPercent: 0 },
        { xPercent: -50, duration: 42, ease: 'none', repeat: -1 },
      )
    }, track)
    return () => ctx.revert()
  }, [])

  const row = [...items, ...items]

  return (
    <div className="breaking">
      <div className="breaking__label">
        <Flame size={14} />
        <span>New</span>
      </div>
      <div className="breaking__viewport">
        <div className="breaking__track" ref={track}>
          {row.map((p, i) => (
            <Link key={i} to={`/article/${p.slug}`} className="breaking__item">
              <span className="breaking__dot" style={{ background: p.accent }} />
              {p.title}
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
