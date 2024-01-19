'use client'

import Image from 'next/image'
import React from 'react'

// Assets
import Vector from '../../../assets/rounded-vector.svg'

export default function ServicesDescription({services}:any) {
    console.log(services)
    return (
    <div className='bg-[#FFD8AF] rounded-3xl'>
        <div className="pt-[1.5rem] flex flex-col gap-[3.5rem]">
            {services.map((service: any, index: any) => (
                <div 
                    key={index}
                    className='page py-[4.5rem] bg-[#FFEDD5] flex flex-col gap-[3rem] rounded-tr-[6rem] text-[#374151] '
                >
                    {/* Title */}
                    <div className='relative'>
                        <h2 className=' cormorant text-[2.25rem] leading-[2.375rem] font-semibold' >{service?.fields.serviceTitle}</h2>
                        <div className="absolute left-0 w-2/5 border-b-[0.3rem] border-blue-400"></div>
                    </div>

                    {/* Main image */}
                    <div className='relative h-[18.75rem] w-full'>
                        <Image 
                            className=' h-[18.75rem] w-full object-cover rounded-tr-[2rem]'
                            src={service.fields.imageN2.fields.file.url}
                            title={service.fields.imageN2.fields.title}
                            alt={service.fields.imageN2.fields.description}
                            width={20}
                            height={20}
                            loading='lazy' 
                            unoptimized  
                        />
                        <div className="absolute right-0 top-[18.75rem] w-2/5 border-b-[0.3rem] border-blue-400"></div>
                    </div>
                    
                    <h3 className='cormorant text-[1.5rem] font-bold leading-[1.625rem]'>{service?.fields.serviceSlogan}</h3>
                    
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
                                        className='w-[22.375rem] h-[15.625rem] object-cover'
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
                    <div className="flex flex-col gap-[1.5rem]">
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
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}
