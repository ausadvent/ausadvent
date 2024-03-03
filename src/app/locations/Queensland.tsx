import Link from 'next/link'
import React from 'react'


export default function Queensland() {
  return (
    <section className='page sm:mx-auto mt-[2rem] md:mt-[4rem] xl:mt-0 xl:min-h-[30.75rem] ' id='queensland' >
      <div className='bg-white rounded-tr-[2rem] rounded-bl-[1rem] p-[1rem] md:p-[2rem] lg:p-[1.5rem] lg:flex xl:flex-col gap-[2rem] xl:gap-[0.5rem] xl:min-h-[30.75rem]'>
          <div className='lg:w-1/2 xl:w-full lg:py-[2rem] xl:py-0 lg:flex flex-col gap-[1rem]'>
              <h2 className="cormorant text-[#6B7280] md:text-[1.5rem] font-bold">Queensland</h2>
              <div className=' border-b-[0.3125rem] border-[#F59E0B] w-[5.375rem] lg:-mt-[1rem]  '></div>
              <Link 
                className='hidden lg:inline xl:hidden  text-[#6B7280] md:text-[1.125rem] '
                href="https://www.google.com/maps/place/Building+6,+2404+Logan+Road,+Eight+Miles+Plain,+QLD+4113" 
                target='_blank'
              >
                Building 6, 2404 Logan Road, Eight Miles Plain QLD 4113
              </Link>
              <p className='hidden lg:inline xl:hidden   text-[#6B7280]  md:text-[1.125rem] font-semibold'>Operating in Queensland, throughout Toowoomba, Rockhampton, Ipswich, Gold Coast, North & South Brisbane and The Sunshine Coast.</p>
          </div>
          <div className=' mt-[1rem] lg:w-1/2 xl:w-full xl:flex flex-col gap-[1rem]'>
            <Link 
              href="https://www.google.com/maps/place/Building+6,+2404+Logan+Road,+Eight+Miles+Plain,+QLD+4113" 
              target='_blank'
              className="lg:hidden xl:inline text-[#6B7280] md:text-[1.125rem] "
            >
              Building 6, 2404 Logan Road, Eight Miles Plain QLD 4113
            </Link>
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3536.687964384021!2d153.0924047!3d-27.572193!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b91458a6c48e467%3A0x52a4b5cbefd6f2f0!2sBuilding%206%2F2404%20Logan%20Rd%2C%20Eight%20Mile%20Plains%20QLD%204113!5e0!3m2!1sen!2sau!4v1709426570433!5m2!1sen!2sau" 
              className="sm:mt-[0.5rem] lg:mt-0 h-[12.188rem] w-full lg:h-[15.5rem] object-cover rounded-tr-[2rem] rounded-bl-[1rem]" 
              width="366" 
              height="195" 
              loading='eager'
            />
            <p className='lg:hidden xl:inline sm:mt-[0.5rem]  text-[#6B7280]  md:text-[1.125rem] font-semibold'>Operating throughout Toowoomba, Rockhampton, Ipswich, and South Brisbane regions.</p>
          </div>
      </div>
    </section>
  )
}
