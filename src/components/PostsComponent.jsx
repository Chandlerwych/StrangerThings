import React from "react";

const PostsComponent = ({ singlePost }) => {
  // console.log(props);
  return (
    <div className="App">
      <h3>Title{singlePost.title}</h3>
      <p>description{singlePost.description}</p>
      <p>author{singlePost.author.username}</p>
      <p>price{singlePost.price}</p>
    </div>
  );
};

export default PostsComponent;
