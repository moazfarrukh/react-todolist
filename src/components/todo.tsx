import React, { useState } from "react";
import { BsTrash } from "react-icons/bs";
import "./todo.css";

interface todoProps {
  id: number;
  text: string;
  completed: boolean;
  toggleCheck: (id: number) => void;
  deleteTodo: (id: number) => void;
  updateTodoText: (id: number, newText: string) => void;
}

export const Todo = ({
  id,
  text,
  completed,
  deleteTodo,
  updateTodoText: updateTodo,
  toggleCheck,
}: todoProps) => {
  const [isEditing, setIsEditing] = useState<Boolean>(false);

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateTodo(id, e.target.value);
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
    <div className="todo">
      <div className="todo-item">
        <input
          type="checkbox"
          defaultChecked={completed}
          onChange={() => {
            toggleCheck(id);
          }}
          className="todo-check"
        />
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
      </div>
      <div
        className="todo-delete"
        onClick={(e: React.MouseEvent<HTMLElement>) => {
          deleteTodo(id);
        }}
      >
        <BsTrash />
      </div>
    </div>
  );
};
