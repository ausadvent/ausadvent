import React from 'react'

export default function Intro() {
  return (
    <div className='bg-[#2563EB] h-screen -mt-[4rem]'>
        <div className='page pt-[6rem] pb-[2rem] h-full'>
            <div className="h-full flex flex-col justify-between sm:justify-around text-primaryWhite ">
                <h1 className='text-[2rem] leading-[2rem] font-bold'>AUSADVENT CARE&apos;S <span className='text-[#FC7]'>SUPPORTED ACCOMMODATION</span> SOLUTIONS</h1>
                <h2 className='cormorant text-[1.5rem] sm:text-[1.875rem] xl:text-[3rem] 3xl:text-[4rem] sm:leading-8 xl:leading-[3.125rem] 3xl:leading-[3.75rem] font-bold '>Empowering Independent Living Across Australia</h2>
                <div className="flex flex-col gap-[1rem]">
                    <p className='font-semibold'>At Ausadvent Care, we&apos;re more than just Queensland&apos;s trusted Disability Support partner with NDIS expertise. </p>
                    <p>We&apos;re your national champion for independent living, proudly guiding individuals towards vibrant lives throughout Queensland and Western Australia.</p>
                </div>
                <button className='w-full text-black bg-gradient-to-b from-[#FFD8AF] to-[#FDBA74] border py-[0.5rem] rounded-lg text-[1.125rem]'>Contact us</button>
            </div>
        </div>
    </div>
  )
}
