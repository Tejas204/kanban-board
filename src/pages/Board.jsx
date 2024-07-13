import React, { useEffect } from 'react'
import Filters from '../components/Filters'
import Card from '../components/Card'
import Columns from '../components/Columns'
import CardModal from '../components/CardModal'
import { useState } from 'react'
import { SortableContext } from '@dnd-kit/sortable'
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
   * @Function: Return index of dragged card
   * Params: card id <Int>
   * Returns: index <Int>
   */
  const getTaskIndex = (id) => {
    return cards.findIndex(card => card.id === id);
  }

  /**
   * @Function: handleDragEnd
   * Params: event <obj>
   * Returns: array[<obj>]
   */
  const handleDragEnd = (e) => {
    const {active, over} = e;

    if(active.id === over.id) return;


    setCards((cards) => {
      const originalPos = getTaskIndex(active.id);
      const newPos = getTaskIndex(over.id);

      console.log(arrayMove(cards, 1, 2));
      return arrayMove(cards, originalPos, newPos);
    });
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