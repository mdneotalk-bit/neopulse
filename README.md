# MD-Neo Talks — Health Blog

A bright, colourful health **blog, newsletter & medical-tips** site for the
MD-Neo Talks YouTube channel ([@MDNeoTalks](https://www.youtube.com/@MDNeoTalks)).
Every video becomes a written article; there's a health-news section, quick
medical tips, and a newsletter sign-up.

Built with **React + Vite + React Router**, light GSAP touches, and a
category-colour-coded design system.

---

## Quick start

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # production build → dist/
npm run preview   # preview the build
```

Requires Node 18+ (developed on Node 24).

---

## How it's organised

```
src/
  data/
    videos.js     # channel info + the 5 categories (label, colour, emoji)
    posts.js      # ⭐ the blog articles, generated from each video
    news.js       # Health Watch items (editable sample content)
    tips.js       # Quick medical tips cards
  components/      # BreakingBar, Nav, Hero, NewsRow, Articles, ArticleCard,
                   # Tips, Newsletter, About, Footer, Icons
  pages/
    Home.jsx       # the blog homepage (composes all sections)
    Article.jsx    # a single article page  (/article/:slug)
  lib/gsap.js      # GSAP registration
  index.css        # ⭐ design tokens (colours, fonts) + reveal system
```

Routes: `/` (home) and `/article/:slug` (each article). The breaking-news bar
and "Trending" list are generated automatically from your latest posts.

---

## Adding / editing content

### A new article  → `src/data/posts.js`
1. Add the video to `VIDEOS` in `src/data/videos.js` (id, title, duration, views, category).
2. Add an entry in `ARTICLES` (keyed by the video id) with the written content:
   ```js
   feP7IXpgr64: {
     readTime: 6,
     lead: 'Opening paragraph…',
     takeaways: ['Point one', 'Point two'],
     sections: [{ h: 'A heading', p: 'A paragraph' },
                { h: 'A list', list: ['a', 'b'] }],
     seeDoctor: 'When to seek help…',
   }
   ```
   The thumbnail, YouTube link, slug, date and category colour are all derived
   automatically. Any video **without** an entry still gets a basic auto-generated
   post, so nothing is ever missing.

> Want this fully automatic? The natural next step is a small script that pulls
> each video's transcript (YouTube captions API) and drafts the `lead` /
> `takeaways`. The data shape here is ready for that.

### Health news  → `src/data/news.js`
Each item in `RAW` is a full article with its own page (`/news/:slug`): give it
a `headline`, `summary`, `category`, `kind`, `date`, `readTime`, a `lead`, and
`sections` (`{h, p}` or `{h, list}`). Set `hot: true` to highlight one. The
`topic` field powers the "Latest headlines on this topic" link (a live Google
News search). Edit `LIVE_SOURCES` to change the "Live health headlines" panel.

### Live news feed (already wired up ✅)
The site pulls **real, current health headlines live from Google News' free RSS
feed** (no API key needed). It shows in the news section and on every news
article (topic-specific), auto-refreshing every 8 minutes and on window focus.

- **Serverless function:** `api/_lib.js` (fetch + parse) + `api/news.js`
  (Vercel) and `netlify/functions/news.js` (Netlify). Endpoint: `GET /api/news?topic=…`.
- **Local dev:** a Vite middleware in `vite.config.js` serves the same endpoint,
  so it works during `npm run dev` too.
- **Client:** `src/components/LiveHeadlines.jsx` fetches and renders it, with a
  graceful fallback to the curated articles + source links if the feed is ever
  unavailable.

**Deploying:**
- **Vercel** — zero config. `vercel.json` handles SPA routing; `api/news.js`
  becomes the function automatically. Just import the repo and deploy.
- **Netlify** — `netlify.toml` wires the function + SPA routing.

Both run on Node 18+. To change what the main feed searches for, edit the
`topic` prop on `<LiveHeadlines>` in `NewsRow.jsx`; per-article topics come from
each item's `topic` in `news.js`.

### Medical tips  → `src/data/tips.js`
Edit the `TIPS` array (emoji, colour, title, text).

### Social media links  → `src/data/socials.js`
Paste your profile URL into each `url`. Blank ones are hidden automatically, so
only the platforms you fill in will show (in the footer and the About card).
YouTube is already set.

### Colours & fonts  → `src/index.css` (`:root`)
Category colours: `--coral`, `--emerald`, `--amber`, `--violet`, `--blue`.
Fonts: **Fraunces** (headlines), **Plus Jakarta Sans** (UI), **Lora** (article body).

---

## Newsletter

The sign-up form (`src/components/Newsletter.jsx`) is **front-end only** — it
validates the email and shows a success state. To actually collect subscribers,
connect the `submit` handler to an email service (Mailchimp, ConvertKit,
Buttondown, …).

---

## Deploying

`npm run build` → static `dist/`. Host on Vercel, Netlify, Cloudflare Pages, etc.
Because it uses client-side routing, enable **SPA fallback** (redirect all paths
to `/index.html`) so deep links like `/article/…` work on refresh:
- **Netlify:** add `/* /index.html 200` to a `_redirects` file.
- **Vercel:** works out of the box for Vite SPAs.

---

## Note

Educational content only. The footer and every article carry a health
disclaimer — please keep it. Thumbnails and links point to YouTube via the
video ids in `src/data/videos.js`.
