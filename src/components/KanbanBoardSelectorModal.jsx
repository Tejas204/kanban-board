import React, { useContext, useState } from "react";
import { Context } from "../main";
import { closeIcon } from "../data/icons";

const KanbanBoardSelectorModal = ({ hideModal }) => {
  /**
   * @Hook: setBoardSelection
   * Used to select the board from 2 section: created by me OR shared with me
   */
  const [boardSelection, setBoardSelection] = useState("new");

  /**
   * @Function: handleKabanBoardActions
   * @Params: event
   * @Returns: none
   * Used to handle the kanban board actions:
   *  1. Create a new board
   *  2. Select a board and render it
   *  3. Open a board shared by me
   *  4. Delete a kanban board
   */
  const handleKabanBoardActions = (event) => {
    event.preventDefault();
    alert("I have pressed: " + boardSelection);
  };

  const handleBoardDeletion = (event) => {
    event.preventDefault();
    console.log(event.target.removalBoards);

    const deleteBoards = Array.from(event.target.removalBoards).map(
      (checkedBoards) => [checkedBoards.id, checkedBoards.checked]
    );
    console.log(deleteBoards);
  };

  return (
    <div className="flex flex-col border-2 w-2/5 h-2/5 overflow-y-auto mt-40 rounded-md px-10 py-4 gap-y-8 backdrop-blur-sm bg-[color:var(--background-white)] no-scrollbar">
      {/* Title */}
      <div className="flex flex-row justify-between">
        <p className="text-3xl font-semibold text-[color:var(--board-bg--color)]">
          Manage your kanban boards
        </p>
        <button onClick={hideModal}>{closeIcon}</button>
      </div>

      {/* Tabs */}
      <div className="flex flex-col">
        <div className="flex flex-row gap-x-6 text-xl text-[color:var(--board-bg--color)] border-b-2">
          {/* Tab 1: New Kanban Board */}
          <button
            onClick={() => setBoardSelection("new")}
            className={`${
              boardSelection == "new"
                ? "shadow-[inset_0_-4px_rgba(145,90,255)]"
                : "text-gray-500"
            } pb-4`}
          >
            New kanban board
          </button>

          {/* Tab 2: Select kanban board created by logged in user */}
          <button
            onClick={() => setBoardSelection("created")}
            className={`${
              boardSelection === "created"
                ? "shadow-[inset_0_-4px_rgba(145,90,255)]"
                : "text-gray-500"
            } pb-4`}
          >
            Created by me
          </button>

          {/* Tab 3: Select kanban board shared with logged in user */}
          <button
            onClick={() => setBoardSelection("shared")}
            className={`${
              boardSelection === "shared"
                ? "shadow-[inset_0_-4px_rgba(145,90,255)]"
                : "text-gray-500"
            } pb-4`}
          >
            Shared with me
          </button>

          {/* Tab 4: Delete kanban boards */}
          <button
            onClick={() => setBoardSelection("delete")}
            className={`${
              boardSelection === "delete"
                ? "shadow-[inset_0_-4px_rgba(145,90,255)]"
                : "text-gray-500"
            } pb-4`}
          >
            Delete kanban boards
          </button>
        </div>
      </div>

      {/* Functionality */}
      <div
        className={`flex flex-col gap-y-4 ${
          boardSelection == "new" ? "visible" : "hidden"
        }`}
      >
        <p className="text-lg text-[color:var(--board-bg--color)]">
          Create a new kanban board
        </p>
        <form>
          {/* Functionality 1: Enter name of new kanban board */}
          <input
            className={`${
              boardSelection === "new" ? "visible" : "hidden"
            } p-4 w-full border-[0.15rem] border-[color:var(--secondary-text--color)] text-[color:var(--card-bg--color)] bg-[color:var(--background-white)] text-lg rounded-md mb-2`}
            placeholder="Enter the name of the board"
          ></input>
          <div className={`flex flex-row justify-start gap-x-10 mt-10 `}>
            <button
              type="button"
              onClick={hideModal}
              className="p-4 w-1/4 bg-[color:var(--background-white)] text-[color:var(--board-bg--color)] border-4 
            border-[color:var(--board-bg--color)] text-xl font-bold rounded-md hover:ring-4 ring-[color:var(--board-bg--color)] 
            ring-offset-4 ring-offset-[color:var(--background-white)] transition delay-150 ease-in-out"
            >
              Cancel
            </button>
            <button
              type="submit"
              className={`p-4 w-1/4 bg-[color:var(--user-icon--bg-color--lavender)] ring-[color:var(--user-icon--bg-color--lavender)] 
              text-white ring-offset-4 ring-offset-[color:var(--background-white)] hover:ring-4 text-xl font-bold rounded-md transition delay-150 ease-in-out`}
            >
              Submit
            </button>
          </div>
        </form>
      </div>

      {/* Functionality 2: Select from existing boards created by logged in user */}
      <div
        className={`flex flex-col gap-y-4 ${
          boardSelection == "created" ? "visible" : "hidden"
        }`}
      >
        <p className="text-lg text-[color:var(--board-bg--color)]">
          Choose a board created by you
        </p>
        <form>
          <select
            className={`${
              boardSelection == "created" ? "visible" : "hidden"
            } p-4 w-full border-[0.15rem] border-[color:var(--secondary-text--color)] text-[color:var(--card-bg--color)] bg-[color:var(--background-white)] text-lg rounded-md mb-2`}
          >
            <option>Board 1</option>
            <option>Board 2</option>
            <option>Board 3</option>
          </select>
          <div className={`flex flex-row justify-start gap-x-10 mt-10 `}>
            <button
              type="button"
              onClick={hideModal}
              className="p-4 w-1/4 bg-[color:var(--background-white)] text-[color:var(--board-bg--color)] border-4 
            border-[color:var(--board-bg--color)] text-xl font-bold rounded-md hover:ring-4 ring-[color:var(--board-bg--color)] 
            ring-offset-4 ring-offset-[color:var(--background-white)] transition delay-150 ease-in-out"
            >
              Cancel
            </button>
            <button
              type="submit"
              className={`p-4 w-1/4 bg-[color:var(--user-icon--bg-color--lavender)] ring-[color:var(--user-icon--bg-color--lavender)] 
              text-white ring-offset-4 ring-offset-[color:var(--background-white)] hover:ring-4 text-xl font-bold rounded-md transition delay-150 ease-in-out`}
            >
              Submit
            </button>
          </div>
        </form>
      </div>

      {/* Functionality 3: Select from kanban boards shared with logged in user */}
      <div
        className={`flex flex-col gap-y-4 ${
          boardSelection == "shared" ? "visible" : "hidden"
        }`}
      >
        <p className="text-lg text-[color:var(--board-bg--color)]">
          Choose a board shared with you
        </p>
        <form>
          <select
            className={`${
              boardSelection == "shared" ? "visible" : "hidden"
            } p-4 w-full border-[0.15rem] border-[color:var(--secondary-text--color)] text-[color:var(--card-bg--color)] bg-[color:var(--background-white)] text-lg rounded-md mb-2`}
          >
            <option>Board 4</option>
            <option>Board 5</option>
            <option>Board 6</option>
          </select>
          <div className={`flex flex-row justify-start gap-x-10 mt-10 `}>
            <button
              type="button"
              onClick={hideModal}
              className="p-4 w-1/4 bg-[color:var(--background-white)] text-[color:var(--board-bg--color)] border-4 
            border-[color:var(--board-bg--color)] text-xl font-bold rounded-md hover:ring-4 ring-[color:var(--board-bg--color)] 
            ring-offset-4 ring-offset-[color:var(--background-white)] transition delay-150 ease-in-out"
            >
              Cancel
            </button>
            <button
              type="submit"
              className={`p-4 w-1/4 bg-[color:var(--user-icon--bg-color--lavender)] ring-[color:var(--user-icon--bg-color--lavender)] 
              text-white ring-offset-4 ring-offset-[color:var(--background-white)] hover:ring-4 text-xl font-bold rounded-md transition delay-150 ease-in-out`}
            >
              Submit
            </button>
          </div>
        </form>
      </div>

      {/* Functionality 4: Delete the kanban boards created by logged in user */}
      <div
        className={`flex flex-col gap-y-4 ${
          boardSelection == "delete" ? "visible" : "hidden"
        }`}
      >
        <p className="text-lg text-[color:var(--board-bg--color)]">
          Delete boards
        </p>
        <form onSubmit={(event) => handleBoardDeletion(event)}>
          <div className={`flex flex-row items-center gap-x-4`}>
            <input
              type="checkbox"
              name="removalBoards"
              value="board1"
              id="board1"
              className="h-4 w-4 accent-[color:var(--user-icon--bg-color--lavender)]"
            ></input>
            <label
              for="board1"
              className="text-[color:var(--board-bg--color)] text-lg"
            >
              Board 1
            </label>
          </div>
          <div className={`flex flex-row items-center gap-x-4`}>
            <input
              type="checkbox"
              name="removalBoards"
              value="board2"
              id="board2"
              className="h-4 w-4 accent-[color:var(--user-icon--bg-color--lavender)]"
            ></input>
            <label
              for="board2"
              className="text-[color:var(--board-bg--color)] text-lg"
            >
              Board 2
            </label>
          </div>
          <div className={`flex flex-row justify-start gap-x-10 mt-10 `}>
            <button
              type="button"
              onClick={hideModal}
              className="p-4 w-1/4 bg-[color:var(--background-white)] text-[color:var(--board-bg--color)] border-4 
            border-[color:var(--board-bg--color)] text-xl font-bold rounded-md hover:ring-4 ring-[color:var(--board-bg--color)] 
            ring-offset-4 ring-offset-[color:var(--background-white)] transition delay-150 ease-in-out"
            >
              Cancel
            </button>
            <button
              type="submit"
              className={`p-4 w-1/4 bg-[color:var(--card-priority--color-high)] ring-[color:var(--card-priority--color-high)] 
              text-white ring-offset-4 ring-offset-[color:var(--background-white)] hover:ring-4 text-xl font-bold rounded-md transition delay-150 ease-in-out`}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default KanbanBoardSelectorModal;
