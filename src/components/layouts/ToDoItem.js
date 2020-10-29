import React from "react";
import {Button} from "react-bootstrap"
import axios from "axios";


export default function ToDoItem(props) {

  console.log(props);
  const deleteAPI = "http://localhost:8080/api/v1/todos/delete/"+ props.toDo.id;
  const updateAPI = "http://localhost:8080/api/v1/todos/update/"+ props.toDo.id

  const getRemainingTime = () =>{
    const diffTime = Math.abs(new Date(props.toDo.expiringDate) - new Date());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    console.log(diffDays);
    if (diffDays <= 1 & props.toDo.status.id !== 2){
      return "toDoInfo text-danger"
    } else {
      return "toDoInfo"
    }
  }

  const setColorByType = ()=> {
    if (props.toDo.type.id === 1){
      return "homeToDo"
    }else{
      if (props.toDo.type.id === 2) {
        return "workToDo"
      }else { if (props.toDo.type.id ===3){
        return "freeTimeToDo"
      }}
    }
    
    
  }
    

  const handleDelete = () => {
    
      axios.delete(deleteAPI).then((res) => {
        if (res.status === 200) {
          console.log(res);
        }
      });
      window.location.reload()
    }

  const handleDone = ()=>{
    axios.put(updateAPI,{completionDate:new Date(),statusId:2}).then((res) => {
      if (res.status === 200) {
        console.log(res)
        console.log(props.toDo.completionTime)
      }
    })
    window.location.reload();
  }  
  
  return (
    <div className={setColorByType()}>
      <h4>{props.toDo.description}</h4>
      <div className="toDoDetails">
        <div className="toDoInfo">Creation Date: {props.toDo.creationDate ? props.toDo.creationDate.split("T")[0] : null} |</div>
        <div className={getRemainingTime()}>Expiring Date : {props.toDo.expiringDate ? props.toDo.expiringDate.split("T")[0] : null} |</div>
        <div className="toDoInfo">Allocated Days: {props.toDo.allocatedTime} |</div>
        <div className="toDoInfo">Estimated Spent Days: {props.toDo.estimatedDays} |</div>
        <div className="toDoInfo">Completion Time: {props.toDo.completionDate ? props.toDo.completionDate.split("T")[0]: null} |</div>
        {props.toDo.status.id === 2  ? null : <div className="toDoDetails"><div className="toDoInfo">
        <Button variant="danger" onClick={handleDelete}>Delete</Button> |
        </div>
        <div className="toDoInfo">
        <Button variant="success" onClick={handleDone}>Done</Button>
      </div></div>}
        
    </div>
    </div>
  );
}



