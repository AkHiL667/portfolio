import React from 'react'

function Navbar() {
  return (
    <div className='dark:bg-zinc-900 dark:text-white'>
    <nav className='top-0 h-10 sm:h-15 bg-white shadow-sm fixed left-0 right-0 z-100 dark:bg-zinc-800 sm:flex justify-between px-[10vw] items-center h-12 '>
      <div className='text-md hidden sm:block dark:bg-zinc-800 font-semibold'>Akhil</div>
      <div className='flex justify-end items-center h-full'>
        <ul className='flex gap-[4vw]'>
          <li className='font-semibold text-sm sm:text-md '>Home</li>
          <li className='font-semibold text-sm sm:text-md' >About</li>
          <li className='font-semibold text-sm sm:text-md'>Projects</li>
          <li className='font-semibold text-sm sm:text-md'>Contact</li>
        </ul>
      </div>
    </nav>
    </div>
  )
}

export default Navbar
