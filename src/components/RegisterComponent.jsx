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
                  if(password === testPassword){
                    // setIsTrue(!isTrue);   ** this is a way to tell a user passwords dont match on screen per Steven
                    console.log('I am working!');
                  } else {
                    console.log('I am not the same'); 
                  }
                } catch (error) {
                  console.log(error);
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