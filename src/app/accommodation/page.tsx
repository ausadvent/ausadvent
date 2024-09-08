import React from 'react'
import Support from '../components/Support'
import AccommodationIntro from './AccommodationIntro'

// Database
import { propertiesArray } from '../accommodation/constants/properties'
import PropertiesCards from './PropertiesCards'
import Request from './Request'

export default function Accommodation() {
  return (
    <div className='sm:mx-auto bg-gray-200 pb-[1rem]'>
      <AccommodationIntro />
      <PropertiesCards properties={propertiesArray} />
      <Request />
      <Support />
    </div>
  )
}
