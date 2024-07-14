import React, { useEffect } from 'react'
import Filters from '../components/Filters'
import Card from '../components/Card'
import Columns from '../components/Columns'
import CardModal from '../components/CardModal'
import { useState } from 'react'
import { arraySwap, SortableContext } from '@dnd-kit/sortable'
import { closestCorners, DndContext } from '@dnd-kit/core'
import { stateArray, cardArray } from '../data/tasks'
import { arrayMove } from '@dnd-kit/sortable'

const Board = () => {

  /**
 * @States: Set variables
 */
  const [columns, setColumns] = useState(stateArray);

  
  /**
   * @Hook: sets cardArray
   */
  const [cards, setCards] = useState(cardArray);

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

  /**
   * @Function: Return state of dragged card
   * Params: card id <Int>
   * Returns: index <Int>
   */
  const getCardId = (id) => {
    return cards.find(card => card.id === id);
  }

  /**
   * @Function: Return state of column
   * Params: none
   * Returns: state_id <Int>
   */
  const getStateId = (id) => {
    return columns.find(column => column.id === id);
  }

  /**
   * @Function: handleDragEnd
   * Params: event <obj>
   * Returns: array[<obj>]
   */
  const handleDragEnd = (e) => {
    const {active, over} = e;

    if (over && over.data.current.accepts.includes(active.data.current.type)) {
      // do stuff
      const cardObject = getCardId(active.id);
      const newState = getStateId(over.id);
      cardObject.state_id = newState;
    }
  };


  return (
    <div className='flex flex-row h-screen'>
        {/* Filters Div */}
        <Filters></Filters>

        {/* Columns */}
        <DndContext onDragEnd={handleDragEnd} collisionDetection={closestCorners}>
          <div className='flex flex-row w-screen overflow-x-auto'>
                {columns.map((column) => {
                  return (
                      <Columns cards={cards} key={column.id} columnId={column.id} columnTitle = {column.state} setShowModal={setShowModal} showModal={showModal}></Columns>
                          )
                    }
                  )
                }
          </div>
        </DndContext>

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