import React from 'react'
import { REVIEW } from '../constants'
import xavior from "../assets/xaviour.jpeg";
import customer1 from "../assets/customer1.jpeg";
import customer2 from "../assets/customer2.jpeg";
import customer3 from "../assets/customer3.jpeg";
import customer4 from "../assets/customer4.jpeg";

const Review = () => {
  return (
   <section className='container mx-auto mb-8 mt-2' id='review'>
        <div className="flex flex-col">
            <p className="mb-10 text-3xl font-light leading-normal tracking-tighter lg:mx-auto lg:mt-8 lg:text[3.5rem] ">
                {REVIEW.content}
            </p>
            <div className="flex items-center justify-center gap-6">
                <img src={xavior} alt={REVIEW.name} width={80} height={80} className='rounded-full border'/>
                <div className="tracking-tighter">
                    <h6 className="">{REVIEW.name} </h6>
                    <p className="text-sm text-neutral-400">{REVIEW.profession}</p>
                </div>
            </div> 
        </div>
        <div className="mt-14 flex flex-col items-center justify-center gap-2 lg:flex-row">
            { [customer1 , customer2 , customer3 , customer4].map((customer, index)=>(
                <img src={customer} alt="CustomerImg" className='h-[300px] w-[200px] rounded-br-3xl rounded-tl-3xl object-cover' key={index} />
            ))}
        </div>
   </section>
  )
}

export default Review