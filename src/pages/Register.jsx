import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

const Register = () => {
  return (
    // Parent Div
    <div>
      <div className="flex h-[100%] w-[100%] justify-center items-center">
        {/* Login Form */}
        <div className="flex flex-col rounded-md mt-[3%] py-10 px-16 gap-y-14 shadow-xl text-[color:var(--primary-text--color)] bg-[color:var(--card-bg--color)]">
          <div className="flex flex-col items-center gap-y-2">
            <p className="text-4xl">Register Now</p>
            <p className="text-xl">Registration is free for all users</p>
          </div>

          <form className="flex flex-col gap-y-5">
            <input
              className="p-4 rounded-md bg-[color:var(--board-bg--color)] border-[0.1rem] text-lg"
              type="text"
              placeholder="Name"
            ></input>
            <input
              className="p-4 rounded-md bg-[color:var(--board-bg--color)] border-[0.1rem] text-lg"
              type="text"
              placeholder="Email"
            ></input>
            <input
              className="p-4 rounded-md bg-[color:var(--board-bg--color)] border-[0.1rem] text-lg"
              type="password"
              placeholder="Password"
            ></input>
            <button
              className="p-4 bg-[color:var(--button-bg--color)] text-[color:var(--button-text--color)] text-lg font-bold rounded-md hover:ring-2 ring-[color:var(--button-bg--color)] ring-offset-4 ring-offset-[color:var(--card-bg--color)] transition delay-150 ease-in-out"
              type="button"
            >
              Register
            </button>
          </form>

          <div className="flex flex-row justify-center items-center gap-x-2">
            <hr className="w-24 bg-[color:var(--secondary-text--color)]"></hr>
            <p className="text-lg font-semibold">Have an existing account?</p>
            <hr className="w-24"></hr>
          </div>

          <div className="flex flex-col text-center">
            <Link
              className="p-4 border-[0.1rem] text-lg text-center font-semibold rounded-md shadow-2xl hover:bg-[color:var(--button-bg--color)] hover:border-[color:var(--button-bg--color)] hover:ring-2 ring-[color:var(--button-bg--color)] ring-offset-4 ring-offset-[color:var(--card-bg--color)] transition delay-150 ease-in-out cursor-pointer"
              type="button"
              to="/login"
            >
              Log In
            </Link>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer></Footer>
    </div>
  );
};

export default Register;
