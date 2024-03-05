import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

// Assets
import icon from '../../assets/not-found-icon.svg'

export default function NotFound() {
  return (
    <main className='bg-[#2563EB] -mt-[4rem]'>
        <section className="page sm:mx-auto pt-[6rem] lg:pt-[6rem] pb-[2rem] md:pb-[4rem] lg:flex gap-[2rem] ">
            
            {/* Left container for lg */}
            <div className='flex flex-col gap-[1.5rem] lg:gap-[1rem] xl:gap-[2rem] text-center lg:text-left text-primaryWhite'>
                <h1 className='lg:order-2 cormorant text-[3.75rem] leading-[3.125rem] font-bold'>LOST AT SEA?</h1>
                <h2 className='lg:order-1 text-[3rem] font-extrabold'>404</h2>
                <p className='lg:order-3 font-semibold md:text-[1.25rem]'>Don&apos;t worry, you&apos;re not alone! Our new site is navigating uncharted waters. </p>
                
                <Image 
                    src={icon}
                    className='lg:hidden mt-[1.5rem] mx-auto w-[19.75rem] h-[21.188rem]'
                    title='Not found icon'
                    alt='Not found icon'
                    width={316}
                    height={339}
                    loading='eager'
                />
                
                <p className='lg:order-4 font-semibold md:text-[1.5rem]'>Explore our services page to find your way back to shore!</p>
                <Link className='lg:order-5 md:flex justify-center lg:justify-start' aria-label='Go to services page' href={'/services'} scroll >
                    <button className='w-full md:w-2/3 xl:w-[31.25rem] xl:mr-0 bg-gradient-to-b from-[#FFD8AF] to-[#FDBA74]  py-[0.5rem] lg:py-[1rem] rounded-lg text-black text-[1.125rem] font-semibold'>
                        Go to services
                    </button>
                </Link>
            </div>

            {/* Right container for lg */}
            <div className='flex items-center'>
                <Image 
                    src={icon}
                    className='hidden lg:flex mx-auto w-[19.75rem] h-[21.188rem]'
                    title='Not found icon'
                    alt='Not found icon'
                    width={316}
                    height={339}
                    loading='eager'
                />
            </div>

        </section>
    </main>
  )
}
