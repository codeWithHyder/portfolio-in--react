import React from 'react'
import {Formik, Form, Field, ErrorMessage} from 'formik';
import { messageSchema } from '../schema';
import { IoIosMail } from "react-icons/io";
import { FaSquarePhone } from "react-icons/fa6";

const initialValues ={
  name: '',
  email: '',
  message:''
}

const Contact = () => {
  const handleSubmit=(values, actions)=>{
    actions.resetForm();
  }
  return (
    <div className='w-[90%] mx-2 h-auto my-2 flex flex-wrap justify-center' id='contact'>
      <div className='w-[90%] h-auto  ml-20 text-4xl sm:w-[40%]'>
       <p> I'm always interested in hearing about new projects, so if you'd like to chat please get in touch</p>
       <p className='mt-5 text-lg'>Contact Me</p>
       <p className='text-xl flex items-center ml-5 mt-4'><span className=' flex items-center justify-center w-10 h-10  rounded-full mr-3 border border-orange-500 animate-pulse'><IoIosMail /></span>hyderali400@gmail.com</p>
       <p className='text-xl flex items-center ml-5 mt-4'><span className=' flex items-center justify-center w-10 h-10  rounded-full mr-3 border border-orange-500 animate-pulse'><FaSquarePhone /></span>+91-8491095780</p>
      </div>
      {/* <Formik> */}
      <div className='bg-zinc-900 border border-zinc-700 h-auto rounded-lg  w-[90%]  pt-2 pl-2 sm:w-[50%]'>
        <Formik 
        initialValues={initialValues}
        validationSchema={messageSchema}
        onSubmit={handleSubmit}
        >
        {({errors, touched})=>(
          <Form action="https://formspree.io/f/mqkoavny" method='post' onSubmit={handleSubmit} >
          <div className='w-[100%]'>
            <label htmlFor='name' className='text-lg'>Name:</label>
            <Field className='w-[80%] h-12 p-4 rounded-lg my-3 ml-3' type='text' id='name' name='name' placeholder='Enter your name' required />
            {errors.name && touched.name && <p className='text-red-600 pl-20 mt-0'>{errors.name}</p>}
          </div>
          <div className='w-[100%]'>
            <label htmlFor='email' className='text-lg'>Email:   </label>
            <Field className='w-[80%] h-12 p-4 rounded-lg ml-3' type='email' id='email' name='email' placeholder='Enter your email' required />
            {errors.email && touched.email && <p className='text-red-600 pl-20 mt-0'>{errors.email}</p>}
          </div>
          <div className='w-[100%] mt-5'>
            <Field className='w-[80%] h-[10rem] pl-2 ml-[17%] rounded-lg sm:ml-16' type='textarea' placeholder='write message' name='message' required />
            {errors.message && touched.message && <p className='text-red-600 pl-20 mt-0'>{errors.message}</p>}
          </div>
          <div className='h-20 ml-16 w-[95%] pb-1 my-4'><button className='w-15 h-12 rounded-lg bg-zinc-800 p-4 text-slate-50 hover:bg-zinc-700 transition-all' type='submit'>Get in touch</button></div>
        </Form>
      
        )}
        </Formik>
      </div>
    </div>
  )
}

export default Contact
