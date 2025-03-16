import React, { useContext } from "react";
import { Context } from "../main";
import { closeIcon } from "../data/icons";

const KanbanBoardSelectorModal = ({ hideModal }) => {
  /**
   * @Context: Global context
   * Set context variables
   */
  const { pillOption } = useContext(Context);
  return (
    <div className="flex flex-col border-2 w-2/5 h-3/5 overflow-y-auto mt-40 rounded-md px-10 py-4 gap-y-8 backdrop-blur-sm bg-[color:var(--background-white)] no-scrollbar">
      {/* Title */}
      <div className="flex flex-row justify-between">
        <p className="text-3xl font-semibold text-[color:var(--board-bg--color)]">
          {pillOption === "boardSelection"
            ? "Select board"
            : "View or add new team members"}
        </p>
        <button onClick={hideModal}>{closeIcon}</button>
      </div>

      {/* Form */}
      <div className="flex flex-col">
        <form className="flex flex-col justify-center gap-y-10">
          <div className={`flex flex-row justify-start gap-x-10 `}>
            <button
              type="button"
              onClick={hideModal}
              className="p-4 w-1/4 bg-[color:var(--background-white)] text-[color:var(--board-bg--color)] border-4 border-[color:var(--board-bg--color)] text-xl font-bold rounded-md hover:ring-4 ring-[color:var(--board-bg--color)] ring-offset-4 ring-offset-[color:var(--background-white)] transition delay-150 ease-in-out"
            >
              Cancel
            </button>
            <button
              type="submit"
              className={`p-4 w-1/4 ring-offset-4 ring-offset-[color:var(--background-white)] transition delay-150 ease-in-out`}
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
