import React from 'react'
import { Metadata } from 'next'

// Components
import Support from '../components/Support'
import AccommodationIntro from './AccommodationIntro'

// Database
import { propertiesArray } from '../accommodation/constants/properties'
import PropertiesCards from './PropertiesCards'
import Request from './Request'
import Head from 'next/head'

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Accommodation',
    description: 'Ausadvent Care provides affordable NDIS accommodation in Queensland and Western Australia',
    alternates: {
      canonical: 'https://www.ausadventcare.com.au/accommodation'
    },
    openGraph: {
      title: 'Accommodation',
      description: 'Ausadvent Care provides affordable NDIS accommodation in Queensland and Western Australia',
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
  "name": "Accommodation Page Ausadvent Care",
  "url": "https://www.ausadventcare.com.au/accommodation",
  "headline": "Ausadvent Care provides affordable NDIS accommodation in Queensland and Western Australia",
  "description": "Ausadvent Care provides affordable NDIS accommodation in Queensland and Western Australia",
  "logo": {
    "@type": "ImageObject",
    "url": "https://ausadvent-logo.s3.ap-southeast-2.amazonaws.com/logo-vertical.png"
  },
  "sameAs": [
    "https://www.ausadventcare.com.au/accommodation"
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
      "name": "Accommodation",
      "item": `https://www.ausadvencare.com.au/accommodation`,
    }
  ]
}

export default async function Accommodation() {
  const metadata:any = await generateMetadata()
  
  return (
    <div className='sm:mx-auto bg-gray-200 pb-[1rem]'>
      
      <Head>
        <title>{metadata.title}</title>
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
      
      <AccommodationIntro />
      <PropertiesCards properties={propertiesArray} />
      <Request />
      <Support />
    </div>
  )
}
