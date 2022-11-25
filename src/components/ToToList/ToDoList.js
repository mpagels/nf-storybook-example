import React from 'react'
import ToDo from '../ToDo/ToDo'

export default function ToDoList({ listOfToDos }) {
  return (
    <ul>
      {listOfToDos.map((todo) => (
        <li key={todo.name}>
          <ToDo text={todo.name} completed={todo.completed} />
        </li>
      ))}
    </ul>
  )
}
