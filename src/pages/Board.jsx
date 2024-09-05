import React, { useEffect } from 'react'
import Filters from '../components/Filters'
import Card from '../components/Card'
import Columns from '../components/Columns'
import CardModal from '../components/CardModal'
import { useState } from 'react'
import { arraySwap, rectSortingStrategy, SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable'
import { closestCenter, closestCorners, DndContext, DragOverlay } from '@dnd-kit/core'
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
  const getActiveCard = (id) => {
    return cards.find(card => card.id === id);
  }

  /**
   * @Function: Return state of column
   * Params: none
   * Returns: state_id <Int>
   */
  const findColumn = (id) => {

    //If item is dropped over some other area
    if(!id){
      return null;
    }

    //If item is dropped over a column
    if(cards.some((cardObject) => cardObject.id == id)){
      return cards.find((c) => c.id == id);
    }

    //Create a flatmap like {itemId: card.id, columnId: columnId}
    const itemsWithColumnID = cards.flatMap((cardObject) => {
      const columnId = cardObject.id;
      return cardObject.cards.map((c) => ({itemId: c.id, columnId: columnId}));
    });

    //Find the column id of the card
    const column = itemsWithColumnID.find((item) => {item.itemId == id});
    return cards.find((c) => c.id == column.columnId);

  }

  /**
   * @Function: handleDragOver
   * Update the state of dragged card
   * Params: event <obj>
   * Returns: array[<obj>]
   */
  const handleDragOver = (event) => {
    const {active, over} = event;

    //Find active and over columns
    const activeColumn = findColumn(active.id);
    const overColumn = findColumn(over.id);

  }

  /**
   * @Function: handleDragEnd
   * Update the state of dragged card
   * Params: event <obj>
   * Returns: array[<obj>]
   */
  const handleDragEnd = (e) => {
    const {active, over} = e;

    //Find active and over column
    const activeColumn = findColumn(active.id);
    const overColumn = over ? findColumn(over.id) : null;
    console.log(activeColumn);
    console.log(overColumn);
  };

  return (
    <div className='flex flex-row h-screen'>
        {/* Filters Div */}
        {/* <Filters></Filters> */}

        {/* Columns */}
        <DndContext
          onDragOver={handleDragOver}
          onDragEnd={handleDragEnd}
          collisionDetection={closestCorners}>
          <div className='flex flex-row mt-2 px-10 gap-x-10 w-screen overflow-x-auto no-scrollbar'>
                {
                cards.map((column) => {
                  return (
                        <Columns cards={column.cards} key={column.id} columnId={column.id} columnTitle = {column.state} setShowModal={setShowModal} showModal={showModal}></Columns>
                      )
                    }
                  )
                }
          </div>
        </DndContext>

        {/* Card Modal **/}
        <CardModal showModal={showModal} addState={addState} hideModal={hideModal}></CardModal>

        {/* Add state button */}
        <button onClick={handleAddState} className='absolute bottom-0 right-10 px-6 py-4 rounded-lg bg-[color:var(--user-icon--bg-color--blue)] font-semibold hover:ring-2 ring-offset-4 ring-offset-[color:var(--filter-bg--color)] ring-[color:var(--user-icon--bg-color--blue)]'>
            Add State
        </button>
      </div>
  )
}

export default Board