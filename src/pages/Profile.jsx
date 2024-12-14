import React, { useContext } from "react";
import { Context } from "../main";

const Profile = () => {
  const { isAuthenticated, user } = useContext(Context);
  return <div></div>;
};

export default Profile;
