'use client'

import React from 'react'

const SideNav = ({ handlePage }) => {
  return (
    <ul className='menu bg-base-200 w-56 rounded-box'>
      <li>
        <a href='/'>Home</a>
      </li>
      <li>
        <details open>
          <summary>Tabs</summary>
          <ul>
            <li>
              <a onClick={() => handlePage(1)}>Course</a>
            </li>
            <li>
              <a onClick={() => handlePage(2)}>Surveys</a>
            </li>
            <li></li>
          </ul>
        </details>
      </li>
      <li>
        <details>
          <summary>Quick Links</summary>
          <ul>
            <li>
              <a>About Us</a>
            </li>
            <li>
              <a>Contact Us</a>
            </li>
            <li></li>
          </ul>
        </details>
      </li>
    </ul>
  )
}

export default SideNav
