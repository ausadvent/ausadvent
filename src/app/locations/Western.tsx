import Image from 'next/image'
import React from 'react'

// Assets
import Wa from '../../../assets/wa-map.svg'

export default function Western() {
  return (
    <section className='page sm:mx-auto mt-[2rem] md:mt-[4rem] xl:mt-0 xl:min-h-[30.75rem] ' id='western'>
       
        <div className='bg-white rounded-tr-[2rem] rounded-bl-[1rem] p-[1rem] md:p-[2rem] lg:p-[1.5rem] lg:flex xl:flex-col gap-[2rem] xl:gap-[0.5rem] xl:min-h-[30.75rem]'>
            <div className='lg:w-1/2 xl:w-full lg:py-[2rem] xl:py-0 lg:flex flex-col gap-[1rem]'>
                <h2 className="cormorant text-[#6B7280] md:text-[1.5rem] font-bold">Western Australia</h2>
                <div className=' border-b-[0.3125rem] border-[#F59E0B] w-[5.375rem] lg:-mt-[1rem]  '></div>
                <p className='hidden lg:inline xl:hidden  text-[#6B7280] md:text-[1.125rem] '>Level 6, 140 William Street, Perth, Western Australia 6000</p>
                <p className='hidden lg:inline xl:hidden   text-[#6B7280]  md:text-[1.125rem] font-semibold'>We have expanded our services to Western Australia, operating throughout Perth and Western Australia.</p>
            </div>
            <div className='lg:w-1/2 xl:w-full xl:flex flex-col gap-[1rem]'>
              <p className='lg:hidden xl:inline mt-[1rem] text-[#6B7280] md:text-[1.125rem] '>Level 6, 140 William Street, Perth, Western Australia 6000</p>
              <Image 
                className='sm:mt-[0.5rem] lg:mt-0 h-[12.188rem] w-full lg:h-full object-cover rounded-tr-[2rem] rounded-bl-[1rem]' 
                src={Wa} 
                title='Ausadvent location in Queensland' 
                alt='Location of the company in a map' 
                width={311.2} 
                height={195}  
                loading='eager' 
              />
              <p className='lg:hidden xl:inline sm:mt-[0.5rem]  text-[#6B7280]  md:text-[1.125rem] font-semibold'>We have expanded our services to Western Australia, operating throughout the North and south Perth.</p>
            </div>
        </div>
    </section>
  )
}
