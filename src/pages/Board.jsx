import React from 'react'
import Filters from '../components/Filters'
import Card from '../components/Card'
import Columns from '../components/Columns'

const Board = () => {


  const columns = ['Draft', 'Ready', 'Work in Progress', 'Review', 'Complete', 'Test'];

  return (
    // Parent Div
    <div className='flex flex-row'>
        {/* Filters Div */}
        <Filters></Filters>

        {/* Columns */}
            <div className='flex flex-row w-screen'>
                  {columns.map((state) => {
                return (
                  <Columns key={state}></Columns>
                )
              })}
            </div>
          </div>
  )
}

export default Board