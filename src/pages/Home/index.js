import React from 'react'
import Header from '../../components/Header'
import Intro from './intro'
import About from './About'
import Experiences from './Experiences'
import Projects from './Projects'
import Cources from './Courses'
import Contact from './Contact'

function Home() {
  return (
    <div>
      <Header />
      <div className = "px-40 bg-primary sm:px-5">
        <Intro />
        <About />  
        <Experiences />
        <Projects />
        <Cources />
        <Contact />
      </div>
    </div>
  )
}

export default Home