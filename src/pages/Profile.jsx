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
    // <div className="flex h-fit mt-60 items-center justify-center">
    //   <div className="flex flex-col gap-y-10 w-1/3 bg-[color:var(--card-bg--color)] shadow-xl rounded-lg text-[color:var(--primary-text--color)] text-xl pb-10">
    //     <div className="text-center text-3xl font-semibold pt-3">
    //       Your profile
    //     </div>
    //     <div className="flex justify-center items-center text-center ">
    //       <div className="flex justify-center items-center p-10 rounded-full w-24 h-24 font-bold text-center text-3xl bg-[color:var(--user-icon--bg-color--lavender)]">
    //         {getInitials(user._id).initials}
    //       </div>
    //     </div>
    //     <div className="grid grid-cols-2 gap-x-1 gap-y-5 px-3">
    //       <div className="px-10 py-2 text-2xl">Name:</div>
    //       <div className="px-10 py-2 text-2xl border-b-2 border-b-[color:var(--secondary-text--color)]">
    //         {user.name}
    //       </div>
    //       <div className="px-10 py-2 text-2xl">Email:</div>
    //       <div className="px-10 py-2 text-2xl border-b-2 border-b-[color:var(--secondary-text--color)]">
    //         {user.email}
    //       </div>
    //       <div className="px-10 py-2 text-2xl">Joined us on:</div>
    //       <div className="px-10 py-2 text-2xl border-b-2 border-b-[color:var(--secondary-text--color)]">
    //         {user.createdAt}
    //       </div>
    //     </div>
    //   </div>
    // </div>

    <div className="flex flex-col gap-y-4 items-center">
      <div className="flex flex-row gap-x-28 p-10 mt-10 items-center bg-[color:var(--card-bg--color)] w-[70%] rounded-lg shadow-xl">
        {/* profile image */}
        <div className="flex flex-col items-center justify-center gap-y-5">
          <div className="rounded-full border-2 p-14">
            <p className="text-4xl font-bold">TD</p>
          </div>

          {/* <form>
            <input id="profilePhoto" name="profilePhoto" type="file"></input>
          </form> */}
          {/* <button
            type="button"
            className="px-5 py-3 bg-[color:var(--user-icon--bg-color--blue)] font-semibold rounded-lg text-lg shadow-lg"
            onClick={() => alert("updating my photo")}
          >
            Update photo
          </button> */}
        </div>

        {/* Profile information */}
        {/* <div className="flex flex-row items-center justify-center">
          <div className="flex flex-col gap-y-4 text-xl">
            <div className="text-3xl font-bold">Tejas Dhopavkar</div>
            <div className="flex flex-col gap-x-6">
              <div className="text-md">Email</div>
              <p className="font-semibold">tdhopavkar@test.com</p>
            </div>
            <div className="flex flex-col gap-x-6">
              <div className="text-md">Created on</div>
              <p className="font-semibold">tdhopavkar@test.com</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-x-6 text-xl">
          <div className="text-md">Address</div>
          <p className="font-semibold">Bahnhofstraße 3, 66125, Dudweiler</p>
        </div> */}

        <div className="text-3xl font-bold">Tejas Dhopavkar</div>

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
        <div className="w-[100%] p-10 rounded-lg shadow-lg bg-[color:var(--card-bg--color)]">
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

        <div className="w-[100%] p-10 rounded-lg shadow-lg bg-[color:var(--card-bg--color)]">
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
