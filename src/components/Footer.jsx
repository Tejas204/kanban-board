import React from "react";
import Kanbanize from "../assets/Kanbanize.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="grid grid-cols-3 gap-x-2 w-[100%] mt-[5%] py-14 px-10 fixed bottom-0 bg-[color:var(--header-bg--color)]">
      {/* Footer Hero Section */}
      <div className="flex flex-col gap-y-6 px-6">
        {/* Logo */}
        <img src={Kanbanize} alt="" className="h-24 w-24" />

        {/* Company summary */}
        <p className="text-[color:var(--primary-text--color)] text-lg">
          Kanbanize lets you create kanban boards to help you manage your team,
          tasks and projects better. Use the interactive board, prioritize your
          tasks and make your project a success.
        </p>

        {/* Privacy statement and Copyright */}
        <p className="text-[color:var(--primary-text--color)]">
          &copy; {new Date().getFullYear()} Kanbanize IND. All rights reserved
        </p>
      </div>

      {/* Menu and Social Media */}
      <div className="grid grid-cols-2">
        {/* Menu */}
        <div className="flex flex-col gap-y-6 px-6 border-l-[0.1rem] border-[color:var(--secondary-text--color)]">
          {/* Menu Header */}
          <p className="text-[color:var(--primary-text--color)] text-xl font-bold">
            Menu
          </p>

          {/* Menu item list */}
          <ul className="flex flex-col gap-y-8 text-lg text-[color:var(--secondary-text--color)]">
            <Link
              className="text-[color:var(--secondary-text--color)] hover:text-[color:var(--primary-text--color)] transition delay-100 ease-in-out cursor-pointer"
              to="/"
            >
              Features
            </Link>
            <Link
              className="text-[color:var(--secondary-text--color)] hover:text-[color:var(--primary-text--color)] transition delay-100 ease-in-out cursor-pointer"
              to="/login"
            >
              Login
            </Link>
            <Link
              className="text-[color:var(--secondary-text--color)] hover:text-[color:var(--primary-text--color)] transition delay-100 ease-in-out cursor-pointer"
              to="/"
            >
              Home
            </Link>
            <Link
              className="text-[color:var(--secondary-text--color)] hover:text-[color:var(--primary-text--color)] transition delay-100 ease-in-out cursor-pointer"
              to="/register"
            >
              Register
            </Link>
          </ul>
        </div>

        {/* Social Media List */}
        <div className="flex flex-col gap-y-6 px-6 border-l-[0.1rem] border-[color:var(--secondary-text--color)]">
          {/* Social Media */}
          <p className="text-[color:var(--secondary-text--color)] text-xl font-bold">
            Follow us on
          </p>

          {/* Menu item list */}
          <ul className="flex flex-col gap-y-8 text-lg text-[color:var(--secondary-text--color)]">
            <Link
              className="text-[color:var(--secondary-text--color)] hover:text-[color:var(--primary-text--color)] transition delay-100 ease-in-out cursor-pointer"
              to="/"
            >
              LinkedIn
            </Link>
            <Link
              className="text-[color:var(--secondary-text--color)] hover:text-[color:var(--primary-text--color)] transition delay-100 ease-in-out cursor-pointer"
              to="/"
            >
              Instagram
            </Link>
            <Link
              className="text-[color:var(--secondary-text--color)] hover:text-[color:var(--primary-text--color)] transition delay-100 ease-in-out cursor-pointer"
              to="/login"
            >
              Twitter
            </Link>
            <Link
              className="text-[color:var(--secondary-text--color)] hover:text-[color:var(--primary-text--color)] transition delay-100 ease-in-out cursor-pointer"
              to="/register"
            >
              Facebook
            </Link>
          </ul>
        </div>
      </div>

      {/* Contact Us */}
      <div className="flex flex-col gap-y-6 px-6 border-l-[0.1rem] border-[color:var(--secondary-text--color)]">
        {/* Call to action */}
        <p className="text-[color:var(--primary-text--color)] text-xl font-bold">
          Want an improved experience?
        </p>

        {/* Feedback form*/}
        <form className="flex flex-col gap-y-8">
          <textarea
            className="p-4 text-lg rounded-md bg-[color:var(--board-bg--color)] border-[0.1rem] h-32"
            placeholder="Share your feedback..."
          ></textarea>
          <button className="p-4 bg-[color:var(--button-bg--color)] text-[color:var(--button-text--color)] text-lg font-bold rounded-md hover:ring-2 ring-[color:var(--button-bg--color)] ring-offset-4 ring-offset-[color:var(--card-bg--color)] transition delay-150 ease-in-out">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Footer;
