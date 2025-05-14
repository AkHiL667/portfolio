import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

function Navbar() {
  const { isDarkMode, toggleDarkMode } = useContext(ThemeContext);

  return (
    <div className='dark:bg-zinc-900 dark:text-white'>
      <nav className='top-0 h-10 sm:h-15 bg-white shadow-sm fixed left-0 right-0 z-100 dark:bg-zinc-900 sm:flex justify-between px-[10vw] items-center h-12'>
        <div className='text-md hidden sm:block font-semibold'>Akhil</div>
        <div className='flex justify-end items-center h-full'>
          <ul className='flex gap-[4vw] items-center'>
            <a className='cursor-pointer' href="#home"><li className='font-semibold text-sm sm:text-md'>Home</li></a>
            <a className='cursor-pointer' href="#about"><li className='font-semibold text-sm sm:text-md'>About</li></a>
            <a className='cursor-pointer' href="#projects"><li className='font-semibold text-sm sm:text-md'>Projects</li></a>
            <a className='cursor-pointer' href="#contact"><li className='font-semibold text-sm sm:text-md'>Contact</li></a>
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
  );
}

export default Navbar; 