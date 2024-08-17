import React from 'react'
import HeroSection from './Componets/HeroSection'
import Navbar from './Componets/Navbar'

const App = () => {
  return (
    <main className='overflow-y-hidden text-neutral-200 antialiased'>
    <HeroSection />
    <Navbar />
    </main >
  )
}

export default App