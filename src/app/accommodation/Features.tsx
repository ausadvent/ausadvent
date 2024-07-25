import React from 'react'
import { fetchData } from '../utils/fetchServices'
import Link from 'next/link'

export default async function Features() {
  const services = await fetchData()


  return (
    <article className='page sm:mx-auto py-[2rem] md:py-[5rem] lg:pt-0 2xl:pb-[6rem] 3xl:pb-[8rem] 2xl:flex 2xl:gap-[4rem]'>
        <h2 className='font-bold'>Key Features:</h2>
        <ul className=' list-disc pl-[1.5rem] '>
          <li>Sleek and beautiful 1-bedroom apartment</li>
          <li>1 modern bathroom</li>
          <li>Ceiling fans for comfort</li>
          <li>ILO Accommodation available</li>
          <li>Easy access to public transport</li>
          <li>Close proximity to medical facilities</li>
          <li>Near Logan Central for shopping convenience</li>
          <li>Quiet, residential location</li>
        </ul>

        <h3 className='mt-[2rem] font-bold'>Perfect For:</h3>
        <p>Individual Living Option (ILO), Individuals looking for a compact, low-maintenance living space with great local amenities and support options.</p>
    
        <h3 className='mt-[2rem] font-bold'>Why Choose This Property:</h3>
        <ul className=''>
          <li>✓ Low-maintenance apartment living</li>
          <li>✓ Location with easy access to essentials</li>
          <li>✓ Quiet setting in a bustling area</li>
        </ul>

        <h4 className='mt-[2rem] font-bold'>Local Area:</h4>
        <p>Logan Central offers a perfect blend of urban convenience and community charm. With shops, cafes, and services nearby, you&apos;ll have everything you need at your fingertips. The proximity to public transport and medical facilities ensures that all your needs are easily met.</p>
    
        <h4 className='mt-[2rem] font-bold'>Local Area:</h4>
        <p>Our experienced team is ready to provide tailored support to help you thrive in your new home. We&apos;ll work with you to create a personalised care plan that promotes your independence and enhances your quality of life.</p>

        {/* Divisor line */}
        <div className='mt-[2rem] border-b-[0.1rem] border-gray-600 w-full'></div>
        
        <h4 className='mt-[2rem] font-bold'>Get More Information about NDIS Supported Living Accommodation:</h4>
        <ul className=' mt-[1rem] list-disc pl-[1.5rem] flex flex-col gap-[1rem] '>
          {services.map((service:any, index) => (
            <li key={index} className=' underline text-blue-800 font-bold ' >
              <Link href={`/services#${service.fields.serviceUrl}`} scroll>
                {service.fields.serviceTitle}
              </Link>
            </li>
          ))}
        </ul>

    </article>
  )
}
