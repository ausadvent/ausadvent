'use client'

import React, { useEffect, useState } from 'react'

import { fetchArticles } from '../utils/fetchArticles'
import Image from 'next/image'

// Assets
import Left from '../../../assets/blue-left.svg'
import Right from '../../../assets/blue-right.svg'
import Eye from '../../../assets/white-eye.svg'
import WhiteRight from '../../../assets/white-arrow.svg'

export default function LatestArticles() {
    const [articles, setArticles] = useState<any>()
    useEffect(() => {
        async function fetchingData() {
        const res:any = await fetchArticles()
        setArticles(res)
        }
        fetchingData()
    }, [])

    // Store the 3 latest articles in a variable
    const recentArticles = articles?.slice(0,3)

    const [currentArticle, setCurrentArticle] = useState(0)

    // Go to next article automatically after 5 seconds
    // const nextArticle = setTimeout(() => {
    //     currentArticle < recentArticles?.length - 1 ? setCurrentArticle(currentArticle + 1) : setCurrentArticle(0)
    // }, 5000)
  
    return (
        <div>
            <div className='pt-[3rem] sm:pt-[2rem] md:pt-[2.5rem] lg:pt-[4.5rem]'>
                <h2 className='cormorant text-[1.5rem] lg:text-[2.25rem] font-bold text-center'>LATEST ARTICLES</h2>
                {/* Articles box */}
                <div className='relative mt-[3rem] sm:mt-[2.5rem] lg:mt-[4.5rem] h-[16rem] md:h-[25rem] lg:h-[31.25rem] xl:h-[37.5rem] 2xl:h-[43.75rem]'>
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
                        <Image
                            className='z-10 hover:cursor-pointer'
                            src={Left} 
                            title='Left arrow' 
                            alt='Left arrow' 
                            onClick={() => {
                                if(currentArticle > 0) {
                                    setCurrentArticle(currentArticle -1)
                                } else {
                                    setCurrentArticle(recentArticles.length - 1)
                                }
                            }}
                        />

                        {/* Text */}
                        <div className="relative xl:w-full py-[1rem] md:pb-[4rem] lg:pb-[5rem] xl:pb-[8rem] 2xl:pb-[12rem] px-[0.5rem] h-full flex flex-col justify-end gap-[1rem]">
                            <div className="md:pb-[1rem] w-full flex justify-between items-start gap-[0.5rem]">
                                <div className='flex flex-col gap-[1rem] text-primaryWhite'>
                                    <h3 className='cormorant text-[1.875rem] sm:text-[2.25rem] md:text-[3rem] lg:text-[3.75rem] font-bold leading-[1.875rem] sm:leading-[2.125rem] md:leading-[3rem] lg:leading-[3.625rem]'>{articles && articles[currentArticle]?.fields?.articleTitle && articles[currentArticle]?.fields?.articleTitle.toUpperCase()}</h3>
                                    <div className="flex gap-[0.5rem] items-center">
                                        <Image src={Eye} title='Eye icon' alt='Eye icon' />
                                        <p>Read</p>
                                        <Image src={WhiteRight} title='Right arrow' alt='Right arrow' />
                                    </div>
                                </div>
                            </div>
                            
                            {/* Dots */}
                            <div className='mx-auto  w-full flex justify-center gap-2'>
                                <button className={` w-[0.3rem] h-[0.3rem] rounded-full bg-[#2563EB] ${currentArticle === 0 && 'bg-white'}`}></button>
                                <button className={`w-[0.3rem] h-[0.3rem] rounded-full bg-[#2563EB] ${currentArticle === 1 && 'bg-white'}`}></button>
                                <button className={`w-[0.3rem] h-[0.3rem] rounded-full bg-[#2563EB] ${currentArticle === 2 && 'bg-white'}`}></button>
                            </div>

                        </div>

                        <Image 
                            className='z-10 hover:cursor-pointer'
                            src={Right} 
                            title='Right arrow' 
                            alt='Right arrow' 
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
    )
}
