import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

// Assets
import BgImage from '../../../assets/ndis-hero.webp'

export default function Intro() {
  return (
    <section className="">
            {/* Background image */}
            <div className="absolute inset-0 h-[41.5rem] sm:h-[45.5rem] md:h-[48.5rem] xl:h-[62.5rem] -z-10">
                <Image 
                    className='absolute inset-0 w-full h-full object-cover opacity-80'
                    src={BgImage} 
                    title='Hero image'
                    alt='Hero image, hands holding with support'
                    fill
                    sizes='100vw'
                    priority={true} 
                />
                <div className="absolute inset-0 bg-black opacity-40" aria-hidden="true"></div>
            </div>

            {/* Content */}
            <div className=' relative page sm:mx-auto pt-[5rem] sm:pt-[8rem] lg:pt-[12rem] xl:pt-[18rem] pb-[5rem] sm:h-[42rem] md:h-[45rem] xl:h-[59rem] text-primaryWhite flex flex-col gap-[2.5rem] '>
                <div className='flex flex-col lg:flex-row gap-[2rem] 3xl:gap-[4rem] text-center lg:text-left'>
                    <h1 className='xl:w-1/2 text-[1.5rem] md:text-[1.875rem] lg:text-[2rem] 2xl:text-[3rem] leading-[1.5rem] md:leading-[1.75rem] lg:leading-[2rem] 2xl:leading-[2.875rem] font-black '>WE&apos;RE <span className='text-[#F59E0B]'>YOUR TRUSTED PROVIDERS</span>, EMPOWERING YOU TO NAVIGATE EVERY STEP OF YOUR NDIS JOURNEY WITH CONFIDENCE.</h1>
                    <div className='xl:w-1/2 flex flex-col gap-[2rem]'>
                        <p className='sm:w-[20rem] xl:w-full sm:mx-auto cormorant text-[1.25rem] lg:text-[1.5rem] 2xl:text-[1.857rem] leading-[1.375rem] lg:leading-[1.625rem] 2xl:leading-[2.0625rem] font-bold'>Embarking on your National Disability Insurance Scheme (NDIS) journey can be both exciting and overwhelming.</p>
                        <p className='sm:w-[20rem] xl:w-full sm:mx-auto lg:text-[1.125rem] 2xl:text-[1.25rem] 3xl:text-[1.5rem]'>We help you to make the most of your unique NDIS plan in Queensland and Western Australia regions.</p>
                        <Link aria-label='Go to contact form section' href={'/locations#form'} scroll>
                            <button className='py-[0.5rem] border-[2px] border-[#F59E0B] rounded-[0.5rem] w-[18.75rem] xl:w-full mx-auto 2xl:text-[1.25rem] 3xl:text-[1.5rem]'>
                                Contact us
                            </button>
                        </Link>
                    </div>
                </div>
                

            </div>

        </section>
  )
}
