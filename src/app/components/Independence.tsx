import Link from 'next/link'
import React from 'react'

export default function Independence() {
  return (
    <article className='bg-[#1D4ED8]'>
      <div className='page sm:mx-auto py-[3rem] md:py-[3.5rem] lg:py-[4.5rem] xl:py-[6rem] text-primaryWhite flex flex-col xl:items-center 2xl:items-start gap-[2rem] xl:gap-[3rem] '>
          <h4 className='cormorant text-[2.7rem] sm:text-[3rem] xl:text-[3.75rem] leading-[3rem] xl:leading-[3.125rem] font-bold text-center'>DISCOVER YOUR PATH TO INDEPENDENCE</h4>
          <p className='text-[1.25rem] xl:text-[1.5rem]'>Supporting over 5,000 people in Queensland and Western Australia</p>
          <Link href={'/locations#form'} >
            <button className='button lg:w-1/2 xl:w-[24.4rem] py-[0.5rem] xl:py-[1rem] rounded-lg text-[1rem] xl:text-[1.125rem] hover:bg-none hover:text-primaryWhite hover:border hover:border-[#FDBA74] transition duration-300 ease-linear  font-semibold'>
              Contact us today!
            </button>
          </Link>
      </div>
    </article>
  )
}
