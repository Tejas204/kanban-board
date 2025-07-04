import React, { useContext, useState } from "react";
import Footer from "../components/Footer";
import { Link, Navigate } from "react-router-dom";
import { Context, server } from "../main";
import toast from "react-hot-toast";
import axios from "axios";

const ResetPassword = () => {
  /**-----------------------------------------------------------------------
   * @Context: Import context variables
   -----------------------------------------------------------------------*/
  const { isLoading } = useContext(Context);

  /**-----------------------------------------------------------------------
   * @Hook: setEmail, setPassword, setNewPassword
   * Used for tracking the email, new and confirmed password
   -----------------------------------------------------------------------*/
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  /**-----------------------------------------------------------------------
   * @Function: handlePasswordReset
   * @Params: event
   * @Returns: none
   * Used for password validation and to call the password reset API
   -----------------------------------------------------------------------*/
  const handlePasswordReset = async (event) => {
    event.preventDefault();
    if (password === newPassword) {
      // Call API here
      try {
        const { data } = await axios.put(
          `${server}/users/resetPassword`,
          {
            email: email,
            password: password,
            newPassword: newPassword,
          },
          {
            headers: { "Content-Type": "application/json" },
            withCredentials: true,
          }
        );
        toast.success(data.message);
      } catch (error) {
        toast.error(error.response.data.message);
      }
      setEmail("");
      setPassword("");
      setNewPassword("");
    } else {
      toast.error("New and confirmed password does not match");
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex h-full w-full p-4 justify-center items-center">
        <div className="flex flex-col rounded-lg mt-[3%] mb-[3%] py-10 px-16 xl:py-18 xl:px-28 gap-y-10 md:gap-y-12 xl:gap-y-14 shadow-xl text-(--primary-text--color) bg-(--card-bg--color)">
          <div className="flex flex-col items-center gap-y-2">
            <p className="text-3xl md:text-3xl lg:text-4xl xl:text-5xl text-center">
              Reset Password
            </p>
            <p className="text-lg md:text-xl lg:text-2xl xl:text-2xl text-center">
              Confirm your new password
            </p>
          </div>

          <form
            className="flex flex-col gap-y-5"
            onSubmit={handlePasswordReset}
          >
            <input
              className="p-2 md:p-3 xl:p-4 rounded-md bg-(--board-bg--color) border-[0.1rem] text-sm md:text-md md:text-lg xl:text-xl"
              type="text"
              placeholder="Email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            ></input>
            <input
              className="p-2 md:p-3 xl:p-4 rounded-md bg-(--board-bg--color) border-[0.1rem] text-sm md:text-md md:text-lg xl:text-xl"
              type="password"
              placeholder="New Password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            ></input>
            <input
              className="p-2 md:p-3 xl:p-4 rounded-md bg-(--board-bg--color) border-[0.1rem] text-sm md:text-md md:text-lg xl:text-xl"
              type="password"
              placeholder="Confirm New Password"
              value={newPassword}
              onChange={(event) => setNewPassword(event.target.value)}
            ></input>
            <button
              className="p-2 md:p-3 xl:p-4 bg-(--button-bg--color) text-(--button-text--color) text-sm md:text-md md:text-lg xl:text-xl font-bold rounded-md 
              hover:ring-2 ring-(--button-bg--color) ring-offset-4 ring-offset-(--card-bg--color) transition delay-150 ease-in-out"
              type="submit"
              disabled={isLoading}
            >
              Submit
            </button>
          </form>
        </div>
      </div>

      {/* Footer */}
      <Footer></Footer>
    </div>
  );
};

export default ResetPassword;
