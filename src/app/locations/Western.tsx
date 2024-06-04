import Image from 'next/image'
import React from 'react'

// Assets
import Wa from '../../../assets/wa-map.svg'
import Link from 'next/link'

export default function Western() {
  return (
    <section className='page sm:mx-auto mt-[2rem] md:mt-[4rem] xl:mt-0 xl:min-h-[35.188rem] ' id='western'>
       
        <div className='bg-white rounded-tr-[2rem] rounded-bl-[1rem] p-[1rem] md:p-[2rem] lg:p-[1.5rem] lg:flex xl:flex-col gap-[2rem] xl:gap-[0.5rem] xl:min-h-[35.188rem]'>
          <div className='lg:w-1/2 xl:w-full lg:py-[2rem] xl:py-0 lg:flex flex-col gap-[1rem]'>
              <h3 className="cormorant text-[#6B7280] md:text-[1.5rem] font-bold">Western Australia</h3>
              <div className=' border-b-[0.3125rem] border-[#F59E0B] w-[5.375rem] lg:-mt-[1rem]  '></div>
              <Link 
                className='hidden lg:inline xl:hidden  text-[#6B7280] md:text-[1.125rem] '
                href="https://www.google.com/maps?q=Level+6,+140+William+Street,+Perth,+Western+Australia+6000"
                target='_blank'
              >
                Level 6, 140 William Street, Perth, Western Australia 6000
              </Link>
              <p className='hidden lg:inline xl:hidden   text-[#6B7280]  md:text-[1.125rem] font-semibold'>NDIS Services and support Independent Living in Western Australia in Perth and Surrounding Suburbs.</p>
          </div>
          <div className='mt-[1rem] lg:w-1/2 xl:w-full xl:flex flex-col gap-[1rem]'>
            <Link 
              className='lg:hidden xl:inline text-[#6B7280] md:text-[1.125rem] '
              href="https://www.google.com/maps?q=Level+6,+140+William+Street,+Perth,+Western+Australia+6000"
              target='_blank'
            >
              Level 6, 140 William Street, Perth, Western Australia 6000
            </Link>
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3385.3240714774897!2d115.85575197542416!3d-31.952103874019162!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2a32bad69e926bfd%3A0x925c1eac99b4074e!2sGordon%20Stephenson%20House%2C%206%2F140%20William%20St%2C%20Perth%20WA%206000!5e0!3m2!1sen!2sau!4v1709427989414!5m2!1sen!2sau" 
              className="sm:mt-[0.5rem] lg:mt-0 h-[12.188rem] w-full lg:h-[15.5rem] object-cover rounded-tr-[2rem] rounded-bl-[1rem]" 
              width="366" 
              height="195" 
              loading="lazy" 
            />
            <p className='lg:hidden xl:inline sm:mt-[0.5rem]  text-[#6B7280]  md:text-[1.125rem] font-semibold'>NDIS Services and support Independent Living in Western Australia in Perth and Surrounding Suburbs.</p>
          </div>
        </div>
    </section>
  )
}
