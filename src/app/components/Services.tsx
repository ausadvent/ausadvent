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
  
  return (
    <div className='page sm:mx-auto py-[2rem] md:py-[4.5rem]'>
        <h2 className='cormorant text-[1.875rem] md:text-[3rem] font-bold md:text-center'>OUR SERVICES</h2>
        <p className='mt-[3rem] md:mt-[4.5rem] text-[1rem] md:text-[1.25rem] leading-[1.5rem] md:leading-[1.75rem] md:text-center'>Our <strong>Supported Accommodation</strong> service is designed to empower individuals with tailored solutions for independent living.</p>

        {/* Services cards container */}
        <div className='mt-[3rem] md:mt-[4.5rem] flex flex-col gap-[3rem] md:gap-[8rem]'>
          {services?.slice().reverse().map((service:any, index:any) => (
            <div key={service?.fields.serviceUrl} className={`flex flex-col md:flex-row gap-[2rem] ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
              <div className='flex gap-[1rem] items-start md:hidden'>
                <Image src={Symbol} alt='Ausadvent symbol' title='Ausadvent symbol' />
                <h3 className='cormorant text-[1.875rem] font-bold leading-[2rem]'>{service?.fields.serviceTitle}</h3>
              </div>
              {/* Image container */}
              <div className='relative'>
                <div className='md:w-[19rem]'>
                  <Image 
                    src={`http:${service.fields.serviceMainImage.fields.file.url}`}
                    className='w-[22.37rem] sm:w-[31.25rem] md:w-[19rem] h-[18rem] rounded-tr-3xl rounded-bl-3xl object-cover'
                    alt={service?.fields.serviceMainImage.fields.description }
                    title={service?.fields.serviceMainImage.fields.title}
                    width={22.37}
                    height={18} 
                    unoptimized
                  />
                </div>
                <div className="absolute right-0 w-2/5 border-b-[0.3rem] border-blue-400"></div>
              </div>
              {/* Text container */}
              <div className='flex flex-col gap-[1rem]'>
                {/* Title */}
                <div className='hidden md:flex gap-[1rem] items-center'>
                  <Image src={Symbol} alt='Ausadvent symbol' title='Ausadvent symbol' />
                  <h3 className='cormorant text-[1.5rem] font-bold leading-[1.625rem]'>{service?.fields.serviceTitle}</h3>
                </div>
                {/* Description */}
                <p className='md:text-[1.25rem] md:leading-[1.75rem]'>{service?.fields.serviceDescription}</p>
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
