
import { createClient } from 'contentful';
import Image from 'next/image';
import React from 'react'

// Assets
import Symbol from '../../../assets/symbol-lotus.svg'

// Contentful keys
const spaceKey:any = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID;
const accessToken:any = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_KEY;

// Create client for contentful
const client = createClient({
    space: spaceKey,
    accessToken: accessToken,
})

// Fetch the values from contentful
async function fetchValues() {
    try {
        const res = await client.getEntries({ content_type: 'values'})
        // console.log(res.items)
        return res.items
    } catch(e) {
        console.log(e)
        return []
    }
}

export default async function Values() {
  
    const values = await fetchValues()

    return (
    <div className='page sm:px-[2rem] sm:mx-auto py-[3rem]'>
        <h2 className='cormorant text-[#1E3A8A] text-[1.875rem] font-bold'>OUR CORE VALUES</h2>
        <p className='mt-[2rem] text-[1rem] leading-[1.5rem]'>Our mission is to maintain the comfort and safety of our clients while providing them with the appropriate care services to nurture their independence.</p>

        {/* Services cards container */}
        <div className='mt-[3rem] flex flex-col gap-[3rem]'>
        {values.slice().reverse().map((value:any, index:any) => (
            <div key={index} className='py-[3rem] px-[1rem] bg-[#FFEDD5] rounded-tr-xl rounded-bl-xl flex flex-col items-center gap-[0.5rem] sm:gap-[1rem]'>
                <Image 
                    src={value?.fields?.valueImage.fields.file.url} 
                    className='w-[6rem] h-[6rem]'
                    alt={value?.fields?.valueImage.fields.description} 
                    title={value?.fields?.valueImage.fields.title}
                    width={22.37}
                    height={18} 
                    // unoptimized
                />
                <div className='flex items-center gap-[1rem]'>
                    <Image className='w-[1.9rem] h-[1.4rem]' src={Symbol} alt='Ausadvent symbol' title='Ausadvent symbol' width={20} height={20} />
                    <h3 className='cormorant text-[1.875rem] font-bold'>{value?.fields?.valueTitle}</h3>
                </div>
                <p className='leading-[1.5rem] text-center'>{value?.fields?.valueDescription}</p>
            </div>
        ))}
        </div>
    </div>
  )
}
