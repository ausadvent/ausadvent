import Image from 'next/image'
import React from 'react'

// Assets
import Lotus from '../../../assets/ndis-lotus.svg'
import Symbol from '../../../assets/ndis-lotus-2.svg'
import Arrow from '../../../assets/right-arrow-ndis.svg'
import Check from '../../../assets/check.svg'
import Link from 'next/link'

export default function Description() {
  return (
    <section className='relative'>
        {/* Lotus */}
        <div className='absolute -mt-[4rem] w-full flex justify-center '>
            <Image className='w-[21.74rem] h-[15.63rem] mx-auto' src={Lotus} title='Ausadvent logo' alt='Ausadvent logo' width={20} height={20} loading='eager' />
        </div>
        {/* Content */}
        <div className='pt-[13rem] page'>
            <div className="flex flex-col gap-[1.5rem]">
                <h2 className='cormorant text-[1.5rem] font-bold text-[#6B7280] '>Jump To Section</h2>
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
            <div className=" mt-[2rem] flex flex-col gap-[4rem]">
                {/* Box for Understanding */}
                <div className="flex flex-col gap-[2rem]">
                    <h2 className='cormorant text-[1.5rem] font-bold text-blueHigher '>Understanding The NDIS</h2>
                    <p className='text-[#374151]'>The NDIS, or National Disability Insurance Scheme, represents a groundbreaking initiative designed to empower individuals with disabilities. Unlike traditional models, the NDIS places the power directly in the hands of the person in need, providing them with financial support and the autonomy to choose the type and level of support that aligns with their individual needs and aspirations.</p>
                </div>
                {/* Box for Eligibility */}
                <div className="flex flex-col gap-[2rem] text-[#374151]">
                    <h2 className='cormorant text-[1.5rem] font-bold text-blueHigher '>Eligibility For NDIS</h2>
                    <p className=''>The NDIS is available for individuals who meet the following criteria:</p>
                    <ul className="flex flex-col gap-[0.5rem]">
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
                    <div className="p-[1rem] flex flex-col gap-[2rem] border-[1px] border-[#2563EB] rounded-[0.5rem] text-[#374151]">
                        <p>To check your eligibility, visit the <Link href={'https://www.ndis.gov.au/applying-access-ndis/am-i-eligible'} target='_blank' className='text-[#2563EB] font-semibold'>NDIS Access Checklist</Link></p>
                        <p>Remember, even if you&apos;re not currently receiving disability services, you may still be eligible. The process is simpler than you think – simply contact the <Link href={'https://www.ndis.gov.au/'} target='_blank' className='text-[#2563EB] font-semibold'>NDIS</Link> directly or call <span className='text-[#2563EB] font-semibold'>1800 800 110</span> to initiate your journey</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}