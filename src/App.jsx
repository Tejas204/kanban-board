import { useContext, useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Header from "./components/Header";
import Board from "./pages/Board";
import { Toaster } from "react-hot-toast";
import axios from "axios";
import { Context, server } from "./main";
import Profile from "./pages/Profile";

function App() {
  const { setUser, setIsAuthenticated, setIsLoading, cards, setStateCardArr } =
    useContext(Context);

  /**
   * @Function: createStateCardArray
   * Uses the states and cards to create an array of states and cards in below format
   *     [
   *      {
   *        ID: INT
   *        STATE: STR
   *        CARDS: ARR[OBJ]
   *      }
   *     ]
   */
  const createStateCardArray = (receivedStates, receivedCards) => {
    receivedStates.map((state) => {
      var obj = {
        id: state._id,
        state: state.name,
        cards: receivedCards,
      };
      setStateCardArr([...cards, obj]);
    });
    return;
  };

  /**
   * @Hook: Runs on every render to keep user logged in on refresh
   * By verifying authentication, we can check if user is logged in or not
   */
  useEffect(() => {
    setIsLoading(true);
    axios
      .all([
        axios.get(`${server}/users/myProfile`, {
          withCredentials: true,
        }),
        axios.get(`${server}/states/getMyStates`, {
          withCredentials: true,
        }),
        axios.get(`${server}/cards/myCards`, {
          withCredentials: true,
        }),
      ])
      .then(
        axios.spread((resUser, resStates, resCards) => {
          setUser(resUser.data.user);
          setIsAuthenticated(true);
          createStateCardArray(resStates.data.states, resCards.data.cards);
          setIsLoading(false);
        })
      )
      .catch((error) => {
        setUser({});
        setIsAuthenticated(false);
        setIsLoading(false);
      });
  }, []);

  return (
    <Router>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/card" element={<Board />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />}></Route>
      </Routes>
      <Toaster></Toaster>
    </Router>
  );
}

export default App;
