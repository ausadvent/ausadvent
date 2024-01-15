import Image from 'next/image'

// Components
import Intro from './components/Intro'
import Services from './components/Services'
import Values from './components/Values'
import Independence from './components/Independence'
import Framework from './components/Framework'
import Support from './components/Support'
import LatestArticles from './components/LatestArticles'

export default function Home() {
  return (
    <main className="">
      <Intro />
      <Services />
      <Values />
      <Independence />
      <Framework />
      <Support />
      <LatestArticles />
    </main>
  )
}
