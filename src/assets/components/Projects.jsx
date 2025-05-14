import React from 'react'
import cinebyte from '../images/cinebyte.png'
import delulu from '../images/delulu-ai.png'
import premier from '../images/premier.png'
import obys from '../images/obyse.png'

function Projects() {
  return (
    <div className='dark:bg-zinc-900 dark:text-white pt-20 md:pt-30 w-full h-[300vh] md:h-[170vh]'>
      <h1 className='text-4xl font-bold text-center'>Projects</h1>
      <div className='flex flex-col dark:bg-zinc-900 dark:text-white md:grid md:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center justify-items-center w-full max-w-[1200px] mx-auto px-4  mt-20 md:mt-30'>
        <div className='p-5 dark:bg-zinc-700 dark:text-white w-full hover:scale-105 md:hover:translate-y-[-30px] transition-all duration-300 max-w-[350px] bg-zinc-300 rounded-2xl h-[60vh] '>
          <img className='w-full h-[60%] object-cover rounded-2xl' src={cinebyte} alt="" />
          <h1 className='text-2xl mt-5 font-bold'>Cinebyte</h1>
          <p className='text-sm mb-6'>Cinebyte is a sleek and modern web application for discovering trending movies.</p>
          <a href="https://cine-byte.vercel.app/" target='_blank' className='bg-black cursor-pointer text-white px-4 py-2 rounded-md'>Demo<i class="ri-arrow-right-line ml-2"></i></a>
        </div>
        <div className='p-5 w-full dark:bg-zinc-700 dark:text-white max-w-[350px]  hover:scale-105 md:hover:translate-y-[-30px] transition-all duration-300 bg-zinc-300 rounded-2xl h-[60vh]'>
          <img className='w-full h-[60%] object-cover rounded-2xl' src={delulu} alt="" />
          <h1 className='text-2xl mt-5 font-bold'>Delulu-Ai</h1>
          <p className='text-sm mb-6'>Delulu AI is an AI-powered chatbot built with animations, and real-time interaction.</p>
          <a href="https://akhil667.github.io/delulu-AI/" target='_blank' className='bg-black cursor-pointer text-white px-4 py-2 rounded-md'>Demo<i class="ri-arrow-right-line ml-2"></i></a>
        </div>
        <div className='p-5 w-full dark:bg-zinc-700 dark:text-white max-w-[350px]  hover:scale-105 md:hover:translate-y-[-30px] transition-all duration-300 bg-zinc-300 rounded-2xl h-[60vh]'>
          <img className='w-full object-left h-[60%] object-cover rounded-2xl' src={premier} alt="" />
          <h1 className='text-2xl mt-5 font-bold'>Premier</h1>
          <p className='text-sm mb-6'> Fashion Premier, a modern and responsive fashion website of photography and films.</p>
          <a href="https://akhil667.github.io/Fashion-premier/" target='_blank' className='bg-black cursor-pointer text-white px-4 py-2 rounded-md'>Demo<i class="ri-arrow-right-line ml-2"></i></a>
        </div>
        <div className='p-5 w-full dark:bg-zinc-700 dark:text-white max-w-[350px]  hover:scale-105 md:hover:translate-y-[-30px] transition-all duration-300 bg-zinc-300 rounded-2xl h-[60vh]'>
          <img className='w-full h-[60%] object-cover rounded-2xl' src={obys} alt="" />
          <h1 className='text-2xl mt-5 font-bold'>Obys Agency clone</h1>
          <p className='text-sm mb-6'>This project immersive experience through web animations and smooth scrolling.</p>
          <a href="https://akhil667.github.io/obys-agency/" target='_blank' className='bg-black active:bg-zinc-500 cursor-pointer text-white px-4 py-2 rounded-md'>Demo<i class="ri-arrow-right-line ml-2"></i></a>
        </div>
      </div>
    </div>
  )
}

export default Projects
