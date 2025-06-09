import React, { useContext, useState } from "react";
import { closeIcon } from "../data/icons";
import { Context, server } from "../main";
import axios from "axios";
import toast from "react-hot-toast";

const AddStateModal = ({ hideModal }) => {
  /**-----------------------------------------------------------------------
   * @Hooks: setStateName, useContext
   * Set the name of the new state created by current logged in user
   * Set the context for component to use
   -----------------------------------------------------------------------*/
  const { user, setRefresh, cards } = useContext(Context);
  const [stateName, setStateName] = useState();

  /**-----------------------------------------------------------------------
   * @Function: createNewState
   * Create new state when form is submitted
   -----------------------------------------------------------------------*/
  const createNewState = async (event) => {
    event.preventDefault();

    try {
      const { data } = await axios.post(
        `${server}/states/createState`,
        {
          name: stateName,
          user: user._id,
          index: cards.length,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      setRefresh((prev) => !prev);
      toast.success(data.message);
      hideModal(false);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <div className="flex flex-col border-2 w-2/5 h-fit  mt-40 rounded-md px-10 py-4 gap-y-8 backdrop-blur-xs bg-(--background-white)">
      {/* Title */}
      <div className="flex flex-row justify-between">
        <p className="text-3xl font-semibold text-(--board-bg--color)">
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
                <td className="text-xl font-semibold text-(--board-bg--color)">
                  Add state:
                </td>
                <td>
                  <input
                    type="text"
                    placeholder="Backlog"
                    className={formStyle}
                    onChange={(event) => setStateName(event.target.value)}
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
          onClick={hideModal}
          type="submit"
          className="p-4 w-1/4 bg-(--background-white) text-(--board-bg--color) border-4 border-(--board-bg--color) text-xl font-bold rounded-md hover:ring-4 ring-(--card-bg--color) ring-offset-4 ring-offset-(--background-white) transition delay-150 ease-in-out"
        >
          Cancel
        </button>
        <button
          onClick={createNewState}
          type="submit"
          className="p-4 w-1/4 bg-(--button-bg--color) text-(--button-text--color) text-xl font-bold rounded-md hover:ring-4 ring-(--button-bg--color) ring-offset-4 ring-offset-(--background-white) transition delay-150 ease-in-out"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

const formStyle = `p-4 w-full border-[0.15rem] border-(--secondary-text--color) text-lg rounded-md mb-2 bg-(--background-white) text-(--card-bg--color)`;

export default AddStateModal;
