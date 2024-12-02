import React, { useState } from "react";
import { closeIcon } from "../data/icons";
import { priorities } from "../data/tasks";

const UpdateDeleteCardModal = ({ updateDeleteCard, hideModal }) => {
  /**
   * @Hook: setTitle
   * Used to set title of card on the modal
   */
  const [title, setTitle] = useState(updateDeleteCard.title);

  /**
   * @Hook: setShortDescription
   * Used to set short description of card on the modal
   */
  const [shortDescription, setShortDescription] = useState(
    updateDeleteCard.short_description
  );

  /**
   * @Hook: setAssignedTo
   * Used to set assignee of card on the modal
   */
  const [assignedTo, setAssignedTo] = useState(updateDeleteCard.assigned_to);

  /**
   * @Hook: setPriority
   * Used to set priority of card on the modal
   */
  const [priority, setPriority] = useState(updateDeleteCard.priority);

  /**
   * @Hook: setAction
   * Set the action; update or delete
   */
  const [action, setAction] = useState(updateDeleteCard.action);

  /**
   * @Hook: updateDueDate
   * Update the due date when user wants to modify due date
   */
  const [dueDate, updateDueDate] = useState(updateDeleteCard.due_date);

  const handleDateChange = (event) => {
    if (new Date(event.target.value) >= new Date()) {
      console.log(event.target.value);
      //updateDueDate(event.target.value);
    }
  };

  return (
    <div className="flex flex-col border-2 w-2/5 h-fit mt-40 rounded-md px-10 py-4 gap-y-8 backdrop-blur-sm bg-[color:var(--background-white)]">
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
                    className={`p-4 w-full border-[0.15rem] ${
                      updateDeleteCard.action == "delete"
                        ? "border-[color:var(--field-disabled--color)] text-[color:var(--text-disabled--color)] cursor-not-allowed"
                        : "border-[color:var(--secondary-text--color)] text-[color:var(--card-bg--color)]"
                    } bg-[color:var(--background-white)] text-lg rounded-md mb-2`}
                    value={title}
                    onChange={(event) => setTitle(event.target.value)}
                    disabled={action === "delete" ? true : false}
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
                    className={`p-4 w-full border-[0.15rem] ${
                      updateDeleteCard.action == "delete"
                        ? "border-[color:var(--field-disabled--color)] text-[color:var(--text-disabled--color)] cursor-not-allowed"
                        : "border-[color:var(--secondary-text--color)] text-[color:var(--card-bg--color)]"
                    } bg-[color:var(--background-white)] text-lg rounded-md mb-2`}
                    value={shortDescription}
                    onChange={(event) =>
                      setShortDescription(event.target.value)
                    }
                    disabled={action === "delete" ? true : false}
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
                    className={`p-4 w-full border-[0.15rem] ${
                      updateDeleteCard.action == "delete"
                        ? "border-[color:var(--field-disabled--color)] text-[color:var(--text-disabled--color)] cursor-not-allowed"
                        : "border-[color:var(--secondary-text--color)] text-[color:var(--card-bg--color)]"
                    } bg-[color:var(--background-white)] text-lg rounded-md mb-2`}
                    onChange={(event) => setAssignedTo(event.target.value)}
                    disabled={action === "delete" ? true : false}
                  >
                    <option value={assignedTo}>{assignedTo}</option>
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
                    className={`p-4 w-full border-[0.15rem] ${
                      updateDeleteCard.action == "delete"
                        ? "border-[color:var(--field-disabled--color)] text-[color:var(--text-disabled--color)] cursor-not-allowed"
                        : "border-[color:var(--secondary-text--color)] text-[color:var(--card-bg--color)]"
                    } bg-[color:var(--background-white)] text-lg rounded-md mb-2`}
                    onChange={(event) => setPriority(event.target.value)}
                    disabled={action === "delete" ? true : false}
                  >
                    {priorities.map((priorityValue) => {
                      return (
                        <option
                          key={priorityValue.id}
                          selected={priorityValue.id == priority ? true : false}
                        >
                          {priorityValue.id} - {priorityValue.name}
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
                    className={`p-4 w-full border-[0.15rem] ${
                      updateDeleteCard.action == "delete"
                        ? "border-[color:var(--field-disabled--color)] text-[color:var(--text-disabled--color)] cursor-not-allowed"
                        : "border-[color:var(--secondary-text--color)] text-[color:var(--card-bg--color)]"
                    } bg-[color:var(--background-white)] text-lg rounded-md mb-2`}
                    name="dueDate"
                    id="dueDate"
                    value={dueDate}
                    disabled={action === "delete" ? true : false}
                    onChange={(event) => handleDateChange(event)}
                  ></input>
                </td>
              </tr>
            </tbody>
          </table>

          <div className="flex flex-row justify-start gap-x-10">
            <button
              type="button"
              onClick={hideModal}
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
  );
};

export default UpdateDeleteCardModal;
