import React from 'react'

// assets
import Lotus from '../../../assets/support-lotus.svg'
import Image from 'next/image'

export default function Support() {
  return (
    <div className='bg-gradient-to-b from-[#1D51C3] to-[#3E7BFF]'>
      <div className='page sm:mx-auto py-[3rem]'>
          <div className="flex flex-col gap-[2rem] text-primaryWhite text-center sm:text-left items-center">
              <h2 className='cormorant text-[3rem] font-bold leading-[3rem]'>PROUDLY SUPPORTING YOU</h2>
              <div className='flex flex-col sm:flex-row items-center gap-[2rem] sm:gap-[1rem]'>
                <Image className='w-[2.9rem] h-[2rem]' src={Lotus} alt='Lotus icon' title='Lotus icon' width={20} height={20} loading='lazy' />
                <p className='text-[1.25rem] leading-[1.75rem]'>Ausadvent Care is here to support and guide you on your journey.</p>
              </div>
              <button className='button py-[0.5rem] rounded-lg text-[1rem] font-semibold'>Contact us</button>
          </div>
      </div>
    </div>
  )
}
