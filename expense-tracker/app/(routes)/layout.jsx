import React from 'react'
import SideNav from './dashboard/_components/SideNav'


const DashboardLayout = ({children}) => {
  return (
    <div>
        <div className='fixed md:w-64 hidden md:block'>
            <SideNav/>
        </div>
        <div className='md:ml-64 '>
            <DashboardLayout/>
        {children}
        </div>
      
    </div>
  )
}

export default DashboardLayout
