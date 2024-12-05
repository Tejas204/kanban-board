import React from "react";
import UI from "../assets/UI_KanbanBoard_Squares.png";
import Footer from "../components/Footer";
import { tickmark } from "../data/icons";

const Home = () => {
  return (
    // Parent div
    <div>
      <div className="grid grid-cols-2 ml-[8%] mt-[5%]">
        {/* Capmaign Div */}
        <div className="flex flex-col gap-y-9 text-[color:var(--primary-text--color)] w-[70%]">
          <p className="text-6xl">Create a Kanban board for your team</p>
          <p className="text-3xl">
            Start your project off right with a board build for all teams
          </p>
          <p className="text-xl font-semibold">Included in your free plan:</p>
          <ul className="pl-4">
            <li className="flex flex-row gap-x-5 text-xl pb-9">
              {tickmark} 10 user licenses
            </li>
            <li className="flex flex-row gap-x-5 text-xl pb-9">
              {tickmark} Workflows and automation
            </li>
            <li className="flex flex-row gap-x-5 text-xl pb-9">
              {tickmark} Project templates - including scrum, kanban, and more
            </li>
            <li className="flex flex-row gap-x-5 text-xl pb-9">
              {tickmark} Integrations with thousands of other tools
            </li>
          </ul>
        </div>

        {/* Form Div */}
        <div className="w-[100%]">
          <img
            src={UI}
            className="w-[90%] shadow-2xl border-[0.1rem] border-[color:var(--user-icon--bg-color--lavender)]"
          ></img>
        </div>
      </div>

      {/* Footer */}
      <Footer></Footer>
    </div>
  );
};

export default Home;
