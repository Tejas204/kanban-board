import React, { useContext } from "react";
import { Context } from "../main";
import Loader from "../components/Loader";
import { getInitials } from "../utils/utilities";
import { emailIcon } from "../data/icons";

const Profile = () => {
  const { isAuthenticated, user, isLoading } = useContext(Context);
  console.log(user);

  return isLoading ? (
    <Loader />
  ) : (
    <div className="flex flex-col gap-y-4 items-center text-(--primary-text--color)">
      <div className="flex flex-row gap-x-28 p-10 mt-10 items-center bg-(--card-bg--color) w-[70%] rounded-lg shadow-xl">
        {/* profile image */}
        <div className="flex flex-col items-center justify-center gap-y-5">
          <div className="rounded-full border-2 p-14">
            <p className="text-4xl font-bold">TD</p>
          </div>
        </div>

        {/* Display name of the user */}
        <div className="text-3xl font-bold">Tejas Dhopavkar</div>

        {/* Display details
         * Email, User creation date
         * Address
         */}
        <div className="grid grid-cols-2 gap-x-4">
          <div className="col-span-1 text-xl space-y-4">
            <div className="flex flex-col">
              <div className="text-md">Email</div>
              <p className="font-semibold">tdhopavkar@test.com</p>
            </div>

            <div className="flex flex-col">
              <div className="text-md">Created on</div>
              <p className="font-semibold">tdhopavkar@test.com</p>
            </div>
          </div>

          <div className="col-span-1 text-xl">
            <div className="flex flex-col">
              <div className="text-md">Address</div>
              <p className="font-semibold">Bahnhofstraße 3, 66125, Dudweiler</p>
            </div>
          </div>
        </div>
      </div>

      {/* Grid for contacts and business information */}
      <div className="flex flex-row gap-x-5 w-[70%]">
        <div className="w-full p-10 rounded-lg shadow-lg bg-(--card-bg--color)">
          <p className="text-3xl font-bold">Your team members</p>
          <ul className="mt-4 text-xl space-y-6">
            <div className="flex flex-row gap-x-6">
              <div>{emailIcon}</div>
              <p>Tejas Dhopavkar</p>
            </div>
            <div className="flex flex-row gap-x-6">
              <div>{emailIcon}</div>
              <p>Tejas Dhopavkar</p>
            </div>
            <div className="flex flex-row gap-x-6">
              <div>{emailIcon}</div>
              <p>Tejas Dhopavkar</p>
            </div>
            <div className="flex flex-row gap-x-6">
              <div>{emailIcon}</div>
              <p>Tejas Dhopavkar</p>
            </div>
          </ul>
        </div>

        <div className="w-full p-10 rounded-lg shadow-lg bg-(--card-bg--color)">
          <p className="text-3xl font-bold">About</p>
          <ul className="mt-4 text-xl space-y-6">
            <div className="flex flex-col gap-x-6">
              <div className="text-md">Email</div>
              <p className="font-semibold">tdhopavkar@test.com</p>
            </div>
            <div className="flex flex-col gap-x-6">
              <div className="text-md">Business Phone</div>
              <p className="font-semibold">+91 1234567890</p>
            </div>
            <div className="flex flex-col gap-x-6">
              <div className="text-md">Personal Phone</div>
              <p className="font-semibold">+91 9876543210</p>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Profile;
