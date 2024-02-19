import React from 'react'

const About = () => {
  return (
    <div className='flex flex-wrap ml-10 bg-gray-900 mt-0 pt-28 h-auto mb-10' id='about'>
        <div className='flex  flex-col w-[100%] sm:w-[60%] '>
          <h1 className='text-6xl font-extrabold font-bold'>ABOUT <span className='text-orange-500'> ME</span> </h1>
          <h1 className='text-4xl mb-5 font-bold'>Know who <span  className='text-orange-500'> I</span> am</h1>
          <p className='text-2xl w-[60%]'>Hi Everyone, I am Ghulam Hyder Dar from Kashmir, India.
            I am looking for full time Fullstack web developer position.
            I have completed Graduation in Fullstack Web Development from Microverse Online Coding school USA.
          </p>
          <p className='text-gray-200 text-lg mt-5'>Apart from coding, some other activities that I love to do!</p>
          <ul className='ml-0'>  
            <li>👉Gardening</li>
            <li>👉Mountain Climbing</li>
            <li>👉Outing to Hill stations</li>
        </ul>
          
        </div>
        <div className='w-[100%] rounded-lg sm:w-[40%]'>
          <img src='./public/codingimg.avif' alt='coding image' className='w-[90%] rounded-3xl p-5 border' />
        </div>
    </div>
  )
}

export default About
