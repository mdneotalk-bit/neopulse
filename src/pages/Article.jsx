import { useEffect, useRef } from 'react'
import { useParams, Link } from 'react-router-dom'
import { postBySlug, relatedPosts, formatDate, AUTHOR } from '../data/posts'
import { CHANNEL } from '../data/videos'
import ArticleCard from '../components/ArticleCard'
import { Clock, YouTube, ArrowRight, Check } from '../components/Icons'
import './Article.css'

export default function Article() {
  const { slug } = useParams()
  const post = postBySlug(slug)
  const progress = useRef(null)

  // Reading-progress bar driven by a plain scroll listener (robust, no rAF loop).
  useEffect(() => {
    const onScroll = () => {
      if (!progress.current) return
      const h = document.documentElement.scrollHeight - window.innerHeight
      const p = h > 0 ? Math.min(1, window.scrollY / h) : 0
      progress.current.style.transform = `scaleX(${p})`
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [slug])

  if (!post) {
    return (
      <div className="article__missing container">
        <h1>Article not found</h1>
        <Link className="btn" to="/">
          Back to the blog
        </Link>
      </div>
    )
  }

  const related = relatedPosts(post, 3)

  return (
    <article className="article" style={{ '--cat': post.accent, '--cat-soft': post.soft }}>
      <span className="article__progress" ref={progress} aria-hidden="true" />

      <div className="article__head container">
        <nav className="article__crumbs reveal">
          <Link to="/">Home</Link>
          <span>/</span>
          <Link to="/#articles">Articles</Link>
          <span>/</span>
          <em>{post.categoryLabel}</em>
        </nav>

        <span className="tag reveal" style={{ '--cat': post.accent, '--cat-soft': post.soft }}>
          {post.emoji} {post.categoryLabel}
        </span>

        <h1 className="article__title reveal">{post.title}</h1>

        <div className="article__byline reveal">
          <span className="article__avatar">{post.emoji}</span>
          <div className="article__byline-text">
            <strong>{AUTHOR.name}</strong>
            <span>{AUTHOR.role}</span>
          </div>
          <span className="article__byline-sep" />
          <span className="article__date">{formatDate(post.date)}</span>
          <span className="article__read">
            <Clock size={14} /> {post.readTime} min read
          </span>
        </div>
      </div>

      <div className="article__hero reveal container">
        <img src={post.thumbHq} alt="" onError={(e) => { e.currentTarget.src = post.thumb }} />
      </div>

      <div className="article__body container">
        <p className="article__lead">{post.lead}</p>

        {/* Embedded video */}
        <div className="article__video">
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${post.id}`}
            title={post.title}
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>

        {post.takeaways && (
          <div className="article__takeaways">
            <h2>Key takeaways</h2>
            <ul>
              {post.takeaways.map((t, i) => (
                <li key={i}>
                  <span className="article__check"><Check size={14} /></span>
                  {t}
                </li>
              ))}
            </ul>
          </div>
        )}

        {post.sections?.map((s, i) => (
          <section className="article__section" key={i}>
            <h2>{s.h}</h2>
            {s.p && <p>{s.p}</p>}
            {s.list && (
              <ul className="article__list">
                {s.list.map((li, j) => (
                  <li key={j}>{li}</li>
                ))}
              </ul>
            )}
          </section>
        ))}

        {post.seeDoctor && (
          <aside className="article__callout">
            <strong>When to see a doctor</strong>
            <p>{post.seeDoctor}</p>
          </aside>
        )}

        {post.bottomLine && (
          <div className="article__bottomline">
            <span className="article__bottomline-label">The bottom line</span>
            <p>{post.bottomLine}</p>
          </div>
        )}

        <div className="article__watch">
          <div>
            <strong>Watch the full episode</strong>
            <p>See this topic explained in full on the channel.</p>
          </div>
          <a className="btn" href={post.watch} target="_blank" rel="noopener noreferrer">
            <YouTube size={18} /> Watch on YouTube
          </a>
        </div>

        <p className="article__disclaimer">
          This article is general health education, not medical advice. Always
          consult a qualified healthcare professional about your own health.
        </p>
      </div>

      {related.length > 0 && (
        <div className="article__related container">
          <div className="article__related-head">
            <h2 className="section-title">Keep reading</h2>
            <Link className="arrow-link" to="/#articles">
              All articles <ArrowRight size={16} />
            </Link>
          </div>
          <div className="article__related-grid">
            {related.map((p) => (
              <ArticleCard key={p.slug} post={p} />
            ))}
          </div>
        </div>
      )}
    </article>
  )
}
