import React from 'react'
import Filters from '../components/Filters'
import Card from '../components/Card'
import Columns from '../components/Columns'
import CardModal from '../components/CardModal'
import { useState } from 'react'

const Board = () => {

  // Hook: Controls modal display
  const [displayModal, setDisplayModal] = useState(false);


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
                  <Columns key={state} columnTitle = {state} setDisplayModal={setDisplayModal}></Columns>
                )
              })}
            </div>
            <CardModal displayModal={displayModal}></CardModal>
          </div>
  )
}

export default Board