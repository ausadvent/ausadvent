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
    console.log('hey',articles)

    // Store the 3 latest articles in a variable
    const recentArticles = articles?.slice(0,3)

    const [currentArticle, setCurrentArticle] = useState(0)

    // Go to next article automatically after 5 seconds
    const nextArticle = setTimeout(() => {
        currentArticle < recentArticles?.length - 1 ? setCurrentArticle(currentArticle + 1) : setCurrentArticle(0)
    }, 5000)
  
    return (
        <div>
            <div className='pt-[3rem]'>
                <h2 className='cormorant text-[1.5rem] font-bold text-center'>LATEST ARTICLES</h2>
                {/* Articles box */}
                <div className='relative mt-[3rem] h-[16rem]'>
                    {/* Hero */}
                    <div className='absolute inset-0 box-content z-1 w-full h-[16rem] '>
                        <Image 
                            className='inset-0 w-full h-full object-cover opacity-90'
                            src={articles && articles[currentArticle]?.fields.articleMainImage.fields.file.url}  
                            title={articles && articles[currentArticle]?.fields.articleMainImage.fields.title}
                            alt={articles && articles[currentArticle]?.fields.articleMainImage.fields.description}
                            width={100}
                            height={100}
                            unoptimized
                            loading='eager'
                        />
                        {/* to-[#416AF1] */}
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#16244B] opacity-70 " aria-hidden="true"></div>
                    </div>
                    {/* Text */}
                    <div className="relative py-[1rem] px-[0.5rem] h-full flex flex-col justify-end gap-[1rem]">
                        <div className="w-full flex justify-between items-start gap-[0.5rem]">
                            <Image
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
                            <div className='flex flex-col gap-[1rem] text-primaryWhite'>
                                <h3 className='cormorant text-[1.875rem] font-bold leading-[1.875rem]'>{articles && articles[currentArticle]?.fields?.articleTitle && articles[currentArticle]?.fields?.articleTitle.toUpperCase()}</h3>
                                <div className="flex gap-[0.5rem] items-center">
                                    <Image src={Eye} title='Eye icon' alt='Eye icon' />
                                    <p>Read</p>
                                    <Image src={WhiteRight} title='Right arrow' alt='Right arrow' />
                                </div>
                            </div>
                            <Image 
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
                        
                        {/* Dots */}
                        <div className='mx-auto  w-full flex justify-center gap-2'>
                            <button className={` w-[0.3rem] h-[0.3rem] rounded-full bg-[#2563EB] ${currentArticle === 0 && 'bg-white'}`}></button>
                            <button className={`w-[0.3rem] h-[0.3rem] rounded-full bg-[#2563EB] ${currentArticle === 1 && 'bg-white'}`}></button>
                            <button className={`w-[0.3rem] h-[0.3rem] rounded-full bg-[#2563EB] ${currentArticle === 2 && 'bg-white'}`}></button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}