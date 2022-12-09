import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="Nav">
      <Link to="/home">Home</Link>
      <Link to="/profile">Profile</Link>
      <Link to="/">Post</Link>
    </div>
  );
};

export default Nav;
