import React, { Component, useEffect, useState } from 'react'
import Footer from './Footer'
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { useDraggable, useDroppable } from '@dnd-kit/core';
import CardFunctions from './CardFunctions';

const Card = ({id, title, short_description, assigned_to, priority, due_date, state_id}) => {

  /**
   * @Contants: SVG icons and delta variables
   */
  const messageIcon = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-6 h-6" id='updateButton'>
                        <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
                      </svg>

  const deleteIcon = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="size-6" id='deleteButton' >
                        <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                     </svg>


  const calendarIcon = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-6 h-6" id='dateButton' >
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
                       </svg>

  const delta = 10;


  /**
   * @Hook: set useSortable
   * @Accept: elements of type card
   */
  const {attributes, listeners, setNodeRef, transform, transition} = useSortable({
    id: id
    });

  const style = {
    transition,
    transform: CSS.Translate.toString(transform),
  };

  /**
   * @Hook: Set the X and Y coordinate
   */
  const [startX, setStartX] = useState();
  const [startY, setStartY] = useState();

  /**
   * @Hook: set the new date from date picker
   */
  const [newDueDate, setNewDueDate] = useState(due_date);


  /**
   * @Function: set the value of isDragging or not
   * @Params: none
   * @Returns: none
   */
  const clickEventControl = (event) => {
      setStartX(event.pageX);
      setStartY(event.pageY);
  }


  /**
   * @Function: Calculate the difference between X and Y coordinates
   * @Params: none
   * @Returns: none
   */
  const dropEventControl = (event) => {
    var diffX = Math.abs(event.pageX - startX);
    var diffY = Math.abs(event.pageY - startY);

    if (diffX < delta && diffY < delta) {
      console.log(event);
      if(event.target.id == 'updateButton'){
        alert("Updated!");
      }
      else if(event.target.id == 'deleteButton'){
        alert("Deleted!")
      }
      else if(event.target.id == 'dateButton'){
        alert("Date!")
      }
    }
  }

  /**
   * @Function: handle date change
   * @Input: new date value
   * @Returns: none
   */
  const handleDateChange = (event) => {
    setNewDueDate(event.target.value)
  }

  /**
   * @Function: getIntials
   * @Input: <string> assigned to of the card
   * @Returns: <string> Initials
   */
  const getInitials = (assignee) => {
    const nameArray = assignee.split(" ");
    return nameArray[0].slice(0, 1) + nameArray[nameArray.length - 1].slice(0, 1);
  }

  return (
    // Parent div
    //Deleted onMouseMove - add if requred
    <div className={`flex flex-col rounded-sm border-l-8 bg-[color:var(--card-bg--color)] 
        ${priority == 'high' ? 'border-l-[color:var(--card-priority--color-high)]' : 
        (priority == 'medium' ? 'border-l-[color:var(--card-priority--color-medium)]': 
        'border-l-[color:var(--card-priority--color-low)]')}`}
        ref={setNodeRef}
        {...attributes}
        {...listeners}
        style={style}
        >

        {/* Content div */}
        <div className='flex flex-col px-6 py-4 border-b-2 gap-y-2'>
            {/* Header */}
            <div className='flex flex-row justify-between pb-4'>
                {/* Title and assignment */}
                <div className='flex flex-col'>
                    <p className='text-xl font-semibold'>{title}</p>
                    <p className='text-[color:var(--secondary-text--color)]'>Assigned to: {assigned_to}</p>
                </div>
                {/* User Icon */}
                <div className={`flex justify-center font-bold items-center h-11 w-11 p-3 rounded-full 
                    ${priority == 'high' ? 'bg-[color:var(--card-priority--color-high)]' : 
                    (priority == 'medium' ? 'bg-[color:var(--card-priority--color-medium)]': 
                    'bg-[color:var(--card-priority--color-low)]')}`}>
                    {getInitials(assigned_to)}
                </div>
            </div>

            {/* Short description */}
            <div className='text-[color:var(--primary-text--color)]'>
                <p>{short_description}</p>
            </div>

            <div className=''>
              Due date: {newDueDate}
            </div>

            
        </div>
        
        {/* Icons */}
        {/* <CardFunctions isDragging={triggerOnClick}></CardFunctions> */}
        <div className='flex flex-row justify-between items-center space-x-10 px-6 py-3'>
          <button onMouseDown={clickEventControl} onMouseUp={dropEventControl} className='flex flex-row text-white transition p-2'>{messageIcon}</button>
          <button onMouseDown={clickEventControl} onMouseUp={dropEventControl} className='flex flex-row text-white transition ease-in-out delay-150 p-2'>{deleteIcon}</button>
          <form>
            <input type='date' onChange={handleDateChange} className='text-white p-2 bg-transparent'></input>
          </form>
        </div>
        
    </div>
  )
}

export default Card