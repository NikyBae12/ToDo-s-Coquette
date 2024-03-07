import React from 'react'
import './ToDoCounter.css'
import { ToDoContext } from '../../context/ToDoContext';

function ToDoCounter() {

  const { 
    totalToDos: total, 
    completedToDos: completed 
  } = React.useContext(ToDoContext)

  return (
    <h1 className='ToDoCounter'>
      {
        total === completed
          ? <CompletedToDos />
          : <PendingToDos total={total} completed={completed} />
      }
    </h1>
  );
}

function CompletedToDos() {
  return (
    <p>
      <span>¡Felicidades!</span> Has completado todos tus ToDo's
    </p>
  )
}

function PendingToDos({ total, completed }) {
  return (
    <p>
      Completaste <span>{completed}</span> de <span>{total}</span> ToDo's
    </p>
  )
}


export { ToDoCounter }