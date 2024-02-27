"use client";
import React, { useState } from 'react'
import ProjectCard from './ProjectCard'


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
    title: "Empire D&E Inc.",
    description: "The official website of Empire D&E Inc., a renovation company based out of NYC. Built using Next.js and Tailwind CSS.",
    image: "/images/ProjectScreenshots/aboutempire.PNG",
    tag: ["All", "Web", "Mobile"],
    gitUrl: "https://github.com/3ldin/EmpireD-E",
    previewUrl: "https://empiredeinc.com",
},

  {
        id: 3,
        title: "Fancy Restaurant Website",
        description: "A website of the fictional restaurant, 'Dorsia', from the film 'American Psycho.' Built using HTML, CSS, Javascript, and React.",
        image: "/images/ProjectScreenshots/DorsiaProject.PNG",
        tag: ["All", "Web", "Mobile"],
        gitUrl: "https://github.com/3ldin/Dorsia",
        previewUrl: "https://dorsisanyc.netlify.app/",
    },
    {
        id: 4,
        title: "An Infinite Wordle",
        description: "A clone of the game 'Wordle' that can be played multiple times, just by refreshing the page. Built using HTML, CSS, Javascript, and React.",
        image: "/images/ProjectScreenshots/WordleProject.PNG",
        tag: ["All", "Web", "Mobile"],
        gitUrl: "https://github.com/3ldin/InfiniteWordle",
        previewUrl: "https://wordleinfinite.netlify.app/",
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
      <h2 id='projects' className='text-center text-5xl font-bold text-black mt-12 mb-4'>
        My Projects
      </h2>
      <div className='text-white flex flex-row justify-center items-center gap-2 py-6 '>

      </div>
      <div className='grid md:grid-cols-2 gap-8 md:gap-12 lg:pb-20'>
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
      </div>
    </>
  )
}

export default Projects