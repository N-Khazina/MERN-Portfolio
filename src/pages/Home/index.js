import React from 'react'
import Header from '../../components/Header'
import Intro from './intro'
import About from './About'
import Experiences from './Experiences'

function Home() {
  return (
    <div>
      <Header />
      <div className = "px-40 bg-primary sm:px-5">
        <Intro />
        <About />
        <Experiences />
      </div>
    </div>
  )
}

export default Home