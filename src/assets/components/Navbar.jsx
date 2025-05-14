import React, { useContext } from 'react';
import { ThemeContext } from '../../ThemeContext';

function Navbar({ scrollTo }) {
  const { isDarkMode, toggleDarkMode } = useContext(ThemeContext);

  return (
    <div className='dark:bg-zinc-900 dark:text-white'>
      <nav className='top-0 h-10 sm:h-15 bg-white shadow-sm fixed left-0 right-0 z-100 dark:bg-zinc-900 sm:flex justify-between px-[10vw] items-center h-12 '>
        <div className='text-md hidden sm:block dark:bg-zinc-800 font-semibold'>Akhil</div>
        <div className='flex justify-end items-center h-full'>
          <ul className='flex gap-[4vw] items-center'>
            <li onClick={scrollTo?.hero} className='font-semibold text-sm sm:text-md cursor-pointer hover:text-gray-600 dark:hover:text-gray-300 transition-colors'>Home</li>
            <li onClick={scrollTo?.about} className='font-semibold text-sm sm:text-md cursor-pointer hover:text-gray-600 dark:hover:text-gray-300 transition-colors'>About</li>
            <li onClick={scrollTo?.projects} className='font-semibold text-sm sm:text-md cursor-pointer hover:text-gray-600 dark:hover:text-gray-300 transition-colors'>Projects</li>
            <li onClick={scrollTo?.contact} className='font-semibold text-sm sm:text-md cursor-pointer hover:text-gray-600 dark:hover:text-gray-300 transition-colors'>Contact</li>
            <li>
              <button 
                onClick={toggleDarkMode}
                className='p-2 rounded-full hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-all duration-300'
                aria-label="Toggle dark mode"
              >
                {isDarkMode ? (
                  <i className="ri-sun-line text-lg"></i> 
                ) : (
                  <i className="ri-moon-line text-lg"></i>
                )}
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
