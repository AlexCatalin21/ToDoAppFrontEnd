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
  }, [toDoAPI]);
  return (
    <table>
      <thead>
        <tr>
          <td>Description</td>
          <td>Creation Date</td>
          <td>Estimated Time</td>
          <td>Expiring Date</td>
          <td>Allocated Time</td>
          <td>Completion Date</td>
          <td>Delete</td>
          <td>Mark as Done!</td>
        </tr>
      </thead>

      <tbody>
        {toDos.map((toDo, index) => {
          return <ToDoItem toDo={toDo} key={index} />;
        })}
      </tbody>
    </table>
  );
}
