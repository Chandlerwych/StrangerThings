import React, { useState, useEffect } from "react";
import "./App.css";
import { getPosts, fetchMe } from "./api/auth";
import Register from "./components/RegisterComponent";
import HomeComponent from "./components/HomeComponent";

function App() {
  const [posts, setPosts] = useState([]);
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [user, setUser] = useState({});

  useEffect(() => {
    const getMe = async () => {
      const data = await fetchMe(token);
      //Passing the token to the FetchMe functions in auth.js so it can run using that value.
      setUser(data);
      console.log("user", user);
    };
    // Only run the getMe function IF a token exists.
    if (token) {
      getMe();
    }
  }, [token]);

  useEffect(() => {
    getPosts(setPosts);
  }, []);

  return (
    //Here we are running a ternary statement to check if there is a token
    //If there IS a token, give me the HomeComponent
    //If there is NO token, give me the Register page, ya done messed up.

    <div id="container">
      {token ? (
        //Have to pass posts as a prop so that we can map over it in the HomeComponent
        <HomeComponent posts={posts} user={user} />
      ) : (
        <Register setToken={setToken} />
      )}
    </div>
  );
}

export default App;
