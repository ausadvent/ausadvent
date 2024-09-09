'use client'

import React, { useState } from 'react'
import { featuresPropertyCard } from '../constants/propertiesInterface';

interface propFeatures {
    property: featuresPropertyCard; // Update the prop type to accept an array
  }

export default function PropertyFeatures({property}:propFeatures) {
    const [moreInfo, setMoreInfo] = useState(false)
  
    return (
        <section>
            <button 
                className='mt-[1rem] flex justify-center items-center gap-1 mx-auto text-[1.125rem] lg:text-[1.3rem] text-blue-600 font-bold '
                onClick={() => setMoreInfo(prevState => !prevState)}
            >
                <span>More info</span>
                {!moreInfo ? (
                    <svg className="h-6 w-6"  width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <line x1="12" y1="5" x2="12" y2="19" />  <line x1="5" y1="12" x2="19" y2="12" /></svg>
                ) : (
                    <svg className="h-6 w-6"  width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <line x1="5" y1="12" x2="19" y2="12" /></svg>
                )}
            </button>

            {moreInfo && (
                <div className="mt-[1rem]">
                    {/* Features */}
                    <h4 className='font-bold md:text-[1.5rem]'>Key Features:</h4>
                    <ul className='list-disc pl-[1.5rem] md:text-[1.25rem]'>
                        {property.features.map((feature) => (
                            <li key={feature.id}>
                                {feature.featureDescription}
                            </li>
                        ))}
                    </ul>

                    <h4 className='mt-[2rem] font-bold md:text-[1.5rem]'>Local Area:</h4>
                    <p className='md:text-[1.25rem]'>{property.localAreaDescription}</p>

                    <h4 className='mt-[1rem] font-bold md:text-[1.5rem]'>Perfect For:</h4>
                    <p className='md:text-[1.25rem]'>{property.perfectForDescription}</p>
                </div>
            )}
    </section>
  )
}
