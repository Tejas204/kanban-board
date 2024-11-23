import React, { Component, useEffect, useState } from "react";
import Footer from "./Footer";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { useDraggable, useDroppable } from "@dnd-kit/core";
import CardFunctions from "./CardFunctions";
import CardModal from "./NewStateCardModal";

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
  /**
   * @Contants: SVG icons and delta variables
   */
  const messageIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      class="size-7"
      id="updateButton"
    >
      <path
        fill-rule="evenodd"
        d="M4.755 10.059a7.5 7.5 0 0 1 12.548-3.364l1.903 1.903h-3.183a.75.75 0 1 0 0 1.5h4.992a.75.75 0 0 0 .75-.75V4.356a.75.75 0 0 0-1.5 0v3.18l-1.9-1.9A9 9 0 0 0 3.306 9.67a.75.75 0 1 0 1.45.388Zm15.408 3.352a.75.75 0 0 0-.919.53 7.5 7.5 0 0 1-12.548 3.364l-1.902-1.903h3.183a.75.75 0 0 0 0-1.5H2.984a.75.75 0 0 0-.75.75v4.992a.75.75 0 0 0 1.5 0v-3.18l1.9 1.9a9 9 0 0 0 15.059-4.035.75.75 0 0 0-.53-.918Z"
        clip-rule="evenodd"
      />
    </svg>
  );

  const deleteIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      class="size-7"
      id="deleteButton"
    >
      <path
        fill-rule="evenodd"
        d="M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z"
        clip-rule="evenodd"
      />
    </svg>
  );

  const calendarIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="2.5"
      stroke="currentColor"
      class="w-6 h-6"
      id="dateButton"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"
      />
    </svg>
  );

  const delta = 10;

  /**
   * @Hook: set useSortable
   * @Accept: elements of type card
   */
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({
      id: id,
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
  };

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
      if (event.target.id == "updateButton") {
        setUpdateDeleteCard({
          action: "update",
          id: id,
          title: title,
          short_description: short_description,
          assigned_to: assigned_to,
          priority: priority,
          due_date: due_date,
          state_id: state_id,
        });
      } else if (event.target.id == "deleteButton") {
        setUpdateDeleteCard({
          action: "delete",
          id: id,
          title: title,
          short_description: short_description,
          assigned_to: assigned_to,
          priority: priority,
          due_date: due_date,
          state_id: state_id,
        });
      } else if (event.target.id == "dateButton") {
      }
    }
  };

  /**
   * @Function: handle date change
   * @Input: new date value
   * @Returns: none
   */
  const handleDateChange = (event) => {
    setNewDueDate(event.target.value);
  };

  /**
   * @Function: getIntials
   * @Input: <string> assigned to of the card
   * @Returns: <string> Initials
   */
  const getInitials = (assignee) => {
    const nameArray = assignee.split(" ");
    return (
      nameArray[0].slice(0, 1) + nameArray[nameArray.length - 1].slice(0, 1)
    );
  };

  return (
    // Parent div
    <div
      className={`flex flex-col rounded-sm border-l-8 bg-[color:var(--card-bg--color)] 
        ${
          priority == "high"
            ? "border-l-[color:var(--card-priority--color-high)]"
            : priority == "medium"
            ? "border-l-[color:var(--card-priority--color-medium)]"
            : "border-l-[color:var(--card-priority--color-low)]"
        }`}
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      style={style}
    >
      {/* Content div */}
      <div className="flex flex-col px-6 py-4 border-b-2 gap-y-2">
        {/* Header */}
        <div className="flex flex-row justify-between pb-4">
          {/* Title and assignment */}
          <div className="flex flex-col">
            <p className="text-xl font-semibold">{title}</p>
            <p className="text-[color:var(--secondary-text--color)] text-lg">
              Assigned to: {assigned_to}
            </p>
          </div>
          {/* User Icon */}
          <div
            className={`flex justify-center font-bold items-center h-11 w-11 p-3 rounded-full 
                    ${
                      priority == "high"
                        ? "bg-[color:var(--card-priority--color-high)]"
                        : priority == "medium"
                        ? "bg-[color:var(--card-priority--color-medium)]"
                        : "bg-[color:var(--card-priority--color-low)]"
                    }`}
          >
            {getInitials(assigned_to)}
          </div>
        </div>

        {/* Short description */}
        <div className="text-[color:var(--primary-text--color)] text-lg">
          <p>{short_description}</p>
        </div>

        <div className="text-lg">Due date: {newDueDate}</div>
      </div>

      {/* Icons */}
      {/* <CardFunctions isDragging={triggerOnClick}></CardFunctions> */}
      <div className="flex flex-row justify-between items-center space-x-10 px-6 py-3">
        <button
          onMouseDown={clickEventControl}
          onMouseUp={dropEventControl}
          className="flex flex-row text-white p-4"
        >
          {messageIcon}
        </button>
        <button
          onMouseDown={clickEventControl}
          onMouseUp={dropEventControl}
          className="flex flex-row text-white p-4"
        >
          {deleteIcon}
        </button>
        <form>
          <input
            type="date"
            onChange={handleDateChange}
            className="text-white p-4 bg-transparent"
          ></input>
        </form>
      </div>
    </div>
  );
};

export default Card;
