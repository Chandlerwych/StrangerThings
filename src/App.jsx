import React, { useState, useEffect } from "react";
import "./App.css";
import { getPosts, fetchMe } from "./api/auth";
import PostsComponent from "./components/PostsComponent";
import Register from "./components/RegisterComponent";




function App() {
 const [posts, setPosts] = useState([]);
 const [token, setToken] = useState(localStorage.getItem("token"));

useEffect(() => {
  // Need to add something to dependency array to force reruns
  getPosts(setPosts);
}, [])

useEffect(() => {
  const getMe = async () => {
    const data = await fetchMe(token);
    console.log(data);
  };
  getMe();
}, []);



// console.log(posts);
// console.log(password);
// console.log(testPassword);


  return ( 
    <div>
      <Register />
    </div>
    // posts.map(singlePost => {
      //   return (
        //     <PostsComponent key={singlePost._id} singlePost={singlePost} />
        //   )}
        // )
        )
      }
      
export default App;
