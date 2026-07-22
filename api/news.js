// Vercel serverless function → GET /api/news?topic=...
// Returns live health headlines as JSON. Cached at the edge so it stays fast
// and fresh without hammering the source.

import { getHealthNews } from './_lib.js'

export default async function handler(req, res) {
  const topic =
    (req.query && (req.query.topic || req.query.q)) || 'health medicine'
  try {
    const data = await getHealthNews(String(topic), 8)
    // Edge cache 15 min, serve stale up to 1h while revalidating in the background.
    res.setHeader('Cache-Control', 's-maxage=900, stale-while-revalidate=3600')
    res.status(200).json({ ...data, ok: true })
  } catch (e) {
    res.status(200).json({ topic: String(topic), items: [], ok: false, error: String(e.message || e) })
  }
}
