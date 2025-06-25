import React, { useContext } from "react";
import Kanbanize_2 from "../assets/Kanbanize_4.png";
import Kanbanize from "../assets/Kanbanize.png";
import { Link, Navigate } from "react-router-dom";
import { headerMenuItems } from "../data/tasks";
import { Context, server } from "../main";
import axios from "axios";
import toast from "react-hot-toast";

const Header = () => {
  const { isAuthenticated, setIsAuthenticated, isLoading, setIsLoading } =
    useContext(Context);

  /**-----------------------------------------------------------------------
   * @Function: logoutHandler
   * Calls logout API and renders toast messages
   -----------------------------------------------------------------------*/
  const logoutHandler = async () => {
    try {
      const { data } = await axios.get(`${server}/users/logout`, {
        withCredentials: true,
      });

      toast.success(data.message);
      setIsAuthenticated(false);
    } catch (error) {
      toast.error(error.response.data.message);
      setIsAuthenticated(true);
    }
  };

  return (
    <div className="flex flex-row justify-between sticky top-0 right-0 z-50 w-full items-center shadow-lg bg-(--card-bg--color-UI) backdrop-blur-3xl">
      <Link
        className="flex flex-row gap-x-10 p-5 ml-[2%] items-center font-bold text-(--primary-text--color)"
        to="/"
      >
        <img src={Kanbanize_2} className="h-14 w-14"></img>
        <p className="text-sm md:text-md xl:text-4xl">Kanbanize</p>
      </Link>

      <div className="p-4 mr-[7%]">
        <ul className="flex flex-row gap-x-16 font-semibold items-center text-sm md:text-md xl:text-2xl text-(--secondary-text--color)">
          <Link className={headerMenuItem} to="/">
            Home
          </Link>
          {isAuthenticated ? (
            <Link className={headerMenuItem} to="/card">
              Board
            </Link>
          ) : (
            ""
          )}
          {isAuthenticated ? (
            <Link className={headerMenuItem} to="/profile">
              Profile
            </Link>
          ) : (
            <Link className={headerMenuItem} to="/register">
              Register
            </Link>
          )}

          {isAuthenticated ? (
            <Link onClick={logoutHandler} className={headerMenuItem} to="/">
              Logout
            </Link>
          ) : (
            <Link className={headerMenuItem} to="/login">
              Login
            </Link>
          )}
        </ul>
      </div>
    </div>
  );
};

const headerMenuItem =
  "hover:text-white hover:bg-(--header-bg--item-hover) px-4 py-3 rounded-xl transition delay-100 ease-in-out cursor-pointer";

export default Header;
