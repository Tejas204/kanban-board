import React, { Component, useEffect, useState } from 'react'
import Footer from './Footer'
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { useDraggable } from '@dnd-kit/core';
import CardFunctions from './CardFunctions';

const Card = ({id, title, short_description, assigned_to, priority, state_id}) => {

  /**
   * @Hook: set useSortable
   */
  const {attributes, listeners, setNodeRef, transform, transition} = useDraggable({
    id: id,
    data: {
        type: 'card',
        },
    });

  const style = {
    transition,
    transform: CSS.Translate.toString(transform),
  };

  /**
   * @Hook: determine whether component is dragged or not
   */
  const [isDragging, setIsDragging] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [triggerOnClick, setTriggerOnClick] = useState(false);


  /**
   * @Function: set the value of isDragging or not
   */
  const clickEventControl = () => {
    if(!isClicked){
      setIsClicked(true);
    }
  }

  const dragEventControl = () => {
    if(!isDragging){
      setIsDragging(true);
    }
  }

  const dropEventControl = () => {
    if(isClicked && !isDragging){
      setTriggerOnClick(true);
    }
    setIsClicked(false);
    setIsDragging(false);
  }


  return (
    // Parent div
    <div className={`flex flex-col rounded-sm border-l-8 bg-[color:var(--card-bg--color)] 
        ${priority == 'high' ? 'border-l-[color:var(--card-priority--color-high)]' : 
        (priority == 'medium' ? 'border-l-[color:var(--card-priority--color-medium)]': 
        'border-l-[color:var(--card-priority--color-low)]')}`}
        ref={setNodeRef}
        {...attributes}
        {...listeners}
        style={style}
        draggable='true'
        onMouseDown={clickEventControl}
        onMouseMove={dragEventControl}
        onMouseUp={dropEventControl}
        >

        {/* Content div */}
        <div className='flex flex-col px-6 py-4 border-b-2'>
            {/* Header */}
            <div className='flex flex-row justify-between pb-4'>
                {/* Title and assignment */}
                <div className='flex flex-col'>
                    <p className='text-xl font-semibold'>{title}</p>
                    <p className='text-[color:var(--secondary-text--color)]'>Assigned to: {assigned_to}</p>
                </div>
                {/* User Icon */}
                <div className={`flex justify-center items-center h-11 w-11 p-3 rounded-full 
                    ${priority == 'high' ? 'bg-[color:var(--card-priority--color-high)]' : 
                    (priority == 'medium' ? 'bg-[color:var(--card-priority--color-medium)]': 
                    'bg-[color:var(--card-priority--color-low)]')}`}>
                    AA
                </div>
            </div>

            {/* Short description */}
            <div className='text-[color:var(--primary-text--color)]'>
                <p>{short_description}</p>
            </div>

            
        </div>
        
        {/* Icons */}
        <CardFunctions isDragging={isDragging}></CardFunctions>
        
    </div>
  )
}

export default Card