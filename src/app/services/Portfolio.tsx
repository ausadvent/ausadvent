import React from 'react'
import Link from 'next/link'
import { fetchData } from '../utils/fetchServices'

// Assets
import Symbol from '../../../assets/symbol.svg'
import Image from 'next/image'
import Arrow from '../../../assets/blue-right-arrow.svg'

export default async function Portfolio({services}:any) {
//   const services = await fetchData()
  
    return (
    <div className='page py-[3.5rem]'>
        <div>
            <p className='text-[1rem]'>Our <strong>Supported Accommodation</strong> portfolio offers four distinct avenues to empower your unique journey, wherever you call home.</p>
            <div className="mt-[2rem] flex flex-col gap-[1.5rem]">
                <h3 className='cormorant text-[1.5rem] text-[#6B7280]'>Jump To Section</h3>
                {/* Services List */}
                <div className="flex flex-col gap-[0.5rem]">
                    {services.map((service: any, index: any) => (
                        <Link href={'/'} scroll key={index} className="flex items-center gap-[0.5rem]">
                            <Image className='w-[0.8rem] h-[1rem]' src={Symbol} alt='Ausadvent symbol' title='Ausadvent symbol' width={20} height={20} loading='lazy' />
                            <p className='cormorant text-[1.20rem] text-[#2563EB]'>{service?.fields.serviceTitle}</p>
                            <Image className='w-[0.94rem] h-[1rem]' src={Arrow} alt='Blue right arrow' title='Right arrow' width={20} height={20} loading='lazy' />
                        </Link>
                    ))}
                </div>

                {/* Additional services */}
                <div className="flex flex-col gap-[0.5rem]">
                    <h3 className=''>Additional Services</h3>
                    <div className="flex flex-col">
                        <Link href={'/'} scroll className="flex items-center gap-[0.5rem]">
                            <Image className='w-[0.8rem] h-[1rem]' src={Symbol} alt='Ausadvent symbol' title='Ausadvent symbol' width={20} height={20} loading='lazy' />
                            <p className='cormorant text-[1.20rem] text-[#2563EB]'>Community Engagement</p>
                            <Image className='w-[0.94rem] h-[1rem]' src={Arrow} alt='Blue right arrow' title='Right arrow' width={20} height={20} loading='lazy' />
                        </Link>
                        <Link href={'/'} scroll className="flex items-center gap-[0.5rem]">
                            <Image className='w-[0.8rem] h-[1rem]' src={Symbol} alt='Ausadvent symbol' title='Ausadvent symbol' width={20} height={20} loading='lazy' />
                            <p className='cormorant text-[1.20rem] text-[#2563EB]'>Lifestyle Assistance</p>
                            <Image className='w-[0.94rem] h-[1rem]' src={Arrow} alt='Blue right arrow' title='Right arrow' width={20} height={20} loading='lazy' />
                        </Link>
                        <Link href={'/'} scroll className="flex items-center gap-[0.5rem]">
                            <Image className='w-[0.8rem] h-[1rem]' src={Symbol} alt='Ausadvent symbol' title='Ausadvent symbol' width={20} height={20} loading='lazy' />
                            <p className='cormorant text-[1.20rem] text-[#2563EB]'>Health & Well-Being</p>
                            <Image className='w-[0.94rem] h-[1rem]' src={Arrow} alt='Blue right arrow' title='Right arrow' width={20} height={20} loading='lazy' />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
