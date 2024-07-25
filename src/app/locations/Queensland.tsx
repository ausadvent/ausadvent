import Link from 'next/link'
import React from 'react'


export default function Queensland() {
  return (
    <section className='page sm:mx-auto mt-[2rem] md:mt-[4rem] xl:mt-0 xl:min-h-[33.5rem] ' id='queensland' >
      <div className='bg-white xl:min-h-[33.5rem] rounded-tr-[2rem] rounded-bl-[1rem] p-[1rem] md:p-[2rem] lg:p-[1.5rem] lg:flex xl:flex-col gap-[2rem] xl:gap-[0.5rem] '>
        <div className='lg:w-1/2 xl:w-full lg:py-[2rem] xl:py-0 lg:flex flex-col gap-[1rem]'>
            <h3 className="cormorant text-[#6B7280] md:text-[1.5rem] font-bold">Queensland</h3>
            <div className=' border-b-[0.3125rem] border-[#F59E0B] w-[5.375rem] lg:-mt-[1rem]  '></div>
            <Link 
              className='hidden lg:inline xl:hidden  text-[#6B7280] md:text-[1.125rem] '
              href="https://www.google.com/maps/place/59+Maud+St,+Sunnybank+QLD+4109"  
              target='_blank'
            >
              59 Maud Street, Sunnybank QLD 4109
            </Link>
            <p className='hidden lg:inline xl:hidden   text-[#6B7280]  md:text-[1.125rem] font-semibold'>NDIS Services and support Independent Living in Queensland in all of South Brisbane, North Brisbane, Ipswich, East Brisbane, Gold Coast, and Sunshine Coast.</p>
        </div>
        <div className=' mt-[1rem] lg:w-1/2 xl:w-full xl:flex flex-col gap-[1rem]'>
          <Link 
            href="https://www.google.com/maps/place/59+Maud+St,+Sunnybank+QLD+4109" 
            target='_blank'
            className="lg:hidden xl:inline text-[#6B7280] md:text-[1.125rem] "
          >
            59 Maud Street, Sunnybank QLD 4109
          </Link>
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3536.687964384021!2d153.0552557!3d-27.587028!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b9145838e8ff953%3A0x4c6ab0f0e3a76b2e!2s59%20Maud%20St%2C%20Sunnybank%20QLD%204109!5e0!3m2!1sen!2sau!4v1709426570433!5m2!1sen!2sau" 
            className="sm:mt-[0.5rem] lg:mt-0 h-[12.188rem] w-full lg:h-[15.5rem] object-cover rounded-tr-[2rem] rounded-bl-[1rem]" 
            width="366" 
            height="195" 
            loading='eager'
          />
          <p className='lg:hidden xl:inline sm:mt-[0.5rem]  text-[#6B7280]  md:text-[1.125rem] font-semibold'>NDIS Services and support Independent Living in Queensland in all of South Brisbane, North Brisbane, Ipswich, East Brisbane, Gold Coast, and Sunshine Coast.</p>
        </div>
      </div>
    </section>
  )
}
