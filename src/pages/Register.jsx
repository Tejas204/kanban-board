import React, { useContext, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import Footer from "../components/Footer";
import axios from "axios";
import { Context, server } from "../main";
import toast from "react-hot-toast";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { isAuthenticated, setIsAuthenticated, isLoading, setIsLoading } =
    useContext(Context);

  /**-----------------------------------------------------------------------
   * @Function: registrationHandler
   * @Params: event
   * Function to make register API call
   -----------------------------------------------------------------------*/
  const registrationHandler = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    try {
      const { data } = await axios.post(
        `${server}/users/register`,
        {
          name,
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
      setIsAuthenticated(true);
      toast.success(data.message);
      setIsLoading(false);
    } catch (error) {
      setIsAuthenticated(false);
      toast.error(error.response.data.message);
      setIsLoading(false);
    }
  };

  if (isAuthenticated) return <Navigate to="/card" />;

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex h-full w-full p-4 justify-center items-center">
        <div className="flex flex-col rounded-md mt-[3%] mb-[3%] py-10 px-16 gap-y-10 md:gap-y-12 xl:gap-y-14 shadow-xl text-(--primary-text--color) bg-(--card-bg--color)">
          <div className="flex flex-col items-center gap-y-2">
            <p className="text-3xl md:text-3xl lg:text-4xl xl:text-5xl text-center">
              Register Now
            </p>
            <p className="text-lg md:text-xl lg:text-2xl xl:text-2xl text-center">
              Registration is free for all users
            </p>
          </div>

          <form
            className="flex flex-col gap-y-5"
            onSubmit={registrationHandler}
          >
            <input
              className="p-2 md:p-3 xl:p-4 rounded-md bg-(--board-bg--color) border-[0.1rem] text-sm md:text-md md:text-lg xl:text-xl"
              type="text"
              placeholder="Name"
              value={name}
              onChange={(event) => setName(event.target.value)}
            ></input>
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
              placeholder="Password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            ></input>
            <button
              className="p-2 md:p-3 xl:p-4 bg-(--button-bg--color) text-(--button-text--color) text-sm md:text-md md:text-lg xl:text-xl font-bold rounded-md hover:ring-2 ring-(--button-bg--color) ring-offset-4 ring-offset-(--card-bg--color) transition delay-150 ease-in-out"
              type="submit"
              disabled={isLoading}
            >
              Register
            </button>
          </form>

          <div className="flex flex-row justify-center items-center gap-x-2">
            <hr className="w-24 bg-(--secondary-text--color)"></hr>
            <p className="text-sm md:text-md md:text-lg xl:text-xl font-semibold text-center">
              Have an existing account?
            </p>
            <hr className="w-24"></hr>
          </div>

          <div className="flex flex-col text-center">
            <Link
              className="p-2 md:p-3 lg:p-4 border-[0.1rem] text-sm md:text-md md:text-lg xl:text-xl text-center font-semibold rounded-md shadow-2xl hover:bg-(--button-bg--color) hover:border-(--button-bg--color) hover:ring-2 ring-(--button-bg--color) ring-offset-4 ring-offset-(--card-bg--color) transition delay-150 ease-in-out cursor-pointer"
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
