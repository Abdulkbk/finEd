import React from 'react'
import CourseCard from './CourseCard'

const CourseComponent = ({ data }) => {
  return (
    <div className='w-4/5 flex justify-evenly flex-wrap'>
      {data.map(course => (
        <CourseCard course={course} />
      ))}
    </div>
  )
}

export default CourseComponent
