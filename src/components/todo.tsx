import React, { useState } from "react";
import { BsTrash } from "react-icons/bs";
import "./todo.css";

interface todoProps {
  id:number,
  text: string,
  done: boolean,
  toggleCheck:(id:number)=>void,
  deleteTodo:(id:number)=>void,
  updateTodoText:(id:number,newText:string)=>void,

}

export const Todo = ({id, text ,done,deleteTodo,updateTodoText: updateTodo,toggleCheck}: todoProps) => {
  const [isEditing,setIsEditing]= useState<Boolean>(false);
  

  const onInputChange = (e:React.ChangeEvent<HTMLInputElement>) =>
  {
    updateTodo(id,e.target.value);
  }

const onInputEnter = (e:React.KeyboardEvent<HTMLInputElement>) =>
  {
    if(e.key==="Enter")
    {
      console.log("enter");
      if(isEditing){
      setIsEditing(!isEditing)
      }
    }
  }
  
  return (
    <div className="todo">
      <div className="todo-item">
        <input type="checkbox"  defaultChecked={done} onChange={()=>{toggleCheck(id)}} className="todo-check" />
        <div className="todo-text" onDoubleClick={(e:React.MouseEvent<HTMLElement>)=>{setIsEditing(!isEditing)}}>
        {isEditing?
        (<input className="todo-edit"  onKeyDown={onInputEnter}  onChange={onInputChange} value={text}/>):
        (<p style={done?{textDecoration:"line-through",color:"grey"}:{}}>{text}</p>)
        }
        </div>
      </div>
      <div className="todo-delete"  onClick={(e:React.MouseEvent<HTMLElement>)=>{deleteTodo(id)}}>      
        <BsTrash/>
    </div>

    </div>
  );
};
