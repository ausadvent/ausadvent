import { createClient } from 'contentful';
import React from 'react'

// Assets
import BlueLotus from '../../../assets/blue-lotus.svg'
import Image from 'next/image';

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
        console.log(res.items)
        return res.items
    } catch(e) {
        console.log(e)
        return []
    }
}

export default async function Framework() {
    const standards = await fetchStandards()
  
    return (
    <div className='page py-[2rem]'>
        <h2 className='cormorant text-[1.5rem] text-[#1E3A8A] font-bold'>FRAMEWORK OF PRACTICE</h2>
        <h3 className='cormorant mt-[1rem] text-[1.5rem] text-[#1E3A8A] font-bold'>Person-Centred Approach</h3>
        <div className='mt-[2rem] flex flex-col gap-[1.5rem]'>
            <p>Our framework is rooted in person-centred approaches, empowering individuals to lead service design, planning, delivery, and review.</p>
            <p>We prioritise maximising the capacity of people with disabilities to control their lives, reflecting the Human Rights principles of respect, non-discrimination, and full participation.</p>
            <p>Guided by <span className='text-[#2563EB] font-bold'>National Standards</span> Ausadvent Care adheres to the six National Standards, ensuring the rights, participation, and individual outcomes of our participants.</p>
        </div>

        {/* National Standards */}
        <div className="mt-[2rem] flex flex-col gap-[2rem]">
            {standards.slice().reverse().map((item:any, index:any) => (
                <div key={index} className='bg-orange-300 p-[1rem] rounded-tr-3xl rounded-bl-3xl border-[2px] border-[#2563EB]'>
                    <h4 className='text-[#1E3A8A] text-[1.125rem] font-semibold'>{index+1}. {item?.fields.standardTitle}</h4>
                    <div className='mt-[0.5rem] flex items-center gap-[0.5rem]'>
                        <Image src={BlueLotus} alt='Blue lotus symbol' title='Blue lotus symbol' />
                        <p className='font-semibold '>{item?.fields.phrase}</p>
                    </div>
                    <p className='mt-[1rem]'>{item?.fields.standardDescription}</p>
                </div>
            ))}
        </div>

        <p className='mt-[2rem] cormorant text-[#1E3A8A] text-[1.25rem] leading-[1.375rem] font-bold '>By embracing and embodying these National Standards, Ausadvent Care consistently delivers high-quality services, prioritising the rights, inclusion, and outcomes of our valued participants.</p>

        {/* Principles container */}
        <div className="mt-[2rem] flex flex-col gap-[2rem] mb-[1rem]">
            {/* Container # 1 */}
            <div className='relative flex flex-col gap-[1rem]'>
                <div className='flex items-center gap-[0.5rem]'>
                    <Image src={BlueLotus} alt='Blue lotus symbol' title='Blue lotus symbol' />
                    <h4 className='font-semibold text-[#374151]'>Human Rights Principles</h4>
                </div>
                <p>Aligned with international treaties, we champion human rights principles, promoting dignity, independence, non-discrimination, equality, accessibility, and active partnerships. The additional emphasis on partnerships ensures collaborative decision-making, safeguarding the rights and wellbeing of our participants.</p>
                <div className="absolute -bottom-[1rem] w-1/3 border-b-[0.3rem] border-blue-400"></div>
            </div>
            <div className='relative flex flex-col gap-[1rem]'>
                <div className='flex items-center gap-[0.5rem]'>
                    <Image src={BlueLotus} alt='Blue lotus symbol' title='Blue lotus symbol' />
                    <h4 className='font-semibold text-[#374151]'>Quality Management</h4>
                </div>
                <p>Ausadvent Care excels in quality management, maintaining systems and processes that ensure the highest standards in services and supports. We actively engage in reflection, learning from practice to enhance the overall quality of our services.</p>
                <div className="absolute -bottom-[1rem] w-1/3 border-b-[0.3rem] border-blue-400"></div>
            </div>
            
        </div>
    </div>
  )
}
