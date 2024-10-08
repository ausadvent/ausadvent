"use client"

import React, { useEffect, useRef, useState } from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { fetchData } from '../utils/fetchServices';

// assets
import Logo from '../../../assets/logo-header.svg'
import Phone from '../../../assets/phone_icon.svg'
import { trackGAEvent } from '../metrics';

export default function Header() {
    // Fetch data
    const [servicesFetched, setServicesFetched] = useState()
    useEffect(() => {
        async function fetchingData() {
            const res:any = await fetchData()
            setServicesFetched(res)
        }
        fetchingData()
    }, [])
    

    const locations = [
        {
            id: 1,
            title: 'Western Australia',
            route: 'western'
        },
        {
            id: 2,
            title: 'Queensland',
            route: 'queensland'
        }
    ]
      
    const [mobileMenu, setMobileMenu] = useState(false);
    
    const toggleMenu = () => {
        setMobileMenu(false);
        setServicesDisplay(false)
        setLocationsDisplay(false)
    };
  
    // GA Event listener
    function handleEvent(event:any) {
        trackGAEvent("Contact", "Call Ausadvent Team", "Call");
    }

    // Set state for services options
    const [servicesDisplay, setServicesDisplay] = useState(false);

    const [locationsDisplay, setLocationsDisplay] = useState(false)

    return (
    <header className='z-20 bg-gradient'>
        <div className={`page sm:max-w-full sm:px-[6rem] lg:px-[4rem] 3xl:px-[12rem] py-[1rem] flex justify-between items-center z-30 ${mobileMenu && 'bg-[#1E40AF]'}`}>
            <Link href="/" className='flex items-center gap-[0.5rem]'>
                <Image
                    className='w-[2.20rem] h-[1.4rem]'
                    src={Logo}
                    alt="Ausadvent logo"
                    title="Company's logo"
                    width={74.31}
                    quality={100}
                    loading='eager'
                />

                <h2 className='flex flex-col font-bold text-[0.75rem] leading-[0.75rem] text-primaryWhite'>
                    <p>AUSADVENT</p>
                    <p className=''>CARE</p>
                </h2>
            </Link>
            <button
                id='hamburguer-button'
                aria-label='Open mobile menu'
                className=' cursor-pointer relative lg:hidden'
                onClick={() => {
                    setMobileMenu(!mobileMenu)
                }}
            >
                {mobileMenu === false ? (
                    <svg className="h-[1.5rem] w-[2rem] text-primaryWhite"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/>
                    </svg>
                ) : (
                    <svg 
                        onClick={() => {
                            setServicesDisplay(false)
                            setLocationsDisplay(false)
                        }} 
                        className="h-[1.5rem] w-[2rem] text-primaryWhite"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
                    </svg>
                )}
            </button>

            {/* Nav area for desktop */}
            <div className="hidden lg:flex ">
                <nav className='w-[46.86rem] xl:w-[55rem]' >
                    <ul className='flex lg:text-[0.875rem] xl:text-[1.25rem] justify-between items-center text-primaryWhite'>
                        <li onClick={() => toggleMenu()} className=' hover:text-[#F59E0B] cursor-pointer'><Link href={'/'}>Home</Link></li>
                        <li onClick={() => toggleMenu()} className=' hover:text-[#F59E0B] cursor-pointer'><Link href={'/about'}>About us</Link></li>
                        <li className='flex items-center gap-[0.2rem] cursor-pointer'>
                            <p className='hover:text-[#F59E0B]'><Link href={'/services'} aria-label='Go to services' onClick={() => setLocationsDisplay(false)}>Services</Link></p>
                            {!servicesDisplay ? (
                                <svg 
                                    onClick={() => {
                                        setServicesDisplay(true)
                                        setLocationsDisplay(false)
                                    }}
                                    className="h-6 w-6 text-[#F59E0B] xl:hover:cursor-pointer"  width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"
                                    >  
                                    <path stroke="none" d="M0 0h24v24H0z"/>  <polyline points="6 9 12 15 18 9" />
                                </svg>
                            ) : (
                                <svg 
                                    onClick={() => {
                                    setServicesDisplay(false)
                                    }}
                                    className="h-6 w-6 text-[#F59E0B] xl:hover:cursor-pointer"  width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  
                                    <path stroke="none" d="M0 0h24v24H0z"/>  <polyline points="6 15 12 9 18 15" />
                                </svg>
                            )}
                            {/* Services display for desktop */}
                            {servicesDisplay && (
                                <div className='absolute bg-[#2563EB] rounded border border-[#F59E0B] mt-[11rem] py-[0.5rem] px-[0.5rem] flex flex-col gap-[0.5rem] text-[0.8rem] text-secondaryWhite animate-open-services origin-top-left'>
                                    {(servicesFetched as any).map((service:any, index:any) => (
                                        <Link 
                                            key={index}
                                            aria-label={`Visit ${service.fields.serviceTitle} service`}
                                            href={`/services#${service.fields.serviceUrl}`}
                                            scroll
                                            onClick={() => {
                                                toggleMenu()
                                            }}
                                        >
                                            <p className='hover:text-[#F59E0B]'>{service.fields.serviceTitle}</p>
                                        </Link>
                                ))}
                                </div>
                            )}
                        </li>
                        <li onClick={() => toggleMenu()} className=' hover:text-[#F59E0B] cursor-pointer'><Link href={'/ndis'} >NDIS</Link></li>
                       
                        <li className='flex items-center gap-[0.2rem] hover:text-[#F59E0B] cursor-pointer'>
                            <p><Link href={'/locations'} onClick={() => setServicesDisplay(false)}>Locations</Link></p>
                            {!locationsDisplay ? (
                                <svg 
                                    onClick={() => {
                                        setLocationsDisplay(true)
                                        setServicesDisplay(false)
                                    }}
                                    className="h-6 w-6 text-[#F59E0B] xl:hover:cursor-pointer"  width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"
                                    >  
                                    <path stroke="none" d="M0 0h24v24H0z"/>  <polyline points="6 9 12 15 18 9" />
                                </svg>
                            ) : (
                                <svg 
                                    onClick={() => {
                                    setLocationsDisplay(false)
                                    }}
                                    className="h-6 w-6 text-[#F59E0B] xl:hover:cursor-pointer"  width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  
                                    <path stroke="none" d="M0 0h24v24H0z"/>  <polyline points="6 15 12 9 18 15" />
                                </svg>
                            )}
                            {/* Locations display for desktop */}
                            {locationsDisplay && (
                                <div className='absolute bg-[#2563EB] rounded border border-[#F59E0B] mt-[6.5rem] py-[0.5rem] px-[0.5rem] flex flex-col gap-[0.5rem] text-[0.8rem] text-secondaryWhite animate-open-services origin-top-left'>
                                    {locations.map((location:any) => (
                                        <Link
                                            key={location.id}
                                            href={`/locations#${location.route}`}
                                            scroll
                                            onClick={() => {
                                                toggleMenu()
                                            }}
                                        >
                                            <p className='hover:text-[#FC7]'>{location.title}</p>
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </li>
                        <li onClick={() => toggleMenu()} className=' hover:text-[#F59E0B] cursor-pointer'><Link href={'/blog'}>Blog</Link></li>
                        <li onClick={() => toggleMenu()} className=' hover:text-[#F59E0B] cursor-pointer'>
                            <a href="tel:+610731213060" onClick={handleEvent} className='flex items-center gap-2'>
                                <Image src={Phone} className='h-[1.5rem] w-[1.5rem]' title='phone ringing icon' alt='phone ringing icon' width={20} height={20} loading='eager' />
                                <p className='font-bold'>07 31213060</p>


                            </a>
                        </li>
                        <li onClick={() => toggleMenu()} className=' hover:text-[#F59E0B] cursor-pointer'>
                            <Link href={'/locations#form'} scroll>
                                <button className='button px-[1rem] text-[1rem] py-[0.25rem] rounded hover:bg-none hover:text-primaryWhite hover:border hover:border-[#FDBA74] transition duration-300 ease-linear '>
                                    Get in touch
                                </button>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>

        {/* Mobile menu area */}

        {mobileMenu === true && (
            <div className={`absolute  z-10 origin-top bg-[#2563EB] rounded-b-2xl border-b border-[#F59E0B] shadow-2xl w-screen ${mobileMenu && 'animate-open-menu'} `} >
                
                <nav className='min-h-full p-[2rem] sm:px-[7rem] text-primaryWhite' aria-label='mobile'>
                    <ul className='flex flex-col gap-[1.25rem] text-[1.25rem]'>
                        <li onClick={() => toggleMenu()}><Link href={'/'} scroll>Home</Link></li>
                        <li onClick={() => toggleMenu()}><Link href={'/about'}>About us</Link></li>
                        <li className='flex items-center gap-[0.2rem]'>
                            <p><Link href={'/services'} aria-label='Go to services' onClick={() => {setMobileMenu(false); setServicesDisplay(false); setLocationsDisplay(false)}}>Services</Link></p>
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
                                {(servicesFetched as any).map((service:any, index:any) => (
                                    <Link 
                                        key={index}
                                        href={`/services#${service.fields.serviceUrl}`}
                                        aria-label={`Visit ${service.fields.serviceTitle} service`}
                                        scroll
                                        onClick={() => {
                                            toggleMenu()
                                        }}
                                    >
                                        <p>{service.fields.serviceTitle}</p>
                                    </Link>
                                ))}
                            </div>
                        )}
                        <li onClick={() => toggleMenu()}><Link href={'/ndis'}>NDIS</Link></li>
                        <li className='flex items-center gap-[0.2rem]'>
                            <p onClick={() => {toggleMenu(); setMobileMenu(false); setLocationsDisplay(false);}}><Link href={'/locations'}>Locations</Link></p>
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
                                        href={`/locations#${location.route}`}
                                        scroll
                                        onClick={() => {
                                            toggleMenu()
                                        }}
                                    >
                                        <p>{location.title}</p>
                                    </Link>
                                ))}
                            </div>
                        )}
                        <li onClick={() => toggleMenu()}><Link href={'/blog'}>Blog</Link></li>
                        <li onClick={() => toggleMenu()}>
                            <a href="tel:+610731213060" onClick={handleEvent} className='flex items-center gap-1'>
                                <Image src={Phone} className='h-[1.5rem] w-[1.5rem]' title='phone ringing icon' alt='phone ringing icon' width={20} height={20} loading='eager' />
                                <p>07 31213060</p>
                            </a>
                        </li>
                        <li onClick={() => toggleMenu()}>
                           <Link href={'/locations#form'} scroll>
                                <button className='button  text-[1rem] py-[0.25rem] rounded'>
                                    Get in touch
                                </button>
                           </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        )}
    
    </header>
  )
}
