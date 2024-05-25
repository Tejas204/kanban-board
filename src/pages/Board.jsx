import React from 'react'
import Filters from '../components/Filters'
import Card from '../components/Card'

const Board = () => {

  const addCardIcon = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="size-8">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                      </svg>


  return (
    // Parent Div
    <div className='flex flex-row'>
        {/* Filters Div */}
        <Filters></Filters>

        {/* Cards div */}
        <div className='flex flex-col w-[21%] border-r-2'>
          {/* Title */}
          <div className='flex flex-row justify-between items-center p-5'>
            <p className='text-xl text-[color:var(--primary-text--color)] font-semibold uppercase'>Draft</p>
            <button className='text-[color:var(--user-icon--bg-color--lavender)]'>{addCardIcon}</button>
          </div>

          {/* Cards */}
          <div className='flex flex-col gap-y-5 p-5'>
              <Card priority={'low'}></Card>
              <Card priority={'medium'}></Card>
              <Card priority={'high'}></Card>
          </div>
        </div>
    </div>
  )
}

export default Board