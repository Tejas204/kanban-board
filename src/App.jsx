import { useContext, useDeferredValue, useEffect, useState } from "react";
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
  const {
    setUser,
    setIsAuthenticated,
    isAuthenticated,
    setIsLoading,
    cards,
    setStateCardArr,
    setAllUsers,
    refresh,
    moveDistance,
  } = useContext(Context);

  /**
   * @Function: createStateCardArray
   * @Params: receivedStates, receivedCards <Obj>
   * @Returns: stateCardArray <Array[Obj]>
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
    var arr = [];
    receivedStates.map((state) => {
      var obj = {
        id: state._id,
        state: state.name,
        index: state.index,
        cards: receivedCards.filter((c) => c.state == state._id),
      };
      arr.push(obj);
    });
    setStateCardArr(arr);
  };

  useEffect(() => {
    let distance = Math.abs(moveDistance);
    if (moveDistance > 0 || moveDistance < 0) {
      while (distance >= 0) {
        console.log(
          "Card " +
            cards[distance].state +
            " will be moved to index " +
            distance
        );
        distance--;
      }
    }
  }, [cards, moveDistance]);

  /**
   * @Hook: Runs on every render to keep user logged in on refresh
   * By verifying authentication, we can check if user is logged in or not
   */
  useEffect(() => {
    axios
      .all([
        axios.get(`${server}/users/myProfile`, {
          withCredentials: true,
        }),
        axios.get(`${server}/users/allUsers`, {
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
        axios.spread((resUser, resAllUsers, resStates, resCards) => {
          setUser(resUser.data.user);
          setAllUsers(resAllUsers.data.users);
          setIsAuthenticated(true);
          createStateCardArray(resStates.data.states, resCards.data.cards);
        })
      )
      .catch((error) => {
        setUser({});
        setAllUsers({});
        setStateCardArr([]);
        setIsAuthenticated(false);
      });
  }, [isAuthenticated, refresh]);

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
