import React, { useEffect } from 'react'
import Filters from '../components/Filters'
import Card from '../components/Card'
import Columns from '../components/Columns'
import CardModal from '../components/CardModal'
import { useState } from 'react'
import { SortableContext } from '@dnd-kit/sortable'
import { DndContext } from '@dnd-kit/core'
import { stateArray } from '../data/tasks'

const Board = () => {

  /**
 * @States: Set variables
 */
  const [columns, setColumns] = useState(stateArray);

  /**
   * @Hook: setCardModal
   * Controls card modal display
   */
  const [showModal, setShowModal] = useState(false);

  /**
   * @Hook: setAddState
   * Controls card modal display
   */
  const [addState, setAddState] = useState(false);

  /*
  * @Function: hideModal
  * Params: none
  * Displays the modal
  */
  const hideModal = () => {
    if(showModal){
      setShowModal(!showModal);
    }
    else if(addState){
      setAddState(!addState);
    }
  }

  /*
  * @Function: handleAddState
  * Params: none
  * Displays the modal
  */
  const handleAddState = () => {
    setAddState(!addState);
  }


  return (
    <div className='flex flex-row h-screen'>
        {/* Filters Div */}
        <Filters></Filters>

        {/* Columns */}
          <div className='flex flex-row w-screen overflow-x-auto'>
                {columns.map((column) => {
                  return (
                      <Columns key={column.id} columnTitle = {column.state} setShowModal={setShowModal} showModal={showModal}></Columns>
                          )
                    }
                  )
                }
          </div>

        {/* Card Modal */}
        <CardModal showModal={showModal} addState={addState} hideModal={hideModal}></CardModal>

        {/* Add state button */}
        <button onClick={handleAddState} className='absolute bottom-0 right-10 px-6 py-4 rounded-lg bg-[color:var(--user-icon--bg-color--blue)] font-semibold hover:ring-2 ring-offset-4 ring-offset-[color:var(--filter-bg--color)] ring-[color:var(--user-icon--bg-color--blue)]'>
            Add State
        </button>
      </div>
  )
}

export default Board