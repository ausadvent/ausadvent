import React from 'react'

// Components
import Intro from './Intro'
import Commitment from './Commitment'
import Values from './Values'
import Framework from '../components/Framework'
import Closing from './Closing'
import { Metadata } from 'next'
import Head from 'next/head'



export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'About page',
    description: 'About page of Ausadvent Care, a registered care provider located in Queensland and Western Australia',
    alternates: {
      canonical: 'https://www.ausadventcare.com.au/about'
    },
    openGraph: {
      title: 'About Ausadvent Care',
      description: 'About page of Ausadvent Care, a registered care provider located in Queensland and Western Australia',
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

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "About Page Ausadvent Care",
  "url": "https://www.ausadventcare.com.au/about",
  "description": "About page of Ausadvent Care, a registered care provider located in Queensland and Western Australia.",
  "logo": {
    "@type": "ImageObject",
    "url": "https://ausadvent-logo.s3.ap-southeast-2.amazonaws.com/logo-vertical.png"
  },
  "sameAs": [
    "https://www.ausadventcare.com.au/about" // Add the canonical URL here
  ]
}

const breadCrumbData = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
      {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": `https://www.ausadvencare.com.au`
      },
      {
          '@type': 'ListItem',
          "position": 2,
          "name": "About",
          "item": `https://www.ausadvencare.com.au/about`,
      }
  ]
}

export default async function About() {
  const metadata:any = await generateMetadata()

  return (
    <main>
      <Head>
        <title>{metadata.title} </title>
        <meta name="description" content={metadata.description} />
        <link rel="canonical" href={metadata.alternates.canonical} />
      </Head>
      <script 
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd)}}
      />
      <script 
        type="application/ld+json" 
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadCrumbData)}}
      />
      <Intro />
      <Commitment />
      <Values />
      <Framework />
      <Closing />
    </main>
  )
}
