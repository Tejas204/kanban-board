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
      Hamburger
      ----------------------------------------------------------------------- */}
        <div class="flex lg:hidden">
          <button
            type="button"
            class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span class="sr-only">Open main menu</span>
            <svg
              class="size-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              aria-hidden="true"
              data-slot="icon"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>

        {/* ----------------------------------------------------------------------- 
        Main menu links
        ----------------------------------------------------------------------- */}
        <div class="hidden lg:flex lg:flex-1 lg:gap-x-16 lg:justify-end">
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
      <div class="lg:hidden" role="dialog" aria-modal="true">
        {/* <!-- Background backdrop, show/hide based on slide-over state. --> */}
        <div class="fixed inset-0 z-50"></div>
        <div class="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div class="flex items-center justify-between">
            <a href="#" class="-m-1.5 p-1.5">
              <span class="sr-only">Your Company</span>
              <img
                class="h-8 w-auto"
                src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
                alt=""
              />
            </a>
            <button type="button" class="-m-2.5 rounded-md p-2.5 text-gray-700">
              <span class="sr-only">Close menu</span>
              <svg
                class="size-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
                data-slot="icon"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div class="mt-6 flow-root">
            <div class="-my-6 divide-y divide-gray-500/10">
              <div class="space-y-2 py-6">
                <div class="-mx-3">
                  <button
                    type="button"
                    class="flex w-full items-center justify-between rounded-lg py-2 pr-3.5 pl-3 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                    aria-controls="disclosure-1"
                    aria-expanded="false"
                  >
                    Product
                    {/* <!--
                  Expand/collapse icon, toggle classes based on menu open state.

                  Open: "rotate-180", Closed: ""
                --> */}
                    <svg
                      class="size-5 flex-none"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                      data-slot="icon"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </button>
                  {/* <!-- 'Product' sub-menu, show/hide based on menu state. --> */}
                  <div class="mt-2 space-y-2" id="disclosure-1">
                    <a
                      href="#"
                      class="block rounded-lg py-2 pr-3 pl-6 text-sm/7 font-semibold text-gray-900 hover:bg-gray-50"
                    >
                      Analytics
                    </a>
                    <a
                      href="#"
                      class="block rounded-lg py-2 pr-3 pl-6 text-sm/7 font-semibold text-gray-900 hover:bg-gray-50"
                    >
                      Engagement
                    </a>
                    <a
                      href="#"
                      class="block rounded-lg py-2 pr-3 pl-6 text-sm/7 font-semibold text-gray-900 hover:bg-gray-50"
                    >
                      Security
                    </a>
                    <a
                      href="#"
                      class="block rounded-lg py-2 pr-3 pl-6 text-sm/7 font-semibold text-gray-900 hover:bg-gray-50"
                    >
                      Integrations
                    </a>
                    <a
                      href="#"
                      class="block rounded-lg py-2 pr-3 pl-6 text-sm/7 font-semibold text-gray-900 hover:bg-gray-50"
                    >
                      Automations
                    </a>
                    <a
                      href="#"
                      class="block rounded-lg py-2 pr-3 pl-6 text-sm/7 font-semibold text-gray-900 hover:bg-gray-50"
                    >
                      Watch demo
                    </a>
                    <a
                      href="#"
                      class="block rounded-lg py-2 pr-3 pl-6 text-sm/7 font-semibold text-gray-900 hover:bg-gray-50"
                    >
                      Contact sales
                    </a>
                  </div>
                </div>
                <a
                  href="#"
                  class="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                  Features
                </a>
                <a
                  href="#"
                  class="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                  Marketplace
                </a>
                <a
                  href="#"
                  class="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                  Company
                </a>
              </div>
              <div class="py-6">
                <a
                  href="#"
                  class="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                  Log in
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

const headerMenuItem =
  "hover:text-white hover:bg-(--header-bg--item-hover) px-4 py-3 rounded-xl transition delay-100 ease-in-out cursor-pointer text-sm md:text-md xl:text-2xl";

export default Header;
