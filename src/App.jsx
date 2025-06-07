import { useContext, useDeferredValue, useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Header from "./components/Header";
import Board from "./pages/Board";
import Filter from "./components/Filters";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import { Context, server } from "./main";
import Profile from "./pages/Profile";
import ResetPassword from "./pages/ResetPassword";

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
    setRefresh,
    setComments,
    myBoards,
    setMyBoards,
    sharedBoards,
    defaultBoard,
    setSharedBoards,
    setDefaultBoard,
    tokenAvailable,
    setTokenAvailable,
  } = useContext(Context);

  /** -----------------------------------------------------------------------
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
   *-----------------------------------------------------------------------*/
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

  /**-----------------------------------------------------------------------
   * @Hook: runs on every update to move distance and cards, 
   *        indicating a change in state indices
   * Make a array of objects of updated state id and new indices
   * Makes a PUT API call to update the index of states
   *
   * Array:
   * [
   *    {
   *      id: "78ksd", index: 0
   *    }
   * ]
   -----------------------------------------------------------------------*/
  useEffect(() => {
    let distance = Math.abs(moveDistance);
    const stateIdIndexArray = [];
    if (moveDistance > 0 || moveDistance < 0) {
      while (distance >= 0) {
        stateIdIndexArray.push({
          state_id: cards[distance].id,
          index: distance,
        });
        distance--;
      }
      try {
        axios.put(
          `${server}/states/updateStateIndices`,
          {
            stateIdIndexArray: stateIdIndexArray,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
            withCredentials: true,
          }
        );
        //setRefresh((prev) => !prev);
      } catch (error) {
        toast.error(error.response.data.message);
      }
    }
  }, [moveDistance]);

  /** -----------------------------------------------------------------------
   * @Hook: Runs on every render to keep user logged in on refresh
   * By verifying authentication, we can check if user is logged in or not
   * -----------------------------------------------------------------------*/
  useEffect(() => {
    if (defaultBoard) {
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
          axios.get(`${server}/comments/getMyComments`, {
            withCredentials: true,
          }),
          axios.get(`${server}/boards/getMyKanbanBoards`, {
            withCredentials: true,
          }),
          axios.get(`${server}/boards/sharedBoards`, {
            withCredentials: true,
          }),
        ])
        .then(
          axios.spread(
            (
              resUser,
              resAllUsers,
              resStates,
              resCards,
              resComments,
              resMyBoards,
              resSharedBoards
            ) => {
              setUser(resUser.data.user);
              setAllUsers(resAllUsers.data.users);
              setIsAuthenticated(true);
              createStateCardArray(resStates.data.states, resCards.data.cards);
              setComments(resComments.data.comments);
              setMyBoards(resMyBoards.data.boards);
              setSharedBoards(resSharedBoards.data.boards);
            }
          )
        )
        .catch((error) => {
          setUser({});
          setAllUsers({});
          setStateCardArr([]);
          setComments({});
          setIsAuthenticated(false);
          setMyBoards({});
          setSharedBoards({});
        });
    } else if (!defaultBoard) {
      console.log("i am in");
      axios
        .get(`${server}/users/getToken`, {
          withCredentials: true,
        })
        .then((response) => {
          setTokenAvailable(response.data.token);

          if (response.data.token) {
            // --------------------------
            axios
              .all([
                axios.get(`${server}/boards/getMyKanbanBoards`, {
                  withCredentials: true,
                }),
                axios.get(`${server}/boards/sharedBoards`, {
                  withCredentials: true,
                }),
              ])
              .then(
                axios.spread((resMyBoards, resSharedBoards) => {
                  setMyBoards(resMyBoards.data.boards);
                  setSharedBoards(resSharedBoards.data.boards);
                  setDefaultBoard(resMyBoards.data.selectedBoard);
                })
              )
              .catch((error) => {
                setMyBoards([]);
                setSharedBoards([]);
                setDefaultBoard(null);
              });
          }
          // --------------------------
        })
        .catch((error) => {
          setTokenAvailable(false);
        });
    }
  }, [isAuthenticated, refresh, defaultBoard]);

  return (
    <Router>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/card" element={<Board />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />}></Route>
        <Route path="/resetPassword" element={<ResetPassword />}></Route>
      </Routes>
      <Toaster></Toaster>
    </Router>
  );
}

export default App;
