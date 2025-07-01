import React, { useState } from "react";
import UI from "../assets/Kanban_Home_Page_UI.png";
import UIImage from "../assets/Kanban_Board_UI.png";
import cardMovement from "../assets/card_movement.png";
import columnMovement from "../assets/columnMovement.png";
import addComment from "../assets/addComment.png";
import manageBoard from "../assets/ManageBoard.png";
import Footer from "../components/Footer";
import { arrowRight, messageIcon, tickmark } from "../data/icons";
import CardUI from "../components/CardUI";

const Home = () => {
  const [hoverState, setHoverState] = useState(false);

  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden gap-y-7 md:gap-y-20 lg:gap-y-28 xl:gap-y-32">
      <div className="relative mx-[2%] mt-[6%]">
        {/* ----------------------------------------------------------------------- 
          Capmaign Div 
          -----------------------------------------------------------------------*/}
        <div className="flex flex-col justify-center items-center w-[100%] md:col-span-1 gap-y-9 text-(--primary-text--color) xl:w-[100%] text-center md:text-justify">
          <p className="text-3xl px-3 font-semibold md:text-3xl lg:text-4xl xl:text-6xl">
            Create a Kanban board for your team
          </p>
          <p className="text-lg px-3 text-center md:text-xl lg:text-2xl xl:text-3xl">
            From chaos to clarity in seconds. Plan, track, and crush team goals
            – all in one place.
          </p>

          {/* ----------------------------------------------------------------------- 
          Hero button 
          -----------------------------------------------------------------------*/}
          <div
            onMouseEnter={() => setHoverState(!hoverState)}
            onMouseLeave={() => setHoverState(!hoverState)}
            className="mb-[4%] lg:mb-[2%]"
          >
            <button
              className="flex flex-row items-center gap-x-1 md:gap-x-4 py-2 px-6 md:py-3 md:px-7 lg:px-10 lg:py-4 border-2 rounded-full bg-white text-(--board-bg--color) text-md md:text-lg lg:text-xl 2xl:text-2xl font-semibold hover:cursor-pointer
            hover:ring-2 ring-(--background-white) ring-offset-4 ring-offset-(--card-bg--color) delay-150 transition ease-in-out"
            >
              Try it now
              <span
                className={`${
                  hoverState
                    ? "translate-x-4 duration-200 delay-150 transition ease-in-out"
                    : "duration-200 delay-150 transition ease-in-out"
                }`}
              >
                {arrowRight}
              </span>
            </button>
          </div>
        </div>

        {/* ----------------------------------------------------------------------- 
          Hero Image 
          -----------------------------------------------------------------------*/}
        <div className="w-full flex flex-row md:col-span-1">
          <img
            src={UI}
            className="md:scale-95 lg:scale-90 xl:scale-100 2xl:scale-90 shadow-2xl rounded-lg shadow-gray-800 border-[0.1rem] border-gray-700 mask-b-from-100"
          ></img>
        </div>
      </div>

      {/* ----------------------------------------------------------------------- 
        Cards Info 
        -----------------------------------------------------------------------*/}
      <div className="flex flex-col xl:space-y-10 2xl:space-y-0 2xl:space-x-10 justify-center lg:gap-y-20 2xl:grid 2xl:grid-cols-2 p-3 mx-[2%] mb-[4%] mt-[4%] relative">
        {/* ----------------------------------------------------------------------- 
          Cards Description 
          -----------------------------------------------------------------------*/}
        <div className="2xl:col-span-1 text-(--primary-text--color) relative">
          <p className="text-3xl text-center md:text-3xl lg:text-4xl xl:text-6xl font-semibold 2xl:text-start">
            Track and prioritize your work easily
          </p>
          <p className="text-md text-center md:text-lg lg:text-xl xl:text-2xl text-(--secondary-text--color) pt-2 2xl:text-start">
            Stay organized with customizable boards that adapt to your workflow.
            Set priorities and deadlines so you always know what matters most.
            Monitor progress at a glance with simple, drag-and-drop task
            management.
          </p>
        </div>

        {/* -----------------------------------------------------------------------
          Cards 
          -----------------------------------------------------------------------*/}
        <div className="2xl:col-span-1 relative">
          <div className="flex flex-row justify-center transform-3d perspective-none">
            <div className="relative top-0 z-20 -rotate-y-30 translate-x-40 md:translate-x-35 lg:translate-x-25 xl:translate-x-5  2xl:translate-x-0 -rotate-x-30 scale-50 lg:scale-75 xl:scale-125">
              <CardUI
                priority="low"
                user="VJ"
                shortDescription="Feature: Add team members"
                description="Develop a feature to add new team members to the board"
                dueDate="20/06/2025"
                comments="4"
              ></CardUI>
            </div>
            <div className="absolute top-0 z-20 -rotate-y-30 -rotate-x-30 scale-50 lg:scale-75 xl:scale-125">
              <CardUI
                priority="medium"
                user="AS"
                shortDescription="Client showback"
                description="Schedule a call with the client for showback to showcase latest features"
                dueDate="18/06/2025"
                comments="6"
              ></CardUI>
            </div>
            <div className="relative top-0 -translate-x-40 md:-translate-x-35 lg:-translate-x-25 xl:-translate-x-5 2xl:-translate-x-0  z-20 -rotate-y-30 -rotate-x-30 scale-50 lg:scale-75 xl:scale-125">
              <CardUI
                priority="high"
                user="TD"
                shortDescription="Bug: Unable to onboard new users"
                description="Cannot onboard new users due to issue wirh register API"
                dueDate="14/06/2025"
                comments="12"
              ></CardUI>
            </div>
          </div>
        </div>
      </div>

      {/* ----------------------------------------------------------------------- 
          Cards Features
          -----------------------------------------------------------------------*/}
      <div className="bg-white">
        <div className="flex flex-col w-[100%] p-15 text-center">
          <p className="text-3xl px-3 font-semibold md:text-3xl lg:text-4xl xl:text-6xl">
            Manage multiple projects with ease
          </p>
          <p className="text-lg px-3 md:text-xl lg:text-2xl xl:text-3xl">
            Keep tasks, timelines, and teams aligned across every project.
            Streamline your workflow with powerful a tool built for multitasking
            success.
          </p>
        </div>

        {/* ----------------------------------------------------------------------- 
          Cards Features
          -----------------------------------------------------------------------*/}
        <div className="flex flex-col xl:grid xl:grid-cols-5 gap-x-5 gap-y-10 grid-rows-2 p-16">
          {/* ----------------------------------------------------------------------- 
          Cards Features 1: 
          -----------------------------------------------------------------------*/}
          <div className="visible md:hidden flex flex-col justify-center items-center bg-none">
            <p className=" text-black text-center text-xl font-bold md:text-3xl lg:text-4xl xl:text-6xl">
              Create kanban boards
            </p>
            <p className="text-black text-center text-sm md:text-md lg:text-lg xl:text-xl">
              Multi-task using separate boards to manage your work, projects and
              even your day
            </p>
          </div>
          <div className="xl:col-span-3 relative rounded-lg bg-black">
            <div className="absolute bottom-0 p-10">
              <p className="invisible md:visible  text-white text-3xl font-bold">
                Create kanban boards
              </p>
              <p className="invisible md:visible text-(--secondary-text--color) text-sm md:text-md lg:text-lg xl:text-xl font-bold">
                Multi-task using separate boards to manage your work, projects
                and even your day
              </p>
            </div>
            <img
              src={cardMovement}
              className="rounded-lg h-full w-[100%] mask-b-from-0"
            ></img>
          </div>

          {/* ----------------------------------------------------------------------- 
          Cards Features 2: 
          -----------------------------------------------------------------------*/}
          <div className="visible md:hidden flex flex-col justify-center items-center">
            <p className="text-black text-center text-xl font-bold md:text-3xl lg:text-4xl xl:text-6xl">
              Add your thoughts
            </p>
            <p className="text-black text-center text-sm md:text-md lg:text-lg xl:text-xl">
              Communicate easily using the comment section
            </p>
          </div>
          <div className="xl:col-span-2 relative rounded-lg bg-black">
            <div className="absolute bottom-0 p-10">
              <p className="invisible md:visible text-white text-3xl font-bold">
                Add your thoughts
              </p>
              <p className="invisible md:visible text-(--secondary-text--color) text-sm md:text-md lg:text-lg xl:text-xl font-bold">
                Communicate easily using the comment section
              </p>
            </div>
            <img
              src={addComment}
              className="rounded-4xl h-full w-[100%] mask-b-from-0"
            ></img>
          </div>

          {/* ----------------------------------------------------------------------- 
          Cards Features 3: 
          -----------------------------------------------------------------------*/}
          <div className="visible md:hidden flex flex-col justify-center items-center">
            <p className=" text-black text-center text-xl font-bold md:text-3xl lg:text-4xl xl:text-6xl">
              Easily manage your boards
            </p>
            <p className="text-black text-center text-sm md:text-md lg:text-lg xl:text-xl">
              Creare new boards, share them with others & collaborate to achieve
              goals faster
            </p>
          </div>
          <div className="xl:col-span-2 relative rounded-lg bg-black">
            <div className="absolute bottom-0 p-10">
              <p className="invisible md:visible text-white text-3xl font-bold">
                Easily manage your boards
              </p>
              <p className="invisible md:visible text-(--secondary-text--color) text-sm md:text-md lg:text-lg xl:text-xl font-bold">
                Creare new boards, share them with others & collaborate to
                achieve goals faster
              </p>
            </div>
            <img
              src={manageBoard}
              className="rounded-4xl h-full w-[100%] mask-b-from-0"
            ></img>
          </div>

          {/* ----------------------------------------------------------------------- 
          Cards Features 4: 
          -----------------------------------------------------------------------*/}
          <div className="visible md:hidden flex flex-col justify-center items-center">
            <p className="text-black text-center text-xl font-bold md:text-3xl lg:text-4xl xl:text-6xl">
              Customization at your fingertips
            </p>
            <p className="text-black text-center text-sm md:text-md lg:text-lg xl:text-xl">
              Move columns, cards, add or remove members fast
            </p>
          </div>
          <div className="xl:col-span-3 relative rounded-lg bg-black">
            <div className="absolute bottom-0 p-10">
              <p className="invisible md:visible  text-white text-3xl font-bold">
                Customization at your fingertips
              </p>
              <p className="invisible md:visible text-(--secondary-text--color) text-sm md:text-md lg:text-lg xl:text-xl font-bold">
                Move columns, cards, add or remove members fast
              </p>
            </div>
            <img
              src={columnMovement}
              className="rounded-4xl h-full w-[100%] mask-b-from-0"
            ></img>
          </div>
        </div>
      </div>

      {/* -----------------------------------------------------------------------
        Motivation 
        -----------------------------------------------------------------------*/}
      <div className="flex flex-col items-center gap-y-4 xl:flex-row xl:gap-x-10 justify-center text-lg md:text-3xl xl:text-4xl 2xl:text-6xl text-white font-bold">
        <p>Plan.Execute.Build</p>
        <button
          className="flex flex-row items-center gap-x-1 md:gap-x-4 py-2 px-6 md:py-3 md:px-7 lg:px-10 lg:py-4 border-2 rounded-full bg-white text-(--board-bg--color) text-md md:text-lg lg:text-xl 2xl:text-2xl font-semibold hover:cursor-pointer
            hover:ring-2 ring-(--background-white) ring-offset-4 ring-offset-(--card-bg--color) delay-150 transition ease-in-out"
        >
          Get started
          <span
            className={`${
              hoverState
                ? "translate-x-4 duration-200 delay-150 transition ease-in-out"
                : "duration-200 delay-150 transition ease-in-out"
            }`}
          >
            {arrowRight}
          </span>
        </button>
      </div>

      {/* -----------------------------------------------------------------------
        Footer 
        -----------------------------------------------------------------------*/}
      <div className="relative ">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Home;
