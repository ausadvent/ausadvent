import React from 'react'
import { Metadata } from 'next'

// Components
import Intro from './Intro'
import Description from './Description'
import Rollout from './Rollout'
import Blue from './Blue'

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'NDIS',
    description: 'Navigate through the NDIS landscape with ausadvent care, a dedicated group of experts in Brisbane and Perth',
    alternates: {
      canonical: 'https://www.ausadventcare.com.au/ndis'
    },
    openGraph: {
      title: 'Service of Ausadvent Care',
      description: 'Navigate through the NDIS landscape with ausadvent care, a dedicated group of experts in Brisbane and Perth',
      url: 'https://www.ausadventcare.com.au/_next/static/media/ndis-hero.717476c0.webp',
      type: 'website',
      images: [
        {
          url: 'https://www.ausadventcare.com.au/_next/static/media/ndis-hero.717476c0.webp'
        }
      ]
    },
    robots: {
      index: true,
      follow: true
    }
  }
}

export default function Ndis() {
  return (
    <main>
        <Intro />
        <Description />
        <Rollout />
        <Blue />
    </main>
  )
}
