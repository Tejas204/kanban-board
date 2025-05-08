import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createContext } from "react";

export const server = "https://kanban-board-06yn.onrender.com/api/v1";

export const Context = createContext({ isAuthenticated: false });

const AppWrapper = () => {
  /**
   * @Hooks: Used to provide authentication and throttling
   */
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState({});
  const [allUsers, setAllUsers] = useState({});
  const [cards, setStateCardArr] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const [moveDistance, setMoveDistance] = useState(0);
  const [comments, setComments] = useState({});
  const [pillOption, setPillOption] = useState();
  const [myBoards, setMyBoards] = useState({});
  const [sharedBoards, setSharedBoards] = useState({});

  return (
    <Context.Provider
      value={{
        isAuthenticated,
        setIsAuthenticated,
        isLoading,
        setIsLoading,
        user,
        setUser,
        cards,
        setStateCardArr,
        allUsers,
        setAllUsers,
        refresh,
        setRefresh,
        moveDistance,
        setMoveDistance,
        comments,
        setComments,
        pillOption,
        setPillOption,
        myBoards,
        setMyBoards,
        sharedBoards,
        setSharedBoards,
      }}
    >
      <App />
    </Context.Provider>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppWrapper></AppWrapper>
  </React.StrictMode>
);
