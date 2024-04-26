import React, { useState } from "react";
import Task from "./Task";

function TaskList({tasks, handleDeleteButton, inputText }) {

  const newTaskObj = [...tasks]

  const tasksObj = newTaskObj.map((task, index) => (
    <Task key={index} category={task.category} text={task.text} handleClick={handleDeleteButton} />
  ))

  return (
    <div className="tasks">
      {tasksObj}
    </div>
  );

}

export default TaskList;
