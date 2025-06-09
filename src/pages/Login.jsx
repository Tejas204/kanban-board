import React, { useContext, useState } from "react";
import Footer from "../components/Footer";
import axios from "axios";
import { Context, server } from "../main";
import toast from "react-hot-toast";
import { Link, Navigate } from "react-router-dom";

const Login = () => {
  /**-----------------------------------------------------------------------
   * @Hooks: For setting name, email and authentication check
   -----------------------------------------------------------------------*/
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { isAuthenticated, setIsAuthenticated, isLoading, setIsLoading } =
    useContext(Context);

  /**-----------------------------------------------------------------------
   * @Function: handleLogin
   * @Params: event
   * Login handler function to make API call
   -----------------------------------------------------------------------*/
  const handleLogin = async (event) => {
    event.preventDefault();
    setIsLoading(true);

    try {
      const { data } = await axios.post(
        `${server}/users/login`,
        {
          email,
          password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );

      toast.success(data.message);
      setIsAuthenticated(true);
      setIsLoading(false);
    } catch (error) {
      toast.error(error.response.data.message);
      setIsAuthenticated(false);
      setIsLoading(false);
    }
  };

  if (isAuthenticated) return <Navigate to="/card" />;

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex h-full w-full justify-center items-center">
        <div className="flex flex-col rounded-md mt-[3%] mb-[3%] py-10 px-16 gap-y-14 shadow-xl text-(--primary-text--color) bg-(--card-bg--color)">
          <div className="flex flex-col items-center gap-y-2">
            <p className="text-4xl">Get Started</p>
            <p className="text-xl">Free for users, no credit card needed</p>
          </div>

          <form className="flex flex-col gap-y-5" onSubmit={handleLogin}>
            <input
              className="p-4 rounded-md bg-(--board-bg--color) border-[0.1rem] text-lg"
              type="text"
              placeholder="Email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            ></input>
            <input
              className="p-4 rounded-md bg-(--board-bg--color) border-[0.1rem] text-lg"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            ></input>
            <button
              className="p-4 bg-(--button-bg--color) text-(--button-text--color) text-lg font-bold rounded-md 
                  hover:ring-2 ring-(--button-bg--color) ring-offset-4 ring-offset-(--card-bg--color) transition delay-150 ease-in-out"
              type="submit"
              disabled={isLoading}
            >
              Log In
            </button>
            <Link
              to="/resetPassword"
              className="text-center text-lg text-(--primary-text--color) underline decoration-2 underline-offset-8 hover:decoration-(--button-bg--color) transition ease-linear duration-150"
            >
              Forgot password?
            </Link>
          </form>

          {/* Other Sign in options text */}
          <div className="flex flex-row justify-center items-center gap-x-2">
            <hr className="w-24 bg-(--secondary-text--color)"></hr>
            <p className="text-lg font-semibold">Or sign in with the help of</p>
            <hr className="w-24"></hr>
          </div>

          {/* Other sign in options */}
          <div className="grid grid-cols-2 gap-x-4 gap-y-7">
            <div className="p-2 border-[0.1rem] text-center font-semibold rounded-md shadow-lg hover:bg-(--button-bg--color) hover:border-(--button-bg--color) transition delay-100 ease-in-out cursor-pointer">
              Google
            </div>
            <div className="p-2 border-[0.1rem] text-center font-semibold rounded-md shadow-lg hover:bg-(--button-bg--color) hover:border-(--button-bg--color) transition delay-100 ease-in-out cursor-pointer">
              Microsoft
            </div>
            <div className="p-2 border-[0.1rem] text-center font-semibold rounded-md shadow-lg hover:bg-(--button-bg--color) hover:border-(--button-bg--color) transition delay-100 ease-in-out cursor-pointer">
              Apple
            </div>
            <div className="p-2 border-[0.1rem] text-center font-semibold rounded-md shadow-lg hover:bg-(--button-bg--color) hover:border-(--button-bg--color) transition delay-100 ease-in-out cursor-pointer">
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
