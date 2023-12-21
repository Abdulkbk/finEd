'use client'

import React, { useEffect, useState } from 'react'
import MainLayout from '../../layout/MainLayout'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/navigation'
import { getUser } from '@/utils/helper'

const email = 'test@test.com'
const password = 'password'

const SigninComponent = () => {
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(null)

  const router = useRouter()

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm()

  const handleFormSubmit = formData => {
    const user = getUser()

    console.log(user)

    if (formData.email !== user?.email) {
      setError('email', { message: 'Enter the correct email' })
      return
    }
    if (formData.password !== user?.password) {
      setError('password', { message: 'Enter the correct password' })
      return
    }

    setLoading(true)
    setSuccess(false)
    setTimeout(() => {
      setLoading(false)
      setSuccess(true)
    }, 5000)
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
              {errors.email && (
                <small className='text-red-400'>{errors.email.message}</small>
              )}
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
              />
              {errors.password && (
                <small className='text-red-400'>
                  {errors.password.message}
                </small>
              )}
              <div className='label'>
                <span className='label-text-alt'>
                  Don't have account?{' '}
                  <a href='/auth/signup' className='text-blue-500'>
                    Sign up
                  </a>
                </span>
              </div>
            </label>
            <div className='mt-5'>
              <button className='btn w-full' disabled={loading}>
                {loading ? (
                  <span className='loading loading-infinity loading-md bg-white'></span>
                ) : (
                  'Sign in'
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </MainLayout>
  )
}

export default SigninComponent
