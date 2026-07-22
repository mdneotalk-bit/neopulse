// Netlify function → GET /api/news?topic=...  (via redirect in netlify.toml)
import { getHealthNews } from '../../api/_lib.js'

export const handler = async (event) => {
  const topic =
    (event.queryStringParameters && event.queryStringParameters.topic) ||
    'health medicine'
  try {
    const data = await getHealthNews(String(topic), 8)
    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 's-maxage=900, stale-while-revalidate=3600',
      },
      body: JSON.stringify({ ...data, ok: true }),
    }
  } catch (e) {
    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ topic: String(topic), items: [], ok: false, error: String(e.message || e) }),
    }
  }
}
