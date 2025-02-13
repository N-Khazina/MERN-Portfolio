import React from 'react'

function Intro() {
  return (
    <div className='h-[80vh] bg-primary flex flex-col items-start justify-center gap-8 sm:w-full py-10'>
     <h1 className='text-white'>Hi, I am</h1>
     <h1 className='text-tertiary text-7xl sm:text-3xl'>Tresor Nyiringoma Habimana</h1>
     <h1 className='text-white text-7xl sm:text-3xl'>Software engineering expert</h1>
     <p className="w-3/4 text-white sm:w-full">I am a Software Engineer specializing in backend development, with a strong focus on databases, data storage, and management. I am passionate about building efficient, scalable, and secure systems to optimize data-driven applications</p>
     <button className= 'px-10 py-3 border-2 rounded text-tertiary border-tertiary'>Contact me</button>
    </div>
  )
}

export default Intro
 