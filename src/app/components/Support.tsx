import React from 'react'
import Image from 'next/image'

// assets
import Lotus from '../../../assets/cta-yellow-logo.png'

export default function Support() {
  return (
    <div className='bg-gradient-to-b from-[#F59E0B] to-[#F9B84B] rounded-tr-[3rem] rounded-bl-[2rem]'>
      <div className='page sm:mx-auto py-[3rem]'>
        <div className="px-[2rem] flex flex-col md:flex-row gap-[2rem] cormorant text-black text-center sm:text-left items-center">
          <Image className='w-[8.769rem] h-[6rem] md:order-2' src={Lotus} alt='Lotus icon' title='Lotus icon' width={20} height={20} loading='lazy' unoptimized />
          <h2 className='text-[1.55rem] font-bold leading-[1.5rem]'>TAKE THE FIRST STEP TOWARDS YOUR EMPOWERED FUTURE</h2>
          <p className=' text-blueHigher text-[1.25rem] leading-[1.25rem] font-bold'>Get a free consultation and unlock your NDIS potential</p>
        </div>
        <button className='mt-[3rem] py-[1rem] rounded text-[1.125rem] font-semibold w-full text-primaryWhite bg-gradient-to-b from-[#1D51C3] to-[#3E7BFF]'>
          Contact us
        </button>
      </div>
    </div>
  )
}
