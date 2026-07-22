import { Link } from 'react-router-dom'
import { formatDate } from '../data/posts'
import { Clock, ArrowUpRight } from './Icons'
import './ArticleCard.css'

export default function ArticleCard({ post, size = 'md', className = '' }) {
  return (
    <Link
      to={`/article/${post.slug}`}
      className={`acard acard--${size} ${className}`}
      style={{ '--cat': post.accent, '--cat-soft': post.soft }}
    >
      <div className="acard__media">
        <img
          src={
            size === 'tile'
              ? `https://img.youtube.com/vi/${post.id}/mqdefault.jpg` // 16:9, no black bars — full thumbnail
              : post.thumb
          }
          alt=""
          loading="lazy"
          className="acard__img"
        />
        <span className="acard__cat tag" style={{ '--cat': post.accent, '--cat-soft': post.soft }}>
          {post.emoji} {post.categoryLabel}
        </span>
        <span className="acard__go">
          <ArrowUpRight size={18} />
        </span>
      </div>
      <div className="acard__body">
        <h3 className="acard__title">{post.title}</h3>
        {size !== 'sm' && size !== 'tile' && <p className="acard__excerpt">{post.excerpt}</p>}
        <div className="acard__meta">
          <span>{formatDate(post.date)}</span>
          <span className="acard__meta-dot" />
          <span className="acard__read">
            <Clock size={13} /> {post.readTime} min
          </span>
        </div>
      </div>
    </Link>
  )
}
