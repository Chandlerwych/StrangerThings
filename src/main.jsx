import React from "react";
import { Profiler } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import PostsComponent from "./components/PostsComponent";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

//? **************** Steps to complete****************
//! Make non-users able to see the posts without logging in
// 1. add NavBar
//   - post
//   - logout
//   - Profile
// 2. in Posts page
//     - add option
//     - delete option
//     -MAYBE edit option
// 3. Message form to message the author of a post
// 4. search form
