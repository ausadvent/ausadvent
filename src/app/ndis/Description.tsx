import Image from 'next/image'
import React from 'react'
import Link from 'next/link'

// Assets
import Lotus from '../../../assets/ndis-lotus.svg'
import Symbol from '../../../assets/ndis-lotus-2.svg'
import Arrow from '../../../assets/right-arrow-ndis.svg'
import Check from '../../../assets/check.svg'


export default function Description() {
  return (
    <section className='relative'>
        {/* Lotus */}
        <div className='absolute -mt-[4rem] sm:-mt-[10rem] w-full flex justify-center '>
            <Image 
                className='w-[21.74rem] h-[15.63rem] mx-auto' 
                src={Lotus} 
                title='Ausadvent logo' 
                alt='Ausadvent logo' 
                width={347.84} 
                height={250} 
                loading='eager' 
            />
        </div>
        {/* Content */}
        <div className='page sm:mx-auto pt-[13rem] sm:pt-[8rem] pb-[2rem] 2xl:pb-[5.5rem] 3xl:pb-[6.5rem] '>
            <div className="flex flex-col gap-[1.5rem]">
                <h3 className='cormorant text-[1.5rem] lg:text-[1.875rem] 2xl:text-[2.25rem] font-bold text-[#6B7280] '>Jump To Section</h3>
                <ul className='flex flex-col gap-[0.5rem] cormorant text-[1.5rem] text-[#2563EB]'>
                    <li className='flex gap-[0.5rem] items-center'>
                        <Image className='w-[0.81rem] h-[1rem]' src={Symbol} title='Ausadvent logo' alt='Ausadvent logo' width={20} height={20} loading='lazy' />
                        <p>Understanding The NDIS</p>
                        <Image className='w-[0.94rem] h-[1rem]' src={Arrow} title='Right arrow' alt='Right arrow' width={20} height={20} loading='lazy' />        
                    </li>
                    <li className='flex gap-[0.5rem] items-center'>
                        <Image className='w-[0.81rem] h-[1rem]' src={Symbol} title='Ausadvent logo' alt='Ausadvent logo' width={20} height={20} loading='lazy' />
                        <p>Eligibility For NDIS</p>
                        <Image className='w-[0.94rem] h-[1rem]' src={Arrow} title='Right arrow' alt='Right arrow' width={20} height={20} loading='lazy' />
                    </li>
                    <li className='flex gap-[0.5rem] items-center'>
                        <Image className='w-[0.81rem] h-[1rem]' src={Symbol} title='Ausadvent logo' alt='Ausadvent logo' width={20} height={20} loading='lazy' />
                        <p>The NDIS Rollout</p>
                        <Image className='w-[0.94rem] h-[1rem]' src={Arrow} title='Right arrow' alt='Right arrow' width={20} height={20} loading='lazy' />
                    </li>
                </ul>
            </div>
            {/* Description boxes container */}
            <div className=" mt-[2rem] md:mt-[4rem] flex flex-col 3xl:flex-row gap-[4rem]">
                {/* Box for Understanding */}
                <div className=" 3xl:w-1/3 flex flex-col gap-[2rem]">
                    <h2 className='cormorant text-[1.5rem] lg:text-[1.875rem] 2xl:text-[2.25rem] font-bold text-blueHigher '>Understanding The NDIS</h2>
                    <p className='text-[#374151] lg:text-[1.125rem] 2xl:text-[1.25rem]'>The NDIS, or National Disability Insurance Scheme, represents a groundbreaking initiative designed to empower individuals with disabilities. Unlike traditional models, the NDIS places the power directly in the hands of the person in need, providing them with financial support and the autonomy to choose the type and level of support that aligns with their individual needs and aspirations.</p>
                </div>
                {/* Box for Eligibility */}
                <div className=" 3xl:w-2/3 flex flex-col lg:flex-row gap-[2rem] text-[#374151]">
                    <div className='lg:w-1/2 flex flex-col gap-[2rem]'>
                        <h3 className='cormorant text-[1.5rem] lg:text-[1.875rem] 2xl:text-[2.25rem] font-bold text-blueHigher '>Eligibility For NDIS</h3>
                        <p className='lg:text-[1.125rem] 2xl:text-[1.25rem]'>The NDIS is available for individuals who meet the following criteria:</p>
                        <ul className="flex flex-col gap-[0.5rem] lg:text-[1.125rem] 2xl:text-[1.25rem]">
                            <li className="flex items-center gap-[0.5rem]">
                                <Image className='w-[1rem] h-[1rem]' src={Check} title='Check symbol' alt='Check symbol' width={20} height={20} loading='lazy' />
                                <p>Under the age of 65</p>
                            </li>
                            <li className="flex items-center gap-[0.5rem]">
                                <Image className='w-[1rem] h-[1rem]' src={Check} title='Check symbol' alt='Check symbol' width={20} height={20} loading='lazy' />
                                <p>Australian Citizens or Permanent Residents</p>
                            </li>
                            <li className="flex items-center gap-[0.5rem]">
                                <Image className='w-[1rem] h-[1rem]' src={Check} title='Check symbol' alt='Check symbol' width={20} height={20} loading='lazy' />
                                <p>Have a permanent and significant disability</p>
                            </li>
                        </ul>
                    </div>
                    <div className="lg:w-1/2  p-[1rem] flex flex-col gap-[2rem] border-[1px] border-[#2563EB] rounded-[0.5rem] text-[#374151] lg:text-[1.125rem] 2xl:text-[1.25rem] 2xl:justify-center">
                        <p>To check your eligibility, visit the <Link href={'https://www.ndis.gov.au/applying-access-ndis/am-i-eligible'} target='_blank' className='text-[#2563EB] font-semibold'>NDIS Access Checklist</Link></p>
                        <p>Remember, even if you&apos;re not currently receiving disability services, you may still be eligible. The process is simpler than you think – simply contact the <Link href={'https://www.ndis.gov.au/'} target='_blank' className='text-[#2563EB] font-semibold'>NDIS</Link> directly or call <span className='text-[#2563EB] font-semibold'>1800 800 110</span> to initiate your journey</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
