// import React, { useState } from "react";
import { BsListCheck } from "react-icons/bs";
import "./App.css";
import { Todo } from "./components/todo";
import { useState } from "react";

interface todoData {
  id: number;
  text: string;
  done: boolean;
}

function App() {

  const [currId,setCurrId]=useState<number>(0);

  const [todoList,setTodoList] = useState<todoData[]>([])
  
  const deleteTodo=(id:number)=>
  {
   
    setTodoList(todoList.filter((todo)=>(todo.id !== id)));
    
  }

  const toggleCheck=(id:number)=>
  {
    setTodoList(todoList.map((todo)=>{
      if(todo.id===id)
      {
        return {id:todo.id,text:todo.text,done:!todo.done}
      }
      else{
      return todo;
      }
    }));
 
  }
  const updateTodoText=(id:number,newText:string)=>
  {
    
    setTodoList(todoList.map((todo)=>{
      if(todo.id===id)
      {
        return {id:todo.id,text:newText,done:todo.done}
      }
      else{
      return todo;
      }
    }));
    
  }

  const addTodo=(todoText:string)=>{
    const newtodo:todoData =
    {
      id:currId,
      text:todoText,
      done:false,
    }
    setCurrId(currId+1);
    setTodoList([...todoList,newtodo])
  }

  
  const handleTodoInput =(e:React.KeyboardEvent<HTMLInputElement>)=>{
          
    if(e.key==="Enter")
    {
      if((e.target as HTMLInputElement).value.trim()!==""){
      addTodo((e.target as HTMLInputElement).value);
      (e.target as HTMLInputElement).value="";
      }
    }
  }

  const Todos = todoList.map((todo,index) => {
    return <Todo key={index} id={todo.id} text={todo.text} done={todo.done as boolean} deleteTodo={deleteTodo} updateTodoText={updateTodoText} toggleCheck={toggleCheck}/>;
  });


  return (
    <div className="container">
      <h2>Todos</h2>
      <form onSubmit={(e)=>{e.preventDefault()}}>
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
      {Todos}
    </div>
  );
}

export default App;
