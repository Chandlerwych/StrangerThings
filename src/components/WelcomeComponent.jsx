import React, { useState } from "react";
import Register from "./RegisterComponent";
import { Link } from "react-router-dom";



const WelcomePage = ({setToken}) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");






  return (
    
    // return the login screen with a register component/redirect for new user registration if clicked 
    <div>
      <form>
        <input type="text"
          value={username}
          placeholder="Username"
          required
          onChange={(e) => {
            setUsername(e.target.value);
          }}
>
        </input>
        <input type="text"
          value={password}
          placeholder="Password"
          required
          onChange={(e) => {
            setPassword(e.target.value);
          }}
>
        </input>
        <button>Login Existing User</button>
      </form>
      <Link to='/register'>New users, click here to setup your new account!</Link>
    </div>
    )
};


export default WelcomePage
