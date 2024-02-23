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
    openGraph: {
      title: 'Service of Ausadvent Care',
      description: 'Navigate through the NDIS landscape with ausadvent care, a dedicated group of experts in Brisbane and Perth',
      url: 'https://ausadvent-logo.s3.ap-southeast-2.amazonaws.com/logo-vertical.png',
      type: 'website',
      images: [
        {
          url: 'https://ausadvent-logo.s3.ap-southeast-2.amazonaws.com/logo-vertical.png'
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
