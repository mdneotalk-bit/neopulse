import { Link } from 'react-router-dom'
import { CHANNEL } from '../data/videos'
import { POSTS, formatDate } from '../data/posts'
import { prefersReducedMotion } from '../lib/gsap'
import {
  ArrowRight, YouTube, Clock, Flame,
  Heart, HeartPulse, Apple, Pill, Droplet, Stethoscope, Lungs, Brain, Dna,
} from './Icons'
import './Hero.css'

// One shared ECG trace: three calm resting beats on wide flat baselines.
const ECG_PATH =
  'M0,50 H120 Q138,40 156,50 H176 L184,57 L192,16 L200,84 L210,50 H230 Q255,39 280,50 H520 ' +
  'Q538,40 556,50 H576 L584,57 L592,16 L600,84 L610,50 H630 Q655,39 680,50 H920 ' +
  'Q938,40 956,50 H976 L984,57 L992,16 L1000,84 L1010,50 H1030 Q1055,39 1080,50 H1200'

// Floating medical-icon chips that ring the centred stage (all in the gutters).
const FLOATERS = [
  { C: Heart, cls: 'f1', accent: 'var(--coral)', tint: 'var(--coral-soft)', sz: 52, dur: 6.5, delay: 0, rot: -3, rot2: 3 },
  { C: Apple, cls: 'f2', accent: 'var(--emerald)', tint: 'var(--emerald-soft)', sz: 48, dur: 8, delay: -2.4, rot: 4, rot2: -3 },
  { C: Pill, cls: 'f3', accent: 'var(--amber)', tint: 'var(--amber-soft)', sz: 50, dur: 7.2, delay: -1.6, rot: -5, rot2: 2 },
  { C: Droplet, cls: 'f4', accent: 'var(--blue)', tint: 'var(--blue-soft)', sz: 44, dur: 9, delay: -3.2, rot: 3, rot2: -4 },
  { C: Stethoscope, cls: 'f5', accent: 'var(--blue)', tint: 'var(--blue-soft)', sz: 52, dur: 7.5, delay: -1.2, rot: -2, rot2: 4 },
  { C: Lungs, cls: 'f6', accent: 'var(--violet)', tint: 'var(--violet-soft)', sz: 44, dur: 8.5, delay: -4, rot: 5, rot2: -2 },
  { C: Brain, cls: 'f7', accent: 'var(--violet)', tint: 'var(--violet-soft)', sz: 50, dur: 6.8, delay: -2, rot: -4, rot2: 3 },
  { C: Dna, cls: 'f8', accent: 'var(--pink)', tint: 'var(--pink-soft)', sz: 48, dur: 7.8, delay: -0.8, rot: 3, rot2: -5 },
]

const COARSE =
  typeof window !== 'undefined' && !!window.matchMedia && window.matchMedia('(pointer: coarse)').matches

