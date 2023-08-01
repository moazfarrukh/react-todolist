import React from 'react'
import { useState } from 'react';

interface TodoTextProps
{
        id: number;
        text: string;
        completed: boolean;
        updateTodoText: (id: number, newText: string) => void;
}

function TodoText({id,text,completed,updateTodoText}:TodoTextProps) {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateTodoText(id, e.target.value);
  };

  const onInputEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    // stops editing when enter key is pressed
    if (e.key === "Enter") {
      if (isEditing) {
        setIsEditing(!isEditing);
      }
    }
  };


  return (
    <div
    className="todo-text"
    onDoubleClick={(e: React.MouseEvent<HTMLElement>) => {
      setIsEditing(!isEditing);
    }}
  >
    {isEditing ? (
      //change the p tag element to a input field when isEditing is true
      <input
        className="todo-edit"
        onKeyDown={onInputEnter}
        onChange={onInputChange}
        value={text}
      />
    ) : (
      <p
        style={
          completed ? { textDecoration: "line-through", color: "grey" } : {}
        }
      >
        {text}
      </p>
    )}
  </div>
  )
}

export default TodoText