import React from 'react'
import './App.css';
import { ToDoCounter } from '../ToDoCounter/ToDoCounter';
import { ToDoItem } from '../ToDoItem/ToDoItem';
import { ToDoFilter } from '../ToDoFilter/ToDoFilter';
import { ToDoList } from '../ToDoList/ToDoList';
import { ToDoCreateBtn } from '../ToDoCreateBtn/ToDoCreateBtn';
import { ToDoLoading } from '../ToDoLoading/ToDoLoading';
import { ToDoError } from '../ToDoError/ToDoError';
import { ToDoEmpty } from '../ToDoEmpty/ToDoEmpty';
import { Header } from '../Header/Header';
import { Modal } from '../Modal/Modal';
import { ToDoContext } from '../../context/ToDoContext';
import { ToDoCreate } from '../ToDoCreate/ToDoCreate';

function AppUI() {

  const {
    loading,
    error,
    searchedToDos,
    completeToDo,
    deleteToDo,
    totalToDos,
    openModal,
  } = React.useContext(ToDoContext);

  return (
    <>
      <Header />
      
      <div className='content'>

        <ToDoCounter />
        <ToDoFilter />

        <ToDoList> 
          {loading && <ToDoLoading />}
          {error && <ToDoError />}
          {(!loading && totalToDos === 0) 
            && <ToDoEmpty />
          }
          {(!loading && totalToDos > 0 && searchedToDos.length === 0)
            && <p>Sin coincidencias ...</p>
          }
          {
            searchedToDos.map(todo => (
              <ToDoItem 
                key={todo.text}
                text={todo.text}
                completed={todo.completed}
                onComplete={() => completeToDo(todo.text)}
                onDelete={() => deleteToDo(todo.text)}
              />
            ))
          }
        </ToDoList>

        <ToDoCreateBtn />

        { openModal && (
          <Modal >
            <ToDoCreate />
          </Modal>
        )}
      </div>

      
    </>
  );
}

export { AppUI }