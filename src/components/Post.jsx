import React, { useState } from "react";
import { createNewPost } from "../api/auth";

export const Post = ({posts, setPosts}) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");

  return (
    <div>
      <form onSubmit={async () => {
        try {
          // e.preventDefault();
          const newPost = await createNewPost(title, description, price);
          console.log('this is onSubmit Post function',newPost);
        setPosts([newPost, ...posts]);

        } catch (error) {
          console.log(error);
        }
        
        
        
      }}>
        <h1>New Post</h1>
        <input
          type="text"
          value={title}
          placeholder="Item for sale"
          required
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        ></input>
        <input
          type="text"
          value={description}
          placeholder="Description of item"
          required
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        ></input>
        <input
          type="text"
          value={price}
          placeholder="Price"
          required
          onChange={(e) => {
            setPrice(e.target.value);
          }}
        ></input>
        <button type="submit">
          Create New Post
        </button>
      </form>
    </div>
  );
};

export default createNewPost;
