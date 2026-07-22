import { useCallback, useEffect, useRef, useState } from 'react'
import { fetchLiveHeadlines, timeAgo } from '../lib/liveNews'
import { ArrowUpRight, Refresh } from './Icons'
import './LiveHeadlines.css'

const ACCENTS = [
  ['#10b981', '#e3f9f0'],
  ['#2e90fa', '#e2effe'],
  ['#7c5cff', '#ece7ff'],
  ['#f59e0b', '#fdf1d6'],
  ['#ff5a63', '#ffe9ea'],
  ['#f45fb4', '#ffe8f5'],
]
const REFRESH_MS = 8 * 60 * 1000

export default function LiveHeadlines({
  topic = 'health medicine',
  limit = 6,
  variant = 'cards', // 'cards' | 'list'
  offlineNote,
}) {
  const [items, setItems] = useState([])
  const [status, setStatus] = useState('loading') // loading | live | offline
  const [fetchedAt, setFetchedAt] = useState(null)
  const [refreshing, setRefreshing] = useState(false)
  const alive = useRef(true)
  const ctrl = useRef(null)

  const load = useCallback(async () => {
    ctrl.current?.abort()
    ctrl.current = new AbortController()
    setRefreshing(true)
    const res = await fetchLiveHeadlines(topic, { signal: ctrl.current.signal })
    if (!alive.current) return
    setRefreshing(false)
    if (res.ok && res.items.length) {
      setItems(res.items.slice(0, limit))
      setFetchedAt(res.fetchedAt)
      setStatus('live')
    } else {
      setStatus((prev) => (prev === 'live' ? 'live' : 'offline'))
    }
  }, [topic, limit])

  useEffect(() => {
    alive.current = true
    load()
    const id = setInterval(load, REFRESH_MS)
    const onFocus = () => load()
    window.addEventListener('focus', onFocus)
    return () => {
      alive.current = false
      ctrl.current?.abort()
      clearInterval(id)
      window.removeEventListener('focus', onFocus)
    }
  }, [load])

  const isList = variant === 'list'

  if (status === 'loading') {
    return (
      <div className={`live__skeletons ${isList ? 'live__skeletons--list' : ''}`} aria-busy="true">
        {Array.from({ length: isList ? Math.min(limit, 5) : limit }).map((_, i) => (
          <div className="live__skeleton" key={i} style={{ '--i': i }} />
        ))}
      </div>
    )
  }

  if (status === 'offline') {
    return (
      <p className="live__offline">
        {offlineNote ||
          'Live headlines appear here once the site is deployed — explore the trusted feeds below in the meantime.'}
      </p>
    )
  }

  const bar = (
    <div className={`live__bar ${isList ? 'live__bar--list' : ''}`}>
      {!isList && (
        <span className="live__status">
          <span className="live__dot" aria-hidden="true" />
          Live
        </span>
      )}
      <span className="live__updated">
        {fetchedAt ? `Updated ${timeAgo(fetchedAt)}` : 'Updates automatically'}
      </span>
      <button
        className={`live__refresh ${refreshing ? 'is-spinning' : ''}`}
        onClick={load}
        aria-label="Refresh headlines"
        title="Refresh"
      >
        <Refresh size={15} />
      </button>
    </div>
  )

  if (isList) {
    return (
      <div className="live live--list">
        {bar}
        <div className="live__rows">
          {items.map((h, i) => {
            const [accent] = ACCENTS[i % ACCENTS.length]
            return (
              <a
                key={i}
                className="live__row"
                style={{ '--accent': accent, '--i': i }}
                href={h.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="live__row-dot" aria-hidden="true" />
                <span className="live__row-body">
                  <span className="live__row-headline">{h.title}</span>
                  <span className="live__row-meta">
                    {h.source || 'News'}
                    {h.pubDate && <span className="live__row-ago"> · {timeAgo(h.pubDate)}</span>}
                  </span>
                </span>
                <ArrowUpRight size={14} className="live__row-arrow" />
              </a>
            )
          })}
        </div>
      </div>
    )
  }

  return (
    <div className="live">
      {bar}
      <div className="live__grid">
        {items.map((h, i) => {
          const [accent, soft] = ACCENTS[i % ACCENTS.length]
          return (
            <a
              key={i}
              className="live__card"
              style={{ '--accent': accent, '--accent-soft': soft, '--i': i }}
              href={h.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="live__card-top">
                <span className="live__src">{h.source || 'News'}</span>
                {h.pubDate && <span className="live__ago">{timeAgo(h.pubDate)}</span>}
              </span>
              <span className="live__headline">{h.title}</span>
              <span className="live__read">
                Read <ArrowUpRight size={13} />
              </span>
            </a>
          )
        })}
      </div>
    </div>
  )
}
