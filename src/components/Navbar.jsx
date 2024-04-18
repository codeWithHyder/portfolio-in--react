import React from 'react';
import { FaHome,FaEnvelope} from 'react-icons/fa';
import { RiAccountBoxFill,RiComputerFill,RiComputerLine } from "react-icons/ri";
import { GiSkills } from "react-icons/gi";



const Navbar = () => {
  return (
    <div className='flex flex-wrap justify-between p-2 rounded-sm w-screen bg-gradient-to-r from-zinc-700  to-zinc-900 h-auto px-3  items-center z-50 position sticky top-0 opacity-90 items-center'>
        <div><span className='font-bold text-xs sm:text-xl inline-block animate-bounce translate-y-4  hover:bg-orange-400 hover:cursor-pointer font-sans ml-9 rounded-full border-2 p-2 border-gray-500 delay-1000'>HA</span></div>
        <div className='w-[70%]'>
            <ul className='flex  flex-wrap justify-around w-auto  text-xs sm:text-lg font-normal cursor-pointer sticky top-0'>
              <li className='hover:text-gray-200 transition ease-in-out duration-700 flex  items-center'><a href='#home' className='flex flex-col items-center'><FaHome />Home</a></li>
              <li className='hover:text-gray-200 transition ease-in-out duration-700 flex  items-center'><a href='#about' className='flex flex-col items-center'><RiAccountBoxFill />About</a></li>
              <li className='hover:text-gray-200 transition ease-in-out duration-700 flex   items-center'><a href='#contact' className='flex flex-col items-center'><FaEnvelope/>Contact</a></li>
              <li className='hover:text-gray-200 transition ease-in-out duration-700 flex   items-center'><a href='#projects' className='flex flex-col items-center'> <RiComputerFill />Projects</a></li>
              <li className='hover:text-gray-200 transition ease-in-out duration-700 flex  items-center'><a href='#skills' className='flex flex-col items-center'><GiSkills/>Skills</a></li>
              {/* <li className='hover:text-gray-900 delay-100'> 🏆Testmonials</li> */}
            </ul>
        </div>
      
    </div>
  )
}

export default Navbar
