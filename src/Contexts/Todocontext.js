import { createContext, useContext } from "react";

export const Todocontext = createContext({
    todos:[{
        id:1,
        todo:'Task 1',
        completed:false,
    }],
    addtodo:(todo)=>{},
    deletetodo:(id)=>{},
    updatetodo:(id,todo)=>{},
    togglecomplete:(id)=>{},
});

export const useTodo = () => {
  return useContext(Todocontext);
};

export const TodoProvider = Todocontext.Provider;