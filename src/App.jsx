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
  const { setUser, setIsAuthenticated, setIsLoading, setStates, setCards } =
    useContext(Context);

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
        axios.get(`${server}/states/allStates`, {
          withCredentials: true,
        }),
        axios.get(`${server}/cards/myCards`, {
          withCredentials: true,
        }),
      ])
      .then(
        axios.spread((resUser, resStates, resCards) => {
          setUser(resUser.data.user);
          setStates(resStates.data.columns);
          setCards(resCards.data.cards);
          setIsAuthenticated(true);
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
