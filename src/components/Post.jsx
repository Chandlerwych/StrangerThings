import React, { useState } from "react";

const createNewPost = async (post) => {
  e.preventDefault();
  try {
    const response = await fetch(
      `https://strangers-things.herokuapp.com/api/${cohortName}/posts`,
      {
        method: "POST",
        body: JSON.stringify(post),
        headers: {
          "content-type": "application/json; charset=UTF-8",
        },
      }
    );
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const Post = (posts) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");

  return (
    <div>
      <form>
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
        <button
          onClick={async () => {
            e.preventDefault();
            const newPost = await createNewPost();
            console.log(newPost);
            setPosts([newPost, ...posts]);
            console.log(posts);
          }}
        >
          Create New Post
        </button>
      </form>
    </div>
  );
};

export default createNewPost;
