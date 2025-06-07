import React, { Component, useContext, useEffect, useState } from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { useDraggable, useDroppable } from "@dnd-kit/core";
import {
  updateIcon,
  deleteIcon,
  viewIcon,
  cardMenuIcon,
  messageIcon,
  attachmentIcon,
} from "../data/icons";
import { Context } from "../main";
import { getInitials } from "../utils/utilities";

const Card = ({
  id,
  title,
  short_description,
  assigned_to,
  priority,
  due_date,
  state_id,
  setUpdateDeleteCard,
}) => {
  /**-----------------------------------------------------------------------
   * @Contants: Delta variables
   -----------------------------------------------------------------------*/
  const delta = 10;

  /**-----------------------------------------------------------------------
   * @Hook: useContext
   * Utilize context variables
   -----------------------------------------------------------------------*/
  const { comments } = useContext(Context);

  /**-----------------------------------------------------------------------
   * @Hook: set useSortable
   * @Accept: elements of type card
   -----------------------------------------------------------------------*/
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id: id,
  });

  const style = {
    transform: CSS.Translate.toString(transform),
    transition,
  };

  /**-----------------------------------------------------------------------
   * @Hook: setStartX, setStartY
   * Set the X and Y coordinate
   -----------------------------------------------------------------------*/
  const [startX, setStartX] = useState();
  const [startY, setStartY] = useState();

  /**-----------------------------------------------------------------------
   * @Hook: setNewDueDate
   * Set the new date from date picker
   -----------------------------------------------------------------------*/
  const [newDueDate, setNewDueDate] = useState(() =>
    new Date(due_date).toLocaleDateString()
  );

  /**-----------------------------------------------------------------------
   * @Hook: setIsMenuVisible
   * Set the visibility of menu items for a card
   -----------------------------------------------------------------------*/
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  /**-----------------------------------------------------------------------
   * @Function: handleModalDisplay
   * @Params: Id of button
   * @Returns: none
   * Depending on the button clicked, display the modal
   -----------------------------------------------------------------------*/
  const handleModalDisplay = (buttonId) => {
    setUpdateDeleteCard({
      action:
        buttonId === "updateButton"
          ? "update"
          : buttonId === "deleteButton"
          ? "delete"
          : "view",
      id: id,
      title: title,
      short_description: short_description,
      assigned_to: assigned_to,
      priority: priority,
      due_date: due_date,
      state_id: state_id,
    });
  };

  /**-----------------------------------------------------------------------
   * @Function: handle date change
   * @Input: new date value
   * @Returns: none
   -----------------------------------------------------------------------*/
  const handleDateChange = (event) => {
    setNewDueDate(event.target.value);
  };

  return (
    <div
      className={`flex flex-col w-[430px] shadow-2xl rounded-lg  bg-[color:var(--card-bg--color)] ${
        isDragging ? "opacity-20" : ""
      }`}
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      style={style}
    >
      <div
        className={`flex flex-col px-4 py-4 border-b-2 border-b-gray-600 gap-y-2`}
      >
        {/* Primary details */}
        <div className="flex flex-row justify-between">
          {/* Title and assignment */}
          <div className="flex flex-col">
            <p className="text-xl text-[color:var(--primary-text--color)] font-semibold">
              {title}
            </p>
            <p className="text-[color:var(--secondary-text--color)] line-clamp-2">
              {short_description}
            </p>
          </div>

          {/* Menu options */}
          <div className="flex flex-row items-center">
            <div className="flex flex-col gap-y-2">
              <button onClick={() => setIsMenuVisible(!isMenuVisible)}>
                {cardMenuIcon}
              </button>
              <div
                className={`bg-white/70 backdrop-blur-sm shadow-lg p-3 rounded-lg absolute mt-[1.35rem] w-[7rem] ml-[0.5rem] text-center ${
                  isMenuVisible ? "visible" : "hidden"
                }`}
              >
                <ul className="flex flex-col gap-y-4 text-lg font-semibold text-[color:var(--board-bg--color)]">
                  <li className="hover:bg-[color:var(--button-bg--color)] hover:text-white rounded-lg p-1 transition ease-in-out duration-150">
                    <button
                      id="updateButton"
                      onClick={(event) => {
                        handleModalDisplay(event.target.id);
                      }}
                    >
                      Update
                    </button>
                  </li>
                  <li className="hover:bg-[color:var(--button-bg--color)] hover:text-white rounded-lg p-1 transition ease-in-out duration-150">
                    <button
                      id="deleteButton"
                      onClick={(event) => {
                        handleModalDisplay(event.target.id);
                      }}
                    >
                      Delete
                    </button>
                  </li>
                  <li className="hover:bg-[color:var(--button-bg--color)] hover:text-white rounded-lg p-1 transition ease-in-out duration-150">
                    <button
                      id="viewButton"
                      onClick={(event) => {
                        handleModalDisplay(event.target.id);
                      }}
                    >
                      View
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Due date */}
        <div className="text-lg text-[color:var(--secondary-text--color)] pb-1">
          Due by: {newDueDate}
        </div>

        {/* Priority */}
        <div className="text-[color:var(--primary-text--color)] text-lg w-fit">
          <p
            className={`w-[100%] overflow-hidden text-[color:var(--primary-dark--text-color)] font-semibold overflow-ellipsis text-nowrap px-4 py-1 rounded-full ${
              priority == 1
                ? "bg-[color:var(--card-priority--color-high)]"
                : priority == 2
                ? "bg-[color:var(--card-priority--color-medium)]"
                : "bg-[color:var(--card-priority--color-low)]"
            }`}
          >
            {priority == 1 ? "High" : priority == 2 ? "Medium" : "Low"}
          </p>
        </div>
      </div>

      {/* Icons */}
      {/* <CardFunctions isDragging={triggerOnClick}></CardFunctions> */}
      <div className="flex flex-row justify-between items-center space-x-5 px-6 py-3">
        <div
          className={`flex justify-center font-bold items-center h-11 w-11 p-3 rounded-full text-[color:var(--primary-dark--text-color)]
                    ${
                      priority == 1
                        ? "bg-[color:var(--card-priority--color-high)]"
                        : priority == 2
                        ? "bg-[color:var(--card-priority--color-medium)]"
                        : "bg-[color:var(--card-priority--color-low)]"
                    }`}
        >
          {getInitials(assigned_to).initials}
        </div>

        {/* Comments and attachments */}
        <div className="flex flex-row gap-x-6">
          <div className="flex flex-row gap-x-2">
            <button className="text-gray-500">{messageIcon}</button>
            <div className="text-lg text-[color:var(--secondary-text--color)]">
              {
                comments.filter((comment) => {
                  return comment.card == id;
                }).length
              }
            </div>
          </div>
          {/* To enable when functionality to add attachments will be activated */}
          {/* <div className="flex flex-row gap-x-2">
            <button className="text-gray-500">{attachmentIcon}</button>
            <div className="text-lg text-[color:var(--secondary-text--color)]">
              2
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Card;
