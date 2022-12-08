import React, { useState, useEffect } from "react";

import "./App.css";
import { getPosts, fetchMe } from "./api/auth";
import { Route, Router, Routes, Link, Navigate } from "react-router-dom";
import Register from "./components/RegisterComponent";
import HomeComponent from "./components/HomeComponent";
import WelcomePage from "./components/WelcomeComponent";
import ErrorComponent from "./components/ErrorComponent";

function App() {
  const [posts, setPosts] = useState([]);
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [user, setUser] = useState({});

  useEffect(() => {
    const getMe = async () => {
      const data = await fetchMe(token);
      //Passing the token to the FetchMe functions in auth.js so it can run using that value.
      setUser(data);
    };
    // Only run the getMe function IF a token exists.
    if (token) {
      getMe();
    }
  }, [token]);

  useEffect(() => {
    getPosts(setPosts);
  }, []);

  // console.log(token);
  const isLoggedIn = () => {
    token ? <Navigate to="/home" /> : <Navigate to="/" />;
    // token ? <HomeComponent /> : <WelcomePage />;
    // if (token) {
    //   return <HomeComponent />;
  };

  useEffect(() => {
    isLoggedIn();
  }, [token]);

  return (
    <div id="container">
      <Routes>
        <Route path="/" element={<WelcomePage setToken={setToken} />}></Route>
        <Route
          path="/home"
          element={
            <HomeComponent posts={posts} user={user} setToken={setToken} />
          }
        ></Route>
        <Route path="/register" element={<Register setToken={setToken} />}>
          {" "}
        </Route>
        <Route path="*" element={<ErrorComponent />}>
          {" "}
        </Route>
      </Routes>
    </div>
  );
}

export default App;
