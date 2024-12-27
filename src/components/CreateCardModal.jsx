import React, { useState } from "react";
import { closeIcon } from "../data/icons";
import { priorities } from "../data/tasks";
import toast from "react-hot-toast";
import axios from "axios";
import { server } from "../main";

const CreateCardModal = ({ hideModal, columnId }) => {
  /**
   * @Hook: setTitle. setShortDescription, setAssignedTo. setPriority, updateDueDate
   * Used to set title, short desc, assigned to, priority, due date of new card on the modal
   */
  const [title, setTitle] = useState("");
  const [shortDescription, setShortDescription] = useState("");
  const [assignedTo, setAssignedTo] = useState();
  const [priority, setPriority] = useState();
  const [dueDate, setDueDate] = useState();

  /**
   * @Function: handleCreateCard
   * Used to create a new card with new values
   */
  const handleCreateCard = async (event) => {
    event.preventDefault();
    try {
      const { data } = await axios.post(
        `${server}/cards/createCard`,
        {
          name: title,
          shortDescription: shortDescription,
          priority: parseInt(priority.slice(0, 1)),
          state: columnId,
          dueDate: dueDate,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );

      toast.success(data.message);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

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
        <form
          className="flex flex-col justify-center gap-y-10"
          onSubmit={handleCreateCard}
        >
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
                    onChange={(event) => setTitle(event.target.value)}
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
                    onChange={(event) =>
                      setShortDescription(event.target.value)
                    }
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
                    id="newAssignedTo"
                    className={formStyle}
                    onChange={(event) => setAssignedTo(event.target.value)}
                  >
                    <option>Tejas</option>
                    <option>Abhinav</option>
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
                    onChange={(event) => setPriority(event.target.value)}
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
                    onChange={(event) => setDueDate(event.target.value)}
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
