import React, { useState } from "react"
import { useDispatch } from "react-redux"

import todos from "../reducers/todos"

import "./addtodo.css"

//using local useState  to store the input from the text field and passing it to the todolist

const AddTodo = () => {
  const [input, setInput] = useState("")

  const dispatch = useDispatch()

  const onAddTodo = () => {
    dispatch(todos.actions.addTodo(input))
    setInput("")
  }

  return (
    <div className="todo-input">
      <input
        className="text-field"
        type="text"
        value={input}
        placeholder="Add new task"
        onChange={(event) => setInput(event.target.value)}
      />
      <button className="add-btn" onClick={onAddTodo}>
        <span className="plus-sign" role="img" aria-label="plus sign">
          ➕
        </span>
      </button>
    </div>
  )
}

export default AddTodo
