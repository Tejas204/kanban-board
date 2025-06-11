import react from "react";
import { messageIcon } from "../data/icons";

const CardUI = () => {
  return (
    <div className="flex flex-row">
      <div
        className={`flex flex-col w-[430px] shadow-2xl rounded-lg  bg-(--card-bg--color)`}
      >
        <div
          className={`flex flex-col px-4 py-4 border-b-2 border-b-gray-600 gap-y-2`}
        >
          {/* Primary details */}
          <div className="flex flex-row justify-between">
            {/* Title and assignment */}
            <div className="flex flex-col">
              <p className="text-xl text-(--primary-text--color) font-semibold">
                Test
              </p>
              <p className="text-(--secondary-text--color) line-clamp-2">
                Test
              </p>
            </div>

            {/* Menu options */}
          </div>

          {/* Due date */}
          <div className="text-lg text-(--secondary-text--color) pb-1">
            Due by: 16/09/2025
          </div>

          {/* Priority */}
          <div className="text-(--primary-text--color) text-lg w-fit">
            <p
              className={`w-full overflow-hidden text-(--primary-dark--text-color) font-semibold text-ellipsis text-nowrap px-4 py-1 rounded-full bg-(--card-priority--color-high)`}
            >
              High
            </p>
          </div>
        </div>

        {/* Icons */}
        <div className="flex flex-row justify-between items-center space-x-5 px-6 py-3">
          <div
            className={`flex justify-center font-bold items-center h-11 w-11 p-3 rounded-full text-(--primary-dark--text-color)
                                bg-(--card-priority--color-high)`}
          >
            TD
          </div>

          {/* Comments and attachments */}
          <div className="flex flex-row gap-x-6">
            <div className="flex flex-row gap-x-2">
              <button className="text-gray-500">{messageIcon}</button>
              <div className="text-lg text-(--secondary-text--color)">4</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardUI;
