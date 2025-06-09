import React, { useContext } from "react";
import { closeIcon } from "../data/icons";
import axios from "axios";
import { Context, server } from "../main";
import toast from "react-hot-toast";

const DeleteStateModal = ({ hideModal, columnId }) => {
  const { setRefresh } = useContext(Context);

  /**-----------------------------------------------------------------------
   * @Function: handleDeleteState
   * Makes a DEL call to the server to delete the state and coresponding calls
   -----------------------------------------------------------------------*/
  const handleDeleteState = async (event) => {
    event.preventDefault();

    try {
      const { data } = await axios.delete(`${server}/states/${columnId}`, {
        withCredentials: true,
      });
      setRefresh((prev) => !prev);
      toast.success(data.message);
      hideModal(true);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <div className="flex flex-col border-2 w-2/5 h-fit  mt-40 rounded-md px-10 py-4 gap-y-8 backdrop-blur-xs bg-(--background-white)">
      {/* Title */}
      <div className="flex flex-row justify-between">
        <p className="text-3xl font-semibold text-(--board-bg--color)">
          Do you want to delete this state?
        </p>
        <button onClick={hideModal}>{closeIcon}</button>
      </div>

      {/* Form */}
      <div className="flex flex-col">
        <form
          className="flex flex-col justify-center gap-y-10"
          onSubmit={handleDeleteState}
        >
          <div className="flex flex-col py-7 items-start justify-start">
            <p className="text-(--board-bg--color) font-medium text-xl">
              If you delete this state, then all cards belonging to this state
              will also be deleted. Do you want to proceed?
            </p>
          </div>

          <div className="flex flex-row justify-start gap-x-10">
            <button
              type="button"
              onClick={hideModal}
              className="p-4 w-1/4 bg-(--background-white) text-(--board-bg--color) border-4 border-(--board-bg--color) text-xl font-bold rounded-md hover:ring-4 ring-(--card-bg--color) ring-offset-4 ring-offset-(--background-white) transition delay-150 ease-in-out"
            >
              Cancel
            </button>
            <button
              type="submit"
              className={`p-4 w-1/4 bg-(--card-priority--color-high) text-(--button-text--color) text-xl font-bold rounded-md hover:ring-4 
                    ring-(--card-priority--color-high) ring-offset-4 ring-offset-(--background-white) transition delay-150 ease-in-out`}
            >
              Delete
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

const formStyle = `p-4 w-full border-[0.15rem] border-(--secondary-text--color) text-lg rounded-md mb-2 bg-(--background-white) text-(--card-bg--color)`;

export default DeleteStateModal;
