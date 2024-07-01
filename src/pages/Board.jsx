import React, { useEffect } from 'react'
import Filters from '../components/Filters'
import Card from '../components/Card'
import Columns from '../components/Columns'
import CardModal from '../components/CardModal'
import { useState } from 'react'

const Board = () => {

  /**
 * @States: Set variables
 */
  const columns = ['Draft', 'Ready', 'Work in Progress', 'Review', 'Complete'];

  /**
   * @Hook: setCardModal
   * Controls create card modal display
   */
  const [showModal, setShowModal] = useState(false);

  /*
  * @Function: hideModal
  * Params: none
  * Displays the modal
  */
  const hideModal = () => {
    setShowModal(!showModal);
  }


  return (
    // Parent Div
    <div className='flex flex-row h-screen'>
        {/* Filters Div */}
        <Filters></Filters>

        {/* Columns */}
            <div className='flex flex-row w-screen overflow-x-scroll'>
                  {columns.map((state) => {
                return (
                  <Columns key={state} columnTitle = {state} setShowModal={setShowModal} showModal={showModal}></Columns>
                )
              })}
            </div>
            <CardModal showModal={showModal} hideModal={hideModal}></CardModal>
          </div>
  )
}

export default Board