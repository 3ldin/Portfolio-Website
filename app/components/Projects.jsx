"use client";
import React, { useState } from 'react'
import ProjectCard from './ProjectCard'
import { motion } from 'framer-motion';


const projectsData = [
    
  
  {
    id:1,
    title: "Phoenix Soccer Club",
    description: "The official website for Phoenix Soccer Club, a youth soccer camp in NYC. Built using Next.js and Tailwind CSS.",
    image: "/images/ProjectScreenshots/Phoenix.PNG",
    tag: ["All", "Web", "Mobile"],
    gitUrl: "https://github.com/3ldin/Phoenixsoccer",
    previewUrl: "https://phoenixsoccer.club",
  },
  {
  id: 2,
  title: "Porsche 911",
  description: "A personal project representing the variants and generations of the Porsche 911. Made using Next.js and Tailwind CSS.",
  image: "/images/gt2rs.jpg",
  tag: ["All", "Web", "Mobile"],
  gitUrl: "https://github.com/3ldin/Porsche911",
  previewUrl: "https://porsche911-psi.vercel.app/",
},

  {
    id: 3,
    title: "Empire D&E Inc.",
    description: "The official website of Empire D&E Inc., a renovation company based out of NYC. Built using Next.js and Tailwind CSS.",
    image: "/images/ProjectScreenshots/aboutempire.PNG",
    tag: ["All", "Web", "Mobile"],
    gitUrl: "https://github.com/3ldin/EmpireD-E",
    previewUrl: "https://empiredeinc.com",
},



]


const Projects = () => {
  const [tag, setTag] = useState("All");

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };
  
  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );


    return (
    <>
            <motion.div 
          initial={{ opacity: 0, scale: 0.5}} 
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ duration: 0.5 }} 
          
        >
      <h2 id='projects' className='text-center text-4xl sm:text-5xl lg:text-6xl font-bold text-black mt-12 mb-4'>
        My Projects
      </h2>
      <div className='text-white flex flex-row justify-center items-center gap-2 py-6 '>

      </div>
      <div className='grid lg:grid-cols-3  gap-8 md:gap-12 lg:pb-20'>
        {filteredProjects.map((project) => (
          <ProjectCard 
          key={project.id} 
          title={project.title} 
          description={project.description} 
          imgUrl={project.image} 
          gitUrl={project.gitUrl}
          previewUrl={project.previewUrl}
          /> 
        ))}
      </div></motion.div>
    </>
  )
}

export default Projects