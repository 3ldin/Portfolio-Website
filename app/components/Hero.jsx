"use client";
import React from 'react'
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation'
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id='hero' className='lg:py-16 lg:pb-32'>
      <div className='grid grid-cols-1 lg:grid-cols-12'>
        <motion.div 
          initial={{ opacity: 0, scale: 0.5}} 
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ duration: 0.5 }} 
          className='col-span-7 place-self-center text-center sm:text-left lg:w-full'
        >
        <h1 className='text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold'>
          Eldin Reckovic
        </h1>    
        <p className='text-[#ADB7BE] text-lg lg:text-xl mb-6'>
        <TypeAnimation
        sequence={[
        'Front-End Developer',
        1700,
        'Web Developer',
        1700,
        ]}
        wrapper="span"
        speed={50}
        style={{ fontSize: '2em', display: 'inline-block' }}
        repeat={Infinity}
        />
        </p>
        <div>
          <a href="#contact">
            <button className='px-6 py-3 w-full sm:w-fit rounded-full mr-4 text-white bg-blue-600 hover:bg-blue-700 font-medium'>Hire Me</button>
          </a>
          <a href="https://docs.google.com/document/d/1rqWQ8fFdcK_gfmMWRmQ1ebWxhXlaDOXMSQnorZRwT28/edit?usp=drive_link">
            <button className='px-6 py-3 w-full sm:w-fit rounded-full bg-transparent text-white hover:bg-slate-800 border-2 border-blue-600 mt-3'>View Resume</button>
          </a>
          
        </div>
        </motion.div>
          <motion.div 
              initial={{ opacity: 0, scale: 0.5}} 
              animate={{ opacity: 1, scale: 1 }} 
              transition={{ duration: 0.5 }}
        className='col-span-5 place-self-center mt-4 pb-4'>
            <div className='bg-[#201f1fde] w-[405px] h-[405px] relative rounded-full'>
                <Image
                src="/images/ProjectScreenshots/CROPFACE.jpeg"
                alt="hero image"
                className='transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 absolute'
                width={250}
                height={250}
                />
            </div>
        </motion.div>
      </div>
     </section>
  )
}

export default Hero