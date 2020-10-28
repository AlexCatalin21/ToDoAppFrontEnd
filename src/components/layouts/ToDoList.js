import React,{ useState, useEffect } from 'react'
import ToDoItem from './ToDoItem';
import axios from "axios";

export default function ToDoList() {
    const toDoAPI = "http://localhost:8080/api/v1/todos"
    const [toDos,setToDos]= useState([])

    useEffect(() => {
    axios.get(toDoAPI).then((res) => {
      setToDos(res.data);
      console.log(res.data);
    });
  }, [toDoAPI]);
    return (
        <div>
          {toDos.map((toDo,index) => {
            return(
              <ToDoItem toDo={toDo} key={index}/>
            )
          })}
           
        </div>
    )
}
