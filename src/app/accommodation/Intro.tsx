import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

// Components
import Carousel from './(components)/Carousel'

// Assets
import bedIcon from '../../../assets/accommodation/icon-bed.svg'
import showerIcon from '../../../assets/accommodation/icon-shower.svg'

export default function Intro() {
  return (
    <article className='-mt-[4rem]'>
        <div className="py-[2rem] bg-gradient-to-b from-gray-500  to-gray-200"></div>
        <div className='page pt-[3rem] pb-[2rem] sm:mx-auto flex flex-col gap-[0.8rem] '>
            <h1 className='md:max-w-[25rem] text-[1.875rem] md:text-[1.875rem] lg:text-[2rem] leading-[1.875rem] md:leading-[1.75rem] lg:leading-[2rem] text-[#6B7280] font-black'>LOGAN CENTRAL COZY APARTMENT</h1>
            <div className='border-b-[0.3rem] border-[#F59E0B] w-[5.375rem]'></div>
            <p className='md:text-[1.25rem]'>Experience Independent Living in a Convenient Location</p>
        </div>
        <div className="sm:mx-auto mt-[0.8rem] page flex flex-col gap-[0.8rem] lg:gap-[1rem]">
            <Carousel />
            <Link 
                className=' text-[#6B7280] md:text-[1.125rem] '
                href="https://www.google.com/maps/search/?api=1&query=4%2F34+Garfield+Road%2C+Logan+Central+QLD+4300" 
                target='_blank'
            >
                4/34 Garfield Road, Logan Central QLD 4300
            </Link>

            {/* Icons */}
            <div className="flex gap-[1rem]">
                {/* Bed */}
                <div className="flex items-center gap-[0.5rem] ">
                    <Image 
                        src={bedIcon}
                        className='w-[1.5rem] h-[1.5rem]'
                        title='bed icon'
                        alt='bed icon'
                    />
                    <p>1</p>
                </div>
                {/* Shower */}
                <div className="flex items-center gap-[0.5rem] ">
                    <Image 
                        src={showerIcon}
                        className='w-[1.5rem] h-[1.5rem]'
                        title='shower icon'
                        alt='shower icon'
                    />
                    <p>1</p>
                </div>
            </div>

            <Link href={'/locations#form'} >
                <button 
                    className='mt-[1rem] w-full sm:w-[15rem] md:w-[20rem] xl:ml-0 bg-gradient-to-b from-[#3E7BFF] to-[#1D51C3] sm:mx-auto py-[0.5rem] md:py-[1rem] rounded-lg text-[1.125rem] text-white '
                >
                    Schedule a Visit
                </button>
            </Link>
        </div>
    </article>
  )
}
