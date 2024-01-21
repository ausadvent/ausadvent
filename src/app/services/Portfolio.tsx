import React from 'react'
import Link from 'next/link'

// Assets
import Symbol from '../../../assets/symbol.svg'
import Image from 'next/image'
import Arrow from '../../../assets/blue-right-arrow.svg'

export default async function Portfolio({services}:any) {
    return (
    <div className='page sm:mx-auto py-[3.5rem] sm:py-[4rem]'>
        <div className='md:flex md:items-center lg:justify-center gap-[3rem]'>
            <p className='text-[1rem] lg:text-[1.125rem] xl:text-[1.25rem] md:w-[14.625rem] xl:w-[34.63rem]'>Our <strong>Supported Accommodation</strong> portfolio offers four distinct avenues to empower your unique journey, wherever you call home.</p>
            <div className="mt-[2rem] md:mt-0 sm:mt-[3rem] flex flex-col gap-[1.5rem]">
                <h3 className='cormorant text-[1.5rem] text-[#6B7280]'>Jump To Section</h3>
                {/* Services List */}
                <div className="flex flex-col gap-[0.5rem]">
                    {services.map((service: any, index: any) => (
                        <Link href={`/services#${service.fields.serviceUrl}`} scroll key={index} className="flex items-center gap-[0.5rem]">
                            <Image className='w-[0.8rem] h-[1rem]' src={Symbol} alt='Ausadvent symbol' title='Ausadvent symbol' width={20} height={20} loading='lazy' />
                            <p className='cormorant text-[1.20rem] md:text-[1rem] lg:text-[1.25rem] text-[#2563EB]'>{service?.fields.serviceTitle}</p>
                            <Image className='w-[0.94rem] h-[1rem]' src={Arrow} alt='Blue right arrow' title='Right arrow' width={20} height={20} loading='lazy' />
                        </Link>
                    ))}
                </div>
{/* services#${service.fields.serviceUrl} */}
                
            </div>
        </div>
    </div>
  )
}
