import React, { useState } from "react";
import FilterPill from "./FilterPill";
import KanbanBoardSelectorModal from "./KanbanBoardSelectorModal";

const NoSelection = () => {
  /**
   * @Hook: setBoardSelection
   * Used to set the tab the user opens
   */
  const [boardSelection, setBoardSelection] = useState("created");

  /**
   * @Function: handleTabChange
   * @Params: event
   * @Returns: none
   * Used to handle which tab to display by using the hook
   */
  const handleTabChange = (event) => {
    event.preventDefault();

    setBoardSelection(event.target.id);
  };

  return (
    <div className="h-full w-full flex items-center justify-center">
      {/* Title */}
      <div className="flex flex-col h-2/5 gap-y-10 w-2/5 mt-56  rounded-lg border-2 items-start bg-[color:var(--background-white)] px-10 py-10 no-scrollbar">
        <div className="text-3xl font-bold">
          Please select a kanban board to get started
        </div>

        {/* Tabs */}
        <div className="flex flex-row w-[100%] items-start gap-x-6 text-xl text-[color:var(--board-bg--color)] border-b-2">
          <button
            id="created"
            onClick={(event) => handleTabChange(event)}
            className={`${
              boardSelection === "created"
                ? "shadow-[inset_0_-4px_rgba(145,90,255)]"
                : "text-gray-500"
            } pb-4`}
          >
            Created by me
          </button>
          <button
            id="shared"
            onClick={(event) => handleTabChange(event)}
            className={`${
              boardSelection === "shared"
                ? "shadow-[inset_0_-4px_rgba(145,90,255)]"
                : "text-gray-500"
            } pb-4`}
          >
            Shared with me
          </button>
        </div>

        {/* Forms */}
        <div
          className={`w-full ${
            boardSelection === "created" ? "visible" : "hidden"
          }`}
        >
          <form>
            <select className="p-4 w-full border-[0.15rem] border-[color:var(--secondary-text--color)] text-[color:var(--card-bg--color)] bg-[color:var(--background-white)] text-lg rounded-md mb-2">
              <option>Board 1</option>
              <option>Board 1</option>
              <option>Board 1</option>
            </select>
          </form>
        </div>

        <div
          className={`w-full ${
            boardSelection === "shared" ? "visible" : "hidden"
          }`}
        >
          <form>
            <select className="p-4 w-full border-[0.15rem] border-[color:var(--secondary-text--color)] text-[color:var(--card-bg--color)] bg-[color:var(--background-white)] text-lg rounded-md mb-2">
              <option>Board 2</option>
              <option>Board 2</option>
              <option>Board 2</option>
            </select>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NoSelection;
