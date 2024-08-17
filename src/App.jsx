import React from 'react'
import HeroSection from './Componets/HeroSection'
import Navbar from './Componets/Navbar'
import Dishes from './Componets/Dishes'

const App = () => {
  return (
    <main className='overflow-y-hidden text-neutral-200 antialiased'>
    <HeroSection />
    <Navbar />
    <Dishes />
    </main >
  )
}

export default App