import React, { useEffect } from 'react'
import Filters from '../components/Filters'
import Card from '../components/Card'
import Columns from '../components/Columns'
import CardModal from '../components/CardModal'
import { useState } from 'react'

const Board = () => {

  /**
 * Set variables
 */
  const columns = ['Draft', 'Ready', 'Work in Progress', 'Review', 'Complete'];

  /**
   * @Hook: setDisplayModal
   * Controls create card modal display
   */
  const [displayModal, setDisplayModal] = useState(false);
  console.log("Board: "+displayModal);


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
            {/* <CardModal displayModal={displayModal} setDisplayModal={setDisplayModal}></CardModal> */}
          </div>
  )
}

export default Board