import React from 'react'
import data from '../utility/DataProjects'
import { useState } from 'react';
import { FaGithub } from 'react-icons/fa';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


const Projects = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear"
  };
  const [projects, setProjects] = useState(data);
  return (
    
    <div id='projects' className=' bg-zinc-800 w-[95%] sm:w-[73%] ml-5 rounded-3xl'>
      <h3 className='text-2xl pt-2 font-bold font-sans text-center'>My Recent <span className='text-orange-500'>Projects</span></h3><br></br>
      <div className=' flex justify-start items-center mb-5 flex-wrap  w-[100%] py-5'>
      {projects.map((project)=>{
        return(
          
             <div className='w-[20rem] h-[25rem] bg-zinc-900 mb-3 ml-1 p-3 shadow-lg rounded-xl border border-gray-400 hover:scale-z-100 hover:shadow-slate-200 transition-all'>
              <img src={project.img}  className='rounded-lg w-[100%] h-[50%] hover:transition ease-in-out duration-700 transform hover:scale-105'/>
              <h1 className='font-semibold mt-4'>{project.title}</h1>
              <p className='text-xs'>{project.desc}</p>
              <div className='flex justify-center'>
                <a href={project.live} className=' w-[6rem] h-10 rounded-xl mt-4 text-gray-50 flex flex-row justify-center items-center bg-slate-500 ml-5 p-3 hover:bg-slate-600 transition'>Live ↗</a>
                <a href={project.source} className=' w-[6rem] h-10 rounded-xl mt-4 text-gray-50 flex flex-row justify-center items-center bg-slate-500 ml-5 p-3 hover:bg-slate-600 transition'>Source <FaGithub /></a>
              </div>
            </div>
          
        )
      })}
      </div>
      
      
      
    
  </div> 
  )
}

export default Projects
