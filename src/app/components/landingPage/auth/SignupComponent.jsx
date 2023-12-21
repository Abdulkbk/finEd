'use client'

import React, { useEffect, useState } from 'react'
import MainLayout from '../../layout/MainLayout'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { saveUser } from '@/utils/helper'

const SignupComponent = () => {
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(null)

  const router = useRouter()

  const { register, handleSubmit, setError } = useForm()

  const handleFormSubmit = async formData => {
    console.log(formData)
    saveUser(formData)
    setLoading(true)
    setSuccess(false)
    setTimeout(() => {
      setLoading(false)
      setSuccess(true)
    }, 3000)
  }

  useEffect(() => {
    if (success) {
      router.push('/catalogue')
    }
  }, [success, loading])

  return (
    <MainLayout>
      <div className='w-screen h-screen flex justify-center items-center'>
        <div>
          <form className='' onSubmit={handleSubmit(handleFormSubmit)}>
            <label className='form-control w-full max-w-xs'>
              <div className='label'>
                <span className='label-text'>What is your Full name?</span>
                <span className='label-text-alt'></span>
              </div>
              <input
                type='text'
                placeholder='Type here'
                className='input input-bordered w-full max-w-xs'
                {...register('name')}
                required
              />
            </label>
            <label className='form-control w-full max-w-xs'>
              <div className='label'>
                <span className='label-text'>What is your Email?</span>
                <span className='label-text-alt'></span>
              </div>
              <input
                type='email'
                placeholder='Type here'
                className='input input-bordered w-full max-w-xs'
                {...register('email')}
                required
              />
            </label>
            <label className='form-control w-full max-w-xs'>
              <div className='label'>
                <span className='label-text'>What is your phone number?</span>
                <span className='label-text-alt'></span>
              </div>
              <input
                type='phone'
                placeholder='Type here'
                className='input input-bordered w-full max-w-xs'
                {...register('phone')}
                required
              />
            </label>
            <label className='form-control w-full max-w-xs'>
              <div className='label'>
                <span className='label-text'>What is your password?</span>
                <span className='label-text-alt'></span>
              </div>
              <input
                type='password'
                placeholder='Type here'
                className='input input-bordered w-full max-w-xs'
                {...register('password')}
                required
                minLength={8}
              />
              <div className='label'>
                <span className='label-text-alt'>
                  Already have account?{' '}
                  <a href='/auth/signin' className='text-blue-500'>
                    Login
                  </a>
                </span>
              </div>
            </label>
            <div className='mt-5'>
              <button className='btn w-full' disabled={loading}>
                {loading ? (
                  <span className='loading loading-infinity loading-md bg-white'></span>
                ) : (
                  'Sign up'
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </MainLayout>
  )
}

export default SignupComponent
