import { createContext } from "react"
import {todoDataContextType, todoFuncContextType } from "../types/Todo";

export const TodoFuncContext = createContext<todoFuncContextType| null>(null);

