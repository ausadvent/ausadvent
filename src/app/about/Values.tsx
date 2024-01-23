import React from 'react'

// Assets
import Symbol from '../../../assets/symbol-lotus.svg'
import Image from 'next/image';
import { createClient } from 'contentful';

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
    <div className='bg-[#2563EB] rounded-tr-[3rem] lg:rounded-tr-[9rem] 2xl:rounded-tr-[12.5rem] rounded-bl-[3rem] lg:rounded-bl-[4rem] 2xl:rounded-bl-[6.25rem]'>
        <div className="page sm:mx-auto py-[3rem] md:py-[4rem] lg:py-[4.5rem] xl:py-[5rem] 2xl:py-[6rem] 3xl:py-[8rem]">
            <div className=" flex flex-col gap-[2rem] text-primaryWhite">
                <h2 className='cormorant text-[1.5rem] lg:text-[1.875rem] xl:text-[2.25rem] 3xl:text-[3rem] font-bold'>OUR CORE VALUES</h2>
                <p className='text-[1.125rem] 3xl:text-[1.25rem] 3xl:w-1/2'>Our mission is to maintain the comfort and safety of our clients while providing them with the appropriate care services to nurture their independence.</p>
            </div>
            <div className="mt-[3rem] 2xl:mt-[5rem] flex flex-col xl:grid xl:grid-cols-2 2xl:flex 2xl:flex-row 2xl:flex-wrap gap-[3rem]">
                {values.slice().reverse().map((value:any, index:any) => (
                    <div 
                        key={index} 
                        className={`py-[3rem] xl:py-[2rem] px-[1rem] xl:px-[2rem] 2xl:w-[23.3rem] 3xl:w-[27rem] bg-[#FFEDD5] rounded-tr-[2rem] xl:rounded-tr-3xl rounded-bl-[2rem] xl:rounded-bl-3xl flex flex-col md:flex-row items-center xl:flex-col gap-[0.5rem] sm:gap-[1rem] xl:gap-[0rem] ${index === values.length -1 ? 'xl:col-span-full xl:w-1/2 mx-auto' : ''} ${index === values.length - 1 || index === values.length - 2 ? 'mx-auto 2xl:min-w-[35rem]' : '' }`}
                    >
                        <Image 
                            src={value?.fields?.valueImage.fields.file.url} 
                            className='w-[6rem] h-[6rem] md:w-[16rem] md:h-[16rem] xl:w-[6rem] xl:h-[6rem]'
                            alt={value?.fields?.valueImage.fields.description} 
                            title={value?.fields?.valueImage.fields.title}
                            width={22.37}
                            height={18} 
                            // unoptimized
                        />
                        <div className='flex flex-col items-center md:items-start xl:items-center gap-[0.5rem] sm:gap-[1rem] xl:gap-[0rem] '>
                            <div className='flex items-center gap-[1rem]'>
                                <Image className='w-[1.9rem] md:w-[2.9rem] h-[1.4rem] md:h-[1.9rem]' src={Symbol} alt='Ausadvent symbol' title='Ausadvent symbol' width={20} height={20} />
                                <h3 className='cormorant text-[1.875rem] xl:text-[3rem] font-bold'>{value?.fields?.valueTitle}</h3>
                            </div>
                            <p className='xl:text-[1.25rem] leading-[1.5rem] xl:leading-[1.75rem] text-center md:text-left xl:text-center'>{value?.fields?.valueDescription}</p>

                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}
