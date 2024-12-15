import React, { useContext } from "react";
import { Context } from "../main";

const Profile = () => {
  const { isAuthenticated, user } = useContext(Context);
  return (
    <div className="flex h-fit mt-60 items-center justify-center">
      <div className="flex flex-col gap-y-10 w-1/3 bg-[color:var(--card-bg--color)] shadow-xl rounded-lg text-[color:var(--primary-text--color)] text-xl pb-10">
        <div className="text-center text-3xl font-semibold pt-3">
          Your profile
        </div>
        <div className="flex justify-center items-center text-center ">
          <div className="flex justify-center items-center p-10 rounded-full w-24 h-24 font-bold text-center bg-[color:var(--card-priority--color-high)]">
            TD
          </div>
        </div>
        <div className="grid grid-cols-2 gap-x-1 gap-y-5 px-3">
          <div className="px-10 py-2 text-2xl">Name:</div>
          <div className="px-10 py-2 text-2xl border-b-2 border-b-[color:var(--secondary-text--color)]">
            {user.name}
          </div>
          <div className="px-10 py-2 text-2xl">Email:</div>
          <div className="px-10 py-2 text-2xl border-b-2 border-b-[color:var(--secondary-text--color)]">
            {user.email}
          </div>
          <div className="px-10 py-2 text-2xl">Joined us on:</div>
          <div className="px-10 py-2 text-2xl border-b-2 border-b-[color:var(--secondary-text--color)]">
            {user.createdAt}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
