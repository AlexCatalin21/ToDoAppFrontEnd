import React from 'react'

export default function ToDoItem(props) {
    console.log(props)
    return (
        <div>
            {props.toDo.description}
            
        </div>
    )
}
