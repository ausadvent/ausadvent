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
    <main className='page sm:mx-auto py-[2rem] md:py-[4.5rem] lg:py-[5rem] xl:py-[6rem]'>
        <h3 className='cormorant text-[1.875rem] md:text-[3rem] font-bold md:text-center'>OUR SERVICES</h3>
        <p className='mt-[3rem] md:mt-[4.5rem] lg:mt-[5rem] xl:mt-[6rem] xl:max-w-[44rem] xl:mx-auto text-[1rem] md:text-[1.25rem] leading-[1.5rem] md:leading-[1.75rem] md:text-center'>
          Our <strong>NDIS Services</strong> and <strong>Supported Accommodation</strong> solutions in Queensland and Western Australia are designed to empower individuals with tailored plans for independent living, ensuring accesible housing and respite care. 
          Discover our <Link rel="stylesheet" href="/locations" ><strong className='text-[#F59E0B]'> locations </strong>here</ Link>.
        </p>

        {/* Services cards container */}
        <div className='mt-[3rem] md:mt-[4.5rem] lg:mt-[5rem] xl:mt-[6rem] flex flex-col gap-[3rem] md:gap-[8rem] 2xl:grid xl:grid-cols-2 3xl:px-[6rem]'>
          {services?.slice().reverse().map((service:any, index:any) => (
            <div key={service?.fields.serviceUrl} className={`flex flex-col md:flex-row gap-[2rem] ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''} 2xl:flex-col`}>
              <div className='flex gap-[1rem] items-start md:hidden 2xl:flex'>
                <Image className='w-[1.625rem] h-[2rem]' src={Symbol} alt='Ausadvent symbol' title='Ausadvent symbol' width={26} height={32} loading='lazy' />
                <h4 className='cormorant text-[1.875rem] 2xl:text-[3rem] font-bold leading-[2rem] 2xl:leading-[3.125rem]'>{service?.fields.serviceTitle}</h4>
              </div>
              {/* Image container */}
              <div className='relative'>
                <div className='md:w-[19rem] lg:w-[23rem] xl:w-[31rem] 2xl:w-full'>
                  <Image 
                    src={`https:${service.fields.serviceMainImage.fields.file.url}`}
                    className='w-full sm:w-[31.25rem] md:w-[19rem] lg:w-[23rem] xl:w-[31rem] 2xl:w-full h-[18rem] rounded-tr-3xl rounded-bl-3xl object-cover'
                    alt={service?.fields.serviceMainImage.fields.description }
                    title={service?.fields.serviceMainImage.fields.title}
                    width={380}
                    height={288} 
                    unoptimized
                    loading='lazy'
                  />
                </div>
                <div className="absolute right-0 w-2/5 border-b-[0.3rem] border-blue-400"></div>
              </div>
              {/* Text container */}
              <div className='flex flex-col gap-[1rem]'>
                {/* Title */}
                <div className='hidden md:flex gap-[1rem] items-center 2xl:hidden'>
                  <Image className='lg:w-[1.5rem] lg:h-[2rem]' src={Symbol} alt='Ausadvent symbol' title='Ausadvent symbol' loading='lazy' />
                  <h4 className='cormorant text-[1.5rem] lg:text-[2.25rem] font-bold leading-[1.625rem] lg:leading-[2.375rem]'>{service?.fields.serviceTitle}</h4>
                </div>
                {/* Description */}
                <p className='md:text-[1.25rem] md:leading-[1.75rem]'>{service?.fields.serviceDescription}</p>
                <Link href={`/services#${service.fields.serviceUrl}`} className='flex items-center gap-[0.5rem]'>
                  <Image src={Eye} alt='eye icon' title='eye icon' height={14} width={18} />
                  <p className='text-[#F59E0B]'>Read more</p>
                  <Image src={Right} alt='Right arrow' title='Right arrow' height={8} width={6} />
                </Link>
              </div>
            </div>
          ))}
        </div>
    </main>
  )
}
