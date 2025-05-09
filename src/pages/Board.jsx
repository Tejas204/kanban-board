import React, { useContext, useEffect } from "react";
import Columns from "../components/Columns";
import NewStateCardModal from "../components/NewStateCardModal";
import { useState } from "react";
import {
  closestCorners,
  DndContext,
  DragOverlay,
  KeyboardSensor,
  MouseSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import { stateArray, cardArray } from "../data/tasks";
import {
  arrayMove,
  horizontalListSortingStrategy,
  SortableContext,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { Context, server } from "../main";
import axios from "axios";
import toast from "react-hot-toast";
import Card from "../components/Card";
import Loader from "../components/Loader";
import FilterPill from "../components/FilterPill";
import { confirmIcon, tickmark, updateIcon } from "../data/icons";

const Board = () => {
  const {
    cards,
    setStateCardArr,
    isLoading,
    setMoveDistance,
    pillOption,
    setPillOption,
  } = useContext(Context);

  /**
   * @Hook: Sensors
   * Ensure that sorting starts when dragging for 10px or more
   */
  const mouseSensor = useSensor(MouseSensor, {
    activationConstraint: {
      distance: 10,
    },
  });

  const keyboardSensor = useSensor(KeyboardSensor);
  const sensors = useSensors(mouseSensor, keyboardSensor);

  /**
   * @Hook: setCardModal
   * Controls card modal display
   */
  const [showModal, setShowModal] = useState({
    active: false,
    columnId: "",
  });

  /**
   * @Hook: setAddState
   * Controls card modal display
   */
  const [addState, setAddState] = useState(false);

  /**
   * @Hook: setUpdateDeleteCard
   * Sets value if user wants to update card or delete card
   */
  const [updateDeleteCard, setUpdateDeleteCard] = useState();

  /**
   * @Hook: setDeleteState
   * Sets value if user wants to delete state
   */
  const [deleteState, setDeleteState] = useState({
    active: false,
    columnId: "",
  });

  /**
   * @Hook: setActiveCard, setActiveState
   * sets the ID of the active card and state
   */
  const [activeCard, setActiveCard] = useState(null);
  const [activeState, setActiveState] = useState(null);

  /**
   * @Hook: setUpdateBoardName
   * Used to set the confirm icon when updating the board name
   */
  const [updateBoardName, setUpdateBoardName] = useState(false);

  /**
   * @Hook: setNewBoardName
   * Used to send the updated value of the kanban board
   */
  const [newBoardName, setNewBoardName] = useState("Personal board");

  /**
   * @Hook: setDisableBoardName
   * Used to disable or enable the input field
   */
  const [disableBoardName, setDisableBoardName] = useState(true);

  /*
   * @Function: hideModal
   * @Params: none
   * @Returns: none
   * Displays the modal
   */
  const hideModal = () => {
    if (showModal.active) {
      setShowModal({
        active: !showModal.active,
        columnId: "",
      });
    } else if (addState) {
      setAddState(!addState);
    } else if (updateDeleteCard) {
      setUpdateDeleteCard();
    } else if (deleteState.active) {
      setDeleteState({
        active: !deleteState.active,
        columnId: "",
      });
    } else if (pillOption) {
      setPillOption();
    }
  };

  /*
   * @Function: handleAddState
   * @Params: none
   * @Returns: none
   * Displays the modal
   */
  const handleAddState = () => {
    setAddState(!addState);
  };

  /**
   * @Function: handleStateChange
   * @Params: id of new state and card
   * @Return: none
   * Make API call to update the state of the card
   */
  const handleStateChange = async (cardId, stateId) => {
    try {
      const { data } = await axios.put(
        `${server}/cards/changeCardState/${cardId}`,
        {
          state: stateId,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  /**
   * @Function: handleBoardNameUpdate
   * @Params: event
   * @Returns: none
   * Used to call the API to update the name of the board
   * And flip the state of the hook
   */
  const handleBoardNameUpdate = (event) => {
    event.preventDefault();

    setUpdateBoardName(!updateBoardName);
    setDisableBoardName(!disableBoardName);
  };

  /**
   * @Function: Return state of dragged card
   * @Params: card id <Int>
   * @Returns: index <Int>
   */
  const getActiveCard = (id) => {
    return cards.find((card) => card._id === id);
  };

  /**
   * @Function: Return state of column
   * @Params: id <Str>
   * @Returns: state_id <Str>
   */
  const findColumn = (id) => {
    //If item is dropped over some other area
    if (!id) {
      return null;
    }

    //If item is dropped over a column
    if (cards.some((cardObject) => cardObject.id == id)) {
      return cards.find((c) => c.id == id);
    }

    //Create a flatmap like {itemId: card.id, columnId: columnId}
    const itemsWithColumnID = cards.flatMap((cardObject) => {
      const columnId = cardObject.id;
      return cardObject.cards.map((c) => ({
        itemId: c._id,
        columnId: columnId,
      }));
    });

    //Find the column id of the card
    const column = itemsWithColumnID.find((item) => item.itemId == id);
    return cards.find((c) => c.id == column.columnId);
  };

  /**
   * @Function: handleDragStart
   * @Params: event
   * @Return: npne
   * It sets the active id of the active card and fetches its details for overlay
   */
  const handleDragStart = (e) => {
    const { active } = e;

    setActiveCard(
      active.data.current.sortable.items.find((card) => card._id == active.id)
    );
    setActiveState(
      cards.find((cardArrayObjects) => cardArrayObjects.id == active.id)
    );
  };

  /**
   * @Function: handleDragOver
   * @Params: event <obj>
   * @Returns: array[<obj>]
   * Update the state of dragged card
   */
  const handleDragOver = (event) => {
    const { active, over, delta } = event;

    //Find active and over columns
    const activeColumn = findColumn(active.id);
    const overColumn = over ? findColumn(over.id) : null;

    //Fetch the cards from active and over columns
    const activeCards = activeColumn.cards;
    const overCards = overColumn.cards;

    //Fetch the active card
    const activeCardIndex = activeCards.findIndex(
      (card) => card._id == active.id
    );
    const overCardIndex = overCards.findIndex((card) => card._id == over.id);

    const newIndex = () => {
      const placeBelowLastCard =
        overCardIndex == overCards.length - 1 && delta.y > 0;
      const indexModifier = placeBelowLastCard ? 1 : 0;
      return overCardIndex >= 0
        ? overCardIndex + indexModifier
        : overCards.length + 1;
    };

    //If card is dragged over it's own column
    //return null
    if (!activeColumn || !overColumn || activeColumn == overColumn) {
      return null;
    }

    //If card is dragged over another column
    //return updated set of card
    //If active and over card indices do not exist
    //it implies a column is being moved
    if (
      (activeCardIndex >= 0 && overCardIndex >= 0) ||
      (activeCardIndex >= 0 && overCardIndex == -1)
    ) {
      setStateCardArr((previousCards) => {
        return previousCards.map((cardObject) => {
          if (cardObject.id == activeColumn.id) {
            cardObject.cards = activeCards.filter(
              (card) => card._id != active.id
            );
            return cardObject;
          } else if (cardObject.id == overColumn.id) {
            cardObject.cards = [
              ...overCards.slice(0, newIndex()),
              activeCards[activeCardIndex],
              ...overCards.slice(newIndex(), overCards.length),
            ];
            handleStateChange(active.id, overColumn.id);
            return cardObject;
          } else {
            return cardObject;
          }
        });
      });
    }
  };

  /**
   * @Function: handleDragEnd
   * @Params: event <obj>
   * @Returns: array[<obj>]
   * Update the state of dragged card
   */
  const handleDragEnd = (e) => {
    const { active, over } = e;
    setActiveCard(null);
    setActiveState(null);

    //Find active and over column
    const activeColumn = findColumn(active.id);
    const overColumn = over ? findColumn(over.id) : null;

    //Find the active card and over card
    const activeCardIndex = activeColumn.cards.findIndex(
      (card) => card._id == active.id
    );
    const overCardIndex = overColumn.cards.findIndex(
      (card) => card._id == over.id
    );

    //Check if the drop zone is valid
    //AND active column is same as over column
    if (activeColumn && overColumn && activeColumn.id == overColumn.id) {
      //Set new cards after swapping
      setStateCardArr((previousCards) => {
        return previousCards.map((cardObject) => {
          if (cardObject.id == activeColumn.id) {
            cardObject.cards = arrayMove(
              cardObject.cards,
              activeCardIndex,
              overCardIndex
            );
            return cardObject;
          } else {
            return cardObject;
          }
        });
      });
    } else if (
      activeColumn &&
      overColumn &&
      activeColumn.id != overColumn.id &&
      activeCardIndex == -1 &&
      overCardIndex == -1
    ) {
      setStateCardArr((prev) => {
        const oldIndex = prev.indexOf(activeColumn);
        const newIndex = prev.indexOf(overColumn);
        const moveDistance = newIndex - oldIndex;
        setMoveDistance(moveDistance);
        return arrayMove(prev, oldIndex, newIndex);
      });
    }
  };

  return isLoading ? (
    <Loader></Loader>
  ) : (
    <div className={`flex flex-row h-screen overflow-x-clip`}>
      {/* Filters Div */}
      <FilterPill></FilterPill>

      {/* Columns */}
      <div
        className={`${
          showModal.active ||
          addState ||
          updateDeleteCard ||
          deleteState.active ||
          pillOption
            ? "blur-sm"
            : "blur-none"
        }`}
      >
        {/* Board title */}
        <div className="px-10 py-4 text-2xl text-[color:var(--primary-text--color)] font-semibold w-[100%] border-b-[1px] border-b-gray-700">
          <form className="flex flex-row items-center gap-x-2">
            <input
              type="text"
              value={newBoardName}
              disabled={disableBoardName}
              onChange={(event) => setNewBoardName(event.target.value)}
              className="bg-[color:var(--board-bg--color)] text-[color:var(--primary-text--color)] border-none p-1 rounded-lg ring-0"
            ></input>
            <button
              type="button"
              onClick={(event) => handleBoardNameUpdate(event)}
            >
              {updateBoardName ? confirmIcon : updateIcon}
            </button>
          </form>
        </div>

        {/* DnD area starts */}
        <DndContext
          onDragOver={handleDragOver}
          onDragEnd={handleDragEnd}
          onDragStart={handleDragStart}
          collisionDetection={closestCorners}
          sensors={sensors}
        >
          {/* Establish sortable context - columns */}
          <div className="flex flex-row mt-2 px-10 gap-x-10 w-screen overflow-x-auto no-scrollbar relative">
            <SortableContext
              items={cards}
              strategy={horizontalListSortingStrategy}
            >
              {cards.map((column) => {
                return (
                  <Columns
                    cards={column.cards}
                    key={column.id}
                    columnId={column.id}
                    columnTitle={column.state}
                    setShowModal={setShowModal}
                    showModal={showModal}
                    setUpdateDeleteCard={setUpdateDeleteCard}
                    setDeleteState={setDeleteState}
                  ></Columns>
                );
              })}
            </SortableContext>
          </div>

          {/* Drag overlay to see which element is being dragged and where */}
          <DragOverlay
            dropAnimation={{
              duration: 500,
              easing: "cubic-bezier(0.18, 0.67, 0.6, 1.22)",
            }}
            style={{
              border: "1px solid gray",
              borderRadius: "8px",
              backgroundColor: "rgba(39, 42, 67, 0.15)",
              backdropFilter: "blur(15px)",
              rotate: "3deg",
            }}
          >
            {activeCard ? (
              <Card
                key={activeCard._id}
                id={activeCard._id}
                title={activeCard.name}
                short_description={activeCard.shortDescription}
                assigned_to={activeCard.assignedTo}
                priority={activeCard.priority}
                due_date={activeCard.dueDate}
                state_id={activeCard.state}
              ></Card>
            ) : activeState ? (
              <Columns
                cards={activeState.cards}
                key={activeState.id}
                columnId={activeState.id}
                columnTitle={activeState.state}
              ></Columns>
            ) : null}
          </DragOverlay>
        </DndContext>
      </div>

      {/* State/Card Modal **/}
      <NewStateCardModal
        showModal={showModal}
        addState={addState}
        hideModal={hideModal}
        updateDeleteCard={updateDeleteCard}
        deleteState={deleteState}
        pillOption={pillOption}
      ></NewStateCardModal>

      {/* Add state button */}
      <button
        onClick={handleAddState}
        className="fixed bottom-4 right-10 px-6 py-4 rounded-lg text-lg text-[color:var(--primary-text--color)] bg-[color:var(--user-icon--bg-color--blue)] font-semibold hover:ring-2 ring-offset-4 ring-offset-[color:var(--filter-bg--color)] ring-[color:var(--user-icon--bg-color--blue)] transition ease-in-out duration-150"
      >
        Add State
      </button>
    </div>
  );
};

export default Board;
