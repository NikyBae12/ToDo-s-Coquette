import React from "react"
import ReactDOM from "react-dom"
import './Modal.css'
import { ToDoContext } from "../../context/ToDoContext"

function Modal({ children }) {

  const { closeModal } = React.useContext(ToDoContext);

  return ReactDOM.createPortal(
    <div 
      className="modal" 
      onClick={closeModal}
    >
      {children}
    </div>,
    document.getElementById('modal')
  )
}

export { Modal }