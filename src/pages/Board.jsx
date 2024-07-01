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
   * Controls card modal display
   */
  const [showModal, setShowModal] = useState(false);

  /**
   * @Hook: setAddState
   * Controls state modal display
   */
  const[addState, setAddState] = useState(false);

  /*
  * @Function: hideModal
  * Params: none
  * Displays the modal
  */
  const hideModal = () => {
    setShowModal(!showModal);
  }

  const handleAddState = () => {
    setShowModal(!showModal);
  }


  return (
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

        {/* Card Modal */}
        <CardModal showModal={showModal} hideModal={hideModal}></CardModal>

        {/* Add state button */}
        <button onClick={handleAddState} className='absolute bottom-0 right-10 px-6 py-4 rounded-lg bg-[color:var(--user-icon--bg-color--blue)] font-semibold hover:ring-2 ring-offset-4 ring-offset-[color:var(--filter-bg--color)] ring-[color:var(--user-icon--bg-color--blue)]'>
            Add State
        </button>
      </div>
  )
}

export default Board