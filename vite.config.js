import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { getHealthNews } from './api/_lib.js'

// Serves /api/news during `npm run dev` so the live feed works locally,
// mirroring the Vercel/Netlify serverless function in production.
function liveNewsDev() {
  return {
    name: 'live-news-dev',
    configureServer(server) {
      server.middlewares.use('/api/news', async (req, res) => {
        res.setHeader('Content-Type', 'application/json')
        try {
          const url = new URL(req.url, 'http://localhost')
          const topic = url.searchParams.get('topic') || 'health medicine'
          const data = await getHealthNews(topic, 8)
          res.end(JSON.stringify({ ...data, ok: true }))
        } catch (e) {
          res.end(JSON.stringify({ items: [], ok: false, error: String(e.message || e) }))
        }
      })
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), liveNewsDev()],
  server: {
    // Honor the harness-assigned port (autoPort) when present, else default 5173.
    port: Number(process.env.PORT) || 5173,
    host: true,
  },
})
