import React, { useContext } from "react";
import Jira from "../assets/Jira.png";
import Kanbanize from "../assets/Kanbanize.png";
import { Link } from "react-router-dom";
import { headerMenuItems } from "../data/tasks";
import { Context, server } from "../main";
import axios from "axios";
import toast from "react-hot-toast";

const Header = () => {
  const { isAuthenticated, setIsAuthenticated, isLoading, setIsLoading } =
    useContext(Context);

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
    <div className="flex flex-row justify-between sticky top-0 z-50 w-full items-center shadow-lg bg-[color:var(--header-bg--color)]">
      <Link
        className="flex flex-row gap-x-5 p-4 ml-[2%] text-2xl items-center font-bold text-[color:var(--primary-text--color)]"
        to="/"
      >
        <img src={Kanbanize} className="h-10 w-10"></img>
        <p>Kanbanize</p>
      </Link>

      <div className="p-4 mr-[7%]">
        <ul className="flex flex-row gap-x-16 font-semibold text-xl text-[color:var(--secondary-text--color)]">
          <Link className={headerMenuItem} to="/">
            Home
          </Link>
          <Link className={headerMenuItem} to="/card">
            Board
          </Link>
          <Link className={headerMenuItem} to="/register">
            Register
          </Link>
          {isAuthenticated ? (
            <button onClick={logoutHandler} className={headerMenuItem}>
              Logout
            </button>
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
  "hover:text-[color:var(--primary-text--color)] transition delay-100 ease-in-out cursor-pointer";

export default Header;
