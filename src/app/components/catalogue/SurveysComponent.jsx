import React from 'react'
import CourseCard from './CourseCard'

const data = [
  {
    title: 'How does money affect your health',
    url: 'https://images.pexels.com/photos/164527/pexels-photo-164527.jpeg?auto=compress&cs=tinysrgb&w=600',
    description: 'Fill the survey and earn',
    tags: ['Earn', '$5'],
  },
  {
    title: 'How often do you save',
    url: 'https://images.pexels.com/photos/210600/pexels-photo-210600.jpeg?auto=compress&cs=tinysrgb&w=600',
    description: 'Fill the survey and earn',
    tags: ['Earn', '$2'],
  },
  {
    title: 'A platform to hire finance consultants. Will you use?',
    url: 'https://images.pexels.com/photos/590041/pexels-photo-590041.jpeg?auto=compress&cs=tinysrgb&w=600',
    description: 'Fill the survey and earn',
    tags: ['Earn', '$12'],
  },
  {
    title: 'Survey on Gold mining',
    url: 'https://images.pexels.com/photos/366551/pexels-photo-366551.jpeg?auto=compress&cs=tinysrgb&w=600',
    description: 'Fill the survey and earn',
    tags: ['Earn', '$50'],
  },
]

const SurveysComponent = () => {
  return (
    <>
      {data.map(course => (
        <CourseCard course={course} />
      ))}
    </>
  )
}

export default SurveysComponent
