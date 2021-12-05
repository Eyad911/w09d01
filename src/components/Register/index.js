import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import "./style.css"

const BASE_URL = process.env.REACT_APP_BASE_URL;
export const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("61a4f484e07f08ad6a1e03af");
  const [local, setLocal]= useState("")
  const navigate = useNavigate();

  // console.log(BASE_URL);
useEffect(() => {
    const token = localStorage.getItem("token");

    setLocal(token)
    
}, [])
  const signUp = async () => {
    const result = await axios.post(`${BASE_URL}/signUp`, {
      email,
      password,
      role,
    });
    console.log(result.data);
    navigate("/login")
  };

  return (
    <div className="mainDiv">
      <h1>Register</h1>
      <input
        type="email"
        name="email"
        placeholder="enter Email"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <br/>
      <input 
        type="password"
        name="password"
        placeholder="enter Password"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
            <br/>

      <button className="btnMain" onClick={signUp}>Register</button>
      <br/>

      <Link to="/login">Do you have an account ?</Link>
    </div>
  );
};
