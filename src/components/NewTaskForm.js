import React, { useState } from "react";
import { TASKS } from "../data";

function NewTaskForm({ categories, 
  onTaskFormSubmit, 
 }) {

  const updatedCategories = [...categories].slice(1)

  const [inputText, setInput] = useState("")
  const [formCategory, setFormCategory] = useState("Code")

  function handleFormCategoryChange(e) {
    console.log(e.target.value)
    setFormCategory(e.target.value)
  }

  function handleInputTextChange(e) {
    console.log(e.target.value)
    setInput(e.target.value)
    console.log(inputText)
  }

  const newFormObj = updatedCategories.map((category) => (
    <option key={category} value={category}>{category}</option>))
    console.log(inputText)
  const newTask = {
    text: inputText,
    category: formCategory,
  }

  return (
    <form className="new-task-form" onSubmit={((e) => {
      e.preventDefault();
      onTaskFormSubmit(newTask)
    })}>
      <label>
        Details
        <input type="text" name="text" value={inputText} onChange={handleInputTextChange} />
      </label>
      <label>
        Category
        <select name="category" onChange={handleFormCategoryChange}>
          {newFormObj}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
