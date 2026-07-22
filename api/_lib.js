// Shared core for the live health-news feed.
// Fetches Google News' free RSS feed (no API key required) and parses it into
// JSON. Runs on Node 18+ (global fetch). Used by the Vercel function, the
// Netlify function, and the Vite dev middleware.

const decodeEntities = (s = '') =>
  s
    .replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, '$1')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&apos;|&rsquo;|&#0*39;/g, "'")
    .replace(/&#x?[0-9a-f]+;/gi, (m) => {
      const isHex = /x/i.test(m)
      const code = parseInt(m.replace(/[^0-9a-f]/gi, ''), isHex ? 16 : 10)
      return Number.isFinite(code) ? String.fromCharCode(code) : ''
    })
    .replace(/\s+/g, ' ')
    .trim()

function parseRss(xml, limit) {
  const items = []
  const itemRe = /<item>([\s\S]*?)<\/item>/g
  let m
  while ((m = itemRe.exec(xml)) && items.length < limit) {
    const block = m[1]
    const pick = (tag) => {
      const r = new RegExp(`<${tag}(?:\\s[^>]*)?>([\\s\\S]*?)<\\/${tag}>`, 'i')
      const x = block.match(r)
      return x ? decodeEntities(x[1]) : ''
    }
    let title = pick('title')
    const link = pick('link')
    const pubDate = pick('pubDate')
    const source = pick('source')
    // Google News appends " - Source" to titles; strip it since we show source separately.
    if (source && title.endsWith(' - ' + source)) {
      title = title.slice(0, title.length - (source.length + 3)).trim()
    }
    if (title && link) {
      const iso = pubDate ? new Date(pubDate).toISOString() : null
      items.push({ title, link, source, pubDate: iso })
    }
  }
  return items
}

export async function getHealthNews(topic = 'health medicine', limit = 8) {
  const q = String(topic || 'health').slice(0, 150) || 'health'
  const url = `https://news.google.com/rss/search?q=${encodeURIComponent(
    q,
  )}&hl=en-US&gl=US&ceid=US:en`

  const res = await fetch(url, {
    headers: {
      'User-Agent':
        'Mozilla/5.0 (compatible; MDNeoTalks-News/1.0; +https://www.youtube.com/@MDNeoTalks)',
      Accept: 'application/rss+xml, application/xml, text/xml;q=0.9, */*;q=0.8',
    },
  })
  if (!res.ok) throw new Error(`Google News responded ${res.status}`)

  const xml = await res.text()
  return {
    topic: q,
    items: parseRss(xml, limit),
    fetchedAt: new Date().toISOString(),
  }
}
