'use client'

import Image from 'next/image'
import React from 'react'

export default function Intro({article}: any) {

    return (
        <article className="  sm:mx-auto pb-[2rem] sm:pb-0 h-screen ">
            {/* Background image */}
            <div className=" absolute inset-0  -z-10 ">
                <Image 
                    src={`https:${article.fields.articleMainImage.fields.file.url}`}
                    title={article.fields.articleMainImage.fields.title} 
                    alt={article.fields.articleMainImage.fields.description} 
                    className=' absolute inset-0  object-cover object-top opacity-100  -z-10'
                    fill
                    sizes='100vw'
                    priority={true}
                />
                
                <div className="absolute h-full inset-0 bg-gradient-to-b from-transparent  to-[#1e3a8a]  opacity-90 -z-10 " aria-hidden="true"></div>
            </div>

            {/* Content */}
            <section className=' px-4  flex flex-col justify-end xl:pb-40 h-[90vh]  text-primaryWhite lg:max-w-[80vw] mx-auto '>
                <h2 className='text-[0.75rem] lg:text-[1.2rem] text-white w-full xl:min-w-[20rem] max-w-[50rem]'>
                    Articles | {article.fields.articleTitle}
                </h2>
                <div className="lg:mt-[3rem] flex flex-col  2xl:flex-row lg:gap-[3rem] xl:gap-[2rem]">
                    <div className=' '>
                        <h1 className="w-full xl:min-w-[50rem] mt-[1rem] lg:mt-0 text-[1.875rem] md:text-[1.875rem] lg:text-[2.5rem] xl:text-[3rem] 3xl:text-[4rem] leading-[1.85rem] md:leading-[1.75rem] lg:leading-[3rem] xl:leading-[2.875rem] 3xl:leading-[3.75rem] font-black  ">
                            {article.fields.introductoryTitle?.toUpperCase()}
                        </h1>
                        <div className="mt-[1rem] border-b-[0.3125rem] border-[#F59E0B] w-[6.375rem] "></div>
                    </div>
                    <div className=''>
                        <div className='mt-[2rem] lg:mt-0 flex flex-col gap-[0.5rem] '>
                            {article.fields.introductoryText.content.map((idea: any, index: number) => (
                                <p key={index} className='md:text-[1.2rem] lg:text-[1.4rem] '>{idea.content[0].value}</p>
                            ))}
                        </div> 
                        <div className='mt-[4rem] sm:mt-[4rem] sm:p-[1rem] xl:p-[1.5rem]  sm:border sm:border-[#F59E0B] sm:rounded-tr-[2rem] sm:rounded-bl-[1rem] sm:bg-gradient-to-b from-[#3E7BFF33] to-[#1D51C3CC] '>
                        <p className='bg-[#1e3a8a] sm:bg-transparent p-[1rem] sm:p-0 xl:text-[1.2rem] xl:font-bold rounded-tr-2xl rounded-bl-xl sm:rounded-none border border-[#F59E0B] sm:border-none '>{article.fields.introText2}</p>
                        </div>
                    </div>
                    
                </div>
                
            </section>

        </article>
  )
}
