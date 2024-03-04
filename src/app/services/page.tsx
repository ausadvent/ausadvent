import React from 'react'
import { Metadata } from 'next'
import Head from 'next/head'

// Utils
import { fetchData } from '../utils/fetchServices'

// Components
import Intro from './Intro'
import Portfolio from './Portfolio'
import ServicesDescription from './ServicesDescription'
import Framework from '../components/Framework'
import Support from '../components/Support'
import Jump from './Jump'

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Services',
    description: 'Services of Ausadvent Care, a national champion for independent living, guiding individuals towards vibrant lives throughout Queensland and Western Australia',
    alternates: {
      canonical: 'https://www.ausadventcare.com.au/services'
    },
    openGraph: {
      title: 'Services',
      description: 'Services of Ausadvent Care, a national champion for independent living, guiding individuals towards vibrant lives throughout Queensland and Western Australia',
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
  "name": "Services Page Ausadvent Care",
  "url": "https://www.ausadventcare.com.au/services",
  "headline": "Services of Ausadvent Care, a national champion for independent living, guiding individuals towards vibrant lives throughout Queensland and Western Australia",
  "description": "Services of Ausadvent Care, a national champion for independent living, guiding individuals towards vibrant lives throughout Queensland and Western Australia",
  "logo": {
    "@type": "ImageObject",
    "url": "https://ausadvent-logo.s3.ap-southeast-2.amazonaws.com/logo-vertical.png"
  },
  "sameAs": [
    "https://www.ausadventcare.com.au/services"
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
      "name": "Services",
      "item": `https://www.ausadvencare.com.au/services`,
    }
  ]
}

export default async function Services() {
    const services = await fetchData()

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
        <Portfolio services={services} />
        <ServicesDescription services={services} />
        <Framework />
        <div className='page sm:mx-auto pb-[2rem] sm:pb-[4rem] md:pb-[4.5rem] lg:pb-[5rem] xl:pb-[6rem] flex flex-col gap-[1.5rem]'>
        <h3 className='cormorant text-[1.5rem] text-[#6B7280]'>Jump To Section</h3>
          <Jump services={services} />
        </div>
        <Support />
      </main>
    )
}
