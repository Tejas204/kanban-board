import React, { useEffect, useState } from "react";
import { closeIcon } from "../data/icons";

const TeamSelectorModal = ({ hideModal }) => {
  /**-----------------------------------------------------------------------
   * @Hook: setSearchValue
   * Used to set the search value from the input field
   -----------------------------------------------------------------------*/
  const [searchValue, setSearchValue] = useState("");

  /**-----------------------------------------------------------------------
   * @Hook: setUserList
   * Used to set the array of users for searching
   -----------------------------------------------------------------------*/
  const [userList, setUserList] = useState([
    { id: 1, name: "Tejas" },
    { id: 2, name: "Omkar" },
    { id: 3, name: "Abhinav" },
    { id: 4, name: "Abhinav" },
    { id: 5, name: "Abhinav" },
  ]);
  const [originalUserList, setOriginalUserList] = useState([
    { id: 1, name: "Tejas" },
    { id: 2, name: "Omkar" },
    { id: 3, name: "Abhinav" },
    { id: 4, name: "Abhinav" },
    { id: 5, name: "Abhinav" },
  ]);

  /**-----------------------------------------------------------------------
   * @Hook: setSearchResultVisibility
   * Used to control visibility of search results
   * Displays when clicked on the input
   -----------------------------------------------------------------------*/
  const [searchResultVisibility, setSearchResultVisibility] = useState(false);

  /**-----------------------------------------------------------------------
   * @Hook: setTeamModification
   * Used to set the value to add or remove team-mates
   -----------------------------------------------------------------------*/
  const [teamModification, setTeamModification] = useState("addTeamMembers");

  /**-----------------------------------------------------------------------
   * @Hook: setSelectedUsers
   * Used to set which users have been selected
   -----------------------------------------------------------------------*/
  const [selectedUsers, setSelectedUsers] = useState([]);

  /**-----------------------------------------------------------------------
   * Test hook
   -----------------------------------------------------------------------*/
  const [testHook, setTestHook] = useState([]);

  /**-----------------------------------------------------------------------
   * @Hook: useEffect
   * Used to set the value of search results
   -----------------------------------------------------------------------*/
  useEffect(() => {
    if (searchValue == "") {
      setUserList(originalUserList);
    } else {
      setUserList(
        originalUserList.filter((user) =>
          user.name.toLowerCase().includes(searchValue.toLowerCase())
        )
      );
    }
  }, [searchValue]);

  /**-----------------------------------------------------------------------
   * @Function: handleSelectedUsers
   * @Params: event <Obj>; user <Obj>
   * @Returns: none
   * Sets the selected list of users using hooks
   -----------------------------------------------------------------------*/
  const handleSelectedUsers = (event, userId) => {
    event.preventDefault();

    setSelectedUsers((previousSelectedUsers) => {
      const user = userList.filter((u) => u.id == userId);
      return [...previousSelectedUsers, user];
    });
  };

  /**-----------------------------------------------------------------------
   * @Function: handleUserRemoval
   * @Params: event <obj>
   * @Returns: none
   * Calls the API to remove user access from a kanban board
   -----------------------------------------------------------------------*/
  const handleUserRemoval = (event) => {
    event.preventDefault();

    const checkedUsers = Array.from(event.target.removalUsers).map(
      (checkedUser) => [checkedUser.id, checkedUser.checked]
    );
  };

  return (
    <div className="flex flex-col border-2 w-2/5 h-1/2 overflow-y-auto mt-40 rounded-md px-10 py-4 gap-y-8 backdrop-blur-xs bg-(--background-white) scrollbar">
      {/* Title */}
      <div className="flex flex-row justify-between">
        <p className="text-3xl font-semibold text-(--board-bg--color)">
          Modify your team
        </p>
        <button onClick={hideModal}>{closeIcon}</button>
      </div>

      {/* Tabs */}
      <div className="flex flex-col">
        <div className="flex flex-row gap-x-10 text-xl text-(--board-bg--color) border-b-2">
          {/* Tab 1: Add new team members */}
          <button
            onClick={() => setTeamModification("addTeamMembers")}
            className={`${
              teamModification === "addTeamMembers"
                ? "shadow-[inset_0_-4px_rgba(145,90,255)] transition ease-in-out delay-100"
                : "text-gray-500"
            } pb-4`}
          >
            Add team members
          </button>

          {/* Tab 2: Delete team members */}
          <button
            onClick={() => setTeamModification("removeTeamMembers")}
            className={`${
              teamModification === "removeTeamMembers"
                ? "shadow-[inset_0_-4px_rgba(145,90,255)] transition ease-in-out delay-100"
                : "text-gray-500"
            } pb-4`}
          >
            Remove team members
          </button>
        </div>
      </div>

      {/* Team selection text */}
      <div className="flex flex-col gap-y-4">
        <p className="text-lg text-(--board-bg--color) transition ease-in-out delay-100">
          {teamModification === "addTeamMembers"
            ? "Let your team grow by adding new team members."
            : "Remove team members."}
        </p>
      </div>

      {/* Selected users appear here */}
      <div
        className={`grid grid-cols-4 gap-x-1 gap-y-2 ${
          teamModification === "addTeamMembers" ? "visible" : "hidden"
        }`}
      >
        <div className="flex flex-row gap-x-2 items-center px-2 py-1 rounded-full bg-gray-200 w-fit text-black">
          <p className="text-md">Tejas Dhopavkar</p>
          <button
            onClick={() => {
              alert("I can be removed");
            }}
          >
            {closeIcon}
          </button>
        </div>
      </div>

      {/* Search and add team members */}
      <form
        className={`${
          teamModification == "addTeamMembers" ? "visible" : "hidden"
        }`}
      >
        <input
          placeholder="Search using email id"
          value={searchValue}
          onChange={(event) => {
            setSearchValue(event.target.value);
            console.log(event.target.value);
          }}
          onClick={() => setSearchResultVisibility(!searchResultVisibility)}
          className={`p-4 w-full border-[0.15rem] border-(--secondary-text--color) text-(--card-bg--color) bg-(--background-white) text-lg rounded-md mb-2`}
        ></input>
        <div
          className={`${
            searchResultVisibility ? "visible" : "hidden"
          } fixed bg-(--background-white) border border-gray-300 rounded-lg shadow-md w-[90%] h-[25%] overflow-y-auto scrollbar scroll-smooth px-4 py-2`}
        >
          <ul className="text-black w-full">
            {userList.map((user) => {
              return (
                <li key={user.id}>
                  <button
                    onClick={(event) => handleSelectedUsers(event, user.id)}
                  >
                    {user.name}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>

        <div className={`flex flex-row justify-start gap-x-10 mt-10 `}>
          <button
            type="button"
            onClick={hideModal}
            className="p-4 w-1/4 bg-(--background-white) text-(--board-bg--color) border-4 
            border-(--board-bg--color) text-xl font-bold rounded-md hover:ring-4 ring-(--board-bg--color) 
            ring-offset-4 ring-offset-(--background-white) transition delay-150 ease-in-out"
          >
            Cancel
          </button>
          <button
            type="submit"
            className={`p-4 w-1/4 bg-(--user-icon--bg-color--lavender) ring-(--user-icon--bg-color--lavender) 
              text-white ring-offset-4 ring-offset-(--background-white) hover:ring-4 text-xl font-bold rounded-md transition delay-150 ease-in-out`}
          >
            Submit
          </button>
        </div>
      </form>

      {/* Team removal */}
      <form
        className={`${
          teamModification == "removeTeamMembers" ? "visible" : "hidden"
        }`}
        onSubmit={(event) => handleUserRemoval(event)}
      >
        <div className={`flex flex-col gap-y-1 items-start`}>
          {originalUserList.map((user) => {
            return (
              <div key={user.id} className="flex flex-row items-center gap-x-4">
                <input
                  type="checkbox"
                  name="removalUsers"
                  id={user.id}
                  value={user.name}
                  className="h-4 w-4 accent-(--user-icon--bg-color--lavender)"
                  // onChange={(event) => setTestHook(event.target.value)}
                ></input>
                <label className="text-(--board-bg--color) text-lg">
                  {user.name}
                </label>
              </div>
            );
          })}
        </div>

        <div className={`flex flex-row justify-start gap-x-10 mt-10`}>
          <button
            type="button"
            onClick={hideModal}
            className="p-4 w-1/4 bg-(--background-white) text-(--board-bg--color) border-4 border-(--board-bg--color) text-xl font-bold rounded-md hover:ring-4 ring-(--board-bg--color) ring-offset-4 ring-offset-(--background-white) transition delay-150 ease-in-out"
          >
            Cancel
          </button>
          <button
            type="submit"
            className={`p-4 w-1/4
            bg-(--card-priority--color-high) ring-(--card-priority--color-high)
            text-white ring-offset-4 ring-offset-(--background-white) hover:ring-4 text-xl 
            font-bold rounded-md transition delay-150 ease-in-out`}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default TeamSelectorModal;
