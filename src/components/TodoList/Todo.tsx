import TodoText from "./TodoText";
import TodoCheck from "./TodoCheck";
import TodoDelete from "./TodoDelete";
import { createContext } from "react";
import { todoDataContextType } from "../../types/Todo";
interface todoProps {
  id: number;
  text: string;
  completed: boolean;
}

export const Todo = ({
  id,
  text,
  completed,
}: todoProps) => {
  const value:todoDataContextType = {id,text,completed} 
  const TodoDataContext = createContext<todoDataContextType| null>(null);

  return (
    <div className="todo">
      <TodoDataContext.Provider  value={value} > 
      <TodoCheck id={id} completed={completed}/>
      <TodoText id={id} completed={completed} text={text}/>
      <TodoDelete  id={id}/>
      </TodoDataContext.Provider>
    </div>
  );
};
