import React,{useEffect,useState} from "react";
import axios from "axios";
import { useNavigate , Link} from "react-router-dom";
import './style.css'



const BASE_URL = process.env.REACT_APP_BASE_URL
export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [local,setLocal] =useState('')
  const navigate = useNavigate();

  useEffect(() => {
     
const token = localStorage.getItem("token");

setLocal(token)

  }, [])

  const logInB = async()=>{
    const result = await axios.post(`${BASE_URL}/login`,{
       email,
       password,
    
    });

    // headers ={
    //     Authorization:``
    // }
    
    localStorage.setItem("token", result.data.token);

     navigate('/tasks')
}

  return (
    <div>
        {!local ? (
            <div className="mainDiv">
      <h1>Login</h1>
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
        name="email"
        placeholder="enter Password"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
            <br/>

      <button className="btnMain"  onClick={logInB}>Login</button>
      <br/>

      </div>
      ):(
          <h3><Link to="/tasks">your Tasks</Link></h3>
      )}
    </div>
  );
};
