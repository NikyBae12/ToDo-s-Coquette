import { CompleteIcon } from '../ToDoIcons/CompleteIcon';
import { DeleteIcon } from '../ToDoIcons/DeleteIcon';
import './ToDoItem.css'

function ToDoItem(props) {
  const { text, completed, onComplete, onDelete } = props

  return (
    <li className="ToDoItem">
      <CompleteIcon
        type={completed ? 'doubleCheck' : 'check'}
        onComplete={onComplete}
      />

      <p className={`Task ${completed && "Task--complete"}`}>
        {text}
      </p>

      <DeleteIcon 
        onDelete={onDelete}
      />
    </li>
  );
}

export { ToDoItem }