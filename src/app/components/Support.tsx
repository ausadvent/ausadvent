import React from 'react'

// assets
import Lotus from '../../../assets/support-lotus.svg'
import Image from 'next/image'

export default function Support() {
  return (
    <div className='page py-[3rem] bg-gradient-to-b from-[#1D51C3] to-[#3E7BFF]'>
        <div className="flex flex-col gap-[2rem] text-primaryWhite text-center items-center">
            <h2 className='cormorant text-[3rem] font-bold leading-[3rem]'>PROUDLY SUPPORTING YOU</h2>
            <Image src={Lotus} alt='Lotus icon' title='Lotus icon' />
            <p className='text-[1.25rem] leading-[1.75rem]'>Ausadvent Care is here to support and guide you on your journey.</p>
            <button className='button py-[0.5rem] rounded-lg text-[1rem] font-semibold'>Contact us</button>
        </div>
    </div>
  )
}
