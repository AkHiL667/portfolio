import React from 'react'
import Home from './assets/components/Home'
import About from './assets/components/About'
import Scrollinfinate from './assets/components/Scrollinfinate'
import Projects from './assets/components/Projects.jsx'
function App() {
  return (
    <div className='dark:bg-zinc-900 dark:text-white '>
      <Home/>
      <About/>
      <Scrollinfinate/>
      <Projects/>
    </div>
  )
}

export default App
