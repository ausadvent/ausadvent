import React from 'react'
import { Metadata } from 'next'
import Head from 'next/head'

// Components
import Queensland from './Queensland'
import Western from './Western'
import Intro from './Intro'
import Reach from './Reach'
import Contact from './Contact'

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Locations',
    description: 'Ausadvent Care provides NDIS solutions in Queensland and Western Australia',
    alternates: {
      canonical: 'https://www.ausadventcare.com.au/locations'
    },
    openGraph: {
      title: 'Locations',
      description: 'Ausadvent Care provides NDIS solutions in Queensland and Western Australia',
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
  "name": "Locations Page Ausadvent Care",
  "url": "https://www.ausadventcare.com.au/locations",
  "headline": "Ausadvent Care provides NDIS solutions in Queensland and Western Australia",
  "description": "Ausadvent Care provides NDIS solutions in Queensland and Western Australia",
  "logo": {
    "@type": "ImageObject",
    "url": "https://ausadvent-logo.s3.ap-southeast-2.amazonaws.com/logo-vertical.png"
  },
  "sameAs": [
    "https://www.ausadventcare.com.au/locations"
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
      "name": "Locations",
      "item": `https://www.ausadvencare.com.au/locations`,
    }
  ]
}

export default async function Locations() {
  const metadata:any = await generateMetadata()
  
  return (
    <div className='sm:mx-auto bg-blue-300 pb-[4rem]'>
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
      <Intro />
      <Contact />
      <main>
        <h3 className='page mt-[2rem] sm:mx-auto text-[1.375rem] md:text-[1.875rem] lg:text-[2rem] leading-[1.375rem] md:leading-[1.75rem] lg:leading-[2rem] text-[#1E40AF] font-black' >Areas of Focus for NDIS Services and Supported Independent Living (SIL)</h3>
        <aside className='xl:mt-[4rem] xl:max-w-[1024px] xl:mx-auto xl:flex xl:gap-[2rem] '>
          <div className='xl:flex-1 h-full'>
            <Queensland />
          </div>
          <div className='xl:flex-1 xl:h-full'>
            {/* <Western /> */}
          </div>
        </aside>
        <Reach />
      </main>
    </div>
  )
}
