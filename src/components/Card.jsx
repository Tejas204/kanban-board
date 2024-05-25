import React, { useState } from 'react'
import Footer from './Footer'

const Card = ({priority}) => {


  // SVG for icons
  const messageIcon = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
                      </svg>

  const hamburgerIcon = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>

  const calendarIcon = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
                       </svg>


  return (
    // Parent div
    <div className={`flex flex-col rounded-sm border-l-8 bg-[color:var(--card-bg--color)] 
        ${priority == 'high' ? 'border-l-[color:var(--card-priority--color-high)]' : 
        (priority == 'medium' ? 'border-l-[color:var(--card-priority--color-medium)]': 
        'border-l-[color:var(--card-priority--color-low)]')}`}>

        {/* Content div */}
        <div className='flex flex-col px-6 py-4 border-b-2'>

            {/* Header */}
            <div className='flex flex-row justify-between pb-4'>
                {/* Title and assignment */}
                <div className='flex flex-col'>
                    <p className='text-xl font-semibold'>Create blog content</p>
                    <p className='text-[color:var(--secondary-text--color)]'>Assigned to Tejas</p>
                </div>
                {/* User Icon */}
                <div className={`flex justify-center items-center h-11 w-11 p-3 rounded-full 
                    ${priority == 'high' ? 'bg-[color:var(--card-priority--color-high)]' : 
                    (priority == 'medium' ? 'bg-[color:var(--card-priority--color-medium)]': 
                    'bg-[color:var(--card-priority--color-low)]')}`}>
                    AA
                </div>
            </div>

            {/* Short description */}
            <div className='text-[color:var(--primary-text--color)]'>
                <p>Write a blog about your design process and get it ready for publishing</p>
            </div>
        </div>

        {/* Icons div */}
        <div className='flex flex-row justify-between items-center space-x-10 px-6 py-2'>
            <div className='flex flex-row text-[color:var(--secondary-text--color)] hover:text-[color:var(--primary-text--color)] transition ease-in-out delay-150'>
                <button>{messageIcon}</button>
            </div>
            <div className='flex flex-row text-[color:var(--secondary-text--color)] hover:text-[color:var(--primary-text--color)] transition ease-in-out delay-150'>
                <button>{hamburgerIcon}</button>
            </div>
            <div className='flex flex-row space-x-2 text-[color:var(--secondary-text--color)] hover:text-[color:var(--primary-text--color)] transition ease-in-out delay-150'>
                <button>{calendarIcon}</button>
                <p>29/8</p>
            </div>
        </div>
    </div>
  )
}

export default Card