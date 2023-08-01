import TodoText from "./TodoText";
import TodoCheck from "./TodoCheck";
import TodoDelete from "./TodoDelete";

interface todoProps {
  id: number;
  text: string;
  completed: boolean;
  toggleCheck: (id: number, checked: boolean) => void;
  deleteTodo: (id: number) => void;
  updateTodoText: (id: number, newText: string) => void;
}

export const Todo = ({
  id,
  text,
  completed,
  deleteTodo,
  updateTodoText,
  toggleCheck,
}: todoProps) => {
  return (
    <div className="todo">
      <TodoCheck id={id} completed={completed} toggleCheck={toggleCheck} />
      <TodoText
        id={id}
        completed={completed}
        text={text}
        updateTodoText={updateTodoText}
      />
      <TodoDelete id={id} deleteTodo={deleteTodo} />
    </div>
  );
};
