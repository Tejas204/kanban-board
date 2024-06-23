import React, { useEffect } from 'react'
import Card from './Card'
import { useState } from 'react'

const Columns = ({columnTitle, setDisplayModal}) => {

  /**
   * @Hook: setAddCard
   * Set addCard as true when user clicks on add icon
   */
  const [addCard, setAddCard] = useState(false);

  /*
  * @Function: handleAddCard
  * Params: none
  * Sets the value of addCard using setAddCard
  */
  const handleAddCard = () => {
    setAddCard(!addCard);
  }

  /**
   * @Hook: Passes value of addCard to Parent Component: Board.jsx
   * Runs on every update to addCard
   */
  useEffect(() => {
    setDisplayModal(addCard);
  }, [addCard])
    
  const addCardIcon = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="size-8">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                      </svg>

  return (
    <div className='flex flex-col w-[25%] shrink-0 relative border-r-2 border-r-[color:var(--secondary-text--color)]'>

        {/* Title */}
        <div className='flex flex-row justify-between items-center p-5'>
          <p className='text-xl text-[color:var(--primary-text--color)] font-semibold uppercase'>{columnTitle}</p>
          <button className='text-[color:var(--user-icon--bg-color--lavender)]' onClick={handleAddCard}>{addCardIcon}</button>
        </div>

        {/* Cards */}
        <div className='flex flex-col gap-y-5 p-5'>
            <Card priority={'low'}></Card>
        </div>
    </div>
  )
}

export default Columns