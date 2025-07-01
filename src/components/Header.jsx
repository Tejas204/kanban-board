import React, { useContext, useState } from "react";
import Kanbanize_2 from "../assets/Kanbanize_4.png";
import Kanbanize from "../assets/Kanbanize.png";
import { Link, Navigate } from "react-router-dom";
import { headerMenuItems } from "../data/tasks";
import { Context, server } from "../main";
import axios from "axios";
import toast from "react-hot-toast";
import { hamburgerIcon } from "../data/icons";

const Header = () => {
  /**-----------------------------------------------------------------------
   * @Hook: Contexts
   * Import global contexts here
   -----------------------------------------------------------------------*/
  const { isAuthenticated, setIsAuthenticated, isLoading, setIsLoading } =
    useContext(Context);

  /**-----------------------------------------------------------------------
   * @Hook: setMobileMenuVisibility
   * Used to set the visibility of mobile menu
   -----------------------------------------------------------------------*/
  const [mobileMenuVisibility, setMobileMenuVisibility] = useState(false);

  /**-----------------------------------------------------------------------
   * @Function: logoutHandler
   * @Params: None
   * @Returns: None
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

  /**-----------------------------------------------------------------------
   * @Function: handleMobileMenu
   * @Params: None
   * @Returns: None
   * Used to set the visibility of mobile menu items on click
   -----------------------------------------------------------------------*/
  const handleMobileMenu = (event) => {
    event.preventDefault();

    setMobileMenuVisibility(!mobileMenuVisibility);
  };

  return (
    // <nav className="flex flex-row justify-between sticky top-0 right-0 z-50 w-screen items-center shadow-lg bg-(--card-bg--color-UI) backdrop-blur-3xl">
    //   <Link
    //     className="flex flex-row grow gap-x-10 p-5 ml-[2%] items-center font-bold text-(--primary-text--color)"
    //     to="/"
    //   >
    //     <img src={Kanbanize_2} className="h-14 w-14"></img>
    //     <p className="text-sm md:text-md xl:text-4xl">Kanbanize</p>
    //   </Link>

    //   <div className="p-4 mr-[7%] invisible md:visible">
    //     <ul className="flex flex-row gap-x-16 font-semibold items-center text-sm md:text-md xl:text-2xl text-(--secondary-text--color)">
    //       <Link className={headerMenuItem} to="/">
    //         Home
    //       </Link>
    //       {isAuthenticated ? (
    //         <Link className={headerMenuItem} to="/card">
    //           Board
    //         </Link>
    //       ) : (
    //         ""
    //       )}
    //       {isAuthenticated ? (
    //         <Link className={headerMenuItem} to="/profile">
    //           Profile
    //         </Link>
    //       ) : (
    //         <Link className={headerMenuItem} to="/register">
    //           Register
    //         </Link>
    //       )}

    //       {isAuthenticated ? (
    //         <Link onClick={logoutHandler} className={headerMenuItem} to="/">
    //           Logout
    //         </Link>
    //       ) : (
    //         <Link className={headerMenuItem} to="/login">
    //           Login
    //         </Link>
    //       )}
    //     </ul>
    //   </div>
    // </nav>

    <header class="bg-(--card-bg--color-UI) text-white">
      <nav
        className="mx-auto flex items-center justify-between lg:px-8"
        aria-label="Global"
      >
        {/* ----------------------------------------------------------------------- 
      Logo and title
      ----------------------------------------------------------------------- */}
        <Link
          className="flex flex-row grow gap-x-10 p-5 ml-[2%] items-center font-bold text-(--primary-text--color)"
          to="/"
        >
          <img src={Kanbanize_2} className="h-14 w-14"></img>
          <p className="text-sm md:text-md xl:text-4xl">Kanbanize</p>
        </Link>

        {/* ----------------------------------------------------------------------- 
      Hamburger button for mobile menu links
      ----------------------------------------------------------------------- */}
        <div class="flex md:hidden">
          <button
            type="button"
            class="m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={(event) => handleMobileMenu(event)}
          >
            <span class="sr-only">Open main menu</span>
            <div className="text-white">{hamburgerIcon}</div>
          </button>
        </div>

        {/* ----------------------------------------------------------------------- 
        Main menu links
        ----------------------------------------------------------------------- */}
        <div class="hidden md:flex md:flex-1 md:gap-x-16 md:justify-end">
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
        </div>
      </nav>

      {/* ----------------------------------------------------------------------- 
      Mobile menu
      ----------------------------------------------------------------------- */}
      <div
        className={`md:hidden flex flex-col relative bg-(--card-bg--color-UI) border-t-[0.1rem] border-t-(--text-disabled--color) ${
          mobileMenuVisibility
            ? "visible transition ease-out duration-500"
            : "hidden transition ease-in duration-75"
        }`}
      >
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
      </div>
    </header>
  );
};

const headerMenuItem =
  "hover:text-white hover:bg-(--header-bg--item-hover) px-4 py-3 rounded-xl transition delay-100 ease-in-out cursor-pointer text-sm md:text-md xl:text-2xl";

export default Header;
