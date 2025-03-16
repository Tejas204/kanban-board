import React from "react";

const KanbanBoardSelectorModal = () => {
  return (
    <div className="flex flex-col border-2 w-2/5 h-3/5 overflow-y-auto mt-40 rounded-md px-10 py-4 gap-y-8 backdrop-blur-sm bg-[color:var(--background-white)] no-scrollbar">
      {/* Title */}
      <div className="flex flex-row justify-between">
        <p className="text-3xl font-semibold text-[color:var(--board-bg--color)]">
          {updateDeleteCard.action === "update"
            ? "Update Card"
            : updateDeleteCard.action === "view"
            ? "Card details"
            : "Do you want to delete this card?"}
        </p>
        <button onClick={hideModal}>{closeIcon}</button>
      </div>

      {/* Form */}
      <div className="flex flex-col">
        <form
          className="flex flex-col justify-center gap-y-10"
          onSubmit={handleUpdateDeleteCard}
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
                    className={`p-4 w-full border-[0.15rem] ${
                      updateDeleteCard.action == "delete"
                        ? "border-[color:var(--field-disabled--color)] text-[color:var(--text-disabled--color)] cursor-not-allowed"
                        : "border-[color:var(--secondary-text--color)] text-[color:var(--card-bg--color)]"
                    } bg-[color:var(--background-white)] text-lg rounded-md mb-2`}
                    value={title}
                    onChange={(event) => setTitle(event.target.value)}
                    disabled={
                      action === "delete"
                        ? true
                        : action === "view"
                        ? true
                        : false
                    }
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
                    disabled={
                      action === "delete"
                        ? true
                        : action === "view"
                        ? true
                        : false
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
                    id="newCardPriority"
                    className={`p-4 w-full border-[0.15rem] ${
                      updateDeleteCard.action == "delete"
                        ? "border-[color:var(--field-disabled--color)] text-[color:var(--text-disabled--color)] cursor-not-allowed"
                        : "border-[color:var(--secondary-text--color)] text-[color:var(--card-bg--color)]"
                    } bg-[color:var(--background-white)] text-lg rounded-md mb-2`}
                    onChange={(event) => setAssignedTo(event.target.value)}
                    value={getInitials(assignedTo).userName}
                    disabled={
                      action === "delete"
                        ? true
                        : action === "view"
                        ? true
                        : false
                    }
                  >
                    {allUsers.map((user) => {
                      return <option value={user._id}>{user.name}</option>;
                    })}
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
                    disabled={
                      action === "delete"
                        ? true
                        : action === "view"
                        ? true
                        : false
                    }
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
                    disabled={
                      action === "delete"
                        ? true
                        : action === "view"
                        ? true
                        : false
                    }
                    onChange={(event) => updateDueDate(event.target.value)}
                  ></input>
                </td>
              </tr>
            </tbody>
          </table>

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
              className={`p-4 w-1/4 ${
                updateDeleteCard.action === "view" ? "hidden" : "visible"
              } ${
                updateDeleteCard.action === "update"
                  ? "bg-[color:var(--button-bg--color)]"
                  : "bg-[color:var(--card-priority--color-high)]"
              } text-white text-xl font-bold rounded-md hover:ring-4 ${
                updateDeleteCard.action === "update"
                  ? "ring-[color:var(--button-bg--color)]"
                  : "ring-[color:var(--card-priority--color-high)]"
              } ring-offset-4 ring-offset-[color:var(--background-white)] transition delay-150 ease-in-out`}
            >
              {updateDeleteCard.action === "update"
                ? "Update"
                : updateDeleteCard.action === "delete"
                ? "Delete"
                : "View"}
            </button>
          </div>
        </form>
      </div>

      {/* Attachment section */}
      <Attachments action={updateDeleteCard.action}></Attachments>

      {/* Comments Sections */}
      <Comments
        comments={comments}
        cardId={updateDeleteCard.id}
        action={updateDeleteCard.action}
      ></Comments>
    </div>
  );
};

export default KanbanBoardSelectorModal;
