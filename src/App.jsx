import React from 'react'
import Home from './assets/components/Home'
import About from './assets/components/About'
import Scrollinfinate from './assets/components/Scrollinfinate'
import Projects from './assets/components/Projects.jsx'
import Contact from './assets/components/Contact.jsx'
import Navbar from './assets/components/Navbar'
import { ThemeProvider } from './ThemeContext'
import { useRef } from 'react'



function App() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const scrollRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const scrollTo = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <ThemeProvider>
      <div>
        <Navbar scrollTo={{
          hero: () => scrollTo(homeRef),
          about: () => scrollTo(aboutRef),
          projects: () => scrollTo(projectsRef),
          contact: () => scrollTo(contactRef),
        }}
      />

        <section ref={homeRef}><Home /></section>
        <section ref={aboutRef}><About/></section>
       <section ref={scrollRef}><Scrollinfinate/></section>
        <section ref={projectsRef}><Projects/></section>
        <section ref={contactRef}><Contact/></section>
      </div>
    </ThemeProvider>
  )
}

export default App
