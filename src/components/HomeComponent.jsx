import React from "react";
import { useReducer } from "react";
import PostsComponent from "./PostsComponent";

const HomeComponent = ({ posts, user }) => {
  return (
    <div>
      <h1>Hello, {user.username}</h1>
      <h2>Here are your posts!</h2>
      {/* Map through the posts array created in App.jsx and create a new array of the singlePost */}
      {posts.map((singlePost) => {
        // Run PostsComponent with the following Props and give me that HTML on my page. BooYah.
        return <PostsComponent key={singlePost._id} singlePost={singlePost} />;
      })}
    </div>
  );
};

export default HomeComponent;
