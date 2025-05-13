import React from 'react'

function Navbar() {
  return (
    <div className='dark:bg-zinc-800 dark:text-white'>
    <nav className='hidden fixed top-0 left-0 right-0 z-10 dark:bg-zinc-800 sm:flex justify-between px-[10vw] items-center h-12 '>
      <div className='text-md dark:bg-zinc-800 font-semibold'>Akhil</div>
      <div>
        <ul className='flex gap-[4vw]'>
          <li className='font-semibold text-md '>Home</li>
          <li className='font-semibold text-md' >About</li>
          <li className='font-semibold text-md'>Skills</li>
          <li className='font-semibold text-md'>Projects</li>
          <li className='font-semibold text-md'>Contact</li>
        </ul>
      </div>
    </nav>
    </div>
  )
}

export default Navbar
