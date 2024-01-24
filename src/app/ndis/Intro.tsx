import React from 'react'
import Image from 'next/image'

// Assets
import BgImage from '../../../assets/homeHero.webp'

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
            <div className=' relative page pt-[8rem] pb-[5rem] sm:h-[42rem] md:h-[45rem] xl:h-[59rem] text-primaryWhite flex flex-col gap-[2.5rem] '>
                <div className='flex flex-col gap-[2rem] text-center'>
                    <h1 className='text-[1.5rem] sm:text-[2rem] xl:text-[3rem] 3xl:text-[4rem] font-black leading-[1.5rem] xl:leading-[2.875rem] 3xl:leading-[3.75rem] '>WE&apos;RE <span className='text-[#F59E0B]'>YOUR TRUSTED PROVIDERS</span>, EMPOWERING YOU TO NAVIGATE EVERY STEP OF YOUR NDIS JOURNEY WITH CONFIDENCE.</h1>
                    <p className='cormorant text-[1.25rem] leading-[1.375rem] font-bold'>Embarking on your National Disability Insurance Scheme (NDIS) journey can be both exciting and overwhelming.</p>
                    <p>We help you to make the most of your unique plan.</p>
                </div>
                
                <button className='py-[0.5rem] border-[2px] border-[#F59E0B] rounded-[0.5rem] w-[18.75rem] mx-auto'>Contact us</button>

                {/* <div className="absolute">
                    <Image className='w-[21.74rem] h-[15.63rem]' src={Lotus} title='Ausadvent logo' alt='Ausadvent logo' width={20} height={20} loading='eager' />
                </div> */}
            </div>

        </section>
  )
}
