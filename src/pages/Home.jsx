import React from "react";
import UI from "../assets/Kanban_Home_Page_UI.png";
import UIImage from "../assets/Kanban_Board_UI.png";
import Footer from "../components/Footer";
import { tickmark } from "../data/icons";

const Home = () => {
  return (
    // Parent div
    <div className="flex flex-col min-h-screen overflow-x-hidden gap-y-32">
      <div className="relative grid grid-cols-2 ml-[8%] mt-[6%]">
        {/* Capmaign Div */}
        <div className="flex flex-col col-span-1 gap-y-9 text-(--primary-text--color) w-[70%]">
          <p className="text-6xl">Create a Kanban board for your team</p>
          <p className="text-3xl">
            Start your project off right with a board built for all teams
          </p>
          <p className="text-xl font-semibold">Included in your free plan:</p>
          <ul className="pl-4">
            <li className="flex flex-row gap-x-5 text-xl pb-9">
              {tickmark} Create kanban boards
            </li>
            <li className="flex flex-row gap-x-5 text-xl pb-9">
              {tickmark} Add teams and share boards with them
            </li>
            <li className="flex flex-row gap-x-5 text-xl pb-9">
              {tickmark} Easily switch between boards for better multi-tasking
            </li>
            <li className="flex flex-row gap-x-5 text-xl pb-9">
              {tickmark} Communicate easily using the comment section
            </li>
          </ul>
        </div>

        {/* Hero Image */}
        {/* <div className="w-full flex flex-row">
          <img
            src={UI}
            className="scale-150 mt-20 relative shadow-2xl border-[0.1rem] border-(--text-disabled--color)"
          ></img>
        </div> */}
        <div className="w-full flex flex-row col-span-1">
          <img
            src={UI}
            className="lg:scale-150 xl:scale-125 mt-20 shadow-2xl rounded-lg shadow-gray-700 border-[0.1rem] border-gray-700 1s ease-in-out"
          ></img>
        </div>
      </div>
      {/* <div className="w-full flex flex-row">
        <img
          src={UI}
          className="scale-75 left-1/3 top-25 sticky shadow-2xl border-[0.1rem] border-(--text-disabled--color)"
        ></img>
      </div> */}
      {/* Footer */}
      <div className="relative mt-10">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Home;
