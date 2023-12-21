import React from 'react'

const CourseCard = ({ course }) => {
  return (
    <div className='card w-96 bg-base-100 shadow-xl mt-1 mx-3'>
      <figure className='h-40'>
        <img
          height={50}
          src={
            course.url ??
            'https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg'
          }
          alt='Shoes'
        />
      </figure>
      <div className='card-body'>
        <h2 className='card-title'>
          {course.title ?? 'Finance'}
          <div className='badge badge-secondary'>NEW</div>
        </h2>
        <p>{course.description ?? ''}</p>
        <div className='card-actions justify-end'>
          <div className='badge badge-outline'>Reward</div>
          <div className='badge badge-outline'>{course.tags?.[1]}</div>
        </div>
      </div>
    </div>
  )
}

export default CourseCard
