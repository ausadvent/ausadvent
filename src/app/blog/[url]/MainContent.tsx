import Image from 'next/image'
import React from 'react'
import Way from './Way';

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
    <section className='bg-blue-100 pt-[2rem] pb-[3rem] md:pb-[4rem] 2xl:py-[4rem] 3xl:py-[8rem] sm:flex sm:flex-col items-center'>
        <div className='page flex flex-col gap-[1.5rem] md:gap-[1.9rem] '>
            {/* Steps */}
            <div className='flex flex-col gap-[1rem]'>
                {article.fields.steps.content.map((entry: stepsContent, index: number) => (
                  <div key={index} className=''>
                    {entry.nodeType === "heading-3" ? (
                      <h3 className='cormorant text-[1.575rem] leading-[1.575rem] font-semibold'>{entry.content[0].value}</h3>
                    ): entry.nodeType === "paragraph" ? (
                        <p>{entry.content[0].value}</p>
                    ) : (
                      <div className='md:my-[1rem] md:border-[2px] md:border-[#93C5FD] md:rounded-tr-[2rem] md:rounded-bl-[1rem] md:p-[1rem]'>
                        <Image 
                          className='w-full h-[12.5rem] sm:h-[16rem] md:h-[21.875rem] xl:h-[31.25rem] rounded-tr-[2rem] object-cover' 
                          src={`https:${entry.data.target.fields.file.url}`} 
                          title={entry.data.target.fields.title} 
                          alt={entry.data.target.fields.description} 
                          width={956.8} height={500} 
                          loading='lazy'  
                        />
                        <div className="hidden md:flex mt-[2rem] border-b-[0.3125rem] border-[#F59E0B] w-[6.375rem] "></div>
                        <p className='hidden md:flex mt-[1rem] cormorant text-[2.25rem] leading-[2.25rem] '>
                          Make Easy For Planners To Understand The Functional Impact Of Your Disability And The Personal Circumstances Of Your Everyday Life.
                        </p>
                      </div>
                    ) }
                  </div>
                ))}
            </div>

            {/* Closing tag */}
            <div className="p-[2rem] mt-[1rem] bg-[#FFF7ED] border border-[#F59E0B] rounded-tr-[2rem] rounded-bl-[1rem] xl:max-w-[1024px] xl:mx-auto flex flex-col gap-[1rem]">
              {article.fields.closing.content.map((entry: closingContent, index:number) => (
                entry.nodeType === "heading-3" ? (
                  <h3 key={index} className='font-bold'>{entry.content[0].value}</h3>
                ): (
                  <p key={index}>{entry.content[0].value}</p>
                )
                ))}
            </div>
        </div>

        <div className="mt-[2rem] sm:mt-[3rem] lg:mt-[4rem]">
          <Way />
        </div>
    </section>
  )
}
