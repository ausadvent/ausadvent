import React from 'react'

// Components
import Intro from './Intro'
import Commitment from './Commitment'
import Values from './Values'
import Framework from '../components/Framework'
import Closing from './Closing'
import { Metadata } from 'next'



export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'About page',
    description: 'About page of Ausadvent Care, a registered care provider located in Queensland and Western Australia',
    openGraph: {
      title: 'About Ausadvent Care',
      description: 'About page of Ausadvent Care, a registered care provider located in Queensland and Western Australia',
      url: 'https://www.aihr.com/wp-content/uploads/Learning-and-development-manager.png',
      type: 'website',
      images: [
        {
          url: 'https://www.aihr.com/wp-content/uploads/Learning-and-development-manager.png'
        }
      ]
    },
    robots: {
      index: true,
      follow: true
    }
  }
}

export default function About() {
  return (
    <main>
        <Intro />
        <Commitment />
        <Values />
        <Framework />
        <Closing />
    </main>
  )
}
