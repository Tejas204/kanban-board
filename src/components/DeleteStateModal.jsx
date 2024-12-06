import React from "react";
import { closeIcon } from "../data/icons";

const DeleteStateModal = ({ hideModal }) => {
  return (
    <div className="flex flex-col border-2 w-2/5 h-fit  mt-40 rounded-md px-10 py-4 gap-y-8 backdrop-blur-sm bg-[color:var(--background-white)]">
      {/* Title */}
      <div className="flex flex-row justify-between">
        <p className="text-3xl font-semibold text-[color:var(--board-bg--color)]">
          Do you want to delete this state?
        </p>
        <button onClick={hideModal}>{closeIcon}</button>
      </div>

      {/* Form */}
      <div className="flex flex-col">
        <form className="flex flex-col justify-center gap-y-10">
          <div className="flex flex-col py-7 items-start justify-start">
            <p className="text-[color:var(--board-bg--color)] font-medium text-xl">
              If you delete this state, then all cards belonging to this state
              will also be deleted. Do you want to proceed?
            </p>
          </div>

          <div className="flex flex-row justify-start gap-x-10">
            <button
              type="button"
              onClick={hideModal}
              className="p-4 w-1/4 bg-[color:var(--background-white)] text-[color:var(--board-bg--color)] border-4 border-[color:var(--board-bg--color)] text-xl font-bold rounded-md hover:ring-4 ring-[color:var(--card-bg--color)] ring-offset-4 ring-offset-[color:var(--background-white)] transition delay-150 ease-in-out"
            >
              Cancel
            </button>
            <button
              type="submit"
              className={`p-4 w-1/4 bg-[color:var(--card-priority--color-high)] text-[color:var(--button-text--color)] text-xl font-bold rounded-md hover:ring-4 
                    ring-[color:var(--card-priority--color-high)] ring-offset-4 ring-offset-[color:var(--background-white)] transition delay-150 ease-in-out`}
            >
              Delete
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

const formStyle = `p-4 w-full border-[0.15rem] border-[color:var(--secondary-text--color)] text-lg rounded-md mb-2 bg-[color:var(--background-white)] text-[color:var(--card-bg--color)]`;

export default DeleteStateModal;
