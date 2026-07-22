// Client helper for the live health-news feed served by /api/news.

export async function fetchLiveHeadlines(topic, opts = {}) {
  try {
    const res = await fetch(
      `/api/news?topic=${encodeURIComponent(topic || 'health medicine')}`,
      { signal: opts.signal },
    )
    if (!res.ok) return { items: [], ok: false }
    const data = await res.json()
    const items = Array.isArray(data.items) ? data.items : []
    return { items, ok: data.ok !== false && items.length > 0, fetchedAt: data.fetchedAt }
  } catch {
    return { items: [], ok: false }
  }
}

export function timeAgo(iso) {
  if (!iso) return ''
  const then = new Date(iso).getTime()
  if (!Number.isFinite(then)) return ''
  const s = Math.max(0, Math.floor((Date.now() - then) / 1000))
  if (s < 60) return 'just now'
  const m = Math.floor(s / 60)
  if (m < 60) return `${m}m ago`
  const h = Math.floor(m / 60)
  if (h < 24) return `${h}h ago`
  const d = Math.floor(h / 24)
  return d < 7 ? `${d}d ago` : new Date(then).toLocaleDateString()
}
