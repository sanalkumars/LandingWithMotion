import React from 'react'
import { CONTACT } from '../constants'

const Contact = () => {
  return (
    <section className="container mx-auto py-16" id='contact'>
        <h2 className="mb-8 text-center text-3xl lg:text-4xl">
            Contact Us
        </h2>
        <div className="text-neutral-400">
            {
                CONTACT.map((item , index)=>(
                    <p className="my-20 border-b-2 border-dotted border-neutral-700 text-center text-2xl tracking-tighter pb-12 lg:text-3xl" key={item.key}>
                        {item.value}
                    </p>
                ))
            }
        </div>
    </section>
  )
}

export default Contact