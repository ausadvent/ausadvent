import React from 'react'
import Intro from './Intro'
import Features from './Features'
import NotFound from '../not-found'
import Support from '../components/Support'

export default function Accommodation() {
  return (
    <div className='sm:mx-auto bg-gray-200 pb-[1rem]'>
        <Intro />
        <Features />
        <Support />
    </div>
    // <NotFound />
  )
}
