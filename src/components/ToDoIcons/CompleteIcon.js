import React from "react";
import { ToDoIcon } from "./ToDoIcon";

function CompleteIcon(props) {
  const { type, onComplete } = props;
  return (
    <ToDoIcon 
      type={type}
      onClick={onComplete}
    />
  )
}

export {CompleteIcon}