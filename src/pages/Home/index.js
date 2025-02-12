import React from 'react'
import Header from '../../components/Header'
import Intro from './intro'

function Home() {
  return (
    <div className = "px-20 bg-primary">
      <Header />
      <Intro />
    </div>
  )
}

export default Home