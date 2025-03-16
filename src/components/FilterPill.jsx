import reat, { useContext } from "react";
import { kanbanBoardIcon, teamsIcon, userProfileIcon } from "../data/icons";
import { Context } from "../main";

const FilterPill = () => {
  /**
   * @Context: Global context
   * Set context variables
   */
  const { setPillOption } = useContext(Context);

  /**
   * @Function: handlePillOption
   * Use to set the pill option after clicking the buttons
   */
  const handlePillOption = (buttonId) => {
    setPillOption(
      buttonId === "boardSelection"
        ? "boardSelection"
        : buttonId === "teamsSelection"
        ? "teamsSelection"
        : "profileSelection"
    );
  };

  return (
    <div className="flex flex-col gap-y-14 h-fit z-10 absolute left-3 top-[40%] rounded-full w-fit bg-[color:var(--user-icon--bg-color--lavender)] p-4">
      <div>
        <button
          id="boardSelection"
          onClick={(event) => handlePillOption(event.target.id)}
        >
          {kanbanBoardIcon}
        </button>
      </div>
      <div>
        <button id="teamsSelection">{teamsIcon}</button>
      </div>
      <div>
        <button id="profileSelection">{userProfileIcon}</button>
      </div>
    </div>
  );
};

export default FilterPill;
