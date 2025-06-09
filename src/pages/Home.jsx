import React from "react";
import UI from "../assets/UI_KanbanBoard_Squares.png";
import UIImage from "../assets/Kanban_Board_UI.png";
import Footer from "../components/Footer";
import { tickmark } from "../data/icons";

const Home = () => {
  return (
    // Parent div
    <div className="flex flex-col min-h-screen">
      <div className="grid grid-cols-2 ml-[8%] mt-[5%] mb-10">
        {/* Capmaign Div */}
        <div className="flex flex-col gap-y-9 text-(--primary-text--color) w-[70%]">
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

        {/* Form Div */}
        <div className="w-full flex flex-row perspective-origin-top transform-3d">
          <img
            src={UIImage}
            className="w-[95%] shadow-2xl border-[0.1rem] border-(--user-icon--bg-color--lavender) rotate-x-[47deg] rotate-y-[31deg] rotate-[324deg]  -translate-x-[150px]"
          ></img>
          {/* <img
            src={UIImage}
            className="w-[95%] shadow-2xl border-[0.1rem] border-(--user-icon--bg-color--lavender) rotate-x-[47deg] rotate-y-[31deg] rotate-[324deg] -translate-x-[950px]"
          ></img> */}
        </div>
      </div>

      {/* Footer */}
      <Footer></Footer>
    </div>
  );
};

export default Home;
