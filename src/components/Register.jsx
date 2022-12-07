import React, {useState, useEffect} from "react";

const Register = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [testPassword, setTestPassword] = useState("");
    return <div>
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
    </div>
}

export default Register