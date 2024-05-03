import React from 'react'

const Card = () => {
  return (
    // Parent div
    <div className='flex flex-col'>
        {/* Content div */}
        <div className='flex flex-col'>
            {/* Header */}
            <div className='flex flex-row'>
                <p className='text-lg font-semibold'>Title</p>
                <p className='rounded-full'>A</p>
            </div>

            {/* Short description */}
            <div>
                <p>Short description</p>
            </div>
        </div>
    </div>
  )
}

export default Card