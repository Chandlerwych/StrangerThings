import React, { useState, useEffect } from "react";
import "./App.css";
import { getPosts, fetchMe } from "./api/auth";
import Register from "./components/RegisterComponent";
import HomeComponent from "./components/HomeComponent";
import WelcomePage from "./components/WelcomeComponent";

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

console.log(token);

  return (
    //Here we are running a ternary statement to check if there is a token
    //If there IS a token, give me the HomeComponent
    //If there is NO token, give me the Register page, ya done messed up.

    <div id="container">
      {token ? (
        //Have to pass posts as a prop so that we can map over it in the HomeComponent
        <HomeComponent posts={posts} user={user} setToken={setToken} />
      ) : (
        // call welcome page component here, then call register component in the welcome comonent if user clicks to register new user, but default to login 
        <WelcomePage setToken={setToken}/>
        // <Register  />
      )}
    </div>
  );
}

export default App;
