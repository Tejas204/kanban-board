import React from 'react'
import Kanbanize from '../assets/Kanbanize-Logo.png'

const Footer = () => {
  return (
    // Footer Skeleton
    <div className='grid grid-cols-4 gap-x-2 w-[100%] mt-[5%] py-14 px-10 bg-[color:var(--header-bg--color)]'>
        {/* Footer Hero Section */}
        <div className='flex flex-col gap-y-6'>
            {/* Logo */}
            <img src={Kanbanize} alt="" className="h-24 w-24" />

            {/* Company summary */}
            <p className='text-lg'>Kanbanize lets you create kanban boards to help you manage your team, tasks and projects better. Use the interactive board, prioritize your tasks and make your project a success.</p>

            {/* Privacy statement and Copyright */}
            <p>&copy 2024 Kanbanize IND. All rights reserved</p>
        </div>
    </div>
  )
}

export default Footer