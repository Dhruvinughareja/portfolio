import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Tech from './components/Tech'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { motion, useSpring, useScroll } from 'framer-motion' 

const App = () => {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  return (
    <div className='overflow-x-hidden text-stone-300 antialiased'> 
      

      <motion.div
        id="scroll-indicator"
        style={{
          scaleX,
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: 10,
          originX: 0,
          backgroundColor: "#f8fafc",
        }}
      />
      
      <div className='container mx-auto px-8'>
        <Navbar />
        <Hero />
        <Tech />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </div>
  )
}

export default App
