import { Link } from 'react-router-dom'
import { POSTS, postsByViews, numViews, formatDate } from '../data/posts'
import { CATEGORIES, CHANNEL } from '../data/videos'
import ArticleCard from './ArticleCard'
import { Flame, ArrowRight, Clock, Play } from './Icons'
import './Articles.css'

const fmtViews = (v) => {
  const n = numViews(v)
  return n >= 1000 ? (n / 1000).toFixed(n % 1000 === 0 ? 0 : 1) + 'k' : String(n)
}

export default function Articles() {
  const ranked = postsByViews(POSTS)
  const spotlight = ranked[0]
  const runnersUp = ranked.slice(1, 4)

  const groups = CATEGORIES.map((c) => ({
    ...c,
    posts: postsByViews(POSTS.filter((p) => p.category === c.id)),
  })).filter((g) => g.posts.length)

  return (
    <section className="lib section" id="articles">
      <div className="container">
        <div className="section-head">
          <div className="section-head__text">
            <span className="eyebrow reveal">The library</span>
            <h2 className="section-title reveal">Explore health topics</h2>
            <p className="lede reveal">
              Every episode, written up and sorted into clear topics — with the
              most-watched right at the top. Jump to what’s on your mind.
            </p>
          </div>
          <a className="arrow-link reveal" href={CHANNEL.videosUrl} target="_blank" rel="noopener noreferrer">
            Watch on YouTube <ArrowRight size={16} />
          </a>
        </div>

        {/* Topic jump nav */}
        <nav className="lib-nav reveal" aria-label="Jump to topic">
          {groups.map((g) => (
            <a key={g.id} href={`#topic-${g.id}`} className="lib-nav__pill" style={{ '--cat': g.accent, '--cat-soft': g.soft }}>
              <span className="lib-nav__emoji">{g.emoji}</span>
              {g.label}
              <span className="lib-nav__count">{g.posts.length}</span>
            </a>
          ))}
        </nav>

        {/* Most watched spotlight */}
        <div className="lib-spot reveal">
          <span className="lib-spot__label">
            <Flame size={14} /> Most watched
          </span>
          <div className="lib-spot__grid">
            <Link
              to={`/article/${spotlight.slug}`}
              className="lib-spot__main"
              style={{ '--cat': spotlight.accent, '--cat-soft': spotlight.soft }}
            >
              <div className="lib-spot__media">
                <img src={spotlight.thumbHq} alt="" onError={(e) => { e.currentTarget.src = spotlight.thumb }} />
                <span className="lib-spot__rank">#1 Most watched</span>
                <span className="lib-spot__play"><Play size={22} /></span>
                <span className="lib-spot__views">{fmtViews(spotlight.views)} views</span>
              </div>
              <div className="lib-spot__body">
                <span className="tag" style={{ '--cat': spotlight.accent, '--cat-soft': spotlight.soft }}>
                  {spotlight.emoji} {spotlight.categoryLabel}
                </span>
                <h3 className="lib-spot__title">{spotlight.title}</h3>
                <p className="lib-spot__excerpt">{spotlight.excerpt}</p>
                <span className="lib-spot__meta">
                  {formatDate(spotlight.date)} · <Clock size={13} /> {spotlight.readTime} min read
                </span>
              </div>
            </Link>

            <ol className="lib-spot__list">
              {runnersUp.map((p, i) => (
                <li key={p.slug}>
                  <Link to={`/article/${p.slug}`} className="lib-rank" style={{ '--cat': p.accent }}>
                    <span className="lib-rank__n">{i + 2}</span>
                    <span className="lib-rank__thumb">
                      <img src={p.thumb} alt="" loading="lazy" />
                    </span>
                    <span className="lib-rank__text">
                      <strong>{p.title}</strong>
                      <span className="lib-rank__meta">{fmtViews(p.views)} views · {p.readTime} min</span>
                    </span>
                  </Link>
                </li>
              ))}
            </ol>
          </div>
        </div>

        {/* Topic sections */}
        {groups.map((g) => (
          <div className="lib-topic" id={`topic-${g.id}`} key={g.id} style={{ '--cat': g.accent, '--cat-soft': g.soft }}>
            <div className="lib-topic__head reveal">
              <span className="lib-topic__badge">{g.emoji}</span>
              <div className="lib-topic__title">
                <h3>{g.label}</h3>
                <p>{g.blurb}</p>
              </div>
              <span className="lib-topic__count">{g.posts.length} {g.posts.length === 1 ? 'video' : 'videos'}</span>
            </div>
            <div className="lib-topic__grid">
              {g.posts.map((p) => (
                <ArticleCard key={p.slug} post={p} size="tile" className="reveal" />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
