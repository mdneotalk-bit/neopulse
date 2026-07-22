import { TIPS } from '../data/tips'
import './Tips.css'

export default function Tips() {
  return (
    <section className="tips section" id="tips">
      <div className="container">
        <div className="section-head">
          <div className="section-head__text">
            <span className="eyebrow reveal" style={{ color: 'var(--violet)' }}>
              Quick medical tips
            </span>
            <h2 className="section-title reveal">Small habits, big payoff</h2>
            <p className="lede reveal">
              Six things you can start today. Simple, science-backed, and easy to
              remember.
            </p>
          </div>
        </div>

        <div className="tips__grid">
          {TIPS.map((t) => (
            <article
              className="tip reveal"
              key={t.id}
              style={{ '--tip': t.color, '--tip-soft': t.soft }}
            >
              <span className="tip__emoji">{t.emoji}</span>
              <h3 className="tip__title">{t.title}</h3>
              <p className="tip__text">{t.text}</p>
              <span className="tip__corner" />
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
