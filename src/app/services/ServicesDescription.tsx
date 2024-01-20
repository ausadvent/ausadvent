'use client'

import Image from 'next/image'
import React from 'react'
import Link from 'next/link'

// Assets
import Vector from '../../../assets/rounded-vector.svg'
import DownArrow from '../../../assets/down-arrow.svg'
import MessageIcon from '../../../assets/message-icon.svg'
import MessageIcon2 from '../../../assets/message-icon-2.svg'

export default function ServicesDescription({services}:any) {
    console.log(services)
    return (
    <div className='bg-[#FFD8AF] rounded-3xl'>
        <div className="py-[1.5rem] flex flex-col gap-[3.5rem]">
            {services.map((service: any, index: any) => (
                <div 
                    key={index}
                    className='py-[4.5rem] bg-[#FFEDD5] rounded-tr-[6rem] sm:rounded-tr-[9rem] rounded-bl-[6rem] sm:rounded-bl-[9rem] text-[#374151] '
                    id={service.fields.serviceUrl}
                >
                    <div className='page sm:mx-auto flex flex-col gap-[3rem]'>
                        {/* Title */}
                        <div className='relative'>
                            <h2 className=' cormorant text-[2.25rem] md:text-[3rem] leading-[2.375rem] md:leading-[3.125rem] font-semibold' >{service?.fields.serviceTitle}</h2>
                            <div className="absolute sm:mt-1 left-0 w-2/5 sm:w-[6.375rem] border-b-[0.3rem] border-blue-400"></div>
                        </div>

                        {/* Main image */}
                        <div className='relative h-[18.75rem] md:h-[28.125rem] w-full'>
                            <Image 
                                className=' h-[18.75rem] md:h-[28.125rem] w-full object-cover rounded-tr-[2rem]'
                                src={service.fields.imageN2.fields.file.url}
                                title={service.fields.imageN2.fields.title}
                                alt={service.fields.imageN2.fields.description}
                                width={20}
                                height={20}
                                loading='lazy' 
                                unoptimized  
                            />
                            <div className="absolute right-0 top-[18.75rem] md:top-[28.125rem] w-2/5 border-b-[0.3rem] border-blue-400"></div>
                        </div>
                        
                        <h3 className='cormorant text-[1.5rem] md:text-[1.875rem] font-bold leading-[1.625rem] md:leading-[2.065rem]'>{service?.fields.serviceSlogan}</h3>
                        
                        <p>{service?.fields.principalDescription}</p>
                        
                        {/* Picture this container */}
                        <div className="flex flex-col gap-[1rem]">
                            <h4 className='font-bold'>Picture this:</h4>
                            {service?.fields.picture.content.map((item: any, index: any) => {
                                if(item.nodeType.startsWith("paragraph")) {
                                    return (
                                        <p key={index}>{item.content[0].value}</p>
                                    )
                                } else {
                                    return (
                                        <Image 
                                            key={index}
                                            className='w-full h-[15.625rem] object-cover rounded-tr-[2rem]'
                                            src={item.data.target.fields.file.url}
                                            title={item.data.target.fields.title}
                                            alt={item.data.target.fields.description}
                                            width={20}
                                            height={20}
                                            loading='lazy'
                                            unoptimized
                                        />
                                    )
                                }
                            })}

                        </div>

                        {/* About boxes parent container */}
                        <div className="flex flex-col items-center gap-[1.5rem]">
                            <h3 className="cormorant text-[1.775rem] leading-[2rem]">Remember, {service.fields.serviceAcronym} Is All About:</h3>
                            {/* About box 1*/}
                            <div className="p-[1rem] flex flex-col gap-[1rem] bg-[#FDBA74] border-2 border-[#2563EB] rounded">
                                {service?.fields.aboutBox1.content.map((item: any, index: any) => {
                                    if(item.nodeType.startsWith("heading")) {
                                        return (
                                            <h3 key={index} className='text-[1.125rem] font-semibold text-[#1F2937]'>{item.content[0].value}</h3>
                                        )
                                    } else {
                                        return (
                                            <p key={index}>{item.content[0].value}</p>
                                        )
                                    }
                                } )}
                            </div>
                            <Image className='w-[1.64rem] h-[0.8rem] mx-auto' src={DownArrow} title='Down arrow' alt='Down arrow' width={20} height={20} loading='lazy' />
                            {/* About box 2*/}
                            <div className="p-[1rem] flex flex-col gap-[1rem] bg-[#FDBA74] border-2 border-[#2563EB] rounded">
                                {service?.fields.aboutBox2.content.map((item: any, index: any) => {
                                    if(item.nodeType.startsWith("heading")) {
                                        return (
                                            <h3 key={index} className='text-[1.125rem] font-semibold text-[#1F2937]'>{item.content[0].value}</h3>
                                        )
                                    } else {
                                        return (
                                            <p key={index}>{item.content[0].value}</p>
                                        )
                                    }
                                } )}
                            </div>
                            <Image className='w-[1.64rem] h-[0.8rem] mx-auto' src={DownArrow} title='Down arrow' alt='Down arrow' width={20} height={20} loading='lazy' />
                            {/* About box 3 */}
                            <div className="p-[1rem] flex flex-col gap-[1rem] bg-[#FDBA74] border-2 border-[#2563EB] rounded">
                                {service?.fields.aboutBox3.content.map((item: any, index: any) => {
                                    if(item.nodeType.startsWith("heading")) {
                                        return (
                                            <h3 key={index} className='text-[1.125rem] font-semibold text-[#1F2937]'>{item.content[0].value}</h3>
                                        )
                                    } else {
                                        return (
                                            <p key={index}>{item.content[0].value}</p>
                                        )
                                    }
                                } )}
                            </div>

                            <p>Learn more about <Link className='text-[#2563EB] font-semibold' target='_blank' href={'https://www.ndis.gov.au/providers/housing-and-living-supports-and-services/supported-independent-living-provider-guidance/sil-funding-and-budgets' }> NDIS funding for SIL</Link> on the official website</p>
                        </div>
                        
                        {/* Contact us message */}
                        <div className="mx-auto flex gap-[0.5rem] items-center">
                            <Image className='w-[1rem] h-[1rem]' src={MessageIcon} title='Message icon' alt='Message icon' width={20} height={20} loading='lazy' />
                            <p className='font-semibold'><span className='text-[#2563EB]'>Contact us</span> for a free consultation</p>
                        </div>

                        {/* Note */}
                        {service.fields.finalNote ? (
                            <div className='mb-[2rem] py-[1.5rem] px-[0.5rem] flex flex-col gap-[1rem] border border-[#F59E0B] rounded-lg '>
                                <div className="flex items-center gap-[0.5rem]">
                                    <Image className='w-[1.05rem] h-[1rem]' src={MessageIcon2} title='Message icon' alt='Message icon' width={20} height={20} loading='lazy' />
                                    <p className='text-[#A16207] font-semibold'>Important note:</p>
                                </div>
                                <p className=' font-semibold '>{service.fields.finalNote}</p>
                            </div>
                        ) : ('')}
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}
