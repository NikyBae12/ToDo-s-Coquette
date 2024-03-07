import React from 'react'
import { ToDoContext } from '../../context/ToDoContext'
import './ToDoCreateBtn.css'

function ToDoCreateBtn() {

  const { openModal, setOpenModal } = React.useContext(ToDoContext);

  return (
    <input 
      className="btnCreate" 
      value="+"
      type="button"
      onClick={
        () => {
          setOpenModal(!openModal)
        }
      }
    />
  )
}

export { ToDoCreateBtn }