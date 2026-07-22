import { useEffect, useRef } from 'react'
import { useParams, Link } from 'react-router-dom'
import { newsBySlug, relatedNews, formatNewsDate, googleNewsUrl } from '../data/news'
import { categoryMeta } from '../data/videos'
import { Clock, ArrowRight, ArrowUpRight, Flame } from '../components/Icons'
import LiveHeadlines from '../components/LiveHeadlines'
import './Article.css'
import './NewsArticle.css'

export default function NewsArticle() {
  const { slug } = useParams()
  const item = newsBySlug(slug)
  const progress = useRef(null)

  useEffect(() => {
    const onScroll = () => {
      if (!progress.current) return
      const h = document.documentElement.scrollHeight - window.innerHeight
      progress.current.style.transform = `scaleX(${h > 0 ? Math.min(1, window.scrollY / h) : 0})`
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [slug])

  if (!item) {
    return (
      <div className="article__missing container">
        <h1>Article not found</h1>
        <Link className="btn" to="/">Back home</Link>
      </div>
    )
  }

  const cat = categoryMeta(item.category)
  const related = relatedNews(item, 3)

  return (
    <article className="article" style={{ '--cat': cat.accent, '--cat-soft': cat.soft }}>
      <span className="article__progress" ref={progress} aria-hidden="true" />

      <div className="article__head container">
        <nav className="article__crumbs reveal">
          <Link to="/">Home</Link>
          <span>/</span>
          <Link to="/#news">Health News</Link>
          <span>/</span>
          <em>{item.kind}</em>
        </nav>

        <span className="newsart__kind reveal">
          {item.hot && <Flame size={13} />} {item.kind}
        </span>

        <h1 className="article__title reveal">{item.headline}</h1>

        <div className="article__byline reveal">
          <span className="article__avatar">{cat.emoji}</span>
          <div className="article__byline-text">
            <strong>{item.source}</strong>
            <span>Health News &amp; Insights</span>
          </div>
          <span className="article__byline-sep" />
          <span className="article__date">{formatNewsDate(item.date)}</span>
          <span className="article__read"><Clock size={14} /> {item.readTime} min read</span>
        </div>
      </div>

      <div className="article__body container">
        <p className="article__lead">{item.lead}</p>

        {item.sections?.map((s, i) => (
          <section className="article__section" key={i}>
            <h2>{s.h}</h2>
            {s.p && <p>{s.p}</p>}
            {s.list && (
              <ul className="article__list">
                {s.list.map((li, j) => <li key={j}>{li}</li>)}
              </ul>
            )}
          </section>
        ))}

        {/* Live headlines on this topic */}
        <div className="newsart__live">
          <div className="newsart__live-head">
            <span className="newsart__live-badge"><Flame size={14} /> Live</span>
            <div>
              <strong>Latest headlines on this topic</strong>
              <p>Real-world coverage, pulled live and refreshed automatically.</p>
            </div>
          </div>

          <LiveHeadlines topic={item.topic} limit={5} />

          <div className="newsart__live-links">
            <a className="btn" href={googleNewsUrl(item.topic)} target="_blank" rel="noopener noreferrer">
              Google News <ArrowUpRight size={16} />
            </a>
            <a className="btn btn--ghost" href="https://www.who.int/news" target="_blank" rel="noopener noreferrer">
              WHO News <ArrowUpRight size={15} />
            </a>
            <a className="btn btn--ghost" href="https://www.cdc.gov/media/index.html" target="_blank" rel="noopener noreferrer">
              CDC Newsroom <ArrowUpRight size={15} />
            </a>
          </div>
        </div>

        <p className="article__disclaimer">
          This is general health education, not medical advice, and not a
          real-time news report. Always consult a qualified healthcare
          professional about your own health.
        </p>
      </div>

      {related.length > 0 && (
        <div className="article__related container">
          <div className="article__related-head">
            <h2 className="section-title">More health news</h2>
            <Link className="arrow-link" to="/#news">All news <ArrowRight size={16} /></Link>
          </div>
          <div className="newsart__related-grid">
            {related.map((n) => {
              const c = categoryMeta(n.category)
              return (
                <Link
                  key={n.slug}
                  to={`/news/${n.slug}`}
                  className="newsart__related-card"
                  style={{ '--cat': c.accent, '--cat-soft': c.soft }}
                >
                  <span className="newsart__related-kind">{n.kind}</span>
                  <h3>{n.headline}</h3>
                  <span className="newsart__related-meta">{formatNewsDate(n.date)} · {n.readTime} min</span>
                </Link>
              )
            })}
          </div>
        </div>
      )}
    </article>
  )
}
