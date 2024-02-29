import Image from 'next/image'
import React from 'react'
import Link from 'next/link'

// Assets
import Guide from '../../../assets/ndis-blue-1.webp'
import Overwhelm from '../../../assets/ndis-blue-2.webp'
import Lotus from '../../../assets/ndis-lotus-3.png'

export default function Blue() {
  return (
    <section className='bg-[#1D4ED8] sm:px-[2rem] xl:px-[8rem] py-[4rem] xl:py-[8rem] rounded-tr-[2rem] md:rounded-tr-[4rem] rounded-bl-[1.5rem] md:rounded-bl-[2rem]'>
        <div className='flex flex-col xl:grid xl:grid-cols-2 gap-[2rem] md:gap-[2.5rem] lg:gap-[3rem] xl:gap-[4rem]'>
            {/* First box */}
            <div className="bg-[#DBEAFE] pb-[2rem] sm:pb-[4rem] xl:pb-[2rem] rounded-bl-[1rem]">
                <div className="flex flex-col gap-[2rem] sm:gap-[4rem] xl:gap-[2rem] 3xl:gap-[4rem]">
                    <div className="h-[15.625rem] sm:h-[28.125rem] w-full bg-gradient-to-b from-[#1D4ED8] to-[#DBEAFE]">
                        <Image 
                            className='h-full w-full object-cover rounded-tr-[2rem] rounded-bl-[1rem]' 
                            src={Guide} 
                            title='NDIS idea 1' 
                            alt='Two women in a meeting' 
                            width={1038.4} 
                            height={450} 
                            loading='lazy'  
                        />
                    </div>
                    <div className="page xl:px-[4rem] sm:mx-auto flex flex-col gap-[2rem]">
                        <h3 className="cormorant text-blueHigher text-[1.5rem] xl:text-[2.25rem] leading-[1.625rem] xl:leading-[2.375rem] font-bold">Your Expert Guide Through Every Step</h3>
                        <p className='xl:text-[1.25rem]'>At Ausadvent Care, navigating the NDIS landscape becomes straightforward. Our team of dedicated experts in Brisbane and Perth possesses an in-depth understanding of the NDIS system, funding policies, and available services. We&apos;ll be your compass, guiding you through plan development, funding allocation, and service selection, ensuring you maximise every opportunity your NDIS plan offers.</p>
                    </div>
                </div>
            </div>
            {/* Second box */}
            <div className="bg-[#DBEAFE] pb-[2rem] sm:pb-[4rem] xl:pb-[2rem] rounded-bl-[1rem]">
                <div className="flex flex-col gap-[2rem] sm:gap-[4rem] xl:gap-[2rem] 3xl:gap-[4rem]">
                    <div className="h-[15.625rem] sm:h-[28.125rem] w-full bg-gradient-to-b from-[#1D4ED8] to-[#DBEAFE]">
                        <Image 
                            className='h-full w-full object-cover rounded-tr-[2rem] rounded-bl-[1rem]' 
                            src={Overwhelm} 
                            title='NDIS idea 2' 
                            alt='A woman helping an smiling young guy in his weelchair' 
                            width={1038.4} 
                            height={450}  
                            loading='lazy'
                        />
                    </div>
                    <div className="page xl:px-[4rem] sm:mx-auto flex flex-col gap-[2rem]">
                        <h3 className="cormorant text-blueHigher text-[1.5rem] xl:text-[2.25rem] leading-[1.625rem] xl:leading-[2.375rem] font-bold">Say Goodbye to Overwhelm, Embrace Empowerment</h3>
                        <p className='xl:text-[1.25rem]'>We understand the complexities of the NDIS can feel daunting. But with <strong>Ausadvent Care by your side</strong>, you can face them with confidence. Our compassionate support goes beyond the paperwork – we offer practical guidance, answer your questions with clarity, and connect you with resources that address your specific needs and aspirations.</p>
                    </div>
                </div>
            </div>
            {/* Closing */}
            <div className="page sm:mx-auto pb-[2rem] xl:col-span-2">
                {/* Lotus from XL devices*/}
                <Image className='hidden xl:flex mx-auto w-[5.858rem] h-[3.922rem]' src={Lotus} title='Ausadvent logo' alt='Ausadvent logo' width={20} height={20} loading='lazy' unoptimized/>
                {/* Paragraphs */}
                <div className='xl:mt-[2rem] 3xl:mt-[4rem] xl:flex gap-[4rem] xl:items-center'>
                    <div className="xl:w-1/2 flex flex-col gap-[2rem] text-primaryWhite text-center xl:text-left xl:text-[1.25rem] ">
                        <p>If you have questions or need assistance, feel free to reach out to our <strong>dedicated support team</strong> at Ausadvent Care. We&apos;re here to make your NDIS journey a positive and empowering experience.</p>
                        <p>For more information about NDIS, visit the <Link href={'https://www.ndis.gov.au/applying-access-ndis/am-i-eligible'} target='_blank' className='text-[#F59E0B] font-bold'>official website</Link>.</p>
                    </div>
                    {/* Lotus till lg devices */}
                    <Image className='xl:hidden mt-[4rem] w-[5.858rem] h-[3.922rem] mx-auto' src={Lotus} title='Ausadvent logo' alt='Ausadvent logo' width={93.73} height={62.75} loading='lazy'/>
                    {/* Paragraphs */}
                    <div className="xl:w-1/2 mt-[2rem] xl:mt-0 md:mt-[3rem] cormorant flex flex-col gap-[1rem] text-primaryWhite text-center xl:text-left ">
                        <p className="text-[1.5rem] xl:text-[1.875rem] 3xl:text-[2.25rem] leading-[1.5rem] xl:leading-[1.875rem] 3xl:leading-[2.125rem] font-bold">TAKE THE FIRST STEP TOWARDS YOUR EMPOWERED FUTURE:</p>
                        <p className="text-[1.25rem] xl:text-[1.5rem] 3xl:text-[1.875rem] leading-[1.375rem] xl:leading-[1.625rem] 3xl:leading-[2.065rem] font-bold">Get a free consultation and unlock your NDIS potential</p>
                    </div>

                </div>
                {/* Button */}
                <div className="mt-[2rem] xl:mt-[4rem] w-full flex lg:justify-center">
                    <Link href={'/locations#form'} scroll aria-label='Go to contact form section' className='w-full lg:w-[40rem]'>
                        <button className='w-full l py-[1rem] rounded-[0.25rem] bg-gradient-to-b from-[#FFD8AF] to-[#FDBA74] font-bold xl:text-[1.125rem] 2xl:text-[1.25rem] 3xl:text-[1.5rem] '>Contact us</button>
                    </Link>
                </div>
            </div>
        </div>
    </section>
  )
}
