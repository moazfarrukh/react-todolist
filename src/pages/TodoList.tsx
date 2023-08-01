import { useState } from "react";

import { Todo } from "../components/TodoList/Todo";
import { todoData } from "../types/Todo";
import { removeTodo, updateTodoProperty } from "../utils/Todo";
import TodoInput from "../components/TodoList/TodoInput";

import "../styles/TodoList.css";

function TodoList() {
  //for generating unique id for every new todo
  const [currId, setCurrId] = useState<number>(0);
  // store data for every todo
  const [todoDataList, setTodoList] = useState<todoData[]>([]);
  const [tasksDone, setTasksDone] = useState<number>(0);

  const deleteTodoFromList = (id: number) => {
    // need to be refactored
    setTodoList(removeTodo(todoDataList, id));
  };

  const UpdateTodoCheck = (id: number, completed: boolean) => {
    // need to be refactored
    // toggle the status of a todo (completed/unfinished)
    if (completed) {
      setTasksDone(tasksDone - 1);
    } else {
      setTasksDone(tasksDone + 1);
    }
    setTodoList(updateTodoProperty(todoDataList, id, "completed", !completed));
  };

  const updateTodoText = (id: number, newText: string) => {
    // updates the text of the todo with the specified id
    setTodoList(updateTodoProperty(todoDataList, id, "text", newText));
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
    setTodoList([...todoDataList, newtodo]);
  };

  const Todos = todoDataList.map((todo) => {
    // create todo components from todo data
    return (
      <Todo
        key={todo.id}
        id={todo.id}
        text={todo.text}
        completed={todo.completed as boolean}
        deleteTodo={deleteTodoFromList}
        updateTodoText={updateTodoText}
        toggleCheck={UpdateTodoCheck}
      />
    );
  });

  return (
    <div className="container">
      <h2>Todos</h2>
      <TodoInput addTodo={addTodo} />
      {Todos}
      <span className="todo-bottom todo-num ">
        Total: {todoDataList.length}
      </span>
      <span className="todo-bottom todo-done">Completed: {tasksDone}</span>
    </div>
  );
}

export default TodoList;
