import React, { useContext, useState } from "react";
import FilterPill from "./FilterPill";
import KanbanBoardSelectorModal from "./KanbanBoardSelectorModal";
import { Context, server } from "../main";
import axios from "axios";
import toast from "react-hot-toast";

const NoSelection = () => {
  /**
   * @Context:
   * Import context and related hooks
   */
  const { myBoards, sharedBoards, setDefaultBoard, setRefresh } =
    useContext(Context);

  /**
   * @Hook: setTabSelection
   * Used to set the tab the user opens
   */
  const [tabSelection, setTabSelection] = useState("new");

  /**
   * @Hook: setBoardSelection
   * Used to set the value of the initially selected board
   */
  const [boardSelection, setBoardSelection] = useState();

  /**
   * @Hook: setNewBoardName
   * Set the name of the new board
   */
  const [newBoardName, setNewBoardName] = useState("");

  /**
   * @Function: handleTabChange
   * @Params: event
   * @Returns: none
   * Used to handle which tab to display by using the hook
   */
  const handleTabChange = (event) => {
    event.preventDefault();

    setTabSelection(event.target.id);
  };

  /**
   * @Function: handleInitialSelection
   * @Params: event
   * @Return: none
   * Used to set the initial value of the board
   */
  const handleInitialSelection = async (event) => {
    event.preventDefault();

    try {
      await axios.post(
        `${server}/boards/selectBoard`,
        {
          boardId: boardSelection,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );

      toast.success("Let's get going");
      setDefaultBoard(boardSelection);
      // setRefresh((prev) => !prev);
    } catch (error) {
      console.log(error);
      toast.error("Could not find the board");
    }
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
            id="new"
            onClick={(event) => handleTabChange(event)}
            className={`${
              tabSelection === "new"
                ? "shadow-[inset_0_-4px_rgba(145,90,255)] transition ease-in-out delay-100"
                : "text-gray-500"
            } pb-4`}
          >
            New board
          </button>
          <button
            id="created"
            onClick={(event) => handleTabChange(event)}
            className={`${
              tabSelection === "created"
                ? "shadow-[inset_0_-4px_rgba(145,90,255)] transition ease-in-out delay-100"
                : "text-gray-500"
            } pb-4`}
          >
            Created by me
          </button>
          <button
            id="shared"
            onClick={(event) => handleTabChange(event)}
            className={`${
              tabSelection === "shared"
                ? "shadow-[inset_0_-4px_rgba(145,90,255)] transition ease-in-out delay-100"
                : "text-gray-500"
            } pb-4`}
          >
            Shared with me
          </button>
        </div>

        {/* Forms */}
        {/* New board */}
        <div
          className={`w-full ${tabSelection === "new" ? "visible" : "hidden"}`}
        >
          <form
            className="space-y-4"
            onSubmit={(event) => handleInitialSelection(event)}
          >
            <input
              type="text"
              value={newBoardName}
              onChange={(event) => setNewBoardName(event.target.value)}
              placeholder="Enter the name of the board"
              className="p-4 w-full border-[0.15rem] border-[color:var(--secondary-text--color)] text-[color:var(--card-bg--color)] bg-[color:var(--background-white)] text-lg rounded-md mb-2"
            ></input>
            <button
              type="submit"
              className="p-4 w-1/4 bg-[color:var(--user-icon--bg-color--lavender)] ring-[color:var(--user-icon--bg-color--lavender)] 
              text-white ring-offset-4 ring-offset-[color:var(--background-white)] hover:ring-4 text-xl font-bold rounded-md transition delay-150 ease-in-out"
            >
              Submit
            </button>
          </form>
        </div>

        {/* Created boards */}
        <div
          className={`w-full ${
            tabSelection === "created" ? "visible" : "hidden"
          }`}
        >
          <form
            className="space-y-4"
            onSubmit={(event) => handleInitialSelection(event)}
          >
            <select
              onChange={(event) => setBoardSelection(event.target.value)}
              className="p-4 w-full border-[0.15rem] border-[color:var(--secondary-text--color)] text-[color:var(--card-bg--color)] bg-[color:var(--background-white)] text-lg rounded-md mb-2"
            >
              <option value="">Select a board</option>
              {myBoards.map((board) => {
                return (
                  <option key={board._id} value={board}>
                    {board.name}
                  </option>
                );
              })}
            </select>
            <button
              type="submit"
              className="p-4 w-1/4 bg-[color:var(--user-icon--bg-color--lavender)] ring-[color:var(--user-icon--bg-color--lavender)] 
              text-white ring-offset-4 ring-offset-[color:var(--background-white)] hover:ring-4 text-xl font-bold rounded-md transition delay-150 ease-in-out"
            >
              Submit
            </button>
          </form>
        </div>

        {/* Shared boards */}
        <div
          className={`w-full ${
            tabSelection === "shared" ? "visible" : "hidden"
          }`}
        >
          <form
            className="space-y-4"
            onSubmit={(event) => handleInitialSelection(event)}
          >
            <select
              onChange={(event) => setBoardSelection(event.target.value)}
              className="p-4 w-full border-[0.15rem] border-[color:var(--secondary-text--color)] text-[color:var(--card-bg--color)] bg-[color:var(--background-white)] text-lg rounded-md mb-2"
            >
              <option value="">Select a board</option>
              {sharedBoards.map((board) => {
                return <option key={board._id}>{board.name}</option>;
              })}
            </select>
            <button
              type="submit"
              className="p-4 w-1/4 bg-[color:var(--user-icon--bg-color--lavender)] ring-[color:var(--user-icon--bg-color--lavender)] 
              text-white ring-offset-4 ring-offset-[color:var(--background-white)] hover:ring-4 text-xl font-bold rounded-md transition delay-150 ease-in-out"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NoSelection;
