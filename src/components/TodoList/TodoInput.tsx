import React from 'react'
import { BsListCheck } from "react-icons/bs";

interface TodoInputProps{
    addTodo:(text:string)=>void
}

function TodoInput({addTodo}:TodoInputProps) {
    const handleTodoInput = (e: React.KeyboardEvent<HTMLInputElement>) => {
        //handle enter key press
        if (e.key === "Enter") {
          if ((e.target as HTMLInputElement).value.trim() !== "") {
            addTodo((e.target as HTMLInputElement).value);
            (e.target as HTMLInputElement).value = "";
          }
        }
      };

  return (
    <form
    onSubmit={(e) => {
      e.preventDefault();
    }}
  >
    <div className="list-icon">
      <BsListCheck />
    </div>
    <input
      placeholder="What do you want to do?"
      className="input-todo"
      type="text"
      onKeyDown={handleTodoInput}
    />
  </form>
    )
}

export default TodoInput