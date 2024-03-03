import React from 'react'
import Image from 'next/image'

// Assets
import Aboriginal from '../../../assets/Aboriginal-flag.svg'
import Islanders from '../../../assets/Islanders-flag.svg'
import Symbol from '../../../assets/logo-footer.svg'
import Instagram from '../../../assets/Instagram-logo.svg'
import Facebook from '../../../assets/Facebook-card.svg'
import Link from 'next/link'
import Call from '../../../assets/call-calling.svg'
import Email from '../../../assets/email-icon.svg'

export default function Footer() {
  return (
    <div className='bg-[#DBEAFE]'>
        {/* Flags container */}
        <div className="page sm:mx-auto py-[2rem] sm:flex sm:items-center xl:justify-center md:gap-[1rem] ">
            <div className="flex justify-center gap-[1rem] md:w-[7rem]">
                <Image src={Aboriginal} className='w-[3rem] h-[2rem]' title='Aboriginal flag' alt='Aboriginal flag' loading='eager' />
                <Image src={Islanders} className='w-[3rem] h-[2rem]' title='Islanders flag' alt='Islanders flag' loading='eager' />
            </div>
            <p className="mt-[1rem] sm:mt-0 text-[0.75rem] leading-[1rem] text-center md:text-left md:w-[23rem] ">We acknowledge the First Nations peoples as the traditional custodians of the lands where we live, learn and work. </p>
        </div>

        {/* Blue container */}
        <div className='bg-gradient-to-b from-[#1D51C3] to-[#3E7BFF]'>
            <div className="page sm:mx-auto pt-[3rem] md:pt-[4.5rem] lg:pt-[5rem] xl:pt-[6rem] md:flex md:gap-[2rem] 3xl:gap-[4.5rem] ">
                {/* First box */}
                <div className="flex flex-col items-center gap-[0.5rem] md:gap-[2rem] xl:max-w-[11.6rem] 2xl:max-w-[24rem]">
                    <div className='flex flex-col md:flex-row gap-[0.5rem] items-center'>
                        <Image src={Symbol} className='w-[2rem] md:w-[2.9rem] h-[1.4rem] md:h-[2rem]' title='Ausadvent symbol' alt='Lotus flower' width={20} height={20} loading='lazy' />
                        <h2 className='font-bold text-primaryWhite text-center md:text-left leading-4'>AUSADVENT <br /> CARE</h2>
                    </div>
                    <p className='text-primaryWhite text-[0.875rem] 2xl:text-[1.125rem] leading-[1.25rem] 2xl:leading-[1.625rem] text-center md:text-left '>At Ausadvent Care, we&apos;re more than just care providers; we&apos;re compassionate partners on your journey towards independence, growth, and fulfilment. </p>
                    <p className='text-primaryWhite text-[0.875rem] text-center leading-[1.25rem] md:hidden'>Connect with us</p>
                    <div className="flex gap-[1rem] md:hidden">
                        <Link href='https://www.instagram.com/ausadventcare' target='_blank'><Image src={Instagram} className='w-[2rem] h-[2rem]' title='Instagram logo' alt='Instagram logo' width={20} height={20} loading='lazy' /></Link>
                        <Link href='https://www.facebook.com/ausadventcare' target='_blank'><Image src={Facebook} className='w-[2rem] h-[2rem]' title='Facebook logo' alt='Facebook logo' width={20} height={20} loading='lazy' /></Link>
                    </div>
                </div>

                {/* Second box */}
                <div className="mt-[1.5rem] md:mt-0 text-primaryWhite flex flex-col items-center md:items-start xl:w-[32.14rem] 2xl:max-w-[24rem] ">
                    <h3 className='text-[1.125rem]'>Quick links</h3>
                    <nav className='mt-[1rem]'>
                        <ul className='flex flex-col gap-[0.5rem] text-center md:text-left'>
                            <li><Link href={'/'}>Home</Link></li>
                            <li><Link href={'/services'}>Services</Link></li>
                            <li><Link href={'/about'}>About us</Link></li>
                            <li><Link href={'/ndis'}>NDIS</Link></li>
                            <li><Link href={'/'}>Locations</Link></li>
                            <li><Link href={'/blog'}>Articles</Link></li>
                        </ul>
                    </nav>
                    <Link href={'/locations#form'} scroll >
                        <button className='mt-[0.5rem] py-[0.5rem] w-[12.5rem] md:w-[8.14rem] rounded border-2 border-[#FFD8AF]'>
                            Get in touch
                        </button>
                    </Link>
                </div>

                {/* Third box */}
                <div className="mt-[1.5rem] md:mt-0 text-primaryWhite flex flex-col items-center md:items-start text-center md:text-left">
                    <h3 className='text-[1.25rem]'>Contact us</h3>
                    <div className="mt-[1rem] md:mt-[1.5rem] flex flex-col gap-[0.5rem] md:gap-[1rem]">
                        <Link 
                            href="https://www.google.com/maps/place/Building+6,+2404+Logan+Road,+Eight+Miles+Plain,+QLD+4113" 
                            target='_blank'
                            className=" "
                        >
                            Building 6, 2404 Logan Road, Eight Miles Plain QLD 4113
                        </Link>
                        <a href="tel:+61439430007" className="flex gap-[0.5rem] justify-center md:justify-start items-center">
                            <Image className='h-[1rem] w-[1rem]' src={Call} title='Call icon' alt='Phone calling icon' loading='lazy' />
                            <p>+61 0439430007</p>
                        </a>
                        <a href="mailto:admin@ausadventcare.com.au" className="flex gap-[0.5rem] justify-center md:justify-start items-center">
                            <Image className='h-[1rem] w-[1.18rem]' src={Email} title='Call icon' alt='Phone calling icon' loading='lazy' />
                            <p>admin@ausadventcare.com.au</p>
                        </a>
                    </div>
                    <p className='hidden md:flex md:mt-[1.5rem] text-primaryWhite text-[0.875rem] text-center leading-[1.25rem] '>Connect with us</p>
                    <div className="hidden md:flex gap-[1rem] md:mt-[0.5rem]">
                        <Link href='https://www.instagram.com/ausadventcare' target='_blank'><Image src={Instagram} className='w-[2rem] h-[2rem]' title='Instagram logo' alt='Instagram logo' width={20} height={20} loading='lazy' /></Link>
                        <Link href='https://www.facebook.com/ausadventcare' target='_blank'><Image src={Facebook} className='w-[2rem] h-[2rem]' title='Facebook logo' alt='Facebook logo' width={20} height={20} loading='lazy' /></Link>
                    </div>
                </div>
                {/* Closing text */}
            </div>
            <p className='px-[1rem] mt-[1.5rem] lg:mt-[2.5rem] pb-[1rem] xl:px-[8rem] md:max-w-[640px] xl:min-w-full md:mx-auto xl:ml-0 text-primaryWhite text-[0.775rem] sm:text-[0.875rem] sm:text-center md:text-left'>© 2021 Ausadvent Care. All Rights Reserved.  Site | Bytecho</p>     
        </div>
    </div>
  )
}
