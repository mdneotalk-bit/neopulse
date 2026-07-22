import { Link } from 'react-router-dom'
import { NEWS, formatNewsDate } from '../data/news'
import { categoryMeta } from '../data/videos'
import { Flame, ArrowRight, Clock } from './Icons'
import './NewsRow.css'

export default function NewsRow() {
  return (
    <section className="news section" id="news">
      <div className="container">
        <div className="section-head">
          <div className="section-head__text">
            <span className="eyebrow reveal" style={{ color: 'var(--coral)' }}>
              Health Watch
            </span>
            <h2 className="section-title reveal">Health news &amp; insights</h2>
            <p className="lede reveal">
              Clear, evidence-based reads on the health topics that matter — each
              one links straight to live, real-world headlines.
            </p>
          </div>
          <Link className="arrow-link reveal" to={`/news/${NEWS[0].slug}`}>
            Read the latest <ArrowRight size={16} />
          </Link>
        </div>

        <div className="news__grid">
          {NEWS.map((n) => {
            const cat = categoryMeta(n.category)
            return (
              <Link
                key={n.slug}
                to={`/news/${n.slug}`}
                className={`news-card reveal ${n.hot ? 'news-card--hot' : ''}`}
                style={{ '--cat': cat.accent, '--cat-soft': cat.soft }}
              >
                <div className="news-card__top">
                  <span className="news-card__kind">
                    {n.hot && <Flame size={12} />}
                    {n.kind}
                  </span>
                  <span className="news-card__date">{formatNewsDate(n.date)}</span>
                </div>
                <h3 className="news-card__headline">{n.headline}</h3>
                <p className="news-card__summary">{n.summary}</p>
                <div className="news-card__foot">
                  <span className="news-card__read">
                    <Clock size={13} /> {n.readTime} min read
                  </span>
                  <span className="news-card__go">
                    Read <ArrowRight size={14} />
                  </span>
                </div>
              </Link>
            )
          })}
        </div>

      </div>
    </section>
  )
}
