import React from 'react'


function About() {
  return (
    <div className='w-full dark:bg-zinc-900 dark:text-white  pt-13 md:h-[160vh] h-[140vh]'>
     <h1 className='text-4xl font-bold mb-10 text-center md:mb-30'>About</h1>
     <div className='flex justify-center items-center gap-10 flex-col md:flex-col'>
      <div className='w-[90%] md:w-[90%] lg:w-[60%] h-fit dark:bg-zinc-700 dark:text-white md:h-[55vh] hover:scale-105 transition-all duration-300 shadow-md rounded-lg p-5 text-center'>
      <h1 className='text-lg font-semibold mb-4'>Skills</h1>
      <div className='grid grid-cols-2 md:grid-cols-3 pl-3 md:mt-10 w-[90%] items-center gap-x-6 gap-y-4'>
        <div className='flex min-w-[130px] dark:bg-black max-w-[250px] hover:scale-105 transition-all duration-300 justify-center items-center gap-2 bg-gray-200 rounded-lg p-2'><i class="ri-html5-fill"></i><h2 className='text-md font-semibold'>HTML</h2></div>
        <div className='flex min-w-[130px] dark:bg-black max-w-[250px] hover:scale-105 transition-all duration-300 justify-center items-center gap-2 bg-gray-200 rounded-lg p-2'><i class="ri-css3-fill"></i><h2 className='text-md font-semibold'>CSS</h2></div>
        <div className='flex min-w-[130px] dark:bg-black max-w-[250px] hover:scale-105 transition-all duration-300 justify-center items-center gap-2 bg-gray-200 rounded-lg p-2'><i class="ri-javascript-line"></i><h2 className='text-md font-semibold'>JavaScript</h2></div>
        <div className='flex min-w-[130px] dark:bg-black max-w-[250px] hover:scale-105 transition-all duration-300 justify-center items-center gap-2 bg-gray-200 rounded-lg p-2'><i class="ri-tailwind-css-fill"></i><h2 className='text-md font-semibold'>Tailwindcss</h2></div>
        <div className='flex min-w-[130px] dark:bg-black max-w-[250px] hover:scale-105 transition-all duration-300 justify-center items-center gap-2 bg-gray-200 rounded-lg p-2'><i class="ri-reactjs-line"></i><h2 className='text-md font-semibold'>React</h2></div>
        <div className='flex min-w-[130px] dark:bg-black max-w-[250px] hover:scale-105 transition-all duration-300 justify-center items-center gap-2 bg-gray-200 rounded-lg p-2'><i class="ri-reactjs-fill"></i><h2 className='text-md font-semibold'>Redux</h2></div>
        <div className='flex min-w-[130px] dark:bg-black max-w-[250px] hover:scale-105 transition-all duration-300 justify-center items-center gap-2 bg-gray-200 rounded-lg p-2'><i class="ri-magic-line"></i><h2 className='text-md font-semibold'>GSAP</h2></div>
        <div className='flex min-w-[130px] dark:bg-black max-w-[250px] hover:scale-105 transition-all duration-300 justify-center items-center gap-2 bg-gray-200 rounded-lg p-2'><i class="ri-git-merge-fill"></i><h2 className='text-md font-semibold'>GIT</h2></div>
        <div className='flex min-w-[130px] dark:bg-black max-w-[250px] hover:scale-105 transition-all duration-300 justify-center items-center gap-2 bg-gray-200 rounded-lg p-2'><i class="ri-nodejs-line"></i><h2 className='text-md font-semibold'>Node.js</h2></div>
        <div className='flex min-w-[130px] dark:bg-black max-w-[250px] hover:scale-105 transition-all duration-300 justify-center items-center gap-2 bg-gray-200 rounded-lg p-2'><i class="ri-router-line"></i><h2 className='text-md font-semibold'>Express.js</h2></div>
        <div className='flex min-w-[130px] dark:bg-black max-w-[250px] hover:scale-105 transition-all duration-300 justify-center items-center gap-2 bg-gray-200 rounded-lg p-2'><i class="ri-database-line"></i><h2 className='text-md font-semibold'>MongoDB</h2></div>
        <div className='flex min-w-[130px] dark:bg-black max-w-[250px] hover:scale-105 transition-all duration-300 justify-center items-center gap-2 bg-gray-200 rounded-lg p-2'><i class="ri-database-line"></i><h2 className='text-md font-semibold'>Mongoose</h2></div>
        <div className='flex min-w-[130px] dark:bg-black max-w-[250px] hover:scale-105 transition-all duration-300 justify-center items-center gap-2 bg-gray-200 rounded-lg p-2'><i class="ri-folder-cloud-line"></i><h2 className='text-md font-semibold'>Cloudinary</h2></div>
        <div className='flex min-w-[130px] dark:bg-black max-w-[250px] hover:scale-105 transition-all duration-300 justify-center items-center gap-2 bg-gray-200 rounded-lg p-2'><i class="ri-store-fill"></i><h2 className='text-md font-semibold'>Zustand</h2></div>
      </div>
      </div>
      <div className='w-[90%] md:w-[90%] lg:w-[60%] h-[40vh] dark:bg-zinc-700 dark:text-white md:h-[50vh] hover:scale-105 transition-all duration-300  p-10 shadow-md rounded-lg p-5'>
        <h1 className='text-lg font-semibold mb-4 text-center'>Education Details</h1>
        <div className='flex flex-col md:mt-10 gap-5'>
        <div className='flex items-center  gap-2'>
        <i className="ri-school-fill text-2xl mb-6"></i>
            <h2 className='text-md font-semibold leading-none'><span className='text-gray-500 dark:text-gray-300 mr-4 text-md'>2019-2021</span> Intermediate <br /> 
            <span className='text-gray-500 dark:text-gray-300 text-xs block mt-1 text-left'>Sai Sri Junior College</span></h2>
          </div>

          <div className='w-2px ml-10 h-20px bg-gray-300'></div>
          <div className='flex items-center gap-2'>
            <i className="ri-graduation-cap-fill text-2xl mb-6"></i>
            <h2 className='text-md font-semibold leading-none'><span className='text-gray-500 dark:text-gray-300 mr-4 text-md'>2021-2025</span> Bachelor of Technology<br /> 
            <span className='text-gray-500 dark:text-gray-300 text-xs block mt-1 text-left'>CMR Technical Campus</span></h2>
          </div>
        </div>
      </div>
     </div>
    </div>
  )
}

export default About