export default function Hero() {
  const feature = POSTS.find((p) => p.featured) || POSTS[0]
  const trending = POSTS.filter((p) => p.slug !== feature.slug).slice(0, 3)

  // Optional pointer-parallax — event-driven (no rAF / no IntersectionObserver),
  // disabled for reduced motion & coarse pointers, resets on leave.
  const onMove = (e) => {
    if (prefersReducedMotion || COARSE) return
    const r = e.currentTarget.getBoundingClientRect()
    const s = e.currentTarget.style
    s.setProperty('--mx', ((e.clientX - r.left) / r.width - 0.5).toFixed(3))
    s.setProperty('--my', ((e.clientY - r.top) / r.height - 0.5).toFixed(3))
  }
  const onLeave = (e) => {
    e.currentTarget.style.setProperty('--mx', '0')
    e.currentTarget.style.setProperty('--my', '0')
  }

  return (
    <section className="hero" id="top" onPointerMove={onMove} onPointerLeave={onLeave}>
      <span className="blob hero__blob--1" style={{ background: '#c9f7e5', width: 320, height: 320, top: -60, left: -40 }} />
      <span className="blob hero__blob--2" style={{ background: '#e4dcff', width: 300, height: 300, top: 40, right: -60 }} />

      <div className="hero__icons" aria-hidden="true">
        {FLOATERS.map((f) => (
          <span key={f.cls} className={`hero__icon ${f.cls}`}>
            <span
              className="hero__icon-chip"
              style={{
                '--sz': `${f.sz}px`,
                '--tint': f.tint,
                '--accent': f.accent,
                '--dur': `${f.dur}s`,
                '--delay': `${f.delay}s`,
                '--rot': `${f.rot}deg`,
                '--rot2': `${f.rot2}deg`,
              }}
            >
              <f.C size={Math.round(f.sz * 0.46)} />
            </span>
          </span>
        ))}
      </div>

      <div className="container hero__inner">
        <div className="hero__stage">
          <div className="hero__brand reveal">
            <span className="hero__brand-mark">
              <span className="hero__brand-dot" />
              <span className="hero__wordmark">
                Neo<span className="grad-cool">Pulse</span>
              </span>
            </span>
            <span className="hero__brand-sub">
              <HeartPulse size={16} className="hero__brand-sub-icon" />
              <strong>{CHANNEL.name}</strong>
              <span className="hero__brand-sep">·</span>
              Doctor in Training
            </span>
          </div>

          <h1 className="hero__title display reveal" style={{ transitionDelay: '.07s' }}>
            Your body, <span className="hero__ink">made clear</span>.
          </h1>

          <svg
            className="hero__ecg reveal"
            style={{ transitionDelay: '.14s' }}
            viewBox="0 0 1200 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <defs>
              <linearGradient id="ecgGrad" gradientUnits="userSpaceOnUse" x1="0" y1="0" x2="1200" y2="0">
                <stop offset="0" stopColor="#ff5a63" />
                <stop offset="0.28" stopColor="#10b981" />
                <stop offset="0.64" stopColor="#2e90fa" />
                <stop offset="1" stopColor="#7c5cff" />
              </linearGradient>
            </defs>
            <path className="ecg__ghost" d={ECG_PATH} />
            <path className="ecg__line" d={ECG_PATH} pathLength="100" />
            <path className="ecg__spark" d={ECG_PATH} pathLength="100" />
          </svg>

          <p className="hero__lede reveal" style={{ transitionDelay: '.2s' }}>
            Real health, explained simply.
          </p>

          <div className="hero__actions reveal" style={{ transitionDelay: '.26s' }}>
            <a className="btn" href="#articles">
              Read the latest <ArrowRight size={17} className="btn__icon" />
            </a>
            <a className="btn btn--ghost" href={CHANNEL.subscribeUrl} target="_blank" rel="noopener noreferrer">
              <YouTube size={17} /> Subscribe
            </a>
          </div>
        </div>

        <div className="hero__band reveal" style={{ transitionDelay: '.32s' }}>
          <Link
            to={`/article/${feature.slug}`}
            className="hero__feature"
            style={{ '--cat': feature.accent, '--cat-soft': feature.soft }}
          >
            <div className="hero__feature-media">
              <img
                src={feature.thumbHq}
                alt=""
                className="hero__feature-img"
                onError={(e) => { e.currentTarget.src = feature.thumb }}
              />
              <span className="hero__feature-badge">Featured</span>
            </div>
            <div className="hero__feature-body">
              <span className="tag" style={{ '--cat': feature.accent, '--cat-soft': feature.soft }}>
                {feature.emoji} {feature.categoryLabel}
              </span>
              <h2 className="hero__feature-title">{feature.title}</h2>
              <p className="hero__feature-excerpt">{feature.excerpt}</p>
              <div className="hero__feature-meta">
                <span>{formatDate(feature.date)}</span>
                <span className="hero__feature-read"><Clock size={13} /> {feature.readTime} min</span>
              </div>
            </div>
          </Link>

          <div className="hero__trend">
            <span className="hero__trend-label"><Flame size={13} /> Trending now</span>
            <div className="hero__trend-list">
              {trending.map((p, i) => (
                <Link key={p.slug} to={`/article/${p.slug}`} className="hero__trend-item">
                  <span className="hero__trend-n" style={{ color: p.accent }}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="hero__trend-text">{p.title}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
