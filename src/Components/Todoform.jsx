import React from "react";
import { useState } from "react";
import { useTodo } from "../Contexts/Todocontext";

function Todoform() {
  const [todo, settodo] = useState("");
  const { addtodo } = useTodo();

  const add = (e) => {
    e.preventDefault();

    if (todo.trim() === "") {
      
      return;
    }
    addtodo({ todo, completed: false });
    settodo(""); 
  };
  return (
    <form className="flex" onSubmit={add}>
      <input
        value={todo}
        onChange={(e) => settodo(e.target.value)}
        type="text"
        placeholder="Write Todo..."
        className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
      />
      <button
        type="submit"
        className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0"
      >
        Add
      </button>
    </form>
  );
}

export default Todoform;
