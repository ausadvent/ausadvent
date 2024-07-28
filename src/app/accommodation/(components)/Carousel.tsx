import Image from 'next/image'
import React from 'react'

// Assets
import Picture1 from '../../../../assets/accommodation/house-1.webp'
import Picture2 from '../../../../assets/accommodation/house-2.webp'
import Picture3 from '../../../../assets/accommodation/house-3.webp'
import Picture4 from '../../../../assets/accommodation/house-4.webp'
import Picture5 from '../../../../assets/accommodation/house-5.webp'

export default function Carousel() {
  return (
    <section>
        <div className='grid grid-cols-6 gap-[0.1rem] bg-blue-600 '>
            <Image 
                src={Picture1}
                className='col-span-3 w-full h-[10rem] lg:h-[14rem] 2xl:h-[20rem] object-cover'
                title='Photo of a cozy apartment in Logan Central'
                alt='Photo of a cozy apartment in Logan Central'
            />
            <Image 
                src={Picture2}
                className='col-span-3 w-full h-[10rem] lg:h-[14rem] 2xl:h-[20rem] object-cover'
                title='Photo of a cozy apartment in Logan Central'
                alt='Photo of a cozy apartment in Logan Central'
            />
            <Image 
                src={Picture3}
                className='col-span-2 w-full h-[10rem] lg:h-[14rem] 2xl:h-[20rem] object-cover'
                title='Photo of a cozy apartment in Logan Central'
                alt='Photo of a cozy apartment in Logan Central'
            />
            <Image 
                src={Picture4}
                className='col-span-2 w-full h-[10rem] lg:h-[14rem] 2xl:h-[20rem] object-cover'
                title='Photo of a cozy apartment in Logan Central'
                alt='Photo of a cozy apartment in Logan Central'
            />
            <Image 
                src={Picture5}
                className='col-span-2 w-full h-[10rem] lg:h-[14rem] 2xl:h-[20rem] object-cover'
                title='Photo of a cozy apartment in Logan Central'
                alt='Photo of a cozy apartment in Logan Central'
            />
        </div>
    </section>
  )
}
