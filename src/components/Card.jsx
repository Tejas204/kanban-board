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
  const delta = 6;

  const [startX, setStartX] = useState();
  const [startY, setStartY] = useState();


  /**
   * @Function: set the value of isDragging or not
   */
  const clickEventControl = (event) => {
      //SOlution: 1
      //setIsClicked(true);

      //SOlution: 2
      //setIsDragging(false);

      setStartX(event.pageX);
      setStartY(event.pageY);
  }

  const dragEventControl = () => {
    //SOlution: 1
    // if(!isDragging && isClicked){
    //   setIsDragging(true);
    // }
    
    //Solution: 2
    //setIsDragging(true);
    //console.log("Dragging: "+isDragging)
  }

  const dropEventControl = (event) => {
    //SOlution: 1
    // if(isClicked && !isDragging){
    //   setTriggerOnClick(true);
    // }
    // else  if(isClicked && isDragging){
    //   setTriggerOnClick(false);
    // }
    // console.log("Trigger on Click 1: "+triggerOnClick)
    // setIsClicked(false);
    // setIsDragging(false);

    //Solution: 2
    // isDragging ? setTriggerOnClick(false) : setTriggerOnClick(true);

    var diffX = Math.abs(event.pageX - startX);
    var diffY = Math.abs(event.pageY - startY);

    if (diffX < delta && diffY < delta) {
      setTriggerOnClick(true);
    }
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
        onMouseDown={clickEventControl}
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
        <CardFunctions isDragging={triggerOnClick}></CardFunctions>
        
    </div>
  )
}

export default Card