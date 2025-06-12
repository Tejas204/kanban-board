import React from "react";
import UI from "../assets/Kanban_Home_Page_UI.png";
import UIImage from "../assets/Kanban_Board_UI.png";
import Footer from "../components/Footer";
import { messageIcon, tickmark } from "../data/icons";
import CardUI from "../components/CardUI";

const Home = () => {
  return (
    <div className="2xl:flex 2xl:flex-col min-h-screen overflow-x-hidden gap-y-32">
      <div className="relative 2xl:grid 2xl:grid-cols-2 ml-[4%] mt-[6%]">
        {/* ----------------------------------------------------------------------- 
          Capmaign Div 
          -----------------------------------------------------------------------*/}
        <div className="flex flex-col md:col-span-1 gap-y-9 text-(--primary-text--color) w-[100%] xl:w-[70%] md:text-justify">
          <p className="text-lg font-semibold md:text-3xl lg:text-6xl">
            Create a Kanban board for your team
          </p>
          <p className="text-md md:text-2xl lg:text-3xl">
            Start your project off right with a board built for all teams
          </p>
          <p className="text-sm md:text-lg lg:text-2xl font-semibold">
            Included in your free plan:
          </p>
          <ul className="pl-4 text-(--secondary-text--color)">
            <li className="flex flex-row gap-x-5 items-center text-xs md:text-lg lg:text-2xl pb-9">
              <span className="h-4 w-4 md:h-5 md:5 lg:h-6 lg:w-6">
                {tickmark}
              </span>
              Create kanban boards
            </li>
            <li className="flex flex-row gap-x-5 items-center text-xs md:text-lg lg:text-2xl pb-9">
              <span className="h-4 w-4 md:h-5 md:5 lg:h-6 lg:w-6">
                {tickmark}
              </span>{" "}
              Add teams and share boards with them
            </li>
            <li className="flex flex-row gap-x-5 items-center text-xs md:text-lg lg:text-2xl pb-9">
              <span className="h-4 w-4 md:h-5 md:5 lg:h-6 lg:w-6">
                {tickmark}
              </span>{" "}
              Easily switch between boards for better multi-tasking
            </li>
            <li className="flex flex-row gap-x-5 items-center text-xs md:text-lg lg:text-2xl pb-9">
              <span className="h-4 w-4 md:h-5 md:5 lg:h-6 lg:w-6">
                {tickmark}
              </span>{" "}
              Communicate easily using the comment section
            </li>
          </ul>
        </div>

        {/* ----------------------------------------------------------------------- 
          Hero Image 
          -----------------------------------------------------------------------*/}
        <div className="w-full flex flex-row md:col-span-1">
          <img
            src={UI}
            className="lg:scale-150 xl:scale-125 shadow-2xl rounded-lg shadow-gray-900 border-[0.1rem] border-gray-700"
          ></img>
        </div>
      </div>

      {/* ----------------------------------------------------------------------- 
        Cards Info 
        -----------------------------------------------------------------------*/}
      <div className="grid grid-cols-2 bg-red ml-[4%] mt-[4%] mr-[4%] mb-[8%] pt-10">
        {/* -----------------------------------------------------------------------
          Cards 
          -----------------------------------------------------------------------*/}
        <div className="col-span-1 flex flex-row p-10 transform-3d perspective-none relative">
          <div className="absolute z-0 rotate-y-30 -rotate-x-30">
            <CardUI
              priority="high"
              user="TD"
              shortDescription="Bug: Unable to onboard new users"
              description="Cannot onboard new users due to issue wirh register API"
              dueDate="14/06/2025"
            ></CardUI>
          </div>
          <div className="absolute translate-x-30 z-10 rotate-y-30 -rotate-x-30">
            <CardUI
              priority="medium"
              user="AS"
              shortDescription="Client showback"
              description="Schedule a call with the client for showback to showcase latest features"
              dueDate="18/06/2025"
            ></CardUI>
          </div>
          <div className="absolute translate-x-60 z-20 rotate-y-30 -rotate-x-30">
            <CardUI
              priority="low"
              user="VJ"
              shortDescription="Feature: Add team members"
              description="Develop a feature to add new team members to the board"
              dueDate="20/06/2025"
            ></CardUI>
          </div>
        </div>

        {/* ----------------------------------------------------------------------- 
          Cards Description 
          -----------------------------------------------------------------------*/}
        <div className="col-span-1 text-(--primary-text--color)">
          <p className="text-4xl font-semibold">
            Track and prioritize your work easily
          </p>
          <p className="text-xl text-(--secondary-text--color) pt-2 text-justify">
            Stay organized with customizable boards that adapt to your workflow.
            Set priorities and deadlines so you always know what matters most.
            Monitor progress at a glance with simple, drag-and-drop task
            management.
          </p>
        </div>
      </div>

      {/* ----------------------------------------------------------------------- 
          Cards Features
          -----------------------------------------------------------------------*/}
      <div className="w-[100%] bg-white">
        <div className="grid-cols-5">
          <div className="col-span-4 border-2">Hi</div>
          <div className="col-span-1">Bye</div>
        </div>
      </div>

      {/* -----------------------------------------------------------------------
        Footer 
        -----------------------------------------------------------------------*/}
      <div className="relative mt-10">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Home;
