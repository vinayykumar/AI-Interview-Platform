import React from 'react'
import Header from './_components/Header'

function DashboardLayout({children}) {
  return (  
    <div className='w-screen'>
        <Header/>
        {children}
    </div>
  )
}

export default DashboardLayout
