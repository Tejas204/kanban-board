import React from "react";
import Footer from "../components/Footer";

const Login = () => {
  return (
    // Parent div
    <div>
      <div className="flex h-[100%] w-[100%] justify-center items-center">
        {/* Title */}
        <div className="flex flex-col rounded-md mt-[3%] py-10 px-16 gap-y-14 shadow-xl text-[color:var(--primary-text--color)] bg-[color:var(--card-bg--color)]">
          <div className="flex flex-col items-center gap-y-2">
            <p className="text-4xl">Get Started</p>
            <p className="text-xl">Free for users, no credit card needed</p>
          </div>

          {/* Login Form */}
          <form className="flex flex-col gap-y-5">
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
              className="p-4 bg-[color:var(--button-bg--color)] text-[color:var(--button-text--color)] text-lg font-bold rounded-md 
                  hover:ring-2 ring-[color:var(--button-bg--color)] ring-offset-4 ring-offset-[color:var(--card-bg--color)] transition delay-150 ease-in-out"
              type="button"
            >
              Log In
            </button>
          </form>

          {/* Other Sign in options text */}
          <div className="flex flex-row justify-center items-center gap-x-2">
            <hr className="w-24 bg-[color:var(--secondary-text--color)]"></hr>
            <p className="text-lg font-semibold">Or sign in with the help of</p>
            <hr className="w-24"></hr>
          </div>

          {/* Other sign in options */}
          <div className="grid grid-cols-2 gap-x-4 gap-y-7">
            <div className="p-2 border-[0.1rem] text-center font-semibold rounded-md shadow-lg hover:bg-[color:var(--button-bg--color)] hover:border-[color:var(--button-bg--color)] transition delay-100 ease-in-out cursor-pointer">
              Google
            </div>
            <div className="p-2 border-[0.1rem] text-center font-semibold rounded-md shadow-lg hover:bg-[color:var(--button-bg--color)] hover:border-[color:var(--button-bg--color)] transition delay-100 ease-in-out cursor-pointer">
              Microsoft
            </div>
            <div className="p-2 border-[0.1rem] text-center font-semibold rounded-md shadow-lg hover:bg-[color:var(--button-bg--color)] hover:border-[color:var(--button-bg--color)] transition delay-100 ease-in-out cursor-pointer">
              Apple
            </div>
            <div className="p-2 border-[0.1rem] text-center font-semibold rounded-md shadow-lg hover:bg-[color:var(--button-bg--color)] hover:border-[color:var(--button-bg--color)] transition delay-100 ease-in-out cursor-pointer">
              Slack
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer></Footer>
    </div>
  );
};

export default Login;
