import React from 'react'
import Image from 'next/image'

// assets
import Lotus from '../../../assets/cta-yellow-logo.png'
import Link from 'next/link'

export default function Support() {
  return (
    <article className='bg-gradient-to-b from-[#F59E0B] to-[#F9B84B] rounded-tr-[3rem] rounded-bl-[2rem]'>
      <div className='page sm:mx-auto py-[3rem] md:py-[4rem]'>
        <div className="cormorant px-[2rem] sm:px-0 flex flex-col xl:flex-row gap-[2rem] 3xl:gap-[4rem] items-center text-black text-center xl:text-left">
          <Image className='w-[8.769rem] md:w-[11.76rem] h-[6rem] md:h-[8rem] ' src={Lotus} alt='Lotus icon' title='Lotus icon' width={20} height={20} loading='lazy' unoptimized />
          <h3 className='text-[1.55rem] md:text-[2.25rem] 3xl:text-[3.75rem] font-bold leading-[1.5rem] md:leading-[2.25rem] 3xl:leading-[3.125rem] '>TAKE THE FIRST STEP TOWARDS YOUR EMPOWERED FUTURE</h3>
          <div className="flex flex-col gap-[3rem] xl:gap-[2rem]">
            <p className=' text-blueHigher text-[1.25rem] md:text-[1.5rem] xl:text-[1.875rem] 3xl:text-[2.25rem] leading-[1.25rem] md:leading-[1.5rem] xl:leading-[1.875rem] 3xl:leading-[2.25rem] font-bold'>
              Find Out More About our Range Of <Link href={'/ndis'}>NDIS Services</Link> in Queensland and Western Australia
            </p>
            <Link href={'/locations#form'} scroll >
              <button className=' py-[1rem] md:py-[1.5rem] rounded text-[1.125rem] md:text-[1.25rem] 3xl:text-[1.5rem] font-semibold w-full text-primaryWhite bg-gradient-to-b from-[#1D51C3] to-[#3E7BFF]'>
                Contact us
              </button>
            </Link>
          </div>
        </div>
      </div>
    </article>
  )
}
