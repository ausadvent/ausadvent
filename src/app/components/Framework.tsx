import { createClient } from 'contentful';
import React from 'react'

// Assets
import BlueLotus from '../../../assets/blue-lotus.svg'
import Image from 'next/image';
import Link from 'next/link';

// Contentful keys
const spaceKey:any = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID;
const accessToken:any = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_KEY;

// Create client for contentful
const client = createClient({
    space: spaceKey,
    accessToken: accessToken,
})

// Fetch the values from contentful
async function fetchStandards() {
    try {
        const res = await client.getEntries({ content_type: 'nationalStandards'})
        // console.log(res.items)
        return res.items
    } catch(e) {
        console.log(e)
        return []
    }
}

export default async function Framework() {
    const standards = await fetchStandards()
  
    return (
    <div className='page sm:mx-auto py-[2rem] sm:py-[4rem] md:py-[4.5rem] lg:py-[5rem] xl:py-[6rem]'>
        <h3 className='cormorant text-[1.5rem] lg:text-[1.875rem] text-[#1E3A8A] font-bold'>FRAMEWORK OF PRACTICE</h3>
        <h4 className='cormorant mt-[1rem] text-[1.5rem] lg:text-[1.875rem] text-[#1E3A8A] font-bold'>Person-Centred Approach</h4>
        <div className='mt-[2rem] lg:mt-[4rem] xl:max-w-[50rem] flex flex-col gap-[1.5rem] sm:gap-[2rem] lg:text-[1.125rem] xl:text-[1.25rem] lg:leading-[1.625rem] xl:leading-[1.875rem] '>
            <p>Our framework is rooted in person-centred approaches, empowering individuals to lead service design, planning, delivery, and review.</p>
            <p>We prioritise maximising the capacity of people with disabilities to control their lives, reflecting the Human Rights principles of respect, non-discrimination, and full participation.</p>
            <p>Guided by <Link href='https://www.dss.gov.au/our-responsibilities/disability-and-carers/standards-and-quality-assurance/national-standards-for-disability-services' target='_blank' className='text-[#2563EB] font-bold'>National Standards</Link> Ausadvent Care adheres to the six National Standards, ensuring the rights, participation, and individual outcomes of our participants.</p>
        </div>

        {/* National Standards */}
        <div className="mt-[2rem] lg:mt-[4rem] flex flex-col lg:grid lg:grid-cols-2 2xl:grid-cols-3 gap-[2rem]">
            {standards.slice().reverse().map((item:any, index:any) => (
                <div key={index} className='bg-orange-300 p-[1rem] xl:p-[2rem] rounded-tr-3xl rounded-bl-3xl border-[2px] border-[#2563EB]'>
                    <h5 className='text-[#1E3A8A] text-[1.125rem] lg:text-[1.25rem] font-semibold'>{index+1}. {item?.fields.standardTitle}</h5>
                    <div className='mt-[0.5rem] lg:text-[1.125rem] flex items-center gap-[0.5rem]'>
                        <Image className='w-[1.5rem] h-[2rem]' src={BlueLotus} alt='Blue lotus symbol' title='Blue lotus symbol' width={20} height={20} loading='lazy' />
                        <p className='font-semibold '>{item?.fields.phrase}</p>
                    </div>
                    <p className='mt-[1rem] lg:text-[1.125rem]'>{item?.fields.standardDescription}</p>
                </div>
            ))}
        </div>

        <p className='mt-[2rem] lg:mt-[4rem] 2xl:mt-[4.5rem] cormorant text-[#1E3A8A] 2xl:w-[48rem] 2xl:mx-auto text-[1.25rem] lg:text-[1.5rem] leading-[1.375rem] lg:leading-[1.625rem] font-bold '>By embracing and embodying these National Standards, Ausadvent Care consistently delivers high-quality services, prioritising the rights, inclusion, and outcomes of our valued participants.</p>

        {/* Principles container */}
        <div className="mt-[2rem] lg:mt-[4rem] 2xl:mt-[4.5rem] 3xl:px-[6rem] flex flex-col lg:flex-row gap-[2rem] mb-[1rem]">
            {/* Container # 1 */}
            <div className='relative flex flex-col gap-[1rem] lg:basis-1/2'>
                <div className='flex items-center gap-[0.5rem]'>
                    <Image className='w-[1.6rem] h-[2rem]' src={BlueLotus} alt='Blue lotus symbol' title='Blue lotus symbol' width={20} height={20} loading='lazy' />
                    <h4 className='font-semibold text-[#374151] lg:text-[1.125rem]'>Human Rights Principles</h4>
                </div>
                <p className='lg:text-[1.125rem]'>Aligned with international treaties, we champion human rights principles, promoting dignity, independence, non-discrimination, equality, accessibility, and active partnerships. The additional emphasis on partnerships ensures collaborative decision-making, safeguarding the rights and wellbeing of our participants.</p>
                <div className="absolute -bottom-[1rem] w-1/3 border-b-[0.3rem] border-blue-400"></div>
            </div>
            <div className='relative flex flex-col gap-[1rem] lg:basis-1/2'>
                <div className='flex items-center gap-[0.5rem]'>
                    <Image className='w-[1.6rem] h-[2rem]' src={BlueLotus} alt='Blue lotus symbol' title='Blue lotus symbol' width={20} height={20} loading='lazy' />
                    <h4 className='font-semibold text-[#374151] lg:text-[1.125rem]'>Quality Management</h4>
                </div>
                <p className='lg:text-[1.125rem]'>Ausadvent Care excels in quality management, maintaining systems and processes that ensure the highest standards in services and supports. We actively engage in reflection, learning from practice to enhance the overall quality of our services.</p>
                <div className="absolute -bottom-[1rem] lg:bottom-[2rem] xl:bottom-[1rem] w-1/3 border-b-[0.3rem] border-blue-400"></div>
            </div>
            
        </div>
    </div>
  )
}
