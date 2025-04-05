import Image from 'next/image'
import React from 'react'

import Link from 'next/link';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, INLINES,  Node } from '@contentful/rich-text-types';

// Assets
import bullet from '../../../../assets/article-main-bullet.svg';


 // Custom options to properly render rich text elements
 const options = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node: Node, children: React.ReactNode) => (
      <p className='xl:text-[1.3rem] lg:max-w-[90%] my-4'>{children}</p>
    ),
    [BLOCKS.HEADING_3]: (node: Node, children: React.ReactNode) => (
      <h3 className='font-bold text-4xl my-12'>{children}</h3>
    ),
    [BLOCKS.HEADING_4]: (node: Node, children: React.ReactNode) => (
      <h4 className='font-semibold text-2xl my-8'>{children}</h4>
    ),
    // tip section
    [BLOCKS.HEADING_6]: (node: Node, children: React.ReactNode) => (
      <h6 className='font-medium text-2xl my-16 p-[2rem] mt-[1rem]  border border-[#F59E0B] rounded-tr-[2rem] rounded-bl-[1rem]  flex flex-col   text-blueHigher lg:max-w-[80%]'>{children}</h6>
    ),
    [BLOCKS.UL_LIST]: (node: Node, children: React.ReactNode) => (
      <ul className='list-none pl-8 space-y-2'>{children}</ul>
    ),
    [BLOCKS.LIST_ITEM]: (node: Node, children: React.ReactNode) => (
      <li className='flex items-center'>
        <Image 
          src={bullet}  // Your custom bullet image from imports
          alt="List bullet" 
          width={16} 
          height={16} 
          className='mr-4 inline-block'
        />
        <span className='xl:text-[1.3rem]'>{children}</span>
      </li>
    ),
    [INLINES.HYPERLINK]: (node: Node, children: React.ReactNode) => (
      <a href={node.data.uri as string} className='text-blue-500 underline' target='_blank' rel='noopener noreferrer'>
        {children}
      </a>
    ),
    [BLOCKS.EMBEDDED_ASSET]: (node: Node) => (
      <div className='mt-[1rem] md:mt-[2rem]'>
        <Image 
          className='w-full h-[24.375rem] sm:h-[16rem] md:h-[21.875rem] lg:h-[24rem] xl:h-[31.25rem] rounded-tr-[2rem] object-cover'
          src={`https:${node.data.target.fields.file.url}`}
          title={node.data.target.fields.title} 
          alt={node.data.target.fields.description} 
          width={956.8} height={500}  
          loading='lazy'  
        />
      </div>
      
    )
  }
};
interface closingContent {
  nodeType: string,
  content: { value: string } []
}

export default function MainContent({article} : any) {

    return (
    <div className=' pt-[2rem] pb-[3rem] md:pt-[4rem] md:pb-[4rem] 2xl:py-[4rem] 3xl:py-[8rem] sm:flex sm:flex-col items-center'>
      <section className='p-4 flex flex-col gap-[1.5rem] md:gap-[1.9rem] lg:max-w-[60%]'>
          {/* Main Content title */}
          <h3 className='cormorant text-blueHigher font-bold text-[1.875rem] md:text-[3rem] leading-[2.063rem] md:leading-[3.2rem] xl:max-w-[70%] '>{article.fields.mainContentTitle}</h3>
          {article.fields.Conclusion}
          {/* Main Content with Rich Text */}
          <section className='mx-auto'>
            {documentToReactComponents(article.fields.mainContent, options)}
          </section>
          <div className='flex flex-col gap-2'>
            <div className="mt-[1rem] border-b-[0.3125rem] border-[#F59E0B] w-[6.375rem] "></div>
            <p className='cormorant font-bold text-[1.5rem] leading-[1.7rem]'>Make easy for planners to understand the functional impact of your disability and the personal circumstances of your everyday life.</p>
          </div>
          {/* Steps */}
          <section className='flex flex-col gap-[2rem]'>
            <h4 className='cormorant font-bold text-blueHigher text-[1.875rem]'>Go step by step</h4>
            <div className='flex flex-col xl:grid grid-cols-2 gap-[2rem]'>
              {article.fields.articleSteps.content.map((entry: any, index: number) => (
                <div key={index} className='bg-[#FFF7ED] p-[1rem] xl:p-[2rem] border border-[#F59E0B] rounded-tr-[2rem] rounded-bl-[1rem]'>
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
                </div>
              ))}
            </div>
          </section>
           {/* Conclusion */}
           <section className='p-[2rem] mt-[1rem]  border border-[#F59E0B] rounded-tr-[2rem] rounded-bl-[1rem]  flex flex-col text-blueHigher'>
            {documentToReactComponents(article.fields.conclusion, options)}
          </section>

          

          {/* Closing tag */}
          <section className="p-[2rem] mt-[1rem] bg-[#DBEAFE] border border-[#F59E0B] rounded-tr-[2rem] rounded-bl-[1rem] xl:max-w-[1024px] xl:mx-auto flex flex-col gap-[1rem] text-center text-blueHigher">
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
          </section>
      </section>
    </div>
  )
}
