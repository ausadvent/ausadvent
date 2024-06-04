import React from 'react'
import Image from 'next/image'

import Logo from '../../../assets/about-lotus.svg'
import Link from 'next/link'

export default function Closing() {
  return (
    <article className='p-[2rem] sm:py-[4rem] lg:py-[4.5rem] xl:py-[5rem] 2xl:py-[6rem] sm:px-[4.38rem] lg:px-[8rem] 3xl:px-[12rem] bg-gradient-to-b from-[#F59E0B] to-[#F9B84B] rounded-tr-[3rem] rounded-bl-[3rem] '>
      <div className="md:px-[1rem] flex flex-col items-center gap-[2rem] md:gap-[1rem] lg:gap-[2rem]">
          <Image className='w-[5.85rem] md:w-[11.74rem] h-[4rem] md:h-[8rem]' src={Logo} title='Ausadvent logo' alt='Ausadvent logo' width={20} height={20} loading='lazy' />
          <div className="py-[1rem] flex flex-col gap-[1rem] lg:gap-[2rem] text-blueHigher text-center">
              <h4 className='cormorant text-[1.5rem] md:text-[2.25rem] xl:text-[3rem] 3xl:text-[3.75rem] leading-[1.5rem] md:leading-[2.125rem] xl:leading-[3rem] 3xl:leading-[3.125rem] font-bold'>{'Much like the lotus, your journey is filled with possibilities'.toUpperCase()} </h4>
              <p className='cormorant text-[1.25rem] md:text-[1.875rem] xl:text-[2.25rem] 3xl:text-[3rem] leading-[1.375rem] md:leading-[2.065rem] xl:leading-[2.375rem] 3xl:leading-[3.125rem] font-bold'>We Nurture Your Independence, Cultivate Your Potential, And Celebrate Your Triumphs Along The Way.</p>
          </div>
          <div className="lg:mt-[4rem] 3xl:mt-[8rem] flex flex-col gap-[1rem] text-blueHigher text-center sm:w-full">
              <p className="font-bold 2xl:text-[1.125rem] 3xl:text-[1.5rem]">Take the first step towards your empowered future</p>
              <Link href={'/locations#form'} >
                <button className='py-[1rem] xl:py-[1.5rem] lg:text-[1.125rem] xl:text-[1.25rem] w-full xl:w-1/2 3xl:w-[40rem] xl:mx-auto rounded bg-gradient-to-b from-[#1D51C3] to-[#3E7BFF] text-white'>Contact us</button>
              </Link>
          </div>
      </div>
    </article>
  )
}
