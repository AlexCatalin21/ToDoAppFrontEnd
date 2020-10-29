import React from "react";

export default function ToDoItem(props) {
  console.log(props);
  return (
    <tr>
      <td>{props.toDo.description}</td>
      <td>{props.toDo.creationDate}</td>
      <td>{props.toDo.estimatedDays}</td>
      <td>{props.toDo.expiringDate}</td>
      <td>{props.toDo.allocatedTime}</td>
      <td>{props.toDo.completionTime}</td>
      <td>Delete</td>
      <td>Mark as Done</td>
    </tr>
  );
}
