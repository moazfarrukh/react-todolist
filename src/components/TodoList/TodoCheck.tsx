import {useContext} from 'react'
import { TodoFuncContext } from '../../context/TodoContext'
import { todoFuncContextType} from '../../types/Todo'

interface TodoCheckProps{
    id:number,
    completed:boolean,
}

function TodoCheck({id,completed}:TodoCheckProps) {
  const {updateCheck} = useContext(TodoFuncContext) as todoFuncContextType;

  return (
    <input
      type="checkbox"
      defaultChecked={completed}
      onChange={() => {
        updateCheck(id,completed);
      }}
      className="todo-check"
    />
  )
}

export default TodoCheck