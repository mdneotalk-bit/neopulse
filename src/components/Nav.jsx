import { useEffect, useRef, useState } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { CHANNEL } from '../data/videos'
import { Pulse, YouTube } from './Icons'
import './Nav.css'

const LINKS = [
  { id: '#articles', label: 'Articles' },
  { id: '#news', label: 'Health News' },
  { id: '#tips', label: 'Tips' },
  { id: '#about', label: 'About' },
  { id: '#portfolio', label: 'Portfolio' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const nav = useRef(null)
  const navigate = useNavigate()
  const { pathname } = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
  }, [open])

  const go = (hash) => (e) => {
    setOpen(false)
    // On the home page, let the native anchor + scroll-padding-top handle it.
    if (pathname === '/') return
    // From another route, go home first, then scroll to the section.
    e.preventDefault()
    navigate('/')
    setTimeout(() => {
      const el = document.querySelector(hash)
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    }, 90)
  }

  return (
    <>
      <header ref={nav} className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
        <div className="nav__inner container">
          <Link to="/" className="nav__brand" aria-label="NeoPulse home">
            <span className="nav__mark">
              <Pulse size={19} />
            </span>
            <span className="nav__wordmark">
              Neo<span className="grad-cool">Pulse</span>
            </span>
          </Link>

          <nav className="nav__links" aria-label="Primary">
            {LINKS.map((l) => (
              <a key={l.id} href={l.id} className="nav__link" onClick={go(l.id)}>
                {l.label}
              </a>
            ))}
          </nav>

          <a
            className="btn nav__cta"
            href={CHANNEL.subscribeUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <YouTube size={17} /> Subscribe
          </a>

          <a
            className="nav__logo"
            href={CHANNEL.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${CHANNEL.name} on YouTube`}
          >
            <img src="/mdneotalks-logo.jpg" alt={`${CHANNEL.name} logo`} width="46" height="46" />
          </a>

          <button
            className={`nav__burger ${open ? 'is-open' : ''}`}
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            <span />
            <span />
          </button>
        </div>
      </header>

      <div className={`nav__mobile ${open ? 'is-open' : ''}`}>
        {LINKS.map((l) => (
          <a key={l.id} href={l.id} onClick={go(l.id)}>
            {l.label}
          </a>
        ))}
        <a
          className="btn nav__mobile-cta"
          href={CHANNEL.subscribeUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setOpen(false)}
        >
          <YouTube size={18} /> Subscribe on YouTube
        </a>
      </div>
    </>
  )
}
