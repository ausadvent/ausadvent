'use client'

import { useFormik } from 'formik'
import * as Yup from "yup";
import React, { useState } from 'react'
import Lottie, {LottieRefCurrentProps} from 'lottie-react';
import { sendGAEvent } from '@next/third-parties/google';

// Assets
import Success from '../../../assets/sucess.json'
import Failure from '../../../assets/failure.json'

// Amplify configuration
import config from '@/amplifyconfiguration.json'
import { Amplify } from 'aws-amplify';
import { post } from 'aws-amplify/api';

// Api key
const apiKey:string|undefined =  process.env.NEXT_PUBLIC_API_KEY;

Amplify.configure(config, {
  API: {
    REST: {
      headers: async () => {
        return { 'X-Api-Key': apiKey || ''}
      }
    }
  }
})



export default function Form() {
  
  // States
  const [buttonText, setButtonText] = useState('Send enquiry');
  const [isSending, setIsSending] = useState(false)

  // State to render or hide form when success sending message
  const [renderForm, setRenderForm] = useState(true);
  const [renderSuccessMessage, setRenderSuccessMessage] = useState(false);

   // State to render error when sending message
   const [renderErrorMessage, setRenderErrorMessage] = useState(false);


  const formik = useFormik({
    // Declare initial values
    initialValues: {
      firstName: '',
      lastName: '',
      phoneNumber: '',
      email: '',
      message: ''
    },

    // validate data
    validationSchema:Yup.object({
      firstName: Yup.string()
        .max(20, 'First name must be 20 characters or less')
        .required("First name is required"),
      lastName: Yup.string()
        .max(20, 'Last name must be 20 characters or less')
        .required("Last name is required"),
      phoneNumber: Yup.string()
        .min(10, 'Please provide a valid phone number')
        .required("Phone number is required"),
      email: Yup.string()
        .email('Invalid email address')
        .required("Email address is required"),
      message: Yup.string()
        .min(20, 'Please leave us a more detailed message')
        .required('Please leave us a message before submitting the form')
    }),

    onSubmit: async (values) => {
      setButtonText('Sending...')
      setIsSending(true)
      try {
        // console.log('submitted')
        let resOperation = post({
          apiName: 'ausadventQuotes',
          path: '/items',
          options: {
            body: {
              values
            }
          }
        })

        if((await resOperation.response).statusCode == 200) {
          setRenderForm(!renderForm)
          setRenderSuccessMessage(true)
          setTimeout(() => {
            setButtonText('Message sent')
            setIsSending(false)
            console.log('sent to BK')
          }, 2000)
        } else {
          setRenderForm(false);
          setRenderErrorMessage(true)
          setTimeout(() => {
            setButtonText('Message not sent')
            setIsSending(false)
          }, 2000)
        }
      } catch (error) {
        setRenderForm(false)
        setRenderErrorMessage(true)
        setTimeout(() => {
          // Reset the button text and indicate that the form has been sent
          setButtonText('Message not sent');
          setIsSending(false);
        }, 4000);
      }
    }
  })
  
  
  return (
    <div id='form' className='bg-white rounded-tr-[2rem] rounded-bl-[1rem]'>
      <h3 className=' pt-[2rem] px-[1rem] md:px-[3rem] cormorant text-[#1F2937] text-[1.5rem] md:text-[1.875rem] lg:text-[2.25rem] font-bold '>Get in touch</h3>
      {renderForm && (
        <form
          onSubmit={formik.handleSubmit}
          className='lg:mt-[2rem] px-[1rem] md:px-[3rem] py-[1rem] lg:py-[3rem] flex flex-col gap-[1rem]'
        >
          <label htmlFor="firstName" className="flex flex-col gap-[0.5rem]">
            <span className={`${formik.touched.firstName && formik.errors.firstName ? 'text-red-600' : 'text-black'}`}>
              {formik.touched.firstName && formik.errors.firstName 
                ? formik.errors.firstName 
                : 'First name'
              }
            </span>
            <input 
              required
              type="text" 
              name='firstName'
              value={formik.values.firstName}
              onChange={formik.handleChange}
              placeholder='Enter your first name'
              onBlur={formik.handleBlur}
              className='rounded border border-[#9CA3AF] p-1 md:p-3 '
            />
          </label>
          <label htmlFor="lastName" className="flex flex-col gap-[0.5rem]">
            <span className={`${formik.touched.lastName && formik.errors.lastName ? 'text-red-600' : 'text-black'}`}>
              {formik.touched.lastName && formik.errors.lastName 
                ? formik.errors.lastName 
                : 'Last name'
              }
            </span >
            <input 
              required
              type="text" 
              name='lastName'
              value={formik.values.lastName}
              onChange={formik.handleChange}
              placeholder='Enter your last name'
              onBlur={formik.handleBlur}
              className='rounded border border-[#9CA3AF] p-1 md:p-3'
            />
            
          </label>
          <label htmlFor="phoneNumber" className="flex flex-col gap-[0.5rem]">
            <span className={`${formik.touched.phoneNumber && formik.errors.phoneNumber ? 'text-red-600' : 'text-black'}`}>
              {formik.touched.phoneNumber && formik.errors.phoneNumber 
                ? formik.errors.phoneNumber 
                : 'Phone number'
              }
            </span >
            <input 
              required
              type="text" 
              name='phoneNumber'
              value={formik.values.phoneNumber}
              onChange={formik.handleChange}
              placeholder='Enter your phone number'
              onBlur={formik.handleBlur}
              className='rounded border border-[#9CA3AF] p-1 md:p-3'
            />
          </label>
          <label htmlFor="email" className="flex flex-col gap-[0.5rem]">
            <span className={`${formik.touched.email && formik.errors.email ? 'text-red-600' : 'text-black'}`}>
              {formik.touched.email && formik.errors.email 
                ? formik.errors.email 
                : 'Email address'
              }
            </span >
            <input 
              required
              type="email" 
              name='email'
              value={formik.values.email}
              onChange={formik.handleChange}
              placeholder='Enter your email address'
              onBlur={formik.handleBlur}
              className='rounded border border-[#9CA3AF] p-1 md:p-3 '
            />
          </label>
          <label htmlFor="message" className="flex flex-col gap-[0.5rem]">
            <span className={`${formik.touched.message && formik.errors.message ? 'text-red-600' : 'text-black'}`}>
              {formik.touched.message && formik.errors.message 
                ? formik.errors.message 
                : 'Message'
              }
            </span >
            <textarea 
              required 
              name='message'
              value={formik.values.message}
              onChange={formik.handleChange}
              placeholder='Leave us a message'
              onBlur={formik.handleBlur}
              className='rounded border border-[#9CA3AF] p-1 md:p-3  min-h-[5rem]'
            />
          </label>

          <button 
            className='bg-gradient-to-b from-[#FFD8AF] to-[#FDBA74] w-full py-[0.5rem] lg:py-[1rem] rounded text-center lg:text-[1.125rem] font-bold'
            onClick={(() => sendGAEvent({ event: 'contactButtonClicked', value: 'Clicked from Home Intro'}))}
          >
            {buttonText}
          </button>
        </form>
      )}

      {/* Render succes animation */}
      {!renderForm && renderSuccessMessage && (
        <div className='flex flex-col  items-center'>
          <Lottie 
            className=''
            animationData={Success}
          />
          {/* <div className='border-b-2 border-pink-200 w-1/3'></div> */}
          <h3 className='cormorant text-[1.25rem] xl:text-[1.875rem] font-bold'>Your message has been sent</h3>
        </div>
      )}

      {/* Render error animation when the form could not be sent */}
      {!renderForm && renderErrorMessage && (
         <div className='flex flex-col  items-center'>
          <Lottie 
            className=''
            animationData={Failure}
          />
          {/* <div className='border-b-2 border-pink-200 w-1/3'></div> */}
          <h3 className='cormorant text-[1.25rem] leading-[1.25rem] font-bold text-center'>Your message could not been sent. Please try again later</h3>
        </div>
      )}
    </div>
  )
}
