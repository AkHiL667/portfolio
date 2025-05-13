import React from 'react'

function Navbar() {
  return (
    <div className='dark:bg-zinc-900 dark:text-white'>
    <nav className='hidden top-0 h-15 bg-white shadow-sm fixed left-0 right-0 z-100 dark:bg-zinc-800 sm:flex justify-between px-[10vw] items-center h-12 '>
      <div className='text-md dark:bg-zinc-800 font-semibold'>Akhil</div>
      <div>
        <ul className='flex gap-[4vw]'>
          <li className='font-semibold text-md '>Home</li>
          <li className='font-semibold text-md' >About</li>
          <li className='font-semibold text-md'>Projects</li>
          <li className='font-semibold text-md'>Contact</li>
        </ul>
      </div>
    </nav>
    </div>
  )
}

export default Navbar
