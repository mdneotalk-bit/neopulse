import Hero from '../components/Hero'
import NewsRow from '../components/NewsRow'
import Articles from '../components/Articles'
import Tips from '../components/Tips'
import LiveNews from '../components/LiveNews'
import Newsletter from '../components/Newsletter'
import About from '../components/About'

export default function Home() {
  return (
    <>
      <Hero />
      <NewsRow />
      <Articles />
      <Tips />
      <About />
      <LiveNews />
      <Newsletter />
    </>
  )
}
