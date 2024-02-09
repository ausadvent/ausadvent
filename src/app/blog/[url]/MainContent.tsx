'use client'

import Image from 'next/image'
import React, { useEffect } from 'react'

interface stepsContent {
  nodeType: string | 'data' ,
  content: { value: string } [];
  data: {
    target: {
      fields: {
        file: {
          url: string
        };
        title: string;
        description: string
      }
    }
  }
}

interface closingContent {
  nodeType: string,
  content: { value: string } []
}

export default function MainContent({article} : any) {

    return (
    <section className='bg-blue-100 pt-[2rem] pb-[3rem] md:pb-[4rem] 2xl:py-[4rem] 3xl:py-[8rem] sm:flex sm:justify-center'>
        <div className='page flex flex-col gap-[1.5rem] md:gap-[1.9rem] '>
          {/* <h2 className='cormorant text-[1.8rem] lg:text-[2.25rem] leading-[1.8rem] text-blueHigher font-bold'>{article.fields.introductoryTitle}</h2> */}
            {/* Steps */}
            <div className='flex flex-col gap-[1rem]'>
                {article.fields.steps.content.map((entry: stepsContent, index: number) => (
                  <div key={index} className=''>
                    {entry.nodeType === "heading-3" ? (
                      <h3 className='cormorant text-[1.575rem] leading-[1.575rem] font-semibold'>{entry.content[0].value}</h3>
                    ): entry.nodeType === "paragraph" ? (
                        <p>{entry.content[0].value}</p>
                    ) : (
                      <Image 
                        className='w-full h-[12.5rem] sm:h-[16rem] md:h-[25rem] xl:h-[31.25rem] rounded-tr-[2rem]' 
                        src={entry.data.target.fields.file.url} 
                        title={entry.data.target.fields.title} 
                        alt={entry.data.target.fields.description} 
                        width={20} height={20} 
                        loading='lazy'  
                        unoptimized 
                      />
                    ) }
                  </div>
                ))}
            </div>

            {/* Closing tag */}
            <div className="p-[2rem] mt-[1rem] bg-[#FFF7ED] border border-[#F59E0B] rounded-tr-[2rem] rouded-bl-[1rem] flex flex-col gap-[1rem]">
              {article.fields.closing.content.map((entry: closingContent, index:number) => (
                entry.nodeType === "heading-3" ? (
                  <h3 key={index} className='font-bold'>{entry.content[0].value}</h3>
                ): (
                  <p key={index}>{entry.content[0].value}</p>
                )
                ))}
            </div>
        </div>
    </section>
  )
}
