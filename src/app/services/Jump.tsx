import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

// Assets
import Symbol from '../../../assets/symbol.svg'
import Arrow from '../../../assets/blue-right-arrow.svg'

export default function Jump({services}: any) {
    return (
        <div className="flex flex-col gap-[0.5rem]">
        {services.slice().reverse().map((service: any, index: any) => (
            <Link href={`/services#${service.fields.serviceUrl}`} scroll key={index} className="flex items-center gap-[0.5rem]">
                <Image className='w-[0.8rem] h-[1rem]' src={Symbol} alt='Ausadvent symbol' title='Ausadvent symbol' width={20} height={20} loading='lazy' />
                <p className='cormorant text-[1.20rem] md:text-[1rem] lg:text-[1.25rem] text-[#2563EB]'>{service?.fields.serviceTitle}</p>
                <Image className='w-[0.94rem] h-[1rem]' src={Arrow} alt='Blue right arrow' title='Right arrow' width={20} height={20} loading='lazy' />
            </Link>
        ))}
    </div>
  )
}
