import React from 'react'
import { BsTrash } from "react-icons/bs";
interface todoDeleteProps{
    id:number,
    deleteTodo: (id: number) => void;

}
function TodoDelete({id,deleteTodo}:todoDeleteProps) {
  return (
    <div
    className="todo-delete"
    onClick={(e: React.MouseEvent<HTMLElement>) => {
      deleteTodo(id);
    }}
  >
    <BsTrash />
  </div>
  )
}

export default TodoDelete