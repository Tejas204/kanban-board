import React, { Component, useContext, useEffect, useState } from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { useDraggable, useDroppable } from "@dnd-kit/core";
import { updateIcon, deleteIcon, viewIcon, cardMenuIcon } from "../data/icons";
import { Context } from "../main";

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
  const { allUsers } = useContext(Context);

  /**
   * @Contants: Delta variables
   */
  const delta = 10;

  /**
   * @Hook: set useSortable
   * @Accept: elements of type card
   */
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

  /**
   * @Hook: setStartX, setStartY
   * Set the X and Y coordinate
   */
  const [startX, setStartX] = useState();
  const [startY, setStartY] = useState();

  /**
   * @Hook: setNewDueDate
   * Set the new date from date picker
   */
  const [newDueDate, setNewDueDate] = useState(() =>
    new Date(due_date).toLocaleDateString()
  );

  /**
   * @Hook: setIsMenuVisible
   * Set the visibility of menu items for a card
   */
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  /**
   * @Function: set the value of starting x and y coordinates
   * @Params: event
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
      } else if (event.target.id == "viewButton") {
        setUpdateDeleteCard({
          action: "view",
          id: id,
          title: title,
          short_description: short_description,
          assigned_to: assigned_to,
          priority: priority,
          due_date: due_date,
          state_id: state_id,
        });
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
    const userObj = allUsers.filter((user) => user._id == assignee);
    const nameArray = userObj[0].name.split(" ");

    var nameObj = {
      initials:
        nameArray[0].slice(0, 1) + nameArray[nameArray.length - 1].slice(0, 1),
      userName: userObj[0].name,
    };
    return nameObj;
  };

  return (
    <div
      className={`flex flex-col w-[100%] shadow-2xl rounded-lg  bg-[color:var(--card-bg--color)] ${
        isDragging ? "opacity-20" : ""
      }`}
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      style={style}
    >
      <div
        className={`flex flex-col px-6 py-4 border-b-2 border-b-gray-600 gap-y-2`}
      >
        {/* Primary details */}
        <div className="flex flex-row justify-between pb-2">
          {/* Title and assignment */}
          <div className="flex flex-col">
            <p className="text-xl text-[color:var(--primary-text--color)] font-semibold">
              {title}
            </p>
            <p className="text-[color:var(--secondary-text--color)] text-lg">
              Assigned to: {getInitials(assigned_to).userName}
            </p>
          </div>

          {/* User Icon and menu options */}
          <div className="flex flex-row items-center gap-x-4">
            {/* <div
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
            </div> */}

            <div className="flex flex-col gap-y-2">
              <button onClick={() => setIsMenuVisible(!isMenuVisible)}>
                {cardMenuIcon}
              </button>
              <div
                className={`bg-white/70 backdrop-blur-sm shadow-lg p-3 rounded-lg fixed mt-[1.35rem] w-[7rem] ml-[0.5rem] text-center ${
                  isMenuVisible ? "visible" : "hidden"
                }`}
              >
                <ul className="flex flex-col gap-y-4 text-lg font-semibold">
                  <li className="hover:bg-[color:var(--button-bg--color)] hover:text-white rounded-lg p-1 transition ease-in-out duration-150">
                    <button
                      onClick={(event) => {
                        console.log(id);
                      }}
                    >
                      Update
                    </button>
                  </li>
                  <li className="hover:bg-[color:var(--button-bg--color)] hover:text-white rounded-lg p-1 transition ease-in-out duration-150">
                    <button
                      onClick={() => {
                        console.log("I am deleted");
                      }}
                    >
                      Delete
                    </button>
                  </li>
                  <li className="hover:bg-[color:var(--button-bg--color)] hover:text-white rounded-lg p-1 transition ease-in-out duration-150">
                    <button
                      onClick={() => {
                        console.log("I am viewed");
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

        {/* Due date */}
        <div className="text-lg text-[color:var(--primary-text--color)]">
          Due by: {newDueDate}
        </div>
      </div>

      {/* Icons */}
      {/* <CardFunctions isDragging={triggerOnClick}></CardFunctions> */}
      <div className="flex flex-row justify-between items-center space-x-10 px-6 py-3">
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
        <button
          onMouseDown={clickEventControl}
          onMouseUp={dropEventControl}
          className="flex flex-row text-white/50 p-4"
          title="Update Card"
        >
          {updateIcon}
        </button>
        <button
          onMouseDown={clickEventControl}
          onMouseUp={dropEventControl}
          className="flex flex-row text-white/50 p-4"
          title="Delete Card"
        >
          {deleteIcon}
        </button>
        {/* <input
            type="date"
            onChange={handleDateChange}
            className="text-white/50 p-4 bg-transparent"
            title="Update Due Date"
          ></input> */}
        <button
          onMouseDown={clickEventControl}
          onMouseUp={dropEventControl}
          className="flex flex-row text-white/50 p-4"
          title="View Card"
          id="viewButton"
        >
          {viewIcon}
        </button>
      </div>
    </div>
  );
};

export default Card;
