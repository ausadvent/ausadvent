'use client'

import React from 'react'

import Image from 'next/image';

// Assets
import Eye from '../../../assets/blog-yellow-eye.svg'
import Right from '../../../assets/blog-yellow-arrow.svg'
import Link from 'next/link';

export default function ArticlesList({articles}:any) {

  return (
      <section className='bg-blue-100 py-[2rem] 2xl:py-[4rem] 3xl:py-[8rem] sm:flex sm:justify-center '>
          <div className='page flex flex-col gap-[4rem] 3xl:gap-[8rem]'>
              {articles.map((article: any, index: number) => (
                  <div key={index} className='flex flex-col '>
                      {/* Yellow section + image */}
                      <div className={`lg:flex-auto lg:min-h-[22rem] 2xl:min-h-[25rem] 3xl:min-h-[31.25rem] pt-[1.5rem] md:pt-0 flex flex-col md:flex-row gap-[1rem] bg-[#F59E0B] md:bg-gradient-to-b from-[#F59E0B] via-white to-white rounded-tl-[2rem] ${index % 2 === 0 ? 'md:flex-row-reverse md:rounded-bl-[1rem] md:rounded-tr-[3rem] ' : ''} `}>
                          {/* Title container */}
                          <div className='relative md:w-1/2 px-[1.5rem] xl:px-[3rem] 3xl:px-[4rem] md:py-[1.5rem] lg:py-[3rem] 3xl:py-[4rem] flex flex-col md:gap-[1rem] xl:gap-[1.5rem]'>
                                <h2 className='cormorant text-[2.25rem] xl:text-[3rem] 3xl:text-[4rem] leading-[2.375rem] xl:leading-[3.125rem] 3xl:leading-[4.375rem] font-semibold'>{article?.fields.articleTitle}</h2>
                                <div className=" mt-[0.5rem] md:-mt-[0.6rem] xl:-mt-[1.1rem] w-1/3 border-b-[0.3rem] border-[#3E7BFF]"></div>
                                {/* Intro container from md */}
                                <div className="hidden md:flex flex-col gap-[1rem] lg:h-full lg:justify-between " >
                                    <p className='xl:text-[1.125rem] 3xl:text-[1.25rem]'>{article.fields.introductoryText.content[0].content[0].value.slice(0, 120)}...</p>
                                    {/* Button */}
                                    <Link href={`blog/${article?.fields.articleUrl}`} className=" flex items-center gap-[0.5rem]">
                                        <Image className='w-[1rem] h-[0.74rem]' src={Eye} title='Eye symbol' alt='Eye symbol' width={20} height={20} loading='lazy' />
                                        <p className='text-[#F59E0B] 2xl:text-[1.125rem] 3xl:text-[1.25rem]'>Read more</p>
                                        <Image className='w-[0.84rem] h-[0.44rem]' src={Right} title='Right arrow symbol' alt='Right arrow symbol' width={20} height={20} loading='lazy' />
                                    </Link>
                                </div>
                          </div>
                          {/* Image container */}
                          <div className='relative w-full md:w-1/2 h-[18.75rem] md:h-auto'>
                              <Image 
                                  className=' rounded-tr-[2rem] md:rounded-tr-none md:rounded-bl-[1rem] w-full h-full object-cover object-right-top ' 
                                  src={article?.fields.articleMainImage.fields.file.url} 
                                  title={article?.fields.articleMainImage.fields.title}
                                  alt={article?.fields.articleMainImage.fields.description}
                                  width={20}
                                  height={20}
                                  loading='lazy'
                                  unoptimized
                              />
                              <div className="absolute w-1/3 right-0 border-b-[0.3rem] border-[#F59E0B]"></div>
                          </div>
                      </div>
                      {/* White section container until md */}
                      <div className="md:hidden px-[1.5rem] pt-[1.5rem] pb-[1rem] bg-white rounded-br-[1rem]" >
                          <p>{article.fields.introductoryText.content[0].content[0].value.slice(0, 120)}...</p>
                          {/* Button */}
                          <Link href={`blog/${article?.fields.articleUrl}`} className="mt-[1rem] flex items-center gap-[0.5rem]">
                              <Image className='w-[1rem] h-[0.74rem]' src={Eye} title='Eye symbol' alt='Eye symbol' width={20} height={20} loading='lazy' />
                              <p className='text-[#F59E0B]'>Read more</p>
                              <Image className='w-[0.84rem] h-[0.44rem]' src={Right} title='Right arrow symbol' alt='Right arrow symbol' width={20} height={20} loading='lazy' />
                          </Link>
                      </div>
                      
                  </div>
              ))}
          </div>
      </section>
    
  )
}

