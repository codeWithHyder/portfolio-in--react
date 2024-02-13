import React from 'react'
import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa'
const Footer = () => {
  return (
    <div className='w-[100%] h-20 bg-slate-700 flex flex-wrap justify-between items-center'>
      <div className='ml-5 text-sm w-[50%]'>
        <p>Copy right &copy; reserved with Ghulam Hyder Dar</p>
        <p>Developed and designed by HA</p>
      </div>
      <div className='mr-5 flex justify-evenly w-[20%]'>
        <span className='hover:bg-slate-800 rounded-full w-5 h-5 flex items-center justify-center transition- p-5'><a href='https://github.com/codeWithHyder'><FaGithub /></a></span>
        <span className='hover:bg-slate-800 rounded-full w-5 h-5 flex items-center justify-center transition- p-5'><a href='https://www.linkedin.com/in/hyder3512/'><FaLinkedin /></a></span>
        <span className='hover:bg-slate-800 rounded-full w-5 h-5 flex items-center justify-center transition- p-5'><a href='https://twitter.com/hyderali400'><FaTwitter /></a></span>
      </div>
    </div>
  )
}

export default Footer
