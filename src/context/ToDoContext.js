import React from "react"
import { useLocalStorage } from '../localStorage/localStorage';

const ToDoContext = React.createContext()

function ToDoProvider({ children }) {
  const { 
    item: toDos, 
    saveItem: saveToDos,
    loading,
    error
  } = useLocalStorage('ToDos_V1', [])

  const [ searchValue, setSearchValue ] = React.useState('')
  const [ openModal, setOpenModal ] = React.useState(false)

  const completedToDos = toDos.filter(
    todo => {
      return todo.completed
    }
  ).length
  const totalToDos = toDos.length

  const searchedToDos = toDos.filter(
    todo => {
      const text = todo.text.toLowerCase()
      const searchText = searchValue.toLowerCase()
      return text.includes(searchText)
    }
  )

  const addToDo = (text) => {
    const newToDos = [...toDos]
    newToDos.push({
      completed: false,
      text
    })
    saveToDos(newToDos)
  }

  const completeToDo = (text) => {
    const newToDos = [...toDos]
    const index = newToDos.findIndex(todo => todo.text === text)
    newToDos[index].completed = !newToDos[index].completed
    saveToDos(newToDos)
  }

  const deleteToDo = (text) => {
    const newToDos = [...toDos]
    const index = newToDos.findIndex(todo => todo.text === text)
    newToDos.splice(index, 1)
    saveToDos(newToDos)
  }

  const modalRef = React.useRef();

  const closeModal = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      setOpenModal(!openModal)
    }
  };

  return (
    <ToDoContext.Provider value={{
        loading,
        error,
        totalToDos, 
        completedToDos, 
        searchValue, 
        setSearchValue, 
        searchedToDos, 
        addToDo,
        completeToDo, 
        deleteToDo,
        openModal,
        setOpenModal,
        modalRef,
        closeModal,
      }}>
      {children}
    </ToDoContext.Provider>
  )
}

export { ToDoContext, ToDoProvider }