import Image from 'next/image'
import React from 'react'

// Assets
import Picture1 from '../../../../assets/contentful/meeting-maain-image.jpg'
import Picture2 from '../../../../assets/contentful/meeting-maain-image.jpg'
import Picture3 from '../../../../assets/contentful/meeting-maain-image.jpg'
import Picture4 from '../../../../assets/contentful/meeting-maain-image.jpg'
import Picture5 from '../../../../assets/contentful/meeting-maain-image.jpg'

export default function Carousel() {
  return (
    <section>
        <div className='grid grid-cols-6 gap-[0.2rem] bg-blue-600 '>
            <Image 
                src={Picture1}
                className='col-span-3 w-auto h-[10rem] object-cover'
                title='Photo of a cozy apartment in Logan Central'
                alt='Photo of a cozy apartment in Logan Central'
            />
            <Image 
                src={Picture1}
                className='col-span-3 w-auto h-[10rem] object-cover'
                title='Photo of a cozy apartment in Logan Central'
                alt='Photo of a cozy apartment in Logan Central'
            />
            <Image 
                src={Picture1}
                className='col-span-2 w-auto h-[10rem] object-cover'
                title='Photo of a cozy apartment in Logan Central'
                alt='Photo of a cozy apartment in Logan Central'
            />
            <Image 
                src={Picture1}
                className='col-span-2 w-auto h-[10rem] object-cover'
                title='Photo of a cozy apartment in Logan Central'
                alt='Photo of a cozy apartment in Logan Central'
            />
            <Image 
                src={Picture1}
                className='col-span-2 w-auto h-[10rem] object-cover'
                title='Photo of a cozy apartment in Logan Central'
                alt='Photo of a cozy apartment in Logan Central'
            />
        </div>
    </section>
  )
}
