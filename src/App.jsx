import React from 'react'
import HeroSection from './Componets/HeroSection'
import Navbar from './Componets/Navbar'
import Dishes from './Componets/Dishes'
import About from './Componets/About'
import Mission from './Componets/Mission'

const App = () => {
  return (
    <main className='overflow-y-hidden text-neutral-200 antialiased'>
    <HeroSection />
    <Navbar />
    <Dishes />
    <About />
    <Mission />
    </main >
  )
}

export default App