import { todoData } from "../types/Todo";
export const updateTodoProperty = <K extends keyof todoData>(
  todoDataList: todoData[],
  id: number,
  key: K,
  updatedVal: todoData[K]
): todoData[] => {
  // updates any specified property of TodoData 
  return todoDataList.map((todo: todoData) => {
    if (todo.id === id) {
      todo[key] = updatedVal;
    }
    return todo;
  });
};

export const removeTodo = (todoDataList: todoData[], id: number):todoData[] => {
  // removes todo with specified id  from the todoDataList
  return todoDataList.filter((todo) => {
    return todo.id !== id;
  })
}