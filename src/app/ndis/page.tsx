import React from 'react'
import { Metadata } from 'next'
import Head from 'next/head'

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
      title: 'NDIS Services of Ausadvent Care',
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

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "NDIS Page Ausadvent Care",
  "url": "https://www.ausadventcare.com.au/ndis",
  "headline": "Navigate through the NDIS landscape with ausadvent care, a dedicated group of experts in Brisbane and Perth",
  "description": "Navigate through the NDIS landscape with ausadvent care, a dedicated group of experts in Brisbane and Perth",
  "logo": {
    "@type": "ImageObject",
    "url": "https://ausadvent-logo.s3.ap-southeast-2.amazonaws.com/logo-vertical.png"
  },
  "sameAs": [
    "https://www.ausadventcare.com.au/ndis"
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
      "name": "NDIS",
      "item": `https://www.ausadvencare.com.au/ndis`,
    }
  ]
}

export default async function Ndis() {
  
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
      <Description />
      <Rollout />
      <Blue />
    </main>
  )
}
