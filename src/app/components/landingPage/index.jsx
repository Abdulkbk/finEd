'use client'
import React, { useState } from 'react'
import styles from './Home.module.css'
import bgImage from '../../../../public/assets/background.jpg'
import Link from 'next/link'

const HomePageComponent = () => {
  return (
    <div
      className={`flex min-h-screen w-screen flex-col items-center justify-center py-2  homepage-container ${styles.homepage_container}`}
      style={{
        background: `url(${bgImage.src}) no-repeat center center fixed`,
        backgroundSize: 'cover',
        width: '100vw',
        height: '100vh',
      }}
    >
      <div className='justify-center items-center w-1/2 rounded-full shadow-sm mt-13 flex flex-col bg-gray-50 p-3'>
        <h1 className={styles['hero-text']}>Welcome to FinEd!</h1>
        <p className={styles.subtext}>
          Where you learn and earn, fill survey and earn.
        </p>
        <Link
          href={`/auth/signin`}
          className={`${styles['search-button']} text-white`}
        >
          Start earning
        </Link>
      </div>
    </div>
  )
}

export default HomePageComponent
