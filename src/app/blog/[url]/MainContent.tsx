import Image from 'next/image'
import React from 'react'
import Way from './Way';
import Link from 'next/link';


// Assets
import bullet from '../../../../assets/article-main-bullet.svg';

// interface stepsContent {
//   nodeType: string | 'data' ,
//   content: { value: string } [];
//   data: {
//     target: {
//       fields: {
//         file: {
//           url: string
//         };
//         title: string;
//         description: string
//       }
//     }
//   }
// } commenting unused function

interface closingContent {
  nodeType: string,
  content: { value: string } []
}

export default function MainContent({article} : any) {

    return (
    <div className=' pt-[2rem] pb-[3rem] md:pt-[4rem] md:pb-[4rem] 2xl:py-[4rem] 3xl:py-[8rem] sm:flex sm:flex-col items-center'>
      <main className='page flex flex-col gap-[1.5rem] md:gap-[1.9rem] '>
          {/* Main Content title */}
          <h3 className='cormorant text-blueHigher font-bold text-[1.875rem] md:text-[3rem] leading-[2.063rem] md:leading-[3.2rem] max-w-[60%] '>{article.fields.mainContentTitle}</h3>

          {/* <section className='flex flex-col gap-[1rem] 2xl:w-2/3 2xl:mx-auto '>
              
            {article.fields.steps.content.map((entry: stepsContent, index: number) => (
              <div key={index} className=''>
                {entry.nodeType === "heading-3" ? (
                  <h3 className='cormorant text-[1.575rem] leading-[1.575rem] font-semibold'>{entry.content[0].value}</h3>
                ): entry.nodeType === "paragraph" ? (
                    <p className=''>{entry.content[0].value}</p>
                ) : (
                  <div className='md:my-[1rem] md:border-[2px] md:border-[#93C5FD] md:rounded-tr-[2rem] md:rounded-bl-[1rem] md:p-[1rem]'>
                    <Image 
                      className='w-full h-[24.375rem] sm:h-[16rem] md:h-[21.875rem] xl:h-[31.25rem] rounded-tr-[2rem] object-cover' 
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
          </section> */}

          {/* Main idea */}
          <article className='lg:max-w-[80%] mx-auto bg-red-200'>
            {article.fields.mainContent.content.slice(0, -1).map((entry: any, index: number) => (
              entry.nodeType === "embedded-asset-block" ? (
                <div key={index} className='mt-[1rem] md:mt-[2rem] '>
                  <Image 
                    className='w-full h-[24.375rem] sm:h-[16rem] md:h-[21.875rem] lg:h-[24rem] xl:h-[31.25rem] rounded-tr-[2rem] object-cover'
                    src={`https:${entry.data.target.fields.file.url}`}
                    title={entry.data.target.fields.title} 
                    alt={entry.data.target.fields.description} 
                    width={956.8} height={500} 
                    loading='lazy'  
                  />
                </div>
              ) : (
                <div key={index} className='mt-[1rem] md:mt-[3rem] flex gap-[0.5rem]'>
                  <Image
                    src={bullet}
                    className='h-[1rem] w-[1rem] '
                    title='Idea bullet'
                    alt="Idea's bullet"
                    height={16}
                    width={16}
                    loading='lazy'
                  />
                  <p className='xl:text-[1.3rem]'>{entry.content[0].value}</p>
                </div>
              )
            ))}
          </article>

          <div className='flex flex-col gap-2'>
            <div className="mt-[1rem] border-b-[0.3125rem] border-[#F59E0B] w-[6.375rem] "></div>
            <p className='cormorant font-bold text-[1.5rem] leading-[1.7rem]'>Make easy for planners to understand the functional impact of your disability and the personal circumstances of your everyday life.</p>
          </div>

            <section className="mt-[2rem] sm:mt-[3rem] lg:mt-[4rem]">
              <Way />
            </section>

          {/* Steps */}
          <article className='flex flex-col gap-[2rem]'>
            <h4 className='cormorant font-bold text-blueHigher text-[1.875rem]'>Go step by step</h4>
            <div className='flex flex-col xl:grid grid-cols-2 gap-[2rem]'>
              {article.fields.articleSteps.content.map((entry: any, index: number) => (
                <section key={index} className='bg-[#FFF7ED] p-[1rem] xl:p-[2rem] border border-[#F59E0B] rounded-tr-[2rem] rounded-bl-[1rem]'>
                  {entry.content.map((idea: any, index: number) => (
                    index === 0 ? (
                      <h4 key={index} className='text-blueHigher font-bold'>
                        {idea.value}
                      </h4>
                    ) : (
                      <p key={index} className='mt-[1rem]'>
                        {idea.value}
                      </p>
                    )
                  ))}
                </section>
              ))}
            <p className='xl:flex xl:items-center px-[1rem] font-bold text-[#374151]'>It makes easy for planners to understand the functional impact of your disability and the personal circumstances of your everyday life.</p>
            </div>

          </article>

          {/* Closing tag */}
          <article className="p-[2rem] mt-[1rem] bg-[#DBEAFE] border border-[#F59E0B] rounded-tr-[2rem] rounded-bl-[1rem] xl:max-w-[1024px] xl:mx-auto flex flex-col gap-[1rem] text-center text-blueHigher">
            {article.fields.closing.content.map((entry: closingContent, index:number) => (
              entry.nodeType === "heading-3" ? (
                <h3 key={index} className='font-bold'>{entry.content[0].value}</h3>
              ): (
                <p key={index}>{entry.content[0].value}</p>
              )
            ))}
            <Link className='mt-[1.5rem] sm:mx-auto w-full flex' href={'/locations#form'} scroll >
              <button className='w-full sm:w-[25rem] md:w-[24.375rem] xl:w-full sm:mx-auto text-blueHigher font-bold bg-[#FDBA74] py-[0.5rem] xl:py-[1rem] rounded-lg text-[1.125rem]'>
                  Contact us
              </button>
            </Link>
          </article>
      </main>
    </div>
  )
}
