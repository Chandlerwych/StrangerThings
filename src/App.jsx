import React, { useState, useEffect } from "react";
import "./App.css";
import { getPosts } from "./api/auth";
import PostsComponent from "./components/PostsComponent";



function App() {
 const [posts, setPosts] = useState([]);


useEffect(() => {
  getPosts(setPosts);
}, [])

console.log(posts);

  return ( 
    posts.map(singlePost => {
      return (
        <PostsComponent key={singlePost._id} singlePost={singlePost} />
      )}
    ))
}

export default App;
