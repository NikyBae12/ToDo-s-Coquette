import React from "react";
import { ToDoIcon } from "./ToDoIcon";

function DeleteIcon(props) {
  const { onDelete } = props;
  return (
    <ToDoIcon 
      type='delete'
      onClick={onDelete}
    />
  )
}

export {DeleteIcon}