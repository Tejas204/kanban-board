import { useContext } from "react";
import { Context } from "../main";

/**
 * @Function: getIntials
 * @Input: <string> assigned to of the card
 * @Returns: <string> Initials
 */
export const getInitials = (assignee) => {
  const { allUsers } = useContext(Context);
  const userObj = allUsers.filter((user) => user._id == assignee);
  const nameArray = userObj[0].name.split(" ");

  var nameObj = {
    initials:
      nameArray[0].slice(0, 1) + nameArray[nameArray.length - 1].slice(0, 1),
    userName: userObj[0].name,
  };
  return nameObj;
};
