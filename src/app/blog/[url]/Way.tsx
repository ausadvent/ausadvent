import Link from 'next/link'
import React from 'react'

export default function Way() {
  return (
    <div className=' md:max-w-[600px] lg:max-w-[748px] xl:max-w-[1004px] 2xl:max-w-[1260px] 3xl:max-w-[1516px] px-[2rem] py-[2rem] lg:py-[4rem] bg-gradient-to-b from-[#FFD8AF] to-[#FDBA74] rounded-tr-[2rem] rounded-bl-[1rem]  '>
        <div className=" sm:max-w-[500px] md:max-w-[640px] lg:max-w-[768px] xl:max-w-[1024px] sm:mx-auto flex flex-col xl:flex-row gap-[2rem] lg:gap-[3rem]">
            <div className='xl:w-1/2 xl:flex xl:flex-col xl:justify-center '>
                <h3 className='text-blueHigher text-[1.875rem] md:text-[3rem] 3xl:text-[4rem] leading-[1.875rem] md:leading-[3rem] 3xl:leading-[3.75rem] font-black '>
                    THE AUSADVENT CARE WAY
                </h3>
                <div className="mt-[0.5rem] border-b-[0.3125rem] border-[#1D51C3] w-[6.375rem] "></div>
            </div>
            
            <div className='xl:w-1/2 flex flex-col gap-[2rem] lg:gap-[3rem] '>
                <p className='text-[#374151] font-bold md:text-[1.125rem] 3xl:text-[1.25rem] leading-[1.5rem] md:leading-[1.625rem]'>
                    At Ausadvent Care, we pride ourselves in helping you implement your NDIS plan: by providing tailored services, experienced support workers and connecting you to suitable Allied health professionals.
                </p>

                <Link className='sm:mx-auto w-full flex' href={'/locations#form'} scroll >
                    <button className='w-full sm:w-[25rem] md:w-[24.375rem] xl:w-full sm:mx-auto text-primaryWhite font-bold bg-gradient-to-b from-[#1D51C3] to-[#3E7BFF] py-[0.5rem] xl:py-[1rem] rounded-lg text-[1.125rem]'>
                        Contact us
                    </button>
                </Link>
            </div>

        </div>

    </div>
  )
}
