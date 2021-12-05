import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import "./style.css";

const BASE_URL = process.env.REACT_APP_BASE_URL;
export const Tasks = () => {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState('');

  const [local,setLocal]= useState("");
const navigate = useNavigate();
  useEffect(() => {
    getTask();
  }, []);
  useEffect(() => {
    const getToken = localStorage.getItem("token");
    setLocal(getToken);
    getTask();
  }, []);

  const getTask = async () => {
    const result = await axios.get(`${BASE_URL}/tasks`,{
    headers: {
        Authorization: `Bearer ${local}`,
      },});
    setTasks(result.data);
  };

  const addTask = async () => {
      await axios.post(
        `${BASE_URL}/task`,
        {
          task: task,
        },
        {
          headers: {
            Authorization: `Bearer ${local}`,
          },
        }
      );
    
    getTask(local);
  };

  const updateTask = async(id)=>{
 
   
    await axios.put(
        `${BASE_URL}/task/${id}`,
        {
          task: updateTask,
        },
        {
          headers: {
            Authorization: `Bearer ${local}`,
          }
        }
      );
      getTask(local);
    }

    const deleteTask =async(id)=>{
        await axios.delete(`${BASE_URL}/delete/${id}`, {
            headers: {
              Authorization: `Bearer ${local}`,
            },
          })
          getTask(local);
    }


  


  const logOut =()=>{

   localStorage.clear()
   navigate('/login')

  }
  
  return (
    <div className="mainDiv">
         <div >
              <input
                className="addInput"
                onChange={(e) => setTask(e.target.value)}
                placeholder="new Task"
              />
              <button className="addBtn" onClick={addTask}>
                Add
              </button>
            </div>
     
      {tasks.map((item, i) => (
        <ul>
          <li key={i}>{item.task}</li>
          <div>
                      <button
                        className="edit"
                        onClick={() => updateTask(task._id)}
                      >
                        Edit
                      </button>
                      <button
                        className="delete"
                        onClick={() => deleteTask(task._id)}
                      >
                        Delete
                      </button>
                    </div>
        </ul>
      ))}
      <button  id="btnLogout"onClick={logOut}>logout</button>



      

     
  
    </div>
  )};
