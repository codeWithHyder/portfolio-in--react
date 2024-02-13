import React from 'react'
import Type from './Type'


const Home = () => {
  return (
    <div className="w-[82%] h-auto flex flex-wrap ml-20 mt-5 mb-0 justify-center items-center text-sm  " id='home'>
      <div className='w-[100%] sm:w-[60%] text-lg'>
      <h1 className='text-slate-400 text-8xl font-sans mb-5'>Hi there <span className='inline-block animate-bounce text-2xl'>🖐</span></h1>
      <h5 className='text-slate-400 text-5xl mb-7 font-sans'>I am Ghulam Hyder Dar</h5>
      <h5 className='text-slate-400 text-5xl mb-7 font-sans'><Type /></h5>
      </div>
      <div className='w-[100%]  h-[30%] rounded-xl mt-3 sm:w-[30%]'><img src='./src/assets/dummy-user1.png' alt='hyder' className='w-96 h-96 rounded-full border-2 p-2' /></div>
    </div>
  )
}

export default Home
