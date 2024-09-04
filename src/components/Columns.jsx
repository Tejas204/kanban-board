import React, { useEffect, useRef } from 'react'
import Card from './Card'
import { useState } from 'react'
import {cardArray} from '../data/tasks'
import { arrayMove, horizontalListSortingStrategy, SortableContext, useSortable, verticalListSortingStrategy } from '@dnd-kit/sortable'
import { closestCorners, DndContext, useDroppable } from '@dnd-kit/core'
import { CSS } from '@dnd-kit/utilities';

  /**
 * @Function: useDidMount
 * Returns: didMount; boolean
 * Initialize didMount as true
 * Set didMount to false upon first render
 */
export const useDidMount = () =>{
  const didMount = useRef(true);

  useEffect(() => {
    didMount.current = false;
  }, []);

  return didMount.current;
}



const Columns = ({cards, columnId, columnTitle, setShowModal, showModal}) => {

  /**
   * @Call: useDidMount
   * call useDidMount() on render
   */
  const isMount = useDidMount();

  /**
   * @Hook: setDisplayModal
   * Set displayModal as true when user clicks on add icon
   */
  const [displayModal, setDisplayModal] = useState(false);
  

  /*
  * @Function: showModal
  * Params: none
  * Displays the modal
  */
  const handleShowModal = () => {
    setDisplayModal(!displayModal);
  }

  /**
   * @Hook: Passes value of displayModal to Parent Component: Board.jsx
   * Does not display in first render
   */
  useEffect(() => {
    if(!isMount){
      setShowModal(!showModal);
    } 
  }, [displayModal])

  /**
   * @Function: Droppable
   */
  const {setNodeRef} = useDroppable({
    id: columnId,
    data: {
      accepts: ['card'],
      type: 'column'
    },
  })


    
  /**
   * Icon
   */
  const addCardIcon = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="size-8">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                      </svg>

  return (
    <div className='flex flex-col h-[90vh] w-[45vh] shrink-0'>

        {/* Title */}
        <div className='flex flex-row justify-between items-center p-5 border-b-4 border-[color:var(--user-icon--bg-color--purple)]'>
          <p className='text-xl text-[color:var(--primary-text--color)] font-semibold uppercase pl-2'>{columnTitle}</p>
          <button className='text-[color:var(--button-text--color)]' onClick={handleShowModal}>{addCardIcon}</button>
        </div>

        {/* Cards */}
        <SortableContext items={cards} strategy={verticalListSortingStrategy}>
          <div className='flex flex-col gap-y-7 p-7 h-[90%]' ref={setNodeRef}>
              {
                cards.map((card) => {
                    return(
                      <Card key={card.id} id={card.id} title={card.title} short_description={card.short_description} assigned_to={card.assigned_to} priority={card.priority} due_date={card.due_date} state_id={card.state_id}></Card>
                    )
                })
              }
          </div>
        </SortableContext>

    </div>
  )
}

export default Columns