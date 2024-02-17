import React from 'react'
import { fetchData } from '../utils/fetchServices'

// Components
import Intro from './Intro'
import Portfolio from './Portfolio'
import ServicesDescription from './ServicesDescription'
import Framework from '../components/Framework'
import Support from '../components/Support'
import Jump from './Jump'

export default async function Services() {
    const services = await fetchData()

    return (
      <main>
        <Intro />
        <Portfolio services={services} />
        <ServicesDescription services={services} />
        <Framework />
        <div className='page sm:mx-auto pb-[2rem] sm:pb-[4rem] md:pb-[4.5rem] lg:pb-[5rem] xl:pb-[6rem] flex flex-col gap-[1.5rem]'>
        <h3 className='cormorant text-[1.5rem] text-[#6B7280]'>Jump To Section</h3>
          <Jump services={services} />
        </div>
        <Support />
      </main>
    )
}
