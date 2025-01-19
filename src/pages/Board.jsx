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

const Board = () => {
  const { cards, setStateCardArr, isLoading, setMoveDistance } =
    useContext(Context);

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
   * @Function: handleStateIndexUpdate
   * @Params: moveDistance <Int>, oldIndex<Int>, newIndex<Int>
   * @Returns: None
   * Makes a PUT API call to update the index of states
   */
  const handleStateIndexUpdate = (moveDistance, oldIndex, newIndex) => {
    if (moveDistance > 0) {
      while (moveDistance >= 0) {
        console.log(cards[moveDistance].index + cards[moveDistance].state);
        moveDistance--;
      }
    }
    if (moveDistance < 0) {
      while (moveDistance <= 0) {
        moveDistance++;
      }
    }
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
      {/* <Filters></Filters> */}

      {/* Columns */}

      <div
        className={`${
          showModal.active || addState || updateDeleteCard || deleteState.active
            ? "blur-sm"
            : "blur-none"
        }`}
      >
        <DndContext
          onDragOver={handleDragOver}
          onDragEnd={handleDragEnd}
          onDragStart={handleDragStart}
          collisionDetection={closestCorners}
          sensors={sensors}
        >
          <div className="flex flex-row mt-0 px-10 gap-x-10 w-screen overflow-x-auto no-scrollbar">
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

          <DragOverlay
            dropAnimation={{
              duration: 500,
              easing: "cubic-bezier(0.18, 0.67, 0.6, 1.22)",
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

      {/* Card Modal **/}
      <NewStateCardModal
        showModal={showModal}
        addState={addState}
        hideModal={hideModal}
        updateDeleteCard={updateDeleteCard}
        deleteState={deleteState}
      ></NewStateCardModal>

      {/* Add state button */}
      <button
        onClick={handleAddState}
        className="absolute bottom-0 right-10 px-6 py-4 rounded-lg text-[color:var(--primary-text--color)] bg-[color:var(--user-icon--bg-color--blue)] font-semibold hover:ring-2 ring-offset-4 ring-offset-[color:var(--filter-bg--color)] ring-[color:var(--user-icon--bg-color--blue)]"
      >
        Add State
      </button>
    </div>
  );
};

export default Board;
