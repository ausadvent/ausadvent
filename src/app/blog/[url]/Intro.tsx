import Image from 'next/image'
import React from 'react'

export default function Intro({article}: any) {
    return (
        <section className="page sm:mx-auto pb-[2rem] sm:pb-0 ">
            {/* Background image */}
            <div className="absolute inset-0 h-[57.5rem] sm:h-[45.5rem] md:h-[50.5rem] lg:h-[61.5rem] xl:h-[62.5rem] -z-10">
                <Image 
                    src={article.fields.articleMainImage.fields.file.url}
                    title={article.fields.articleMainImage.fields.title} 
                    alt={article.fields.articleMainImage.fields.description} 
                    className='absolute inset-0 w-full h-full object-cover object-top opacity-80'
                    width={20}
                    height={20}
                    unoptimized
                />
                
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#1e3a8a] to-[#1e3a8a] opacity-90 " aria-hidden="true"></div>
            </div>

            {/* Content */}
            <div className=' pt-[8rem] md:pt-[4.5rem] lg:pt-[8rem] xl:pt-[12rem] h-[52rem] sm:h-[42rem] md:h-[46rem] lg:h-[57rem] xl:h-[58rem] text-primaryWhite '>
                <h2 className='text-[0.75rem] lg:text-[1.2rem] text-[#93C5FD]'>
                    Articles | {article.fields.articleTitle}
                </h2>
                <div className="lg:mt-[3rem] flex flex-col lg:flex-row lg:gap-[1rem] xl:gap-[2rem]">
                    <div className=' lg:w-1/2'>
                        <h1 className="mt-[1rem] lg:mt-0 text-[1.875rem] md:text-[1.875rem] lg:text-[3rem] xl:text-[3rem] 3xl:text-[4rem] leading-[1.85rem] md:leading-[1.75rem] lg:leading-[3rem] xl:leading-[2.875rem] 3xl:leading-[3.75rem] font-black  ">
                            {article.fields.articleTitle}
                        </h1>
                        <div className="mt-[1rem] border-b-[0.3125rem] border-[#F59E0B] w-[6.375rem] "></div>
                    </div>
                    <div className='mt-[2rem] lg:mt-0 flex flex-col gap-[0.5rem] lg:w-1/2 '>
                        {/* <h2 className='cormorant mt-[2rem]  text-[1.8rem] lg:text-[2.25rem] leading-[1.8rem] text-primaryWhite font-bold'>{article.fields.introductoryTitle}</h2> */}
                        {article.fields.introductoryText.content.map((idea: any, index: number) => (
                            <p key={index} className='md:text-[1.2rem]'>{idea.content[0].value}</p>
                        ))}
                    </div> 
                </div>
                <div className='mt-[2rem] sm:mt-[4rem] sm:p-[1rem] xl:p-[1.5rem] sm:border sm:border-[#F59E0B] sm:rounded-tr-[2rem] sm:rounded-bl-[1rem] sm:bg-gradient-to-b from-[#3E7BFF33] to-[#1D51C3CC] '>
                    <div className="mt-[1rem] border-b-[0.3125rem] border-[#F59E0B] w-[6.375rem] "></div>
                    <p className='pt-[1rem] sm:pt-[0.5rem] xl:text-[1.2rem] xl:font-bold'>It is a huge step moving onto the NDIS and to help you achieve the best possible result of your NDIS plan meeting, we have provided the best tips and advice on how to prepare for the meeting.</p>
                </div>
            </div>

        </section>
  )
}
