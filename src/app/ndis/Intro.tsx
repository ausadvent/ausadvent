import React from 'react'
import Image from 'next/image'

// Assets
import BgImage from '../../../assets/ndis-hero.webp'

export default function Intro() {
  return (
    <section className="">
            {/* Background image */}
            <div className="absolute inset-0 h-[41.5rem] sm:h-[45.5rem] md:h-[48.5rem] xl:h-[62.5rem] -z-10">
                <Image 
                    src={BgImage} 
                    alt='Hero image, hands holding with support' 
                    className='absolute inset-0 w-full h-full object-cover opacity-80'
                />
                <div className="absolute inset-0 bg-black opacity-40" aria-hidden="true"></div>
            </div>

            {/* Content */}
            <div className=' relative page sm:mx-auto pt-[5rem] sm:pt-[8rem] lg:pt-[12rem] xl:pt-[18rem] pb-[5rem] sm:h-[42rem] md:h-[45rem] xl:h-[59rem] text-primaryWhite flex flex-col gap-[2.5rem] '>
                <div className='flex flex-col lg:flex-row gap-[2rem] text-center lg:text-left'>
                    <h1 className='xl:w-1/2 text-[1.5rem] md:text-[1.875rem] lg:text-[2rem] leading-[1.5rem] md:leading-[1.75rem] lg:leading-[2rem] font-black '>WE&apos;RE <span className='text-[#F59E0B]'>YOUR TRUSTED PROVIDERS</span>, EMPOWERING YOU TO NAVIGATE EVERY STEP OF YOUR NDIS JOURNEY WITH CONFIDENCE.</h1>
                    <div className='xl:w-1/2 flex flex-col gap-[2rem]'>
                        <p className='sm:w-[20rem] xl:w-full sm:mx-auto cormorant text-[1.25rem] lg:text-[1.5rem] leading-[1.375rem] lg:leading-[1.625rem] font-bold'>Embarking on your National Disability Insurance Scheme (NDIS) journey can be both exciting and overwhelming.</p>
                        <p className='sm:w-[20rem]  xl:w-fullsm:mx-auto lg:text-[1.125rem]'>We help you to make the most of your unique plan.</p>
                        <button className='py-[0.5rem] border-[2px] border-[#F59E0B] rounded-[0.5rem] w-[18.75rem] xl:w-full mx-auto'>Contact us</button>
                    </div>
                </div>
                

            </div>

        </section>
  )
}
