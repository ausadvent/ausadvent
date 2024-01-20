import React from 'react'
import { fetchData } from '../utils/fetchServices'

// Components
import Intro from './Intro'
import Portfolio from './Portfolio'
import ServicesDescription from './ServicesDescription'
import Framework from '../components/Framework'

export default async function Services() {
    const services = await fetchData()

    return (
    <div>
        <Intro />
        <Portfolio services={services} />
        <ServicesDescription services={services} />
        <Framework />
    </div>
  )
}
