'use client'

import React, { useEffect, useState } from 'react'
import { fetchData } from '../utils/fetchServices'
import Image from 'next/image'

// Assets
import Symbol from '../../../assets/symbol.svg'
import Eye from '../../../assets/eye-icon.svg'
import Right from '../../../assets/right-arrow.svg'
import Link from 'next/link'

export default function Services() {
  
  const [services, setServices] = useState<any>()
  useEffect(() => {
    async function fetchingData() {
      const res:any = await fetchData()
      setServices(res)
    }
    fetchingData()
  }, [])
  console.log('hey',services)
  
  return (
    <div className='page py-[2rem]'>
        <h2 className='cormorant text-[1.875rem] font-bold'>OUR SERVICES</h2>
        <p className='mt-[3rem] text-[1rem] leading-[1.5rem]'>Our <strong>Supported Accommodation</strong> service is designed to empower individuals with tailored solutions for independent living.</p>

        {/* Services cards container */}
        <div className='mt-[3rem] flex flex-col gap-[3rem]'>
          {services?.slice().reverse().map((service:any) => (
            <div key={service?.fields.serviceUrl} className='flex flex-col gap-[2rem]'>
              <div className='flex gap-[1rem] items-start'>
                <Image src={Symbol} alt='Ausadvent symbol' title='Ausadvent symbol' />
                <h3 className='cormorant text-[1.875rem] font-bold leading-[2rem]'>{service?.fields.serviceTitle}</h3>
              </div>
              <div className='relative'>
                <div className='relative'>
                  <Image 
                    src={`http:${service.fields.serviceMainImage.fields.file.url}`}
                    className='w-[22.37rem] h-[18rem] rounded-tr-3xl rounded-bl-3xl'
                    alt={service?.fields.serviceMainImage.fields.description }
                    title={service?.fields.serviceMainImage.fields.title}
                    width={22.37}
                    height={18} 
                    unoptimized
                  />
                </div>
                <div className="absolute right-0 w-2/5 border-b-[0.3rem] border-blue-400"></div>

              </div>
              <div className='flex flex-col gap-[1rem]'>
                <p className=''>{service?.fields.serviceDescription}</p>
                <Link href={service?.fields.serviceUrl} className='flex items-center gap-[0.5rem]'>
                  <Image src={Eye} alt='eye icon' title='eye icon' />
                  <p className='text-[#F59E0B]'>Read more</p>
                  <Image src={Right} alt='Right arrow' title='Right arrow' />
                </Link>
              </div>
            </div>
          ))}
        </div>
    </div>
  )
}
