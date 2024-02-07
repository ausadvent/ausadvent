import React from 'react'
import Form from '../components/Form'

export default function Contact() {
  return (
    <section className='page sm:mx-auto mt-[2rem] md:mt-[4rem] '>
        <div className='bg-[#93C5FD]  rounded-tr-[2rem] rounded-bl-[1rem] px-[1rem] py-[2rem] md:p-[2rem] lg:p-[3rem]'>
            {/* Yellow container */}
            <div className='flex flex-col gap-[1rem] lg:gap-[2rem] bg-[#FFEDD5] rounded-tr-[2rem] rounded-bl-[1rem] p-[1rem] md:p-[2rem]'>
                <div className=''>
                    <h3 className="cormorant text-[1.875rem] md:text-[2.25rem] leading-[2.063rem] md:leading-[2.375rem] text-[#6B7280] font-bold">Your Journey To Personalised Care Starts With Us</h3>
                    <div className=' mt-[0.2rem] border-b-[0.3rem]  border-[#60A5FA] w-[5.375rem]  '></div>
                </div>
                <p>If you&apos;re seeking more information, have inquiries about our services, or want to understand the procedures better, send us a quick message online for prompt assistance.</p>
            </div>

            {/* Contact form */}
            <div className='mt-[1rem] lg:mt-[2rem]'>
                <Form />
            </div>
        </div>
    </section>
  )
}
