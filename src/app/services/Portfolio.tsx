import React from 'react'
import Link from 'next/link'

// Assets
import Jump from './Jump'

export default async function Portfolio({services}:any) {
    return (
        <div className='page sm:mx-auto py-[3.5rem] sm:py-[4rem]'>
            <div className='md:flex md:items-center lg:justify-center gap-[3rem]'>
                <p className='text-[1rem] lg:text-[1.125rem] xl:text-[1.25rem] md:w-[14.625rem] xl:w-[34.63rem]'>Our <strong>Supported Accommodation</strong> portfolio offers four distinct avenues to empower your unique journey, wherever you call home.</p>
                <div className="mt-[2rem] md:mt-0 sm:mt-[3rem] flex flex-col gap-[1.5rem]">
                    <h3 className='cormorant text-[1.5rem] text-[#6B7280]'>Jump To Section</h3>
                    <Jump services={services} />
                </div>
            </div>
        </div>
    )
}
