import React from 'react'
import Form from '../components/Form'

export default function Contact() {
  return (
    <section className='sm:mx-auto mt-[2rem] md:mt-[4rem] '>
        <div className='bg-gradient-to-b from-[#FEF9C3] to-white rounded-tr-[2rem] xl:rounded-tr-[4rem] rounded-bl-[1rem] xl:rounded-bl-[3rem] py-[1rem] md:p-[2rem] lg:p-[3rem] xl:flex xl:gap-[2rem]'>
            {/* Yellow container */}
            <div className='px-[1rem] flex flex-col gap-[1rem] lg:gap-[2rem] xl:w-1/3 xl:self-center'>
                <div className=''>
                    <h3 className="cormorant text-[1.875rem] md:text-[2.25rem] leading-[2.063rem] md:leading-[2.375rem] text-[#6B7280] font-bold">Your Journey To Personalised In-Home Care Starts With Us</h3>
                    <div className=' mt-[0.2rem] border-b-[0.3rem]  border-[#60A5FA] w-[5.375rem]  '></div>
                </div>
                <p>If you&apos;re seeking more information, have inquiries about our services, or want to understand the procedures better, send us a quick message online for prompt assistance.</p>
            </div>

            {/* Contact form */}
            <div className='mt-[2rem] lg:mt-[2rem] xl:w-2/3'>
                <Form />
            </div>
        </div>
    </section>
  )
}
