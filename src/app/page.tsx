import Image from 'next/image'

// Components
import Intro from './components/Intro'
import Services from './components/Services'

export default function Home() {
  return (
    <main className="">
      <Intro />
      <Services />
    </main>
  )
}
