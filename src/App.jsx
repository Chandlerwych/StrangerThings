import React, { useState, useEffect } from "react";
import "./App.css";
import { getPosts } from "./api/auth";
import PostsComponent from "./components/PostsComponent";



function App() {
 const [posts, setPosts] = useState([]);
 const [username, setUsername] = useState("");
 const [password, setPassword] = useState("");
 const [testPassword, setTestPassword] = useState("");


useEffect(() => {
  // Need to add something to dependency array to force reruns
  getPosts(setPosts);
}, [])

// console.log(posts);
console.log(password);
console.log(testPassword);


  return ( 
    <form onSubmit={(e) => {
      e.preventDefault();
      // if({password} === {testPassword}){
      //   // Force into string then compare
      //   console.log("Great news, I am working");}
      //   console.log("I am not the same")
      //   console.log("This is the password: ", password, "This is the testPassword: ", testPassword)
      
    }}>
      {/* e = event */}
      <input type="text" value={username} placeholder="Username" required onChange={(e)=>{setUsername(e.target.value)}}></input>
      <input type="password" value={password} placeholder="Password" required minLength="8" onChange={(e)=>{setPassword(e.target.value)}}></input>
      <input type="password" value={testPassword} placeholder="Confirm Password" required onChange={(e)=>{setTestPassword(e.target.value)}}></input>
      <button type="submit">Submit</button>
    </form>
    // posts.map(singlePost => {
      //   return (
        //     <PostsComponent key={singlePost._id} singlePost={singlePost} />
        //   )}
        // )
        )
      }
      
export default App;
