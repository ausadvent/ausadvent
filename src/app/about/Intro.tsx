import React from 'react'
import Logo from '../../../assets/about-logo.svg'
import Image from 'next/image'

export default function Intro() {
  return (
    <div className='bg-yellow-500 h-screen -mt-[4rem]'>
        <div className='page sm:mx-auto pt-[7rem] sm:pt-[4rem] lg:pt-[6rem] pb-[2rem] h-full'>
            <div className="h-full flex flex-col justify-between items-center ">
                <div className='flex flex-col gap-[1rem] items-center'>
                    <Image className='w-[5.52rem] h-[3.7rem]' src={Logo} title='Ausadvent logo' alt='Ausadvent logo' width={20} height={20} loading='eager' />
                    <h1 className='text-[#1E40AF] text-[2.5rem] leading-[2.3rem] font-extrabold  text-center'>AUSADVENT <br />CARE</h1>
                </div>
                <p className='cormorant font-bold leading-[1.125rem]'>More Than Just Care Providers; We&apos;re Compassionate Partners On Your Journey Towards Independence, Growth, And Fulfilment. </p>
            </div>
        </div>
    </div>
  )
}
