import Image from 'next/image'
import React from 'react'

export default function Intro({article}: any) {
    return (
        <section className="page sm:mx-auto">
            {/* Background image */}
            <div className="absolute inset-0 h-[41.5rem] sm:h-[45.5rem] md:h-[48.5rem] xl:h-[62.5rem] -z-10">
                <Image 
                    src={article.fields.articleMainImage.fields.file.url}
                    title={article.fields.articleMainImage.fields.title} 
                    alt={article.fields.articleMainImage.fields.description} 
                    className='absolute inset-0 w-full h-full object-cover object-right-top opacity-80'
                    width={20}
                    height={20}
                    unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent  to-[#1e3a8a] " aria-hidden="true"></div>
            </div>

            {/* Content */}
            <div className=' pt-[3rem] md:pt-[4.5rem] lg:pt-[8rem] xl:pt-[12rem] h-[38rem] sm:h-[42rem] md:h-[44rem] xl:h-[58rem] text-primaryWhite '>
                <h2 className='text-[0.75rem] lg:text-[1.2rem] text-[#93C5FD]'>
                    Articles | {article.fields.articleTitle}
                </h2>
                <div className="lg:mt-[3rem] flex flex-col lg:flex-row lg:gap-[1rem] xl:gap-[2rem]">
                    <div className=' lg:w-1/2'>
                        <h1 className="mt-[1rem] lg:mt-0 text-[1.875rem] md:text-[1.875rem] lg:text-[2rem] 2xl:text-[3rem] 3xl:text-[4rem] leading-[1.85rem] md:leading-[1.75rem] lg:leading-[1.9rem] xl:leading-[2rem] 2xl:leading-[2.875rem] 3xl:leading-[3.75rem] font-black  ">
                            {article.fields.articleTitle}
                        </h1>
                        <div className="mt-[1rem] border-b-[0.3125rem] border-[#F59E0B] w-[6.375rem] "></div>
                    </div>
                    <div className='mt-[2rem] lg:mt-0 flex flex-col gap-[1rem] lg:w-1/2 '>
                        {/* <h2 className='cormorant mt-[2rem]  text-[1.8rem] lg:text-[2.25rem] leading-[1.8rem] text-primaryWhite font-bold'>{article.fields.introductoryTitle}</h2> */}
                        {article.fields.introductoryText.content.map((idea: any, index: number) => (
                            <p key={index} className='md:text-[1.2rem]'>{idea.content[0].value}.</p>
                        ))}
                    </div> 
                </div>
            </div>

        </section>
  )
}
