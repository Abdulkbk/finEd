import React from 'react'
import TopbarComponent from '../nav/TopbarComponent'

const MainLayout = ({ children }) => {
  return (
    <div>
      <TopbarComponent />
      {children}
    </div>
  )
}

export default MainLayout
