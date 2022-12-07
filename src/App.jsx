import React, { useState, useEffect } from "react";
import "./App.css";
import { getPosts, fetchMe } from "./api/auth";
import PostsComponent from "./components/PostsComponent";
import Register from "./components/RegisterComponent";

function App() {
  const [posts, setPosts] = useState([]);
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [user, setUser] = useState({});

  useEffect(() => {
    // !Need to add something to dependency array to force reruns
    getPosts(setPosts);
  }, []);

  useEffect(() => {
    const getMe = async () => {
      const data = await fetchMe(token);
      //Passing the token to the FetchMe functions in auth.js so it can run using that value.
      setUser(data);
      console.log("user", user);
    };
    if (token) {
      getMe();
    }
  }, []);

  return (
    <div>
      <h1>{user?.username} Welcome</h1>
      <h2> to Stranger's Things!</h2>
      <Register />
    </div>
    // posts.map(singlePost => {
    //   return (
    //     <PostsComponent key={singlePost._id} singlePost={singlePost} />
    //   )}
    // )
  );
}

export default App;
