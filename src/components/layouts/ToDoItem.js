import React,{useEffect,useState} from "react";
import {Button} from "react-bootstrap"
import axios from "axios";


export default function ToDoItem(props) {
  console.log(props);
  const deleteAPI = "http://localhost:8080/api/v1/todos/delete/"+ props.toDo.id;

  const handleDelete = () => {
    
      axios.delete(deleteAPI).then((res) => {
        if (res.status === 200) {
          console.log(res);
        }
      });
    }
  
  return (
    <div className="toDOItemContainer">
      <h4>{props.toDo.description}</h4>
      <div className="toDoDetails">
        <div className="toDoInfo">Creation Date: {props.toDo.creationDate ? props.toDo.creationDate.split("T")[0] : null} |</div>
        <div className="toDoInfo">Expiring Date : {props.toDo.expiringDate ? props.toDo.expiringDate.split("T")[0] : null} |</div>
        <div className="toDoInfo">Allocated Days: {props.toDo.allocatedTime} |</div>
        <div className="toDoInfo">Estimated Spent Days: {props.toDo.estimatedDays} |</div>
        <div className="toDoInfo">Completion Time: {props.toDo.completionTime ? props.toDo.completionTime.split("T")[0]: null} |</div>
        <div className="toDoInfo">
        <Button variant="danger" onClick={handleDelete}>Delete</Button> |
        </div>
        <div className="toDoInfo">
        <Button variant="success">Done</Button>
      </div>
    </div>
    </div>
  );
}



