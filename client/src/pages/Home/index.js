import React from 'react'
import Header from '../../components/Header'
import Intro from './intro'
import About from './About'
import Experiences from './Experiences'
import Projects from './Projects'
import Cources from './Courses'
import Contact from './Contact'
import Footer from './Footer'
import Leftsider from './Leftsider'

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
        <Footer />
        <Leftsider />
      </div>
    </div>
  )
}

export default Home