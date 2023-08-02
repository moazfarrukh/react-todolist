import React from "react";
import { useState, useContext } from "react";
import { TodoFuncContext } from "../../context/TodoContext";
import { todoFuncContextType } from "../../types/Todo";
interface todoTextProps {
  id: number;
  text: string;
  completed: boolean;
}

function TodoText({ id,text,completed }: todoTextProps) {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const { updateText } = useContext(TodoFuncContext) as todoFuncContextType;

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateText(id, e.target.value);
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
      onBlur={(e: React.FocusEvent<HTMLDivElement, Element>) => {
        setIsEditing(false);
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
  );
}

export default TodoText;
