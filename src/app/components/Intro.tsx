import React from 'react'
import Image from 'next/image'

// Assets
import Hero from '../../../assets/homeHero.webp'
import Lotus from '../../../assets/intro-lotus.svg'

export default function Intro() {
    return (
        <section className="">
            {/* Background image */}
            <div className="absolute inset-0 h-[41.5rem] sm:h-[45.5rem] md:h-[48.5rem] -z-10">
                <Image 
                    src={Hero} 
                    alt='Hero image, hands holding with support' 
                    className='absolute inset-0 w-full h-full object-cover opacity-80'
                />
                <div className="absolute inset-0 bg-black opacity-40" aria-hidden="true"></div>
                <div className='hidden md:flex md:absolute -z-1 bottom-0 right-0'>
                    <Image src={Lotus} title='Ausadvent logo' alt='Lotus symbol' />
                </div>
            </div>

            {/* Content */}
            <div className='page sm:mx-auto py-[2rem] h-[38rem] sm:h-[42rem] md:h-[45rem] text-primaryWhite flex flex-col md:grid grid-cols-2 md:gap-[2rem] justify-between sm:justify-around md:items-center text-center md:text-left'>
                <div className=' flex flex-col gap-[3.5rem] md:gap-[2rem]'>
                    <h1 className='text-[1.7rem] sm:text-[2rem] font-black leading-[2rem] '>YOUR REGISTERED <span className='text-[#FC7]'>NDIS CARE PROVIDER</span>, SUPPORTING QUEENSLAND AND WESTERN AUSTRALIA</h1>
                    <h2 className='text-[1.5rem] sm:text-[1.875rem] sm:leading-8 font-bold cormorant '>Empowering Lives, Blooming  Independence</h2>
                </div>
                <div className='md:mt-[8rem] flex flex-col gap-[3.5rem] md:gap-[2rem]'>
                    <p className=' text-[1rem] font-semibold leading-[1.5rem]'>We are a registered NDIS provider redefining care. our commitment goes beyond assistance to tailor support services to your unique needs. </p>
                    <button className='w-full sm:w-[25rem] md:w-full text-black bg-gradient-to-b from-[#FFD8AF] to-[#FDBA74] sm:mx-auto sm:bg-none border md:border-[2px] sm:border-[#F59E0B] py-[0.5rem] rounded-lg text-[1.125rem] sm:text-white'>Contact us</button>
                </div>
            </div>

        </section>
    )
}
