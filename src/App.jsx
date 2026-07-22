import { useLayoutEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { ScrollTrigger, prefersReducedMotion } from './lib/gsap'

import BreakingBar from './components/BreakingBar'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Home from './pages/Home'
import Article from './pages/Article'
import NewsArticle from './pages/NewsArticle'

import './App.css'

function ScrollManager() {
  const { pathname } = useLocation()
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
    ScrollTrigger.refresh()
  }, [pathname])
  return null
}

// Global scroll-reveal using scroll/resize listeners + a guaranteed safety net,
// so content is never left hidden regardless of environment quirks.
function useReveal(dep) {
  useLayoutEffect(() => {
    const remaining = () => Array.from(document.querySelectorAll('.reveal:not(.is-in)'))
    if (prefersReducedMotion) {
      remaining().forEach((el) => el.classList.add('is-in'))
      return
    }
    const check = () => {
      const h = window.innerHeight || document.documentElement.clientHeight
      remaining().forEach((el) => {
        if (el.getBoundingClientRect().top < h * 0.92) el.classList.add('is-in')
      })
    }
    check() // reveal whatever is already in view
    window.addEventListener('scroll', check, { passive: true })
    window.addEventListener('resize', check)
    // Backstop: never let content stay hidden if scroll events don't arrive.
    const t = setTimeout(() => remaining().forEach((el) => el.classList.add('is-in')), 1600)
    return () => {
      window.removeEventListener('scroll', check)
      window.removeEventListener('resize', check)
      clearTimeout(t)
    }
  }, [dep])
}

export default function App() {
  const { pathname } = useLocation()
  useReveal(pathname)

  return (
    <>
      <ScrollManager />
      <BreakingBar />
      <Nav />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/article/:slug" element={<Article />} />
          <Route path="/news/:slug" element={<NewsArticle />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}
