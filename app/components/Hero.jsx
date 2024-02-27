"use client";
import React from 'react'
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation'
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id='hero' className='lg:py-16 lg:pb-32'>
      <div className='grid grid-cols-1 lg:grid-cols-4 items-center'>
        <motion.div 
          initial={{ opacity: 0, scale: 0.5}} 
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ duration: 0.5 }} 
          className='lg:col-span-2  text-center sm:text-left lg:w-full'
        >
        <h1 className='text-black mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold'>
          Eldin Reckovic
        </h1>    
        <p className='text-green-900 lg:text-xl mt-4 mb-8'>
        <TypeAnimation
        sequence={[
        'Front End Developer',
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
            <button className='px-6 py-3 w-full sm:w-fit rounded-full mr-4 text-white bg-green-900 hover:bg-green-950 font-medium'>Hire Me</button>
          </a>
          <a href="https://docs.google.com/document/d/1Li-B9Sj4J3uuloECHdmOEL_E0lYQk66A_HK4XnWazng/edit?usp=sharing">
            <button className='px-6 py-3 w-full sm:w-fit rounded-full bg-transparent text-black hover:bg-gray-100 border-2 border-green-900 mt-3'>View Resume</button>
          </a>
          
        </div>
        </motion.div>
          <motion.div 
              initial={{ opacity: 0, scale: 0.5}} 
              animate={{ opacity: 1, scale: 1 }} 
              transition={{ duration: 0.5 }}
              className='lg:col-span-2 drop-shadow-2xl'>
            <img 
            className='w-[250px] lg:w-[350px] mx-auto my-10 rounded-xl'
            src='/images/ProjectScreenshots/medina.jpeg' />
        </motion.div>
      </div>
     </section>
  )
}

export default Hero