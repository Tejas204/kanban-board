import React from 'react'
import Filters from '../components/Filters'
import Card from '../components/Card'
import Columns from '../components/Columns'

const Board = () => {


  const columns = ['Draft', 'Ready', 'Work in Progress', 'Review', 'Complete'];

  return (
    // Parent Div
    <div className='flex flex-row h-screen'>
        {/* Filters Div */}
        <Filters></Filters>

        {/* Columns */}
            <div className='flex flex-row w-screen overflow-x-scroll'>
                  {columns.map((state) => {
                return (
                  <Columns key={state} columnTitle = {state}></Columns>
                )
              })}
            </div>
          </div>
  )
}

export default Board