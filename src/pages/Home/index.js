import React from 'react'
import Header from '../../components/Header'
import Intro from './intro'
import About from './About'

function Home() {
  return (
    <div>
      <Header />
      <div className = "px-40 bg-primary sm:px-5">
        <Intro />
        <About />
      </div>
    </div>
  )
}

export default Home