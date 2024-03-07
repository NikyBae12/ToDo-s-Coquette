import React from 'react'
import './ToDoCreate.css'
import { ToDoContext } from '../../context/ToDoContext';
import { DeleteIcon } from '../ToDoIcons/DeleteIcon';

function ToDoCreate() {

  const { 
    modalRef, 
    setOpenModal,
    addToDo
  } = React.useContext(ToDoContext);

  const [newToDoValue, setNewToDoValue] = React.useState('')

  const onSubmit = (event) => {
    event.preventDefault();
    setOpenModal(false)
    addToDo(newToDoValue)
  }

  const onCancel = () => {
    setOpenModal(false)
  }

  const onChange = (event) => {
    setNewToDoValue(event.target.value)
  }

  return (
    <form 
      className="createTODO"
      ref={modalRef}
      onSubmit={onSubmit}
    >
      <div className='formHeader'>
        <h2>¡Crea un nuevo ToDo!</h2>
        <DeleteIcon 
          onDelete={onCancel}
        />
      </div>

      <div className='formContent'>
        <textarea 
          type="text"
          className='inputText'
          placeholder="Escribe tu nuevo ToDo"
          value={newToDoValue}
          onChange={onChange}
          required
        />
        <div className='formBox'>
          <input 
            className='btnCancel'
            type="button" 
            value="Cancelar" 
            onClick={onCancel} 
          />
          <input 
            className='btnCreateToDo'
            type="submit" 
            value="Crear"
            onClick={onSubmit}
          />
        </div>
      </div>
    </form>
  );
}

export { ToDoCreate }