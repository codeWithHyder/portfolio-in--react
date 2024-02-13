import React from 'react'
import skillsSet from '../utility/DataLanguages'

const Skills = () => {
  return (
    <div className='w-[90%] shadow-2xl text-center mb-20 rounded-lg mx-5' id='skills'>
      <h4 className='text-6xl font-extrabold'>Professional <span className='text-orange-500 font-sans'>SkillSet</span></h4>
      <div className='flex justify-center items-center m-5 flex-wrap'>
        {skillsSet.map((skillset, index) => {
          return (
            <div key={index} className='w-[20rem] h-[32rem] border border-gray-200 mt-5 mx-5 rounded-lg shadow-lg' >
              <h2 className='text-2xl font-bold mt-5'></h2>
              <ul>
                {skillset.map((language, idx) => (
                    <li key={idx} className='my-7 text-xl font-semibold'>{language}</li>
                ))}
              </ul>
            </div>
         );
         })}
       </div>
    </div>
  )
}

export default Skills
