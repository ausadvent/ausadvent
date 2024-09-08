import Link from 'next/link'
import React from 'react'

export default function Request() {
  return (
    <article className='mt-[2rem] md:mt-[3rem] sm:mx-auto page'>
        <h4 className='font-bold text-[1.5rem] md:text-[1.7rem] leading-[1.7rem] md:leading-[1.9rem]' >Request a visit or more information</h4>
        <p className='mt-[1rem] md:text-[1.3rem]'>Give us a call on <a href="tel:+610731213060">0731213060</a> or leave us a message <Link href={'/locations#form'} scroll className=' underline text-blue-600 ' >here</Link> indicating which property interests you.</p>



        <aside className='mt-[2rem] md:mt-[3rem] sm:mx-auto '>
            <h4 className='font-bold text-[1.5rem] md:text-[1.7rem] leading-[1.7rem] md:leading-[1.9rem]'>Ausadvent Care Support:</h4>
            <p className='mt-[1rem] md:text-[1.3rem]'>Our experienced team is ready to provide tailored support to help you thrive in your new home. We&apos;ll work with you to create a personalised care plan that promotes your independence and enhances your quality of life.</p>
        </aside>
    </article>
  )
}
