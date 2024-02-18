import React from 'react'
import Image from 'next/image'

// Assets
import Hero from '../../../assets/homeHero.webp'
import Lotus from '../../../assets/intro-lotus.svg'
import Link from 'next/link'

export default function Intro() {
    return (
        <section className="">
            {/* Background image */}
            <div className="absolute inset-0 h-[41.5rem] sm:h-[45.5rem] md:h-[48.5rem] xl:h-[62.5rem] -z-10">
                <Image 
                    className='absolute inset-0 w-full h-full object-cover opacity-80'
                    src={Hero} 
                    title='Hero image'
                    alt='Hero image, hands holding with support'
                    width={20}
                    height={20}
                    loading='eager'
                    unoptimized 

                />
                <div className="absolute inset-0 bg-black opacity-40" aria-hidden="true"></div>
                <div className='hidden md:flex md:absolute -z-1 bottom-0 right-0'>
                    <Image src={Lotus} title='Ausadvent logo' alt='Lotus symbol' />
                </div>
            </div>

            {/* Content */}
            <div className='page sm:mx-auto py-[2rem] h-[38rem] sm:h-[42rem] md:h-[45rem] xl:h-[59rem] text-primaryWhite flex flex-col md:grid grid-cols-2 md:gap-[2rem] xl:gap-[5rem] justify-between sm:justify-around md:items-center text-center md:text-left'>
                <div className=' flex flex-col gap-[3.5rem] md:gap-[2rem]'>
                    <h1 className='text-[1.7rem] sm:text-[2rem] xl:text-[3rem] 3xl:text-[4rem] font-black leading-[2rem] xl:leading-[2.875rem] 3xl:leading-[3.75rem] '>YOUR REGISTERED <span className='text-[#FC7]'>NDIS CARE PROVIDER</span>, SUPPORTING QUEENSLAND AND WESTERN AUSTRALIA</h1>
                    <h2 className='cormorant text-[1.5rem] sm:text-[1.875rem] xl:text-[3rem] 3xl:text-[4rem] sm:leading-8 xl:leading-[3.125rem] 3xl:leading-[3.75rem] font-bold '>Empowering Lives, Blooming  Independence</h2>
                </div>
                <div className='md:mt-[8rem] lg:mt-[6rem] xl:mt-[17rem] flex flex-col gap-[3.5rem] md:gap-[2rem]'>
                    <p className=' text-[1rem] xl:text-[1.25rem] font-semibold leading-[1.75rem]'>We are a registered NDIS provider redefining care. our commitment goes beyond assistance to tailor support services to your unique needs. </p>
                    <Link href={'/locations#form'} >
                        <button className='w-full sm:w-[25rem] md:w-full xl:w-1/2 xl:ml-0 text-black bg-gradient-to-b from-[#FFD8AF] to-[#FDBA74] sm:mx-auto sm:bg-none md:border-[2px] sm:border-[#F59E0B] py-[0.5rem] rounded-lg text-[1.125rem] sm:text-white lg:hover:border-transparent group lg:hover:bg-gradient-to-b lg:hover:from-[#FFD8AF] lg:hover:to-[#FDBA74] lg:transition lg:duration-500 lg:ease-linear '>
                            Contact us
                        </button>
                    </Link>
                </div>
            </div>

        </section>
    )
}
