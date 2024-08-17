import React from 'react'
import hero from "../assets/hero.mp4"
import logo from "../assets/logo.png";
import heroImg from "../assets/hero.jpeg";

const HeroSection = () => {
  return (
    <section className='relative flex justify-center items-center h-screen'>
        <div className="absolute inset-0 -z-20 h-full w-full overflow-hidden">
            <video src={hero} className='h-full w-full object-cover' 
            muted
            autoPlay
            loop
            playsInline
            poster={heroImg}>

            </video>
        </div>
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent from-70% to-black"></div>
        <div className='relative z-20 h-screen flex flex-col justify-end pb-20'>
            <img src={logo} alt="logo" className='w-full p-4' />
            <p className="text-lg p-4 tracking-tighter text-white"> Kerala </p>
        </div>
    </section>
  )
}

export default HeroSection