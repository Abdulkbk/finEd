'use client'

import React, { useState } from 'react'
import MainLayout from '../layout/MainLayout'
import SideNav from './SideNav'

import CourseComponent from './CourseComponent'
import SurveysComponent from './SurveysComponent'

const data = [
  {
    title: 'Introduction to Money',
    url: 'https://images.pexels.com/photos/164527/pexels-photo-164527.jpeg?auto=compress&cs=tinysrgb&w=600',
    description: 'Learn all you need about money. Watch and Learn',
    tags: ['Earn', '$5'],
  },
  {
    title: 'Introduction to Savings',
    url: 'https://images.pexels.com/photos/210600/pexels-photo-210600.jpeg?auto=compress&cs=tinysrgb&w=600',
    description: 'Learn all you need about savings. Watch and Learn',
    tags: ['Earn', '$2'],
  },
  {
    title: 'Introduction to Financial Analysis',
    url: 'https://images.pexels.com/photos/590041/pexels-photo-590041.jpeg?auto=compress&cs=tinysrgb&w=600',
    description: 'Learn all you need about finance. Watch and Learn',
    tags: ['Earn', '$12'],
  },
  {
    title: 'Is Gold a safe Investment?',
    url: 'https://images.pexels.com/photos/366551/pexels-photo-366551.jpeg?auto=compress&cs=tinysrgb&w=600',
    description: 'Learn all you need about Investment. Watch and Learn',
    tags: ['Earn', '$50'],
  },
]

const CatalogueComponent = () => {
  const [page, setPage] = useState(1)
  return (
    <MainLayout>
      <div className='w-screen h-auto flex'>
        <div className='w-1/5'>
          <SideNav handlePage={e => setPage(e)} />
        </div>
        {page === 1 && <CourseComponent data={data} />}
        {page == 2 && <SurveysComponent />}
      </div>
    </MainLayout>
  )
}

export default CatalogueComponent
