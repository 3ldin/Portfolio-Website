"use client";
import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion';


const About = () => {
  return (
    <section id='about' className='text-white lg:pb-16'>
        <motion.div 
              initial={{ opacity: 0, scale: 0.5}} 
              animate={{ opacity: 1, scale: 1 }} 
              transition={{ duration: 0.5 }}
        className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
          <Image src="/images/react.jpg" width={600} height={600} className='hover:scale-105 ease-in duration-200 rounded min-[320px]:pt-12' />
          <div>
            <h2 className='text-4xl font-bold mb-4'>About Me</h2>
            <p className='text-base md:text-lg'>
                I am a front end web developer with a passion for creating interactive and responsive web applications. I have 2+ years of experience using HTML, CSS, Javascript, React, and Next.js. I am a natural problem solver and get to the bottom of anything that is put in front of me. I always look to expand my knowledge and skill set, and make myself useful where needed. I understand the importance of working as a team, and I am excited to work with others to create amazing projects.
            </p>
            <div className='flex flex-row mt-8'>

            </div>
          </div>
        </motion.div>
    </section>
  )
}

export default About