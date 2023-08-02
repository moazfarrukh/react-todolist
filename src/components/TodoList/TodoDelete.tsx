import React from 'react'
import { BsTrash } from "react-icons/bs";
import { TodoFuncContext} from '../../context/TodoContext';
import {useContext} from 'react'
import { todoFuncContextType } from '../../types/Todo';
interface todoDeleteProps{
    id:number;
}
function TodoDelete({id}:todoDeleteProps) {
  const {deleteTodo} = useContext(TodoFuncContext) as todoFuncContextType;

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