import React from 'react'
import Image from 'next/image'

// Assets
import Logo from '../../../assets/about-logo.svg'
import Lotus from '../../../assets/about-intro-lotus.svg'
import Link from 'next/link'

export default function Intro() {
  return (
    <main className=' -mt-[4rem] md:h-screen'>
        <div className="py-[4rem] bg-gradient-to-b from-[#AD6E03]  to-[#F59E0B]"></div>
        <div className=' bg-gradient-to-b from-[#F59E0B] to-white h-full '>
            {/* <Image 
                src={Lotus} 
                alt='Hero image, hands holding with support' 
                className=' -z-20 absolute left-auto inset-0 w-[40.75rem] h-[24rem] md:h-[35rem] object-cover object-left-bottom opacity-55 md:opacity-85   '
            /> */}
            {/* <div className="absolute inset-0 bg-black opacity-40" aria-hidden="true"></div> */}
            <div className='page sm:mx-auto pt-[7rem] sm:pt-[4rem] lg:pt-[6rem] pb-[2rem] h-full md:flex md:flex-wrap md:gap-[2.5rem] xl:gap-[4rem] text-center' >
                <div className=' md:flex-grow-0 md:self-end md:w-full flex flex-col md:flex-row gap-[1rem] items-center'>
                    <Image className='w-[5.52rem] h-[3.7rem]' src={Logo} title='Ausadvent logo' alt='Ausadvent logo' width={20} height={20} loading='eager' />
                    <h1 className='text-[#1E40AF] text-[2.5rem] md:text-[1.8rem] lg:text-[2.5rem] leading-[2.3rem] md:leading-[1.6rem] lg:leading-[2.1rem] font-extrabold  text-center md:text-left'>AUSADVENT <br />CARE</h1>
                </div>
                <div className="mt-[2rem] md:mt-0 flex flex-col md:flex-row items-center md:items-start gap-[2.5rem] ">
                    <div className='flex flex-col gap-[2rem] md:w-1/2'>
                        <p className='cormorant font-bold lg:text-[1.25rem] 3xl:text-[1.5rem] leading-[1.125rem] lg:leading-[1.375rem] 3xl:leading-[1.625rem] md:text-left md:order-last'>More Than Just Care Providers; We&apos;re Compassionate Partners On Your Journey Towards Independence, Growth, And Fulfilment. </p>
                        <h3 className='text-[#1E40AF] text-[1.5rem] lg:text-[2rem] 2xl:text-[3rem] 3xl:text-[4rem] leading-[1.5rem] lg:leading-[2rem] 2xl:leading-[2.875rem] 3xl:leading-[3.75rem] font-extrabold md:text-left'>NURTURING INDEPENDENCE WITH COMPASSIONATE SUPPORT</h3>
                    </div>
                    <div className=" flex flex-col gap-[1rem] md:w-1/2 md:text-left xl:text-[1.125rem] 3xl:text-[1.25rem]">
                        <p className='text-blueHigher'>As a proud <strong>NDIS registered provider</strong>, we offer a <Link href='/services'>range of services</Link> under the NDIS scheme in Brisbane and Perth, including <Link href='/services/#supported-independent-living' >Supported Independent Living (SIL)</Link>, <Link href='/services#short-term-accommodation' >Short Term Accommodation (STA)</Link>, and <Link href='/services#individualised-living-options' >Individual Living Options (ILOs)</Link>. </p>
                        <p className="text-blueHigher font-semibold">Designed to empower you to bloom just like the lotus flower – resilient, beautiful, and reaching your full potential.</p>
                    </div>
                </div>
            </div>
        </div>
    </main>
  )
}
