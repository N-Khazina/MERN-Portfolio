import React from 'react'

function Intro() {
  return (
    <div className='h-[80vh] bg-primary flex flex-col items-start justify-center gap-8'>
     <h1 className='text-white'>Hi, I am</h1>
     <h1 className='text-tertiary text-7xl'>Tresor Nyiringoma Habimana</h1>
     <h1 className='text-white text-7xl'>Software engineering expert</h1>
     <p className="text-white">I am a Software Engineer specializing in backend development, with a strong focus on databases, data storage, and management. I am passionate about building efficient, scalable, and secure systems to optimize data-driven applications</p>
     <button className= 'px-10 py-3 text-white border-2 rounded border-tertiary'>Contact me</button>
    </div>
  )
}

export default Intro
