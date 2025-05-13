import React from 'react'
import Akhil from '../images/Akhil.jpg'

function Hero() {
  return (
    <div className='dark:bg-zinc-800 h-screen flex flex-col sm:flex-row sm:justify-center sm:items-center sm:gap-[20vw]  h-full w-full '>
      <div>
        <h1 className='text-4xl font-bold'>Hi, I'm Akhil 👋</h1>
      </div>
      <div>
        <img className='hero-image object-cover' src={Akhil} alt="Akhil" />
      </div>
    </div>
  )
}

export default Hero
