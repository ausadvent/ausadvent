
import Image from 'next/image'
import React from 'react'
import Link from 'next/link'

// Assets
import DownArrow from '../../../assets/down-arrow.svg'
import RightArrow from '../../../assets/blue-right-arrow-2.svg'
import MessageIcon from '../../../assets/message-icon.svg'
import MessageIcon2 from '../../../assets/message-icon-2.svg'
import divider from '../../../assets/divider.svg'

export default function ServicesDescription({services}:any) {

    return (
    <div className='bg-[#FFD8AF] rounded-3xl'>
        <div className="py-[1.5rem] flex flex-col gap-[3.5rem]">
            {services?.slice().reverse().map((service: any, index: any) => (
                <div 
                    key={index}
                    className='py-[4.5rem] bg-[#FFEDD5] rounded-tr-[6rem] sm:rounded-tr-[9rem] xl:rounded-tr-[15rem] rounded-bl-[6rem] sm:rounded-bl-[9rem] xl:rounded-bl-[15rem] text-[#374151] '
                    id={service.fields.serviceUrl}
                >
                    <div className='page sm:mx-auto flex flex-col gap-[3rem] xl:gap-[4.5rem]'>
                        {/* Title */}
                        <div className='relative'>
                            <h2 className=' cormorant text-[2.25rem] md:text-[3rem] xl:text-[4rem] leading-[2.375rem] md:leading-[3.125rem] xl:leading-[4.375rem] font-semibold' >{service?.fields.serviceTitle}</h2>
                            <div className="absolute sm:mt-1 left-0 w-2/5 sm:w-[6.375rem] border-b-[0.3rem] border-blue-400"></div>
                        </div>

                        {/* Main image */}
                        <div className='relative h-[18.75rem] md:h-[28.125rem] xl:h-[34.375rem] w-full'>
                            <Image 
                                className=' h-[18.75rem] md:h-[28.125rem] xl:h-[34.375rem] w-full object-cover rounded-tr-[2rem]'
                                src={`https:${service.fields.imageN2.fields.file.url}`}
                                title={service.fields.imageN2.fields.title}
                                alt={service.fields.imageN2.fields.description}
                                width={736}
                                height={450}
                                loading='lazy'  
                            />
                            <div className="absolute right-0 top-[18.75rem] md:top-[28.125rem] xl:top-[34.375rem] w-2/5 border-b-[0.3rem] border-blue-400"></div>
                        </div>
                        
                        <h3 className='cormorant text-[1.5rem] md:text-[1.875rem] xl:text-[2.25rem] font-bold leading-[1.625rem] md:leading-[2.065rem] xl:leading-[2.375rem]'>{service?.fields.serviceSlogan}</h3>
                        
                        <p className='lg:text-[1.125rem] xl:hidden'>{service?.fields.principalDescription}</p>
                        
                        {/* Picture this container until md inclusive */}
                        <div className="flex flex-col gap-[1rem] lg:hidden">
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
                                            src={`https:${item.data.target.fields.file.url}`}
                                            title={item.data.target.fields.title}
                                            alt={item.data.target.fields.description}
                                            width={1248}
                                            height={550}
                                            loading='lazy'
                                        />
                                    )
                                }
                            })}
                        </div>

                        {/* Picture this container from lg */}
                        <div className="hidden lg:flex items-stretch gap-[1.5rem] xl:gap-[2rem]">
                            <Image 
                                className='w-[23.25rem] xl:min-w-[31rem] object-cover rounded-tr-[2rem]'
                                src={`https:${service.fields.picture.content[1].data.target.fields.file.url}`} 
                                title={service.fields.picture.content[1].data.target.fields.title}
                                alt={service.fields.picture.content[1].data.target.fields.description}
                                width={372}
                                height={356}
                                loading='lazy'
                            />
                            {/* Paragraphs */}
                            <div className="flex flex-col gap-[1rem] text-[1.125rem]">
                            <p className='hidden xl:inline text-[1.125rem]'>{service?.fields.principalDescription}</p>
                                <h4 className='font-bold'>Picture this:</h4>
                                <p>{service.fields.picture.content[0].content[0].value}</p>
                                <p>{service.fields.picture.content[2].content[0].value}</p>
                            </div>
                        </div>

                        {/* About boxes + Heading parent container */}
                        <div className="flex flex-col items-center gap-[1.5rem] lg:gap-[4rem] xl:gap-[4.5rem]">
                            <h3 className="cormorant text-[1.775rem] lg:text-[2.25rem] xl:text-[3rem] leading-[2rem] lg:leading-[2.375rem]">Remember, {service.fields.serviceAcronym} Is All About:</h3>
                            {/* Just boxes container */}
                            <div className="flex flex-col lg:flex-row items-center lg:justify-center lg:items-stretch gap-[1.5rem] lg:gap-[0.5rem] xl:gap-[1rem]">
                                {/* About box 1*/}
                                <div className="p-[1rem] lg:p-[1.5rem] md:w-full sm:min-h-[7.6rem] lg:min-h-[16.4rem] flex flex-col gap-[1rem] 2xl:justify-center bg-[#FDBA74] border-2 border-[#2563EB] rounded lg:rounded-none lg:rounded-tr-[2rem] lg:rounded-bl-[1rem]">
                                    {service?.fields.aboutBox1.content.map((item: any, index: any) => {
                                        if(item.nodeType.startsWith("heading")) {
                                            return (
                                                <h3 key={index} className='text-[1.125rem] xl:text-[1.25rem] font-semibold text-[#1F2937]'>{item.content[0].value}</h3>
                                            )
                                        } else {
                                            return (
                                                <p key={index} className='xl:text-[1.125rem]'>{item.content[0].value}</p>
                                            )
                                        }
                                    } )}
                                </div>
                                <Image className='hidden lg:inline w-[1.64rem] h-[1.5rem] mx-auto self-center' src={RightArrow} title='Right arrow' alt='Right arrow' width={13.6} height={24} loading='lazy' />
                                <Image className='lg:hidden w-[1.64rem] h-[1.5rem] mx-auto self-center' src={DownArrow} title='Down arrow' alt='Down arrow' width={26.238} height={24} loading='lazy' />
                                {/* About box 2*/}
                                <div className="p-[1rem] lg:p-[1.5rem] md:w-full sm:min-h-[7.6rem] lg:min-h-[16.4rem] flex flex-col gap-[1rem] 2xl:justify-center bg-[#FDBA74] border-2 border-[#2563EB] rounded lg:rounded-none lg:rounded-tr-[2rem] lg:rounded-bl-[1rem]">
                                    {service?.fields.aboutBox2.content.map((item: any, index: any) => {
                                        if(item.nodeType.startsWith("heading")) {
                                            return (
                                                <h3 key={index} className='text-[1.125rem] xl:text-[1.25rem] font-semibold text-[#1F2937]'>{item.content[0].value}</h3>
                                            )
                                        } else {
                                            return (
                                                <p key={index} className='xl:text-[1.125rem]'>{item.content[0].value}</p>
                                            )
                                        }
                                    } )}
                                </div>
                                <Image className='hidden lg:inline w-[1.64rem] h-[1.5rem] mx-auto self-center' src={RightArrow} title='Right arrow' alt='Right arrow' width={13.6} height={20} loading='lazy' />
                                <Image className='lg:hidden w-[1.64rem] h-[1.5rem] mx-auto self-center' src={DownArrow} title='Down arrow' alt='Down arrow' width={26.238} height={24} loading='lazy' />
                                {/* About box 3 */}
                                <div className="p-[1rem] lg:p-[1.5rem] md:w-full sm:min-h-[7.6rem] lg:min-h-[16.4rem] flex flex-col gap-[1rem] 2xl:justify-center bg-[#FDBA74] border-2 border-[#2563EB] rounded lg:rounded-none lg:rounded-tr-[2rem] lg:rounded-bl-[1rem]">
                                    {service?.fields.aboutBox3.content.map((item: any, index: any) => {
                                        if(item.nodeType.startsWith("heading")) {
                                            return (
                                                <h3 key={index} className='text-[1.125rem] xl:text-[1.25rem] font-semibold text-[#1F2937]'>{item.content[0].value}</h3>
                                            )
                                        } else {
                                            return (
                                                <p key={index} className=' xl:text-[1.125rem]'>{item.content[0].value}</p>
                                            )
                                        }
                                    } )}
                                </div>

                            </div>

                            <p>Learn more about <Link className='text-[#2563EB] font-semibold' target='_blank' href={`${service.fields.ndisLink}`}> NDIS funding for {service.fields.serviceAcronym}</Link> on the official website</p>
                        </div>
                        
                        {/* Contact us message */}
                        <div className="mx-auto flex gap-[0.5rem] items-center">
                            <Image className='w-[1rem] h-[1rem]' src={MessageIcon} title='Message icon' alt='Message icon' width={20} height={20} loading='lazy' />
                            <p className='font-semibold'><Link href={'/locations#form'} scroll className='text-[#2563EB]'>Contact us</Link> for a free consultation</p>
                        </div>

                        {/* Note */}
                        {service.fields.finalNote ? (
                            <div className='mb-[2rem] py-[1.5rem] px-[0.5rem] lg:px-[1rem] flex flex-col gap-[1rem] border border-[#F59E0B] rounded-lg '>
                                <div className="flex items-center gap-[0.5rem]">
                                    <Image className='w-[1.05rem] h-[1rem]' src={MessageIcon2} title='Message icon' alt='Message icon' width={20} height={20} loading='lazy' />
                                    <p className='text-[#A16207] font-semibold xl:text-[1.25rem]'>Important note:</p>
                                </div>
                                <p className=' font-semibold  xl:text-[1.25rem] '>{service.fields.finalNote}</p>
                            </div>
                        ) : ('')}

                        {/* Just for the last service */}
                        {service === services[services.length - 1] ? (
                            <div className='flex flex-col gap-[1rem] mb-[1rem] sm:mb-[3rem]'>
                                <h3 className='cormorant text-[1.875rem] font-bold text-[#A16207] leading-[2.065rem] text-center'>At Ausadvent Care, we are committed to providing unparalleled support</h3>
                                <Image className='w-[6.375rem] h-[0.312rem] mx-auto' src={divider} title='Blue divider' alt='Blue divider' width={20} height={20} loading='lazy' />
                                <p className='text-center'> Focusing on <strong>skill development</strong>, and facilitating <strong>community integration</strong>, ensuring that Medium-Term Accommodation becomes a transformative step toward long-term <strong>independent living</strong>.</p>
                            </div>
                            ) : null
                        }
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}
