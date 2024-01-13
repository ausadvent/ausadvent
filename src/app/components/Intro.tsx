import React from 'react'

// Assets
import Hero from '../../../assets/homeHero.webp'
import Image from 'next/image'


export default function Intro() {
    return (
        <section className="">
            {/* Background image */}
            <div className="absolute inset-0 h-screen -z-10">
                <Image 
                    src={Hero} 
                    alt='Hero image, hands holding with support' 
                    className='absolute inset-0 w-full h-full object-cover opacity-80'
                />
                <div className="absolute inset-0 bg-black opacity-40" aria-hidden="true"></div>
            </div>

            {/* Content */}
            <div className='page py-[2rem] h-[38rem] text-primaryWhite flex flex-col justify-between text-center'>
                <h1 className='text-[1.7rem] font-black leading-[2rem] '>YOUR REGISTERED <span className='text-[#FC7]'>NDIS CARE PROVIDER</span>, SUPPORTING QUEENSLAND AND WESTERN AUSTRALIA</h1>
                <h2 className='text-[1.5rem] font-bold cormorant '>Empowering Lives, Blooming  Independence</h2>
                <p className=' text-[1rem] font-semibold leading-[1.5rem]'>We are a registered NDIS provider redefining care. our commitment goes beyond assistance to tailor support services to your unique needs. </p>
                <button className='button py-[0.5rem] rounded-lg text-[1.125rem]'>Contact us</button>
            </div>

        </section>
    )
}
