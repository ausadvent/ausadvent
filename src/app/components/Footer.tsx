import React from 'react'
import Image from 'next/image'

// Assets
import Aboriginal from '../../../assets/Aboriginal-flag.svg'
import Islanders from '../../../assets/Islanders-flag.svg'
import Symbol from '../../../assets/footer-lotus.svg'
import Instagram from '../../../assets/Instagram-logo.svg'
import Facebook from '../../../assets/Facebook-card.svg'
import Link from 'next/link'
import Call from '../../../assets/call-calling.svg'
import Email from '../../../assets/email-icon.svg'

export default function Footer() {
  return (
    <div>
        {/* Flags container */}
        <div className="page py-[2rem] bg-[#DBEAFE] ">
            <div className="flex justify-center gap-[1rem]">
                <Image src={Aboriginal} className='w-[3rem] h-[2rem]' title='Aboriginal flag' alt='Aboriginal flag' loading='eager' />
                <Image src={Islanders} className='w-[3rem] h-[2rem]' title='Islanders flag' alt='Islanders flag' loading='eager' />
            </div>
            <p className="mt-[1rem] text-[0.75rem] leading-[1rem] text-center">We acknowledge the First Nations peoples as the traditional custodians of the lands where we live, learn and work. </p>
        </div>

        {/* Blue container */}
        <div className="page pt-[3rem] bg-gradient-to-b from-[#1D51C3] to-[#3E7BFF] ">
            {/* First box */}
            <div className="flex flex-col items-center gap-[0.5rem]">
                <Image src={Symbol} className='w-[2rem] h-[1.4rem]' title='Ausadvent symbol' alt='Lotus flower' loading='eager' />
                <h2 className='font-bold text-[#93C5FD] text-center leading-4'>AUSADVENT <br /> CARE</h2>
                <p className='text-primaryWhite text-[0.875rem] text-center leading-[1.25rem]'>At Ausadvent Care, we&apos;re more than just care providers; we&apos;re compassionate partners on your journey towards independence, growth, and fulfilment. </p>
                <p className='text-primaryWhite text-[0.875rem] text-center leading-[1.25rem]'>Connect with us</p>
                <div className="flex gap-[1rem]">
                    <Image src={Instagram} className='w-[2rem] h-[2rem]' title='Instagram logo' alt='Instagram logo' loading='lazy' />
                    <Image src={Facebook} className='w-[2rem] h-[2rem]' title='Facebook logo' alt='Facebook logo' loading='lazy' />
                </div>
            </div>

            {/* Second box */}
            <div className="mt-[1.5rem] text-primaryWhite flex flex-col items-center ">
                <h3 className='text-[1.125rem]'>Quick links</h3>
                <nav className='mt-[1rem]'>
                    <ul className='flex flex-col gap-[0.5rem] text-center'>
                        <li><Link href={'/'}>Home</Link></li>
                        <li><Link href={'/'}>Services</Link></li>
                        <li><Link href={'/'}>About us</Link></li>
                        <li><Link href={'/'}>NDIS</Link></li>
                        <li><Link href={'/'}>Locations</Link></li>
                        <li><Link href={'/'}>Articles</Link></li>
                    </ul>
                </nav>
                <button className='mt-[0.5rem] py-[0.5rem] w-[12.5rem] rounded border border-[#FFD8AF]'>Get in touch</button>
            </div>

            {/* Third box */}
            <div className="mt-[1.5rem] text-primaryWhite flex flex-col items-center text-center">
                <h3 className='text-[1.25rem]'>Contact us</h3>
                <div className="mt-[1rem] flex flex-col gap-[0.5rem]">
                    <p className=" ">Building 6, 2404 Logan Road, Eight Miles Plain QLD 4113</p>
                    <a href="tel:+61439430007" className="flex gap-[0.5rem] justify-center items-center">
                        <Image className='h-[1rem] w-[1rem]' src={Call} title='Call icon' alt='Phone calling icon' loading='lazy' />
                        <p>+61 0439430007</p>
                    </a>
                    <a href="mailto:admin@ausadventcare.com.au" className="flex gap-[0.5rem] justify-center items-center">
                        <Image className='h-[1rem] w-[1.18rem]' src={Email} title='Call icon' alt='Phone calling icon' loading='lazy' />
                        <p>admin@ausadventcare.com.au</p>
                    </a>
                </div>
            </div>
            {/* Closing text */}
            <p className='mt-[1.5rem] pb-[1rem] text-primaryWhite text-[0.775rem]'>© 2021 Ausadvent Care. All Rights Reserved.  Site | Bytecho</p>     
        </div>
    </div>
  )
}
