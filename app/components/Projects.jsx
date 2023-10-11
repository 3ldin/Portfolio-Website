"use client";
import React, { useState } from 'react'
import ProjectCard from './ProjectCard'
import ProjectTag from './ProjectTag'

const projectsData = [
    {
        id: 1,
        title: "Fancy Restaurant Website",
        description: "A website of the fictional restaurant, 'Dorsia', from the film 'American Psycho.' Built using HTML, CSS, Javascript, and React.",
        image: "/images/ProjectScreenshots/DorsiaProject.PNG",
        tag: ["All", "Web", "Mobile"],
        gitUrl: "https://github.com/3ldin/Dorsia",
        previewUrl: "https://dorsisanyc.netlify.app/",
    },
    {
        id: 2,
        title: "An Infinite Wordle",
        description: "A clone of the game 'Wordle' that can be played multiple times, just by refreshing the page. Built using HTML, CSS, Javascript, and React.",
        image: "/images/ProjectScreenshots/WordleProject.PNG",
        tag: ["All", "Web", "Mobile"],
        gitUrl: "https://github.com/3ldin/InfiniteWordle",
        previewUrl: "https://wordleinfinite.netlify.app/",
    },
    {
        id: 3,
        title: "Tesla Clone",
        description: "A clone of the Tesla website, with a built in scroll snapping feature. Built using HTML, CSS, and Javascript.",
        image: "/images/ProjectScreenshots/TeslaProject.PNG",
        tag: ["All", "Web"],
        gitUrl: "https://github.com/3ldin/teslaclone",
        previewUrl: "https://oldteslaclone.netlify.app/",
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
      <h2 id='projects' className='text-center text-4xl font-bold text-white mt-2 mb-4'>
        My Projects
      </h2>
      <div className='text-white flex flex-row justify-center items-center gap-2 py-6 '>
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <div className='grid md:grid-cols-3 gap-8 md:gap-12 pb-20'>
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