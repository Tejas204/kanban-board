import react, { useState } from "react";
import { cardMenuIcon, messageIcon } from "../data/icons";

const CardUI = ({ priority, user, shortDescription, description, dueDate }) => {
  /**-----------------------------------------------------------------------
   * @Hook: setHoverState
   * Used to toggle classes on hover
   -----------------------------------------------------------------------*/
  const [hoverState, setHoverState] = useState(false);

  return (
    <div
      onMouseEnter={() => setHoverState(!hoverState)}
      onMouseLeave={() => setHoverState(!hoverState)}
      className={`flex flex-col w-[430px] shadow-2xl backdrop-blur-3xl rounded-lg bg-gradient-to-tr from-(--card-bg--color) to-(--board-bg--color) border-[0.1rem] border-(--text-disabled--color) transition ease-in-out delay-200 duration-300 ${
        hoverState
          ? "hover:-translate-y-40 hover:bg-(--card-bg--color-UI) hover:bg-gradient-to-tr hover:from-(--card-bg--color-UI) hover:to-(--board-bg--color)"
          : ""
      }`}
    >
      <div
        className={`flex flex-col px-4 py-4 border-b-2 border-b-(--text-disabled--color) gap-y-2`}
      >
        {/* -----------------------------------------------------------------------
          Primary details 
          -----------------------------------------------------------------------*/}
        <div className="flex flex-row justify-between">
          {/* -----------------------------------------------------------------------
            Title and assignment 
            -----------------------------------------------------------------------*/}
          <div className="flex flex-col">
            <p className="text-xl text-(--primary-text--color) font-semibold">
              {shortDescription}
            </p>
            <p className="text-(--secondary-text--color) line-clamp-2">
              {description}
            </p>
          </div>

          {/* -----------------------------------------------------------------------
            Menu options 
            -----------------------------------------------------------------------*/}
          <div>{cardMenuIcon}</div>
        </div>

        {/*----------------------------------------------------------------------- 
          Due date 
          -----------------------------------------------------------------------*/}
        <div className="text-lg text-(--secondary-text--color) pb-1">
          Due by: {dueDate}
        </div>

        {/* ----------------------------------------------------------------------- 
        Priority 
        -----------------------------------------------------------------------*/}
        <div className="text-(--primary-text--color) text-lg w-fit">
          <p
            className={`w-full overflow-hidden text-(--primary-dark--text-color) font-semibold text-ellipsis text-nowrap px-4 py-1 rounded-full ease-in-out delay-300 ${
              !hoverState
                ? "text-(--primary-text--color) border-2"
                : priority == "high"
                ? "bg-(--card-priority--color-high)"
                : priority == "medium"
                ? "bg-(--card-priority--color-medium)"
                : "bg-(--card-priority--color-low)"
            } `}
          >
            {priority == "high"
              ? "High"
              : priority == "medium"
              ? "Medium"
              : "Low"}
          </p>
        </div>
      </div>

      {/* ----------------------------------------------------------------------- 
      Icons 
      -----------------------------------------------------------------------*/}
      <div className="flex flex-row justify-between items-center space-x-5 px-6 py-3">
        <div
          className={`flex justify-center font-bold items-center h-11 w-11 p-3 rounded-full text-(--primary-dark--text-color) ease-in-out delay-300
                                ${
                                  !hoverState
                                    ? "text-(--primary-text--color) border-2"
                                    : priority == "high"
                                    ? "bg-(--card-priority--color-high)"
                                    : priority == "medium"
                                    ? "bg-(--card-priority--color-medium)"
                                    : "bg-(--card-priority--color-low)"
                                }`}
        >
          {user}
        </div>

        {/*-----------------------------------------------------------------------
          Comments and attachments 
          -----------------------------------------------------------------------*/}
        <div className="flex flex-row gap-x-6">
          <div className="flex flex-row gap-x-2">
            <button className="text-gray-500">{messageIcon}</button>
            <div className="text-lg text-(--secondary-text--color)">4</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardUI;
