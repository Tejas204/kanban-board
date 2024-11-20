import React, { useEffect } from "react";
import { useState } from "react";

const NewStateCardModal = ({
  showModal,
  addState,
  hideModal,
  updateDeleteCard,
}) => {
  /**
   * @Icon: Set close icon
   */
  const closeIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="3"
      stroke="black"
      class="size-8"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M6 18 18 6M6 6l12 12"
      />
    </svg>
  );
  /**
   * If user wants to add card
   */
  if (showModal) {
    return (
      <div
        className={`z-10 h-screen w-screen flex justify-center mx-auto rounded absolute ${
          showModal ? "visible" : "hidden"
        }`}
      >
        {/* Modal */}
        <div className="flex flex-col border-2 w-2/5 h-fit  mt-40 rounded-md px-10 py-4 gap-y-8 backdrop-blur-sm bg-[color:var(--background-white)]">
          {/* Title */}
          <div className="flex flex-row justify-between">
            <p className="text-3xl font-semibold text-[color:var(--board-bg--color)]">
              Create a card
            </p>
            <button onClick={hideModal}>{closeIcon}</button>
          </div>

          {/* Form */}
          <div className="flex flex-col">
            <form className="flex flex-col justify-center gap-y-10">
              <table>
                <tbody>
                  <tr>
                    <td className="text-xl font-semibold text-[color:var(--board-bg--color)]">
                      Title
                    </td>
                    <td>
                      <input
                        type="text"
                        placeholder="Create a new API"
                        className={formStyle}
                      ></input>
                    </td>
                  </tr>
                  <tr>
                    <td className="text-xl font-semibold text-[color:var(--board-bg--color)]">
                      Short Description
                    </td>
                    <td>
                      <input
                        type="text"
                        placeholder="The API should make a GET call"
                        className={formStyle}
                      ></input>
                    </td>
                  </tr>
                  <tr>
                    <td className="text-xl font-semibold text-[color:var(--board-bg--color)]">
                      Assigned to
                    </td>
                    <td>
                      <select
                        name="newCardPriority"
                        id="newCardPriority"
                        className={formStyle}
                      >
                        <option value="priority">Tejas</option>
                      </select>
                    </td>
                  </tr>
                  <tr>
                    <td className="text-xl font-semibold text-[color:var(--board-bg--color)]">
                      Priority
                    </td>
                    <td>
                      <select
                        name="newCardPriority"
                        id="newCardPriority"
                        className={formStyle}
                      >
                        <option value="priority">Priority</option>
                      </select>
                    </td>
                  </tr>
                  <tr>
                    <td className="text-xl font-semibold text-[color:var(--board-bg--color)]">
                      Short Description
                    </td>
                    <td>
                      <input
                        type="date"
                        id="dueDate"
                        name="dueDate"
                        className={formStyle}
                      ></input>
                    </td>
                  </tr>
                </tbody>
              </table>

              <div className="flex flex-row justify-start gap-x-10">
                <button
                  type="submit"
                  className="p-4 w-1/4 bg-[color:var(--background-white)] text-[color:var(--board-bg--color)] border-4 border-[color:var(--board-bg--color)] text-lg font-bold rounded-md hover:ring-4 ring-[color:var(--card-bg--color)] ring-offset-4 ring-offset-[color:var(--background-white)] transition delay-150 ease-in-out"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="p-4 w-1/4 bg-[color:var(--button-bg--color)] text-[color:var(--button-text--color)] text-lg font-bold rounded-md hover:ring-4 ring-[color:var(--button-bg--color)] ring-offset-4 ring-offset-[color:var(--background-white)] transition delay-150 ease-in-out"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  } else if (addState) {
    /**
     * If user wants to add state
     */
    return (
      <div
        className={`z-10 h-screen w-screen flex justify-center mx-auto rounded absolute ${
          addState ? "visible" : "hidden"
        }`}
      >
        {/* Modal */}
        <div className="flex flex-col border-2 w-2/5 h-fit  mt-40 rounded-md px-10 py-4 gap-y-8 backdrop-blur-sm bg-[color:var(--background-white)]">
          {/* Title */}
          <div className="flex flex-row justify-between">
            <p className="text-3xl font-semibold text-[color:var(--board-bg--color)]">
              Create a new state
            </p>
            <button onClick={hideModal}>{closeIcon}</button>
          </div>

          {/* Add state */}
          <div className="flex flex-col">
            <form className="flex flex-col justify-center gap-y-10">
              <table>
                <tbody>
                  <tr>
                    <td className="text-xl font-semibold text-[color:var(--board-bg--color)]">
                      Add state:
                    </td>
                    <td>
                      <input
                        type="text"
                        placeholder="Backlog"
                        className={formStyle}
                      ></input>
                    </td>
                  </tr>
                </tbody>
              </table>
            </form>
          </div>

          {/* Buttons */}
          <div className="flex flex-row justify-start gap-x-10">
            <button
              type="submit"
              className="p-4 w-1/4 bg-[color:var(--background-white)] text-[color:var(--board-bg--color)] border-4 border-[color:var(--board-bg--color)] text-lg font-bold rounded-md hover:ring-4 ring-[color:var(--card-bg--color)] ring-offset-4 ring-offset-[color:var(--background-white)] transition delay-150 ease-in-out"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="p-4 w-1/4 bg-[color:var(--button-bg--color)] text-[color:var(--button-text--color)] text-lg font-bold rounded-md hover:ring-4 ring-[color:var(--button-bg--color)] ring-offset-4 ring-offset-[color:var(--background-white)] transition delay-150 ease-in-out"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    );
  } else if (updateDeleteCard) {
    return (
      <div
        className={`z-10 h-screen w-screen flex justify-center mx-auto rounded absolute`}
      >
        {/* Modal */}
        <div className="flex flex-col border-2 w-2/5 h-fit  mt-40 rounded-md px-10 py-4 gap-y-8 backdrop-blur-sm bg-[color:var(--background-white)]">
          {/* Title */}
          <div className="flex flex-row justify-between">
            <p className="text-3xl font-semibold text-[color:var(--board-bg--color)]">
              {updateDeleteCard.action === "update"
                ? "Update Card"
                : "Do you want to delete this card?"}
            </p>
            <button onClick={hideModal}>{closeIcon}</button>
          </div>

          {/* Form */}
          <div className="flex flex-col">
            <form className="flex flex-col justify-center gap-y-10">
              <table>
                <tbody>
                  <tr>
                    <td className="text-xl font-semibold text-[color:var(--board-bg--color)]">
                      Title
                    </td>
                    <td>
                      <input
                        type="text"
                        placeholder="Create a new API"
                        className={formStyle}
                        value={updateDeleteCard.title}
                      ></input>
                    </td>
                  </tr>
                  <tr>
                    <td className="text-xl font-semibold text-[color:var(--board-bg--color)]">
                      Short Description
                    </td>
                    <td>
                      <input
                        type="text"
                        placeholder="The API should make a GET call"
                        className={formStyle}
                        value={updateDeleteCard.short_description}
                      ></input>
                    </td>
                  </tr>
                  <tr>
                    <td className="text-xl font-semibold text-[color:var(--board-bg--color)]">
                      Assigned to
                    </td>
                    <td>
                      <select
                        name="newCardPriority"
                        id="newCardPriority"
                        className={formStyle}
                      >
                        <option value="priority">Tejas</option>
                      </select>
                    </td>
                  </tr>
                  <tr>
                    <td className="text-xl font-semibold text-[color:var(--board-bg--color)]">
                      Priority
                    </td>
                    <td>
                      <select
                        name="newCardPriority"
                        id="newCardPriority"
                        className={formStyle}
                      >
                        <option value="priority">Priority</option>
                      </select>
                    </td>
                  </tr>
                  <tr>
                    <td className="text-xl font-semibold text-[color:var(--board-bg--color)]">
                      Short Description
                    </td>
                    <td>
                      <input
                        type="date"
                        id="dueDate"
                        name="dueDate"
                        className={formStyle}
                      ></input>
                    </td>
                  </tr>
                </tbody>
              </table>

              <div className="flex flex-row justify-start gap-x-10">
                <button
                  type="submit"
                  className="p-4 w-1/4 bg-[color:var(--background-white)] text-[color:var(--board-bg--color)] border-4 border-[color:var(--board-bg--color)] text-lg font-bold rounded-md hover:ring-4 ring-[color:var(--card-bg--color)] ring-offset-4 ring-offset-[color:var(--background-white)] transition delay-150 ease-in-out"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className={`p-4 w-1/4 ${
                    updateDeleteCard.action === "update"
                      ? "bg-[color:var(--button-bg--color)]"
                      : "bg-[color:var(--card-priority--color-high)]"
                  } text-[color:var(--button-text--color)] text-lg font-bold rounded-md hover:ring-4 ${
                    updateDeleteCard.action === "update"
                      ? "ring-[color:var(--button-bg--color)]"
                      : "ring-[color:var(--card-priority--color-high)]"
                  } ring-offset-4 ring-offset-[color:var(--background-white)] transition delay-150 ease-in-out`}
                >
                  {updateDeleteCard.action === "update" ? "Update" : "Delete"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
};

const formStyle = `p-4 w-full border-[0.15rem] border-[color:var(--secondary-text--color)] text-lg rounded-md mb-2 bg-[color:var(--background-white)] text-[color:var(--card-bg--color)]`;

export default NewStateCardModal;
