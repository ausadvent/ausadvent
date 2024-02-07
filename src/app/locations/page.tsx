import React from 'react'

// Components
import Queensland from './Queensland'
import Western from './Western'
import Intro from './Intro'
import Reach from './Reach'
import Contact from './Contact'

export default function Locations() {
  return (
    <main className='sm:mx-auto bg-blue-100 pb-[4rem]'>
        <Intro />
        <div className='xl:max-w-[1024px] xl:mx-auto xl:flex xl:gap-[2rem] xl:items-stretch'>
          <div className='xl:flex-1 h-full'>
            <Queensland />
          </div>
          <div className='xl:flex-1 xl:h-full'>
            <Western />
          </div>
        </div>
        <Reach />
        <Contact />
    </main>
  )
}
