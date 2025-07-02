import React from 'react'
import Image from 'next/image'

// Assets
import BgImage from '../../../assets/blog-hero.webp'

export default function Intro() {
  return (
    <section className=" sm:mx-auto max-w-[90%] 2xl:max-w-[80%] mx-auto">
        {/* Background image */}
        <div className="absolute inset-0 h-full -z-10">
            <Image 
                className='absolute inset-0 w-full h-full object-cover opacity-80'
                src={BgImage} 
                title='Hero image'
                alt='Two women with a laptop' 
                fill
                sizes='100vw'
                priority={true}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#1e3a8a] to-transparent opacity-90 " aria-hidden="true"></div>
        </div>

        {/* Content */}
        <div className='  py-32 text-primaryWhite '>
            <h2 className='text-[0.75rem] lg:text-[1.2rem] text-[#93C5FD]'>Articles</h2>
            <div className="lg:mt-[3rem] flex flex-col xl:flex-row lg:gap-[1rem] xl:gap-[2rem]">
                <div className=' lg:w-1/2'>
                    <h1 className="mt-[1rem] lg:mt-0 text-[1.5rem] md:text-[1.875rem] xl:text-[2rem] 2xl:text-[3rem] 3xl:text-[4rem] leading-[1.5rem] md:leading-[1.75rem] xl:leading-[2rem] 2xl:leading-[2.875rem] 3xl:leading-[3.75rem] font-black  ">THE LATEST UPDATES, INSIGHTS, AND STORIES IN THE WORLD OF DISABILITY SUPPORT SERVICES.</h1>
                    <div className="mt-[1rem] border-b-[0.3125rem] border-[#F59E0B] w-[6.375rem] "></div>
                </div>
                <p className='mt-[1rem] lg:mt-0 lg:w-1/2 md:text-[1.125rem] xl:text-[1.25rem] 2xl:text-[1.4rem] font-semibold '>Ausadvent Care News Hub is your go-to source to keep you informed about industry trends, innovative approaches to care, and inspiring stories from participants who have embarked on transformative journeys with us. </p> 
            </div>
        </div>

    </section>
  )
}
