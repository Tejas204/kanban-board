import reat from "react";
import { kanbanBoardIcon, teamsIcon, userProfileIcon } from "../data/icons";

const FilterPill = () => {
  return (
    <div className="flex flex-col gap-y-14 h-fit z-10 absolute left-3 top-[40%] rounded-full w-fit bg-[color:var(--user-icon--bg-color--lavender)] p-4">
      <div>
        <button>{kanbanBoardIcon}</button>
      </div>
      <div>
        <button>{teamsIcon}</button>
      </div>
      <div>
        <button>{userProfileIcon}</button>
      </div>
    </div>
  );
};

export default FilterPill;
