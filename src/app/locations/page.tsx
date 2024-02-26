import React from 'react'
import { Metadata } from 'next'

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


export default function Locations() {
  return (
    <main className='sm:mx-auto bg-blue-300  pb-[4rem]'>
        <Intro />
        <div className='xl:max-w-[1024px] xl:mx-auto xl:flex xl:gap-[2rem] xl:items-stretch'>
          <div className='xl:flex-1 h-full'>
            <Queensland />
          </div>
          <div className='xl:flex-1 xl:h-full'>
            <Western />
          </div>
        </div>
          <Reach />
          <Contact />
    </main>
  )
}
