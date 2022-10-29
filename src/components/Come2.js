import React from "react";
import { useDispatch } from "react-redux";
import { login,logout } from "../store/userSlice";
const Come2 = () => {
    const dispath = useDispatch();

    const user = {
        username:"sumet",
        password:'234234'
    }

    const handleLogin = () =>{
        dispath(login(user))
    }
  return (
    <div>
      <h1>page 2 ... </h1>
      <button onClick={handleLogin}>Login</button>
      <button onClick={()=>dispath(logout())}>Login</button>
    </div>
  );
};

export default Come2;
