import React from 'react'

// assets
import Lotus from '../../../assets/support-lotus.svg'
import Image from 'next/image'

export default function Support() {
  return (
    <div className='bg-gradient-to-b from-[#1D51C3] to-[#3E7BFF]'>
      <div className='page sm:mx-auto py-[3rem]'>
          <div className="flex flex-col md:flex-row gap-[2rem] text-primaryWhite text-center sm:text-left items-center">
              <h2 className='cormorant text-[2.25rem] font-bold leading-[2.25rem]'>CHECK OUR LATEST ARTICLES</h2>
              <div className='flex flex-col sm:flex-row md:flex-col items-center gap-[2rem] sm:gap-[1rem] md:gap-[0.5rem] lg:gap-[1rem]'>
                <Image className='w-[2.9rem] h-[2rem] md:order-2' src={Lotus} alt='Lotus icon' title='Lotus icon' width={20} height={20} loading='lazy' />
                <p className='text-[1.25rem] leading-[1.75rem]'>The latest updates, insights, and stories in the world of disability support services</p>
              </div>
              {/* <button className='button py-[0.5rem] rounded-lg text-[1rem] font-semibold'>Contact us</button> */}
          </div>
      </div>
    </div>
  )
}
