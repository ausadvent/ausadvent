'use client'

import React, { useEffect, useState } from 'react'

import { fetchArticles } from '../utils/fetchArticles'
import Image from 'next/image'

// Assets
import Left from '../../../assets/latest-left.svg'
import Right from '../../../assets/latest-right.svg'
import Eye from '../../../assets/yellow-eye.svg'
import Link from 'next/link'

export default function LatestArticles() {
    
    // Variables
    const [articles, setArticles] = useState<any>()
    
    // Store the 3 latest articles in a variable
    const recentArticles = articles?.slice(0,3)

    const [currentArticle, setCurrentArticle] = useState(0)

    const articleUrl = articles && articles[currentArticle]?.fields.articleUrl;
    
    // Use an absolute path or a fully qualified URL
    const linkHref = `/blog/${articleUrl}`;

    useEffect(() => {
        async function fetchingData() {
            const res:any = await fetchArticles()
            setArticles(res)
        }
        fetchingData()
    }, [])


    // Go to next article automatically after 5 seconds
    // const nextArticle = setTimeout(() => {
    //     currentArticle < recentArticles?.length - 1 ? setCurrentArticle(currentArticle + 1) : setCurrentArticle(0)
    // }, 5000)

    return (
        <div>
            <div className=''>
                <h3 className='cormorant py-8 text-[1.5rem] lg:text-[2.25rem] font-bold text-center'>LATEST ARTICLES</h3>
                {/* Articles box */}
                <div className='relative h-[16rem] md:h-[25rem] lg:h-[31.25rem] xl:h-[37.5rem] 2xl:h-[43.75rem]'>
                    {/* Hero */}
                    <div className='absolute inset-0 box-content z-1 w-full h-[16rem] md:h-[25rem] lg:h-[31.25rem] xl:h-[37.5rem] 2xl:h-[43.75rem]'>
                        <Image 
                            className='inset-0 w-full h-full object-cover object-top opacity-90'
                            src={articles && articles[currentArticle]?.fields.articleMainImage.fields.file.url}  
                            title={articles && articles[currentArticle]?.fields.articleMainImage.fields.title}
                            alt={articles && articles[currentArticle]?.fields.articleMainImage.fields.description}
                            width={100}
                            height={100}
                            unoptimized
                            loading='lazy'
                        />
                        {/* to-[#416AF1] */}
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#16244B] opacity-70 " aria-hidden="true"></div>
                    </div>
                    {/* Carousel container */}
                    <div className='px-[1rem] lg:px-[3.5rem] flex justify-between lg:gap-[3.5rem] h-[16rem] md:h-[25rem] lg:h-[31.25rem] xl:h-[37.5rem] 2xl:h-[43.75rem]'>
                        <div className="h-full flex">
                            <Image
                                className='z-10 hover:cursor-pointer self-center w-[34px] h-[30px]'
                                src={Left} 
                                title='Left arrow' 
                                alt='Left arrow' 
                                width={16}
                                height={16}
                                onClick={() => {
                                    if(currentArticle > 0) {
                                        setCurrentArticle(currentArticle -1)
                                    } else {
                                        setCurrentArticle(recentArticles.length - 1)
                                    }
                                }}
                            />
                        </div>

                        {/* Text */}
                        <div className="relative xl:w-full md:px-[4rem] py-8  px-[0.5rem] h-full flex flex-col gap-[1rem] items-center justify-around ">
                            <div className="md:pb-[1rem] w-full flex justify-between items-start gap-[0.5rem]">
                                <div className='flex flex-col gap-[1rem] text-primaryWhite'>
                                    <h3 className='cormorant text-[1.5rem] leading-none sm:text-[2rem] md:text-[2.8rem] lg:text-[3rem] 3xl:text-[4.5rem] font-bold sm:leading-[2.125rem] md:leading-none lg:leading-none'>{articles && articles[currentArticle]?.fields?.articleTitle && articles[currentArticle]?.fields?.articleTitle.toUpperCase()}</h3>
                                   {articles && (
                                     <Link href="/blog/[article]" as={linkHref} className="flex gap-[0.5rem] items-center lg:hover:cursor-pointer">
                                        <svg className="w-[1rem] md:w-[1.5rem] h-[1rem] md:h-[1.5rem] text-[#F59E0B]"  width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  
                                            <path stroke="none" d="M0 0h24v24H0z"/><circle cx="12" cy="12" r="2" />
                                            <path d="M2 12l1.5 2a11 11 0 0 0 17 0l1.5 -2" />
                                            <path d="M2 12l1.5 -2a11 11 0 0 1 17 0l1.5 2" />
                                        </svg>
                                        <p className='text-[#F59E0B] md:text-[1.25rem]'>Read</p>
                                        <Image className=' w-4 md:w-6 h-4 md:h-5' src={Right} title='Right arrow' alt='Right arrow' loading='lazy' />
                                    </Link>
                                   )}
                                </div>
                            </div>
                            
                            {/* Dots */}
                            <div className='mx-auto  w-full flex justify-center gap-2'>
                                <button aria-label='Article # 1 indicator' className={` w-[0.5rem] h-[0.5rem] rounded-full bg-[#2563EB] ${currentArticle === 0 && 'bg-white'}`}></button>
                                <button aria-label='Article # 2 indicator' className={`w-[0.5rem] h-[0.5rem] rounded-full bg-[#2563EB] ${currentArticle === 1 && 'bg-white'}`}></button>
                                <button aria-label='Article # 3 indicator' className={`w-[0.5rem] h-[0.5rem] rounded-full bg-[#2563EB] ${currentArticle === 2 && 'bg-white'}`}></button>
                            </div>

                        </div>

                        <div className='h-full flex '>
                            <Image 
                                className='z-10 hover:cursor-pointer self-center w-[34px] h-[30px]'
                                src={Right} 
                                title='Right arrow' 
                                alt='Right arrow' 
                                width={16}
                                height={16}
                                onClick={() => {
                                    if(currentArticle < recentArticles.length - 1) {
                                        setCurrentArticle(currentArticle + 1)
                                    } else {
                                        setCurrentArticle(0)
                                    }
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
