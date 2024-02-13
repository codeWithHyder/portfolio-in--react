import React from 'react'
import data from '../utility/DataProjects'
import { useState } from 'react';
import { FaGithub } from 'react-icons/fa';

const Projects = () => {
  const [projects, setProjects] = useState(data);
  return (
    <div id='projects'>
      <h3 className='text-6xl font-bold font-sans text-center'>My Recent <span className='text-orange-500'>Projects</span></h3><br></br>
      <div className=' flex justify-center items-center mb-5 flex-wrap  w-[90%] p-5 mx-auto'>
      {projects.map((project)=>{
        return(
          
            <div className='w-[20rem] h-[30rem] bg-slate-900 mb-3 ml-5 p-3 shadow-lg rounded-xl border border-gray-400 hover:scale-z-100 hover:shadow-slate-200 transition-all'>
              <img src={project.img}  className='rounded-lg'/>
              <h1 className='font-bold mt-4'>{project.title}</h1>
              <p className='text-sm'>{project.desc}</p>
              <div className='flex justify-center'>
                <a href={project.live} className=' w-[6rem] h-10 rounded-xl mt-5 text-gray-50 flex flex-row justify-center items-center bg-slate-500 ml-5 p-3 hover:bg-slate-600 transition'>Live ↗</a>
                <a href={project.source} className=' w-[6rem] h-10 rounded-xl mt-5 text-gray-50 flex flex-row justify-center items-center bg-slate-500 ml-5 p-3 hover:bg-slate-600 transition'>Source <FaGithub /></a>
              </div>
            </div>
         
        )
      })}
      </div>
    </div>
  )
}

export default Projects
