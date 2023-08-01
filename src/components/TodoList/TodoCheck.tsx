import React from 'react'
interface TodoCheckProps{
    id:number,
    completed:boolean,
    toggleCheck: (id: number,checked:boolean) => void;

}
function TodoCheck({id,completed,toggleCheck}:TodoCheckProps) {
  return (
    <input
      type="checkbox"
      defaultChecked={completed}
      onChange={() => {
        toggleCheck(id,completed);
      }}
      className="todo-check"
    />
  )
}

export default TodoCheck