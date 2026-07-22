import { LIVE_SOURCES } from '../data/news'
import LiveHeadlines from './LiveHeadlines'
import './LiveNews.css'

export default function LiveNews() {
  return (
    <section className="livenews section" id="live-news">
      <div className="container">
        <div className="livenews__panel reveal">
          <div className="livenews__intro">
            <span className="livenews__eyebrow">
              <span className="livenews__dot" aria-hidden="true" /> Live
            </span>
            <h2 className="livenews__title">
              The world’s health headlines,{' '}
              <span className="livenews__accent">as they happen</span>
            </h2>
            <p className="livenews__sub">
              Real health &amp; medical news, pulled live from Google News and
              refreshed automatically.
            </p>
            <div className="livenews__foot">
              <span className="livenews__foot-label">Sources</span>
              <div className="livenews__foot-links">
                {LIVE_SOURCES.map((s) => (
                  <a
                    key={s.id}
                    className="livenews__foot-link"
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {s.label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="livenews__feed">
            <LiveHeadlines topic="health medicine" limit={3} variant="list" />
          </div>
        </div>
      </div>
    </section>
  )
}
