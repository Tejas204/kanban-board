import React, { useEffect, useRef } from "react";
import Card from "./Card";
import { useState } from "react";
import {
  horizontalListSortingStrategy,
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { useDroppable } from "@dnd-kit/core";
import { updateIcon, deleteIcon, addCardIcon } from "../data/icons";

/**
 * @Function: useDidMount
 * Returns: didMount; boolean
 * Initialize didMount as true
 * Set didMount to false upon first render
 */
export const useDidMount = () => {
  const didMount = useRef(true);

  useEffect(() => {
    didMount.current = false;
  }, []);

  return didMount.current;
};

const Columns = ({
  cards,
  columnId,
  columnTitle,
  setShowModal,
  showModal,
  setUpdateDeleteCard,
}) => {
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
  };

  /**
   * @Hook: Passes value of displayModal to Parent Component: Board.jsx
   * Does not display in first render
   */
  useEffect(() => {
    if (!isMount) {
      setShowModal(!showModal);
    }
  }, [displayModal]);

  /**
   * @Function: Droppable
   */
  const { setNodeRef } = useDroppable({
    id: columnId,
  });

  return (
    <div className="h-screen w-1/4 shrink-0">
      {/* Title */}
      <div className="flex flex-row justify-between items-center p-5 border-b-4 border-[color:var(--user-icon--bg-color--purple)]">
        <input
          type="text"
          disabled="true"
          value={columnTitle}
          className="text-xl text-[color:var(--primary-text--color)] bg-transparent font-semibold uppercase pl-2"
        ></input>
        {/* Buttons and Icons */}
        <div className="flex flex-row gap-x-7 items-center">
          <button
            className="text-[color:var(--button-text--color)]"
            type="button"
            title="Update State"
          >
            {updateIcon}
          </button>
          <button
            className="text-[color:var(--button-text--color)]"
            type="button"
            title="Delete State"
          >
            {deleteIcon}
          </button>
          <button
            className="text-[color:var(--button-text--color)]"
            onClick={handleShowModal}
            type="button"
            title="Add Card"
          >
            {addCardIcon}
          </button>
        </div>
      </div>

      {/* Cards */}
      <SortableContext items={cards} strategy={verticalListSortingStrategy}>
        <div className="flex flex-col gap-y-7 p-7 h-[90%]" ref={setNodeRef}>
          {cards.map((card) => {
            return (
              <Card
                key={card.id}
                id={card.id}
                title={card.title}
                short_description={card.short_description}
                assigned_to={card.assigned_to}
                priority={card.priority}
                due_date={card.due_date}
                state_id={card.state_id}
                setUpdateDeleteCard={setUpdateDeleteCard}
              ></Card>
            );
          })}
        </div>
      </SortableContext>
    </div>
  );
};

export default Columns;
