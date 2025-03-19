import React, { useState } from "react";
import { closeIcon } from "../data/icons";

const TeamSelectorModal = ({ hideModal }) => {
  /**
   * @Hook: setSearchValue
   * Used to set the search value from the input field
   */
  const [searchValue, setSearchValue] = useState("");

  /**
   * @Hook: setTeamModification
   * Used to set the value to add or remove team-mates
   */
  const [teamModification, setTeamModification] = useState("addTeamMembers");

  return (
    <div className="flex flex-col border-2 w-2/5 h-2/5 overflow-y-auto mt-40 rounded-md px-10 py-4 gap-y-8 backdrop-blur-sm bg-[color:var(--background-white)] no-scrollbar">
      {/* Title */}
      <div className="flex flex-row justify-between">
        <p className="text-3xl font-semibold text-[color:var(--board-bg--color)]">
          Modify your team
        </p>
        <button onClick={hideModal}>{closeIcon}</button>
      </div>

      {/* Tabs */}
      <div className="flex flex-col">
        <div className="flex flex-row gap-x-10 text-xl text-[color:var(--board-bg--color)] border-b-2">
          <button
            onClick={() => setTeamModification("addTeamMembers")}
            className={`${
              teamModification === "addTeamMembers"
                ? "shadow-[inset_0_-4px_rgba(145,90,255)]"
                : ""
            } pb-4`}
          >
            Add team members
          </button>
          <button
            onClick={() => setTeamModification("removeTeamMembers")}
            className={`${
              teamModification === "removeTeamMembers"
                ? "shadow-[inset_0_-4px_rgba(145,90,255)]"
                : ""
            } pb-4`}
          >
            Remove team members
          </button>
        </div>
      </div>

      <div className="flex flex-col gap-y-4">
        <p className="text-lg text-[color:var(--board-bg--color)]">
          {teamModification === "addTeamMembers"
            ? "let your team grow by adding new team members"
            : "Remove team members"}
        </p>
        <form>
          <select
            className={`${
              boardSelection == "created" ? "visible" : "hidden"
            } p-4 w-full border-[0.15rem] border-[color:var(--secondary-text--color)] text-[color:var(--card-bg--color)] bg-[color:var(--background-white)] text-lg rounded-md mb-2`}
          >
            <option>Board 1</option>
            <option>Board 2</option>
            <option>Board 3</option>
          </select>

          <select
            className={`${
              boardSelection == "shared" ? "visible" : "hidden"
            } p-4 w-full border-[0.15rem] border-[color:var(--secondary-text--color)] text-[color:var(--card-bg--color)] bg-[color:var(--background-white)] text-lg rounded-md mb-2`}
          >
            <option>Board 4</option>
            <option>Board 5</option>
            <option>Board 6</option>
          </select>

          {/* <input
              placeholder="Search using email id"
              value={searchValue}
              onChange={(event) => setSearchValue(event.target.value)}
              className={`${
                boardSelection == "shared" ? "visible" : "hidden"
              } p-4 w-full border-[0.15rem] border-[color:var(--secondary-text--color)] text-[color:var(--card-bg--color)] bg-[color:var(--background-white)] text-lg rounded-md mb-2`}
            ></input>
            <div
              className={`${
                boardSelection === "shared" ? "visible" : "hidden"
              } absolute bg-gray-200  w-full px-4`}
            >
              <ul className="text-black">
                {userList.map((user) => {
                  return <li key={user.id}>{user.name}</li>;
                })}
              </ul>
            </div> */}
        </form>
      </div>

      {/* Form */}
      <div className="flex flex-col">
        <form className="flex flex-col justify-center gap-y-10">
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
              className={`p-4 w-1/4 bg-[color:var(--user-icon--bg-color--lavender)] text-white ring-offset-4 ring-offset-[color:var(--background-white)] hover:ring-4 ring-[color:var(--user-icon--bg-color--lavender)] text-xl font-bold rounded-md transition delay-150 ease-in-out`}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TeamSelectorModal;
