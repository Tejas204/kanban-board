import React from "react";
import Kanbanize from "../assets/Kanbanize.png";
import Kanbanize_2 from "../assets/Kanbanize_4.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="flex-1 grid grid-cols-3 gap-x-2 min-h-[30vh] w-full py-14 px-10 mt-auto bg-(--header-bg--color) relative bottom-0">
      {/* Footer Hero Section */}
      <div className="flex flex-col gap-y-6 px-6">
        {/* Logo */}
        <img src={Kanbanize_2} alt="" className="h-24 w-24" />

        {/* Company summary */}
        <p className="text-(--primary-text--color) text-lg">
          Kanbanize lets you create kanban boards to help you manage your team,
          tasks and projects better. Use the interactive board, prioritize your
          tasks and make your project a success.
        </p>

        {/* Privacy statement and Copyright */}
        <p className="text-(--primary-text--color)">
          &copy; {new Date().getFullYear()} Kanbanize IND. All rights reserved
        </p>
      </div>

      {/* Menu and Social Media */}
      <div className="grid grid-cols-2">
        {/* Menu */}
        <div className="flex flex-col gap-y-6 px-6">
          {/* Menu Header */}
          <p className="text-(--primary-text--color) text-xl font-bold">Menu</p>

          {/* Menu item list */}
          <ul className="flex flex-col gap-y-8 text-lg text-(--secondary-text--color)">
            <Link
              className="text-(--secondary-text--color) hover:text-(--primary-text--color) transition delay-100 ease-in-out cursor-pointer"
              to="/"
            >
              Features
            </Link>
            <Link
              className="text-(--secondary-text--color) hover:text-(--primary-text--color) transition delay-100 ease-in-out cursor-pointer"
              to="/login"
            >
              Login
            </Link>
            <Link
              className="text-(--secondary-text--color) hover:text-(--primary-text--color) transition delay-100 ease-in-out cursor-pointer"
              to="/"
            >
              Home
            </Link>
            <Link
              className="text-(--secondary-text--color) hover:text-(--primary-text--color) transition delay-100 ease-in-out cursor-pointer"
              to="/register"
            >
              Register
            </Link>
          </ul>
        </div>

        {/* Social Media List */}
        <div className="flex flex-col gap-y-6 px-6">
          {/* Social Media */}
          <p className="text-(--primary-text--color) text-xl font-bold">
            Follow us on
          </p>

          {/* Menu item list */}
          <ul className="flex flex-col gap-y-8 text-lg text-(--secondary-text--color)">
            <Link
              className="text-(--secondary-text--color) hover:text-(--primary-text--color) transition delay-100 ease-in-out cursor-pointer"
              to="/"
            >
              LinkedIn
            </Link>
            <Link
              className="text-(--secondary-text--color) hover:text-(--primary-text--color) transition delay-100 ease-in-out cursor-pointer"
              to="/"
            >
              Instagram
            </Link>
            <Link
              className="text-(--secondary-text--color) hover:text-(--primary-text--color) transition delay-100 ease-in-out cursor-pointer"
              to="/login"
            >
              Twitter
            </Link>
            <Link
              className="text-(--secondary-text--color) hover:text-(--primary-text--color) transition delay-100 ease-in-out cursor-pointer"
              to="/register"
            >
              Facebook
            </Link>
          </ul>
        </div>
      </div>

      {/* Contact Us */}
      <div className="flex flex-col gap-y-6 px-6">
        {/* Call to action */}
        <p className="text-(--primary-text--color) text-xl font-bold">
          Want an improved experience?
        </p>

        {/* Feedback form*/}
        <form className="flex flex-col gap-y-8">
          <textarea
            className="p-4 text-lg rounded-md bg-[color:var(--board-bg--color)] text-[color:var(--secondary-text--color)] border-[0.1rem] h-32"
            placeholder="Share your feedback..."
          ></textarea>
          <button className="p-4 bg-(--button-bg--color) text-(--button-text--color) text-lg font-bold rounded-md hover:ring-2 ring-(--button-bg--color) ring-offset-4 ring-offset-(--card-bg--color) transition delay-150 ease-in-out">
            Submit
          </button>
        </form>
      </div>
    </footer>
  );
};

export default Footer;
