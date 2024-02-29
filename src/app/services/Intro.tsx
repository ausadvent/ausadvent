import Link from 'next/link'
import React from 'react'

export default function Intro() {
  return (
    <div className='bg-[#2563EB] h-screen -mt-[4rem]'>
        <div className='page sm:mx-auto pt-[6rem] sm:pt-[4rem] lg:pt-[6rem] pb-[2rem] h-full'>
            <div className="h-full flex flex-col 2xl:flex-row justify-between sm:justify-around 2xl:items-center 2xl:gap-[4rem] 3xl:gap-[6rem] text-primaryWhite ">
                
                <h1 className='2xl:hidden text-[2rem] sm:text-[3rem] lg:text-[2.8rem] leading-[2rem] sm:leading-[2.875rem] font-bold'>AUSADVENT CARE&apos;S <span className='text-[#FC7]'>SUPPORTED ACCOMMODATION</span> SOLUTIONS</h1>
                <h2 className='2xl:hidden cormorant text-[1.5rem] sm:text-[1.875rem] lg:text-[2.25rem] sm:leading-8 lg:leading-[2.375rem] font-bold '>Empowering Independent Living Across Australia</h2>
                
                {/* First box for 2xl */}
                <div className="flex flex-col gap-[2rem]">
                  <h1 className='hidden 2xl:inline text-[2rem] sm:text-[3rem] lg:text-[2.8rem] leading-[2rem] sm:leading-[2.875rem] font-bold'>AUSADVENT CARE&apos;S <span className='text-[#FC7]'>SUPPORTED ACCOMMODATION</span> SOLUTIONS</h1>
                  <h2 className='hidden 2xl:inline cormorant text-[1.5rem] sm:text-[1.875rem] lg:text-[2.25rem] sm:leading-8 lg:leading-[2.375rem] font-bold '>Empowering Independent Living Across Australia</h2>
                </div>

                <div className="flex flex-col gap-[1rem] 2xl:gap-[2rem] lg:text-[1.125rem] 2xl:text-[1.25rem]">
                    <p className='font-semibold'>At Ausadvent Care, we&apos;re more than just Queensland&apos;s trusted Disability Support partner with NDIS expertise. </p>
                    <p>We&apos;re your national champion for independent living, proudly guiding individuals towards vibrant lives throughout Queensland and Western Australia.</p>
                    <Link aria-label='Go to contact form section' href={'/locations#form'} scroll >
                      <button className='hidden 2xl:inline w-full lg:w-2/3 xl:w-[31.25rem] 2xl:w-full lg:mx-auto xl:mr-0 text-black bg-gradient-to-b from-[#FFD8AF] to-[#FDBA74] border py-[0.5rem] lg:py-[1rem] rounded-lg text-[1.125rem]'>
                        Contact us
                      </button>
                    </Link>
                </div>
                <Link aria-label='Go to contact form section' href={'/locations#form'} scroll >
                  <button className='2xl:hidden w-full lg:w-2/3 xl:w-[31.25rem] lg:mx-auto xl:mr-0 text-black bg-gradient-to-b from-[#FFD8AF] to-[#FDBA74]  py-[0.5rem] lg:py-[1rem] rounded-lg text-[1.125rem]'>
                    Contact us
                  </button>
                </Link>
            </div>
        </div>
    </div>
  )
}
