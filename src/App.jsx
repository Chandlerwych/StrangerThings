import React, { useState, useEffect } from "react";
import "./App.css";
import { getPosts } from "./api/auth";
import PostsComponent from "./components/PostsComponent";
import Register from "./components/Register";



function App() {
 const [posts, setPosts] = useState([]);

useEffect(() => {
  // Need to add something to dependency array to force reruns
  getPosts(setPosts);
}, [])

// console.log(posts);
console.log(password);
console.log(testPassword);


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
