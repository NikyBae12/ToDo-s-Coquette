import { ReactComponent as CheckSVG } from '../../assets/check.svg'
import { ReactComponent as DoubleCheckSVG } from '../../assets/doubleCheck.svg'
import { ReactComponent as DeleteSVG } from  '../../assets/delete.svg'
import './ToDoIcon.css'

const icons = {
  check: <CheckSVG />,
  doubleCheck: <DoubleCheckSVG />,
  delete: <DeleteSVG />
}

function ToDoIcon(props) {
  const { type, onClick } = props;

  return (
    <span 
      className={`Icon Icon-${type} Icon-${type}`}
      onClick={onClick}
    >
      {icons[type]}
    </span>
  )
}

export { ToDoIcon }