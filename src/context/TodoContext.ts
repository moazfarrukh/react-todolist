import { createContext } from "react"
import {todoFuncContextType } from "../types/Todo";

export const TodoFuncContext = createContext<todoFuncContextType| null>(null);

