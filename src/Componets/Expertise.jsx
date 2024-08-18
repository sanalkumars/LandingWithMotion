import React from 'react'
import { CUSINES } from '../constants'

const Expertise = () => {
  return (
    <section id='expertise'>
        <h2 className="text-center text-3xl my-8 tracking-tighter lg:text-4xl">OUR EXPERTISE</h2>
        <div className="container mx-auto px-4">
            { CUSINES.map((cusin , index)=>(
                <div key={index} className="flex items-center border-b border-dotted border-neutral-700/40 py-2">
                        <div className="flex flex-shrink-0 pr-8 text-2xl ">
                            {cusin.number}
                        </div>
                        <div className="w-1/3 flex-shrink-0">
                            <img src={cusin.image} alt={cusin.title} 
                            className='h-auto rounded-3xl'/>
                        </div>
                        <div className="pl-8">
                            <h3 className="text-2xl uppercase tracking-tighter text-rose-300">
                                {cusin.title}
                            </h3>
                            <p className="mt-4 text-lg tracking-tighter">
                                {cusin.description}
                            </p>
                        </div>
                </div>
            ))}
        </div>
    </section>
  )
}

export default Expertise