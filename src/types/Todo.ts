
export interface todoData {
    //data stored in each todo
    id: number;
    text: string;
    completed: boolean
}

export interface todoFuncContextType{
   updateText:(id: number, newText: string)=>void;
   updateCheck: (id: number, completed:boolean)=>void;
   deleteTodo: (id: number)=>void;
}

export interface todoDataContextType{
    id: number;
    text: string;
    completed: boolean;
}