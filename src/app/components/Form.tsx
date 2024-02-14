'use client'

import { useFormik } from 'formik'
import * as Yup from "yup";
import React, { useEffect } from 'react'

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
      phoneNumber: Yup.number()
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
          console.log('sent to BK')
        } else {
          console.log('Not sent')
        }
      } catch (error) {
        console.error('Error', error)
      }
    }
  })
  
  useEffect(() => {
    console.log(formik.values)
  }, [formik.values])

  return (
    <div id='form' className=''>
      <h2 className='cormorant text-[#1F2937] text-[1.5rem] md:text-[1.875rem] lg:text-[2.25rem] font-bold '>Contact us</h2>
      <form
        onSubmit={formik.handleSubmit}
        className='mt-[0.5rem] lg:mt-[2rem] px-[1rem] md:px-[3rem] py-[2rem] lg:py-[3rem]  bg-white rounded-tr-[2rem] rounded-bl-[1rem] flex flex-col gap-[1rem]'
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

        <button className='bg-gradient-to-b from-[#FFD8AF] to-[#FDBA74] w-full py-[0.5rem] lg:py-[1rem] rounded text-center lg:text-[1.125rem] font-bold'>Submit</button>
      </form>
    </div>
  )
}
