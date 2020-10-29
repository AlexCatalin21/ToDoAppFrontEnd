import React, { useState, useEffect } from "react";
import ToDoItem from "./ToDoItem";
import axios from "axios";

export default function ToDoList() {
  const toDoAPI = "http://localhost:8080/api/v1/todos";
  const [toDos, setToDos] = useState([]);
  

  useEffect(() => {
    axios.get(toDoAPI).then((res) => {
      setToDos(res.data);
      console.log(res.data);
    });
  }, []);

  const sortByDateAsc = () =>{
    setToDos(
      [...toDos].sort((a, b) =>
        a.expiringDate > b.expiringDate ? 1 : -1
      )
    );
  }

  const sortByDateDesc = () =>{
    setToDos(
      [...toDos].sort((a, b) =>
        a.expiringDate > b.expiringDate ? -1 : 1
      )
    );
  }
  return (
    <div className="toDoContainer">
      <div className=" mb-4 ">
        <span>Sort by expiring day :</span>
        <button onClick={sortByDateAsc}>Asc</button>
        <button onClick={sortByDateDesc}>Desc</button>

      </div>
      {toDos.map((toDo,index) => {
        return <ToDoItem toDo={toDo} key={index}/>
      })}
    </div>
  );
}
