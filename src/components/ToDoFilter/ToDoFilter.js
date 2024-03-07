import React from 'react'
import './ToDoFilter.css'
import { ToDoContext } from '../../context/ToDoContext';

function ToDoFilter() {

  const { 
    searchValue, 
    setSearchValue 
  } = React.useContext(ToDoContext)

  return (
    <div className='ToDoFilter'>
      <input 
        placeholder="Filtrar por Actividad"
        value = {searchValue}
        onChange={
          (event) => {
            setSearchValue(event.target.value)
          }
        }
      />
    </div>
  )
}

export { ToDoFilter }