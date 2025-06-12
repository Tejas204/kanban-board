import React from "react";
import UI from "../assets/Kanban_Home_Page_UI.png";
import UIImage from "../assets/Kanban_Board_UI.png";
import Footer from "../components/Footer";
import { messageIcon, tickmark } from "../data/icons";
import CardUI from "../components/CardUI";

const Home = () => {
  return (
    // Parent div
    <div className="flex flex-col min-h-screen overflow-x-hidden gap-y-32">
      <div className="relative grid grid-cols-2 ml-[4%] mt-[6%]">
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
        <div className="w-full flex flex-row col-span-1">
          <img
            src={UI}
            className="lg:scale-150 xl:scale-125 shadow-2xl rounded-lg shadow-gray-900 border-[0.1rem] border-gray-700"
          ></img>
        </div>
      </div>

      {/* Cards Info */}
      <div className="grid grid-cols-2 bg-red ml-[4%] mr-[4%] mb-[4%]">
        {/* -----------------------------------------------------------------------
          Cards 
          -rotate-y-30 rotate-x-30 -rotate-z-1 
          -----------------------------------------------------------------------*/}
        <div className="col-span-1 flex flex-row p-10 transform-3d relative">
          <div className="absolute backdrop-blur-3xl z-0 rotate-y-30 -rotate-x-30">
            <CardUI priority="high"></CardUI>
          </div>
          <div className="absolute backdrop-blur-3xl translate-x-40 z-10 rotate-y-30 -rotate-x-30">
            <CardUI priority="medium"></CardUI>
          </div>
          <div className="absolute backdrop-blur-3xl translate-x-80 z-20 rotate-y-30 -rotate-x-30">
            <CardUI priority="low"></CardUI>
          </div>
        </div>

        {/* Cards Description */}
        <div className="col-span-1 border-2 p-10"></div>
      </div>
      {/* Footer */}
      <div className="relative mt-10">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Home;
