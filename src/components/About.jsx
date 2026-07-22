import { useState } from 'react'
import { CHANNEL, categoryMeta } from '../data/videos'
import { POSTS } from '../data/posts'
import { Pulse, YouTube, Play } from './Icons'
import SocialLinks from './SocialLinks'
import './About.css'

const JOURNEY = [
  { flag: '🇳🇬', country: 'Nigeria', region: 'Africa' },
  { flag: '🇮🇳', country: 'India', region: 'Asia' },
  { flag: '🇮🇹', country: 'Italy', region: 'Europe' },
  { flag: '🇵🇱', country: 'Poland', region: 'Now', now: true },
]

const CREDS = [
  'Doctor in Training',
  'Medical Laboratory Science & Technology',
  'CM UMK Bydgoszcz, Poland',
]

// Drop your photo in as `public/about-portrait.jpg`.
function Portrait() {
  const [ok, setOk] = useState(true)
  if (!ok) {
    return (
      <span className="about__photo-fallback" aria-hidden="true">
        <Pulse size={44} />
      </span>
    )
  }
  return (
    <img
      className="about__photo-img"
      src="/about-portrait.jpg"
      alt="Sunmbola Matthew Neo Oladimeji, host of MD-Neo Talks"
      onError={() => setOk(false)}
    />
  )
}

export default function About() {
  const clips = POSTS.slice(0, 3)

  return (
    <section className="about section" id="about">
      <div className="container about__grid">
        {/* Profile card */}
        <aside className="about__profile reveal">
          <div className="about__photo">
            <span className="about__photo-ring" aria-hidden="true" />
            <Portrait />
          </div>
          <div className="about__nameplate">
            <strong>Sunmbola Matthew Neo Oluwagbenga Oladimeji</strong>
            <span className="about__role">Doctor in Training</span>
            <span className="about__inst">CM UMK Bydgoszcz · Poland</span>
          </div>

          <SocialLinks className="about__socials" variant="light" />

          <div className="about__watch">
            <span className="about__watch-label">
              <Play size={12} /> Prefer to watch?
            </span>
            {clips.map((p) => {
              const cat = categoryMeta(p.category)
              return (
                <a
                  key={p.slug}
                  className="about__clip"
                  href={p.watch}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ '--cat': cat.accent }}
                >
                  <span className="about__clip-thumb">
                    <img src={p.thumb} alt="" loading="lazy" />
                    <span className="about__clip-play">
                      <Play size={12} />
                    </span>
                  </span>
                  <span className="about__clip-title">{p.title}</span>
                </a>
              )
            })}
          </div>
        </aside>

        {/* Story */}
        <div className="about__text">
          <span className="eyebrow reveal">Meet the host</span>
          <h2 className="section-title reveal">
            Bridging medical science{' '}
            <span className="about__hl">and everyday life.</span>
          </h2>

          <p className="lede reveal">
            My name is Sunmbola Matthew Neo Oluwagbenga Oladimeji, and I’m a
            Doctor in Training at CM UMK Bydgoszcz, Poland — with a passion for
            medicine, health education, and making medical knowledge easier to
            understand.
          </p>

          {/* Journey across continents */}
          <div className="about__journey reveal">
            <span className="about__journey-label">
              🌍 A journey across three continents
            </span>
            <div className="about__journey-track">
              {JOURNEY.map((j, i) => (
                <div className="about__stop-wrap" key={j.country}>
                  <div className={`about__stop ${j.now ? 'is-now' : ''}`}>
                    <span className="about__stop-flag">{j.flag}</span>
                    <span className="about__stop-info">
                      <strong>{j.country}</strong>
                      <span>{j.region}</span>
                    </span>
                  </div>
                  {i < JOURNEY.length - 1 && <span className="about__stop-line" />}
                </div>
              ))}
            </div>
          </div>

          <p className="about__para reveal">
            With a background in Medical Laboratory Science and Technology, I
            built a strong foundation in understanding diseases, diagnostics,
            and the science behind human health. As I continue my medical
            training, I stay committed to learning, growing, and sharing
            valuable health knowledge with others.
          </p>

          <p className="about__para reveal">
            Through MD-Neo Talks, I simplify medical topics, explain health
            conditions clearly, and help people make informed decisions about
            their wellbeing.
          </p>

          <blockquote className="about__mission reveal">
            My mission is to bridge the gap between medical science and everyday
            people — through accessible and reliable health education.
          </blockquote>

          <div className="about__creds reveal">
            {CREDS.map((c) => (
              <span className="about__cred" key={c}>
                {c}
              </span>
            ))}
          </div>

          <div className="about__stats reveal">
            <div className="about__stat">
              <strong>{CHANNEL.videoCount}</strong>
              <span>videos &amp; articles</span>
            </div>
            <div className="about__stat">
              <strong>{CHANNEL.subscribers}+</strong>
              <span>subscribers</span>
            </div>
            <div className="about__stat">
              <strong>3</strong>
              <span>continents of training</span>
            </div>
          </div>

          <div className="about__foot reveal">
            <a
              className="btn about__cta"
              href={CHANNEL.subscribeUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <YouTube size={18} /> Subscribe on YouTube
            </a>
            <p className="about__signature">
              — Sunmbola Matthew Neo Oluwagbenga Oladimeji
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
