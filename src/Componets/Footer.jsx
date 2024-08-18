import React from 'react'
import { SOCIAL_MEDIA_LINKS } from '../constants'

const Footer = () => {
  return (
    <div className='mt-8 mb-10'>
        <div className="flex items-center justify-center gap-8">
            {SOCIAL_MEDIA_LINKS.map((social , index)=>(
                <a href={social.href} key={index} target='_blank' rel='noopener nonreferrer'>
                    {social.icon}
                </a>
            ))}
        </div>
        <p className="mt-8 text-center tracking-tighter text-neutral-500">
            &copy;sanalkumar.s.All Right Reserved.
        </p>
    </div>
  )
}

export default Footer