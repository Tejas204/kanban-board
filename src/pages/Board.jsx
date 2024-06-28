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
  const [cardModal, setCardModal] = useState(false);

  /*
  * @Function: hideModal
  * Params: none
  * Displays the modal
  */
  const hideModal = () => {
    setCardModal(!cardModal);
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
                  <Columns key={state} columnTitle = {state} setCardModal={setCardModal} cardModal={cardModal}></Columns>
                )
              })}
            </div>
            <CardModal cardModal={cardModal} hideModal={hideModal}></CardModal>
          </div>
  )
}

export default Board