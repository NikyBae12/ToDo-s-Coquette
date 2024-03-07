import React from "react"
import './ToDoEmpty.css'
const EmptyJPG = require('../../assets/empty_todos.jpg')

function ToDoEmpty() {
  return (
    <div className='empty'>
      <img src={ EmptyJPG } alt=""></img>
      <p>No hay ToDo's por completar.</p>
      <p>¡Agrega uno!</p>
    </div>
  )
}

export { ToDoEmpty }