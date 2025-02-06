import React, { useEffect, useRef } from "react";
import Card from "./Card";
import { useState } from "react";
import {
  horizontalListSortingStrategy,
  SortableContext,
  useSortable,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { useDroppable } from "@dnd-kit/core";
import {
  updateIcon,
  deleteIcon,
  addCardIcon,
  confirmIcon,
  dragHandleIcon,
} from "../data/icons";
import axios from "axios";
import { server } from "../main";
import toast from "react-hot-toast";
import { CSS } from "@dnd-kit/utilities";

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
  setDeleteState,
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
   * @Function: handleShowModal
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
      setShowModal({
        active: !showModal.active,
        columnId: columnId,
      });
    }
  }, [displayModal]);

  /**
   * @Hook: setUpdateState
   * Used to update the name of the state
   */
  const [updateState, setUpdateState] = useState(true);

  /**
   * @Hook: setUpdatedColumnTitle
   * Used to set value of the state field
   */
  const [updatedStateTitle, setUpdatedStateTitle] = useState(columnTitle);

  /**
   * @Hook: setColumnDrag
   * Used to give sortable reference to column if it is dragged with handle
   */
  const [columnDrag, setColumnDrag] = useState(false);

  /**
   * @Function: handleStateDrag
   * Used to determine if column can be dragged or not
   */
  const handleStateDrag = () => {
    console.log("Dragging started");
    setColumnDrag(true);
  };

  const handleDragEnd = (e) => {
    console.log("Dragging ended");
    setColumnDrag(false);
  };

  /**
   * @Function: handleStateNameUpdate
   * Used to call the API to update the name of the state
   */
  const handleStateNameUpdate = () => {
    try {
      setUpdateState(!updateState);
      if (!updateState) {
        axios.put(
          `${server}/states/${columnId}`,
          {
            name: updatedStateTitle,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
            withCredentials: true,
          }
        );

        toast.success("State Updated Successfully");
      }
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  /**
   * @Function: Droppable
   */
  // const { setNodeRef } = useDroppable({
  //   id: columnId,
  // });
  const {
    setNodeRef,
    transform,
    transition,
    listeners,
    attributes,
    isDragging,
  } = useSortable({
    id: columnId,
  });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div
      className={`h-screen w-fit shrink-0 ${isDragging ? "opacity-20" : ""}`}
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      style={style}
    >
      {/* Drag handle */}
      <div className="flex flex-row justify-center top-0 items-center w-[100%]">
        <div
          onDragStart={handleStateDrag}
          onDragEnd={handleDragEnd}
          draggable="true"
        >
          {dragHandleIcon}
        </div>
      </div>

      {/* Title */}
      <div className="flex flex-row justify-between items-center pb-5 pl-5 pr-5 border-b-4 border-[color:var(--user-icon--bg-color--purple)]">
        <input
          type="text"
          disabled={updateState}
          value={updatedStateTitle}
          onChange={(event) => setUpdatedStateTitle(event.target.value)}
          className={`text-xl text-[color:var(--primary-text--color)] bg-transparent font-semibold uppercase pl-2 pr-14 py-2 ${
            !updateState ? "border-2 border-white" : ""
          }`}
        ></input>

        {/* Buttons and Icons */}
        <div className="flex flex-row gap-x-7 items-center">
          <button
            className="text-[color:var(--button-text--color)]"
            type="button"
            title={updateState ? "Update State" : "Confirm Update"}
            onClick={handleStateNameUpdate}
          >
            {updateState ? updateIcon : confirmIcon}
          </button>
          <button
            className="text-[color:var(--button-text--color)]"
            type="button"
            title="Delete State"
            onClick={() =>
              setDeleteState({
                active: true,
                columnId: columnId,
              })
            }
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
        <div className="flex flex-col items-center w-[100%] gap-y-7 p-7 h-[90%]">
          {cards.map((card) => {
            return (
              <Card
                key={card._id}
                id={card._id}
                title={card.name}
                short_description={card.shortDescription}
                assigned_to={card.assignedTo}
                priority={card.priority}
                due_date={card.dueDate}
                state_id={card.state}
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
