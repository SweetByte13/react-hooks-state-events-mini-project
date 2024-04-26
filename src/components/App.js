import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import { CATEGORIES, TASKS } from "../data";

function App() {

  const [selectedCategory, setCategory] = useState("All")
  const [taskState, setTaskState] = useState(TASKS)

  

  function handleCategoryChange(e) {
    setCategory(e.target.innerHTML)

    const filteredByCategoryTasks = TASKS.filter((task) => {
      if ("All" === e.target.innerHTML) return true
      if (task.category === e.target.innerHTML) {
        return true;
      } else {
        return false;
      }
    })
    setTaskState(filteredByCategoryTasks)
  }

  function handleDeleteButton(e) {
    const filteredTasks = taskState.filter((task) => {
      if (task.text === e) {
        return false;
      } else {
        return true;
      }
    })
    setTaskState(filteredTasks)
  }

  function onTaskFormSubmit(task) {
    console.log(task)
    TASKS.push(task)
    setTaskState([...TASKS])
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} handleClick={handleCategoryChange} selectedCategory={selectedCategory} />
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={onTaskFormSubmit}/>
      <TaskList tasks={taskState} categories={selectedCategory} handleDeleteButton={handleDeleteButton} />
    </div>
  );


}

export default App;

