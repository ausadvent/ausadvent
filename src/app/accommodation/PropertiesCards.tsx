
import React from 'react'
import { simplePropertiesCard } from './constants/propertiesInterface'
import Image from 'next/image';

// Assets
import bedIcon from '../../../assets/accommodation/icon-bed.svg'
import showerIcon from '../../../assets/accommodation/icon-shower.svg'
import PropertyFeatures from './(components)/PropertyFeatures';

interface PropertiesCardsProps {
    properties: simplePropertiesCard[]; // Update the prop type to accept an array
  }

export default function PropertiesCards({properties}:PropertiesCardsProps) {

    return (
    <article className=''>
        <div className="page sm:mx-auto">
            <div className="lg:mt-[2rem] grid grid-cols-1 gap-[2rem] md:gap-[4rem]">
                {properties.map((property: simplePropertiesCard) => (
                    <div 
                        key={property.id}
                        className='page py-[2rem] lg:py-[3rem] bg-white rounded-tr-2xl md:rounded-tr-[3rem] rounded-bl-xl md:rounded-bl-3xl '
                    >
                        <h3 className='md:max-w-[25rem] text-[1.875rem] md:text-[1.875rem] lg:text-[2rem] leading-[1.875rem] md:leading-[1.75rem] lg:leading-[2rem] text-[#6B7280] font-black'>{property.houseTitle}</h3>
                        
                        {/* Images container */}
                        <div className="mt-[1rem] xl:mt-[2rem] grid grid-cols-2 bg-gradient-to-r from-blue-300 to-blue-500  ">
                            {property.photos.map((photo) => (
                                <Image 
                                    key={photo.id}
                                    className=' h-[8rem] md:h-[10rem] lg:h-[14rem] w-[12rem] sm:w-full object-cover '
                                    src={photo.picture}
                                    title='House photograph'
                                    alt='House photograph'
                                />
                            ))}
                        </div>

                        <p className='mt-[1rem] text-gray-500 lg:text-[1.3rem]'>{property.address}</p>

                        {/* Icons */}
                        <div className="mt-[1rem] flex gap-[1rem] lg:text-[1.3rem]">
                            {/* Bed */}
                            <div className="flex items-center gap-[0.5rem] ">
                                <Image 
                                    src={bedIcon}
                                    className='w-[1.5rem] h-[1.5rem]'
                                    title='bed icon'
                                    alt='bed icon'
                                />
                                <p>{property.bedrooms}</p>
                            </div>
                            {/* Shower */}
                            <div className="flex items-center gap-[0.5rem] ">
                                <Image 
                                    src={showerIcon}
                                    className='w-[1.5rem] h-[1.5rem]'
                                    title='shower icon'
                                    alt='shower icon'
                                />
                                <p>{property.bathrooms}</p>
                            </div>
                        </div>

                       <PropertyFeatures property={property} />

                    </div>
                ))}
            </div>
        </div>
    </article>
  )
}
