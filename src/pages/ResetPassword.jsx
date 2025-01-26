import React, { useContext, useState } from "react";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { Context } from "../main";

const ResetPassword = () => {
  /**
   * @Context: Import context variables
   */
  const { isLoading } = useContext(Context);

  /**
   * @Hook: setEmail, setPassword, setNewPassword
   * Used for tracking the email, new and confirmed password
   */
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  return (
    <div>
      <div className="flex h-[100%] w-[100%] justify-center items-center">
        <div className="flex flex-col rounded-md mt-[3%] py-10 px-16 gap-y-14 shadow-xl text-[color:var(--primary-text--color)] bg-[color:var(--card-bg--color)]">
          <div className="flex flex-col items-center gap-y-2">
            <p className="text-4xl">Reset password</p>
            <p className="text-xl">Enter and confirm your new password</p>
          </div>

          <form className="flex flex-col gap-y-5">
            <input
              className="p-4 rounded-md bg-[color:var(--board-bg--color)] border-[0.1rem] text-lg"
              type="text"
              placeholder="Email"
              value={email}
            ></input>
            <input
              className="p-4 rounded-md bg-[color:var(--board-bg--color)] border-[0.1rem] text-lg"
              type="password"
              placeholder="Password"
              value={password}
            ></input>
            <input
              className="p-4 rounded-md bg-[color:var(--board-bg--color)] border-[0.1rem] text-lg"
              type="password"
              placeholder="Password"
              value={newPassword}
            ></input>
            <button
              className="p-4 bg-[color:var(--button-bg--color)] text-[color:var(--button-text--color)] text-lg font-bold rounded-md 
              hover:ring-2 ring-[color:var(--button-bg--color)] ring-offset-4 ring-offset-[color:var(--card-bg--color)] transition delay-150 ease-in-out"
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
