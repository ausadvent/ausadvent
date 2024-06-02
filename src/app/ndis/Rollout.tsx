import React from 'react'

export default function Rollout() {
  return (
    <div className='page sm:mx-auto pt-[2rem] lg:pt-[2.5rem] pb-[4rem] lg:pb-[4.5rem] 2xl:pb-[6rem]'>
        <h3 className='cormorant text-[1.5rem] lg:text-[1.875rem] 2xl:text-[2.25rem] text-blueHigher font-bold'>The NDIS Rollout</h3>
        <div className="mt-[2rem] flex flex-col 2xl:flex-row gap-[2rem] text-[#374151] lg:text-[1.125rem] 2xl:text-[1.25rem]">
            <p className='2xl:text-[1.25rem] 2xl:w-1/3'>Decisions related to NDIS eligibility and funding allocations are determined by the NDIS, guided by the NDIS Act 2013. This legislation outlines the supports and services considered reasonable and necessary for NDIS funding.</p>
            <p className='2xl:text-[1.25rem] 2xl:w-1/3'>At Ausadvent Care, we&apos;re not just a service provider; we&apos;re your <strong>dedicated partners in navigating the NDIS landscape</strong>. Our team is ready to offer support and assistance, ensuring that you have the information and resources needed to make informed decisions that align with your unique needs and goals.</p>
            <p className='2xl:text-[1.25rem] 2xl:w-1/3'>If you&apos;re feeling overwhelmed, know that you&apos;re not alone. Compassionate support is available to guide you through the NDIS application process, helping you shape a plan that reflects your aspirations for an independent and fulfilling life.</p>
        </div>
    </div>
  )
}
