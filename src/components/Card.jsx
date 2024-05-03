import React from 'react'

const Card = () => {
  return (
    // Parent div
    <div className='flex flex-col w-1/5 rounded-sm border-l-4 border-l-[color:var(--card-priority--color-high)] bg-[color:var(--card-bg--color)]'>

        {/* Content div */}
        <div className='flex flex-col px-6 py-4'>

            {/* Header */}
            <div className='flex flex-row justify-between pb-6'>
                {/* Title and assignment */}
                <div className='flex flex-col'>
                    <p className='text-xl font-semibold'>Create blog content</p>
                    <p className='text-[color:var(--secondary-text--color)]'>Assigned to Tejas</p>
                </div>
                {/* User Icon */}
                <div className='flex justify-center items-center h-11 w-11 p-3 rounded-full bg-[color:var(--user-icon--bg-color--blue)]'>
                    AA
                </div>
            </div>

            {/* Short description */}
            <div className='text-[color:var(--primary-text--color)]'>
                <p>Write a blog about your design process and get it ready for publishing</p>
            </div>
        </div>
    </div>
  )
}

export default Card