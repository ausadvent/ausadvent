import React from 'react'

// Components
import AccommodationCarousel from './AccommodationCarousel'

export default function AccommodationIntro() {
  
  return (
    <article className='-mt-[4rem]'>
       <div className="py-[2rem] bg-gradient-to-b from-gray-500  to-gray-200"></div>
        <div className='page pt-[3rem] pb-[2rem] sm:mx-auto flex flex-col gap-[0.8rem] '>
            <h1 className='md:max-w-[25rem] text-[1.875rem] md:text-[1.875rem] lg:text-[2rem] leading-[1.875rem] md:leading-[1.75rem] lg:leading-[2rem] text-[#6B7280] font-black'>NDIS ACCOMMODATION AVAILABLE NOW</h1>
            <div className='border-b-[0.3rem] border-[#F59E0B] w-[5.375rem]'></div>
            <p className='md:text-[1.25rem]'>Experience Independent Living in a Convenient Location</p>
        </div>
    </article>
  )
}
