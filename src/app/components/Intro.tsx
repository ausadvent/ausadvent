import React from 'react'

// Assets
import Hero from '../../../assets/homeHero.webp'
import Image from 'next/image'

export default function Intro() {
  return (
    <section className="">
        {/* Background image */}
        <div className="absolute  inset-0 h-screen -z-10">
            <Image 
                src={Hero} 
                alt='Hero image, hands holding with support' 
                className='absolute inset-0 w-full h-full object-cover opacity-80'
            />
            <div className="absolute inset-0 bg-black opacity-40" aria-hidden="true"></div>
        </div>

        <h1>{'Your registered NDIS Care Provider, supporting Queensland and Western Australia'.toUpperCase()}</h1>

    </section>
  )
}
