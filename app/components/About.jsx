"use client";
import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion';


const About = () => {
  return (
    <section id='about' className='text-black lg:pb-16'>

            <motion.div
              initial={{ opacity: 0, scale: 0.5 }} 
              animate={{ opacity: 1, scale: 1 }} 
              transition={{ duration: 0.5 }}>
                <h1 className='text-center text-4xl sm:text-5xl lg:text-6xl mb-6 font-bold'>About Me</h1>
       
          <div className='mt-4'>  
            <p className='text-2xl lg:text-3xl lg:mt-4 text-center col-span-2'>
                I am a full stack developer with a passion for creating interactive and responsive web applications. I have 3 years of experience using HTML, CSS, Javascript, React, Next.js, Tailwind CSS and Node.js. I am a natural problem solver and get to the bottom of anything that is put in front of me. I always look to expand my knowledge and skill set, and make myself useful where needed. I understand the importance of working as a team, and I am excited to work with others to create amazing projects.
            </p>
          </div>
          </motion.div>

          
        
    </section>
  )
}

export default About