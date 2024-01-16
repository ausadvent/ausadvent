"use client"

import React, { useEffect, useRef, useState } from 'react'
import Link from 'next/link';
import Image from 'next/image';

// assets
import Logo from '../../../assets/logo.png'
import Phone from '../../../assets/phone_icon.svg'

export default function Header() {
    const services = [
        {
          id: 'lifestyle',
          title: 'Lifestyle Assistance',
          route: '/'
        },
        {
            id: 'community',
            title: 'Community Engagement',
            route: '/'
          },
        {
          id: 'accommodation',
          title: 'Supported accommodation',
          route: '/'
        },
        {
          id: 'health',
          title: 'Health & Well-being',
          route: '/#locations'
        }
    ]

    const locations = [
        {
            id: 1,
            title: 'Western Australia',
            route: '/'
        },
        {
            id: 2,
            title: 'Queensland',
            route: '/'
        }
    ]
      
    const [mobileMenu, setMobileMenu] = useState(false);
    
    // Set state for services options
    const [servicesDisplay, setServicesDisplay] = useState(false);

    const [locationsDisplay, setLocationsDisplay] = useState(false)

    return (
    <div className=''>
        <div className={`page sm:max-w-full sm:px-[6rem] py-[1rem] flex justify-between items-center z-30 ${mobileMenu && 'bg-[#1E40AF]'}`}>
            <Link href="/" className='flex items-center gap-[0.5rem]'>
                <Image
                    className='w-[2.20rem]'
                    src={Logo}
                    alt="Ausadvent logo"
                    title="Company's logo"
                    width={74.31}
                    quality={100}
                    loading='eager'
                />

                <h1 className='flex flex-col font-bold text-[0.75rem] leading-[0.75rem] text-primaryWhite'>
                    <p>AUSADVENT</p>
                    <p className=''>CARE</p>
                </h1>
            </Link>
            <button
                id='hamburguer-button'
                className=' cursor-pointer relative'
                onClick={() => {
                    setMobileMenu(!mobileMenu)
                }}
            >
                {mobileMenu === false ? (
                    <svg className="h-[1rem] w-[1.375rem] text-primaryWhite"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/>
                    </svg>
                ) : (
                    <svg 
                        onClick={() => {
                            setServicesDisplay(false)
                            setLocationsDisplay(false)
                        }} 
                        className="h-[1rem] w-[1.33rem] text-primaryWhite"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
                    </svg>
                )}
            </button>
        </div>

            {/* Mobile menu area */}

            {mobileMenu === true && (
                <div className={`absolute z-10 origin-top bg-[#2563EB] w-screen ${mobileMenu && 'animate-open-menu'} `} >
                    
                    <nav className='min-h-full p-[2rem] sm:px-[7rem] text-primaryWhite' aria-label='mobile'>
                        <ul className='flex flex-col gap-[1.25rem] text-[1.25rem]'>
                            <li>Home</li>
                            <li>About us</li>
                            <li className='flex items-center gap-[0.2rem]'>
                                <p>Services</p>
                                {!servicesDisplay ? (
                                    <svg 
                                        onClick={() => {
                                            setServicesDisplay(true)
                                        }}
                                        className="h-6 w-6 text-[#F59E0B]"  width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"
                                        >  
                                        <path stroke="none" d="M0 0h24v24H0z"/>  <polyline points="6 9 12 15 18 9" />
                                    </svg>
                                ) : (
                                    <svg 
                                        onClick={() => {
                                        setServicesDisplay(false)
                                        }}
                                        className="h-6 w-6 text-[#F59E0B]"  width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  
                                        <path stroke="none" d="M0 0h24v24H0z"/>  <polyline points="6 15 12 9 18 15" />
                                  </svg>
                                )}
                            </li>
                            {/* Services display for mobile */}
                            {servicesDisplay && (
                                <div className='pl-[1.5rem] flex flex-col gap-[0.5rem] text-[1rem] text-secondaryWhite  animate-open-services origin-top-left'>
                                    {services.map((service:any) => (
                                        <Link
                                            key={service.id}
                                            href={service.route}
                                            onClick={() => {
                                                setMobileMenu(!mobileMenu)
                                                setServicesDisplay(false)
                                            }}
                                        >
                                            <p>{service.title}</p>
                                        </Link>
                                    ))}
                                </div>
                            )}
                            <li className='flex items-center gap-[0.2rem]'>
                                <p>Locations</p>
                                {!locationsDisplay ? (
                                    <svg 
                                        onClick={() => {
                                            setLocationsDisplay(true)
                                        }}
                                        className="h-6 w-6 text-[#F59E0B]"  width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"
                                        >  
                                        <path stroke="none" d="M0 0h24v24H0z"/>  <polyline points="6 9 12 15 18 9" />
                                    </svg>
                                ) : (
                                    <svg 
                                        onClick={() => {
                                        setLocationsDisplay(false)
                                        }}
                                        className="h-6 w-6 text-[#F59E0B]"  width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  
                                        <path stroke="none" d="M0 0h24v24H0z"/>  <polyline points="6 15 12 9 18 15" />
                                    </svg>
                                )}
                            </li>
                            {locationsDisplay && (
                                <div className='pl-[1.5rem] flex flex-col gap-[0.5rem] text-[1rem] text-secondaryWhite animate-open-services origin-top-left'>
                                    {locations.map((location:any) => (
                                        <Link
                                            key={location.id}
                                            href={location.route}
                                            onClick={() => {
                                                setMobileMenu(!mobileMenu)
                                                setServicesDisplay(false)
                                            }}
                                        >
                                            <p>{location.title}</p>
                                        </Link>
                                    ))}
                                </div>
                            )}
                            <li>Articles</li>
                            <li>
                                <a href="tel:+61439430007" className='flex items-center gap-1'>
                                    <Image src={Phone} className='h-[1.5rem] w-[1.5rem]' alt='phone ringing icon' />
                                    <p>+61 0439430007</p>
                                </a>
                            </li>
                            <li>
                                <button className='button  text-[1rem] py-[0.25rem] rounded'>
                                    Get in touch
                                </button>
                            </li>
                        </ul>
                    </nav>
                </div>
            )}
        
    </div>
  )
}
