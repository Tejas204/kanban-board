import React from "react";
import { closeIcon } from "../data/icons";
import { priorities } from "../data/tasks";

const CreateCardModal = ({ hideModal }) => {
  return (
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
                    {priorities.map((priority, key) => {
                      return (
                        <option key={priority.id}>
                          {priority.id} - {priority.name}
                        </option>
                      );
                    })}
                  </select>
                </td>
              </tr>
              <tr>
                <td className="text-xl font-semibold text-[color:var(--board-bg--color)]">
                  Due Date
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
              className="p-4 w-1/4 bg-[color:var(--background-white)] text-[color:var(--board-bg--color)] border-4 border-[color:var(--board-bg--color)] text-xl font-bold rounded-md hover:ring-4 ring-[color:var(--card-bg--color)] ring-offset-4 ring-offset-[color:var(--background-white)] transition delay-150 ease-in-out"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="p-4 w-1/4 bg-[color:var(--button-bg--color)] text-[color:var(--button-text--color)] text-xl font-bold rounded-md hover:ring-4 ring-[color:var(--button-bg--color)] ring-offset-4 ring-offset-[color:var(--background-white)] transition delay-150 ease-in-out"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

const formStyle = `p-4 w-full border-[0.15rem] border-[color:var(--secondary-text--color)] text-lg rounded-md mb-2 bg-[color:var(--background-white)] text-[color:var(--card-bg--color)]`;

export default CreateCardModal;
