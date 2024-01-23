import React from 'react'
import Intro from './Intro'
import Commitment from './Commitment'
import Values from './Values'
import Framework from '../components/Framework'
import Closing from './Closing'

export default function About() {
  return (
    <div>
        <Intro />
        <Commitment />
        <Values />
        <Framework />
        <Closing />
    </div>
  )
}
