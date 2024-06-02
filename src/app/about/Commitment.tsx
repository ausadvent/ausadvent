import Link from 'next/link'
import React from 'react'

export default function Commitment() {
  return (
    <div className='page sm:mx-auto py-[2rem] md:py-[5rem] lg:pt-0 2xl:pb-[6rem] 3xl:pb-[8rem] 2xl:flex 2xl:gap-[4rem]'>
        <div className="flex flex-col gap-[2rem] 2xl:w-1/2">
            <h3 className='cormorant text-[1.5rem] lg:text-[1.875rem] 2xl:text-[2.25rem] 3xl:text-[3rem] text-blueHigher text-center md:text-left '>OUR COMMITMENT TO YOU</h3>
            <p className='text-[#374151] lg:text-[1.125rem] 2xl:text-[1.25rem]'>Rooted in the essence of the lotus flower, our logo symbolises purity, resilience, and growth – values that resonate in everything we do. Just as the lotus rises from the mud to bloom in unparalleled beauty, we believe every individual deserves opportunities to bloom, regardless of background or challenges. We are committed to aiding your journey toward independence, growth, and fulfilment, providing accesible housing and NDIS Accommodation in Queensland and Western Australia.</p>
        </div>
        <div className='mt-[2rem] 2xl:mt-0 sm:mt-[4rem] md:mt-[2rem] flex flex-col gap-[2rem] 2xl:w-1/2'>
            <h3 className='cormorant text-[1.5rem] lg:text-[1.875rem] 2xl:text-[2.25rem] 3xl:text-[3rem] leading-[1.625rem] 2xl:leading-[2.375rem] 3xl:leading-[3.125rem] font-bold text-blueHigher'>Your Needs Blossom with Personalised Services</h3>
            <div className="flex flex-col gap-[1rem] lg:text-[1.125rem] 2xl:text-[1.25rem]">
                <p className="text-[#374151]">From reliable transportation and personal care to social support and skill development, <strong>Ausadvent Care</strong> tailors its services to your unique needs and NDIS goals. </p>
                <p className="text-[#374151]">
                  Whether you&apos;re seeking <Link className='text-[#2563EB] font-bold' href={`/services#supported-independent-living`}>Supported Independent Living</Link> in your own home, exploring <Link className='text-[#2563EB] font-bold' href={`/services#short-term-accommodation`}>Short Term </Link> or <Link className='text-[#2563EB] font-bold' href={`/services#medium-term-accommodation`}>Medium Term </Link> Accommodation options, or customising your <Link className='text-[#2563EB] font-bold' href={`/services#individualised-living-options`}>Individualised Living Options</Link>, we&apos;ll work alongside you to craft a plan that helps you bloom with respite care.
                </p>
            </div>
        </div>
    </div>
  )
}
