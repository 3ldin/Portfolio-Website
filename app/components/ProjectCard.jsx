import React from 'react'
import { CodeBracketIcon, EyeIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'

const ProjectCard = ({ imgUrl, title, description, gitUrl, previewUrl }) => {
  return (
    <div>
      <div 
        className='h-52 md:h-72 rounded-t-xl relative group'  
        style={{background: `url(${imgUrl})`, backgroundSize: "cover"}}
      >
        <div className='overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#878f94] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500'>
            <Link 
              href={gitUrl} 
              className='h-14 w-14 mr-2 border-2 relative rounded-full border-white hover:border-gray-300 group/link'
              target='_blank'
            >
              <CodeBracketIcon className='h-10 w-10 text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-gray-300' />
            </Link>
            <Link 
              href={previewUrl} 
              className='h-14 w-14 border-2 relative rounded-full border-white hover:border-gray-300 group/link'
              target='_blank'
            >
              <EyeIcon className='h-10 w-10 text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-gray-300' />
            </Link>
        </div>
      </div>
      <div className='text-black rounded-b-xl mt-1 bg-[#ffffff] drop-shadow-2xl py-6 px-4'>
        <h5 className='text-2xl text-center font-bold mb-2'><Link href={previewUrl} target='_blank'>{title}</Link></h5>
        <p className='text-[#26292b] text-center font-semibold'>{description}</p>
      </div>
    </div>
  )
}

export default ProjectCard