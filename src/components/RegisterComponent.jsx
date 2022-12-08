import React, { useState, useEffect } from "react";
import { registerUser } from "../api/auth";

const Register = ({ setToken }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [testPassword, setTestPassword] = useState("");

  return (
    <div>
      <h1>Hi there!</h1>
      <h2> Please register below</h2>

      <form
        onSubmit={async (e) => {
          try {
            e.preventDefault();
            // console.log(
            //   "this is username",
            //   username,
            //   "this is password",
            //   password
            // );
            const token = await registerUser(username, password);

            // We set the state of token to token in order to force the useEffect to rerender the page (use Effect in App.jsx)
            setToken(token);

            // here we retrive the token from the user via the registeruser function/api above, and save it in local storage to be used elsewhere
            localStorage.setItem("token", token);

            // the if/else below determines if the passwords match or not
            if (password === testPassword) {
              // setIsTrue(!isTrue);   ** this is a way to tell a user passwords dont match on screen per Steven
              console.log("I am working!");
            } else {
              console.log("I am not the same");
            }
          } catch (error) {
            console.error(error);
          }
        }}
      >
        {/* e = event */}
        <input
          type="text"
          value={username}
          placeholder="Username"
          required
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        ></input>

        <input
          type="password"
          value={password}
          placeholder="Password"
          required
          minLength="8"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        ></input>

        <input
          type="password"
          value={testPassword}
          placeholder="Confirm Password"
          required
          minLength="8"
          onChange={(e) => {
            setTestPassword(e.target.value);
          }}
        ></input>

        <button type="submit">Register New User</button>
      </form>
    </div>
  );
};

export default Register;
