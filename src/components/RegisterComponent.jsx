import React, {useState, useEffect} from "react";
import { registerUser } from "../api/auth";

const Register = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [testPassword, setTestPassword] = useState("");
    return <div>
              <form onSubmit={async (e) => {
                try {
                  e.preventDefault();
                  console.log('this is username', username, 'this is password', password)
                  const token = await registerUser (username, password);
                 
                  // here we retrive the token from the user via the registeruser function/api above, and save it in local storage to be used elsewhere
                  localStorage.setItem("token", token);
                 

                  // the if/else below determines if the passwords match or not
                  if(password === testPassword){
                    // setIsTrue(!isTrue);   ** this is a way to tell a user passwords dont match on screen per Steven
                    console.log('I am working!');
                  } else {
                    console.log('I am not the same'); 
                  }
                } catch (error) {
                  console.error(error);
                }
              }}>

                {/* e = event */}
                <input 
                  type="text" 
                  value={username} 
                  placeholder="Username" 
                  required 
                  onChange={(e)=>{setUsername(e.target.value)}}>
                </input>

                <input 
                  type="password" 
                  value={password} 
                  placeholder="Password" 
                  required 
                  minLength="8" 
                  onChange={(e)=>{setPassword(e.target.value)}}>
                </input>

                <input 
                  type="password" 
                  value={testPassword} 
                  placeholder="Confirm Password" 
                  required
                  minLength="8"  
                  onChange={(e)=>{setTestPassword(e.target.value)}}>
                </input>

                <button type="submit">Submit</button>
              </form>
    </div>
}

export default Register