import React, { useContext, useEffect } from "react";
import Columns from "../components/Columns";
import NewStateCardModal from "../components/NewStateCardModal";
import { useState } from "react";
import {
  horizontalListSortingStrategy,
  SortableContext,
  useSortable,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { closestCorners, DndContext } from "@dnd-kit/core";
import { stateArray, cardArray } from "../data/tasks";
import { arrayMove } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { Context } from "../main";

const Board = () => {
  const { stateCardArr } = useContext(Context);
  console.log(stateCardArr);
  /**
   * @Hook: sets cardArray
   * Sets array of cards from data
   */
  const [cards, setCards] = useState(cardArray);

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
   * Hook:
   * Sets value if user wants to delete state
   */
  const [deleteState, setDeleteState] = useState();

  /*
   * @Function: hideModal
   * Params: none
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
    } else if (deleteState) {
      setDeleteState(!deleteState);
    }
  };

  /*
   * @Function: handleAddState
   * Params: none
   * Displays the modal
   */
  const handleAddState = () => {
    setAddState(!addState);
  };

  /**
   * @Function: Return state of dragged card
   * Params: card id <Int>
   * Returns: index <Int>
   */
  const getActiveCard = (id) => {
    return cards.find((card) => card.id === id);
  };

  /**
   * @Function: Return state of column
   * Params: id --> id of the active card or over column
   * Params: isOverColumn -->
   * Returns: state_id <Int>
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
        itemId: c.id,
        columnId: columnId,
      }));
    });

    //Find the column id of the card
    const column = itemsWithColumnID.find((item) => item.itemId == id);
    return cards.find((c) => c.id == column.columnId);
  };

  /**
   * @Function: handleDragOver
   * Update the state of dragged card
   * Params: event <obj>
   * Returns: array[<obj>]
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
      (card) => card.id == active.id
    );
    const overCardIndex = overCards.findIndex((card) => card.id == over.id);

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
    //return updated set of cards
    setCards((previousCards) => {
      return previousCards.map((cardObject) => {
        if (cardObject.id == activeColumn.id) {
          cardObject.cards = activeCards.filter((card) => card.id != active.id);
          return cardObject;
        } else if (cardObject.id == overColumn.id) {
          cardObject.cards = [
            ...overCards.slice(0, newIndex()),
            activeCards[activeCardIndex],
            ...overCards.slice(newIndex(), overCards.length),
          ];
          return cardObject;
        } else {
          return cardObject;
        }
      });
    });
  };

  /**
   * @Function: handleDragEnd
   * Update the state of dragged card
   * Params: event <obj>
   * Returns: array[<obj>]
   */
  const handleDragEnd = (e) => {
    const { active, over } = e;

    //Find active and over column
    const activeColumn = findColumn(active.id);
    const overColumn = over ? findColumn(over.id) : null;

    //Check if the drop zone is valid
    //AND active column is same as over column
    if (activeColumn && overColumn && activeColumn.id == overColumn.id) {
      //Find the active card and over card
      const activeCard = activeColumn.cards.findIndex(
        (card) => card.id == active.id
      );
      const overCard = activeColumn.cards.findIndex(
        (card) => card.id == over.id
      );

      //Set new cards after swapping
      setCards((previousCards) => {
        return previousCards.map((cardObject) => {
          if (cardObject.id == activeColumn.id) {
            cardObject.cards = arrayMove(
              cardObject.cards,
              activeCard,
              overCard
            );
            return cardObject;
          } else {
            return cardObject;
          }
        });
      });
    }
  };

  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({
      id: cards.map((cardObject) => {
        return cardObject.id;
      }),
    });

  const style = {
    transition,
    transform: CSS.Translate.toString(transform),
  };

  return (
    <div className={`flex flex-row h-screen `}>
      {/* Filters Div */}
      {/* <Filters></Filters> */}

      {/* Columns */}
      <div
        className={`${
          showModal.active || addState || updateDeleteCard || deleteState
            ? "blur-sm"
            : "blur-none"
        }`}
      >
        <DndContext
          onDragOver={handleDragOver}
          onDragEnd={handleDragEnd}
          collisionDetection={closestCorners}
        >
          <SortableContext items={cards} strategy={verticalListSortingStrategy}>
            <div
              className="flex flex-row mt-2 px-10 gap-x-10 w-screen overflow-x-auto no-scrollbar"
              ref={setNodeRef}
              {...attributes}
              {...listeners}
              style={style}
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
            </div>
          </SortableContext>
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
