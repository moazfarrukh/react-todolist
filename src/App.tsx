import { BsListCheck } from "react-icons/bs";
import "./App.css";
import { Todo } from "./components/todo";
import { useState } from "react";

interface todoData {
  //data stored in each todo
  id: number;
  text: string;
  completed: boolean;
}

function App() {
  //for generating unique id for every new todo
  const [currId, setCurrId] = useState<number>(0);
  
  // store data for every todo
  const [todoDataList, setTodoList] = useState<todoData[]>([]);

  const deleteTodo = (id: number) => {
    setTodoList(todoDataList.filter((todo) => todo.id !== id));
  };

  const toggleCheck = (id: number) => {
    // toggle the status of a todo (completed/unfinished) 
    setTodoList(
      todoDataList.map((todo) => {
        if (todo.id === id) {
          return { id: todo.id, text: todo.text, completed: !todo.completed };
        } else {
          return todo;
        }
      })
    );
  };
  const updateTodoText = (id: number, newText: string) => {
    // updates the text of the todo with the specified id
    setTodoList(
      todoDataList.map((todo) => {
        if (todo.id === id) {
          return { id: todo.id, text: newText, completed: todo.completed };
        } else {
          return todo;
        }
      })
    );
  };

  const addTodo = (todoText: string) => {
    // add data of the new todo to the todoDatalist
    const newtodo: todoData = {
      id: currId,
      text: todoText,
      completed: false,
    };
    //increment the currId to generate unique id for the next todo 
    setCurrId(currId + 1);
    // add data of new todo to the todolist
    setTodoList([...todoDataList, newtodo]);
  };

  const handleTodoInput = (e: React.KeyboardEvent<HTMLInputElement>) => {
    //handle enter key press 
    if (e.key === "Enter") {
      if ((e.target as HTMLInputElement).value.trim() !== "") {
        addTodo((e.target as HTMLInputElement).value);
        (e.target as HTMLInputElement).value = "";
      }
    }
  };

  const Todos = todoDataList.map((todo, index) => {
    // create todolist components from the data 
    return (
      <Todo
        key={index}
        id={todo.id}
        text={todo.text}
        completed={todo.completed as boolean}
        deleteTodo={deleteTodo}
        updateTodoText={updateTodoText}
        toggleCheck={toggleCheck}
      />
    );
  });

  return (
    <div className="container">
      <h2>Todos</h2>
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
      {Todos}
    </div>
  );
}

export default App;
