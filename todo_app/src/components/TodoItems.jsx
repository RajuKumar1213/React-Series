import React, { useState } from "react";
import Cross from "./Cross.svg";
import Pencil from "./Pencil.svg";
import Save from "./Save.svg";
import { useTodo } from "../contexts";

export default function TodoList({ todo }) {
  const [isEditable, setIsEditable] = useState(false);
  const [todoMsgs, setTodoMsgs] = useState(todo.todoMsg);
  const { toggleComplete, updateTodo, deleteTodo } = useTodo();

  const handleComplete = () => {
    toggleComplete(todo.id);
  };

  const handleEditTodo = () => {
    setIsEditable(!isEditable);
    updateTodo(todo.id, {...todo , todoMsg : todoMsgs});
  };

  return (
    <div
    style={{scrollBehavior: "smooth"}}
      className={ ` ${
        todo.completed ? "bg-green-200" : "bg-purple-200"
      } px-2 py-2 rounded-lg mb-3 flex justify-between items-center w-full`}
    >
      <div className="flex items-center w-full">
        <input
          type="checkbox"
          className="mr-2 border-2 border-black"
          checked={todo.completed}
          onChange={handleComplete}
        />
        <input
          type="text"
          value={todoMsgs}
          className={`p-1 w-full max-w-xl md:max-w-lg rounded-sm ${isEditable ? "outline-none bg-transparent border border-slate-400"  : "" } bg-transparent outline-none ${
            todo.completed ? "text-decoration-line: line-through" : ""
          } `}
          onChange={(e) => setTodoMsgs(e.target.value)}
          readOnly={!isEditable}
        />
      </div>
      <div className="h-5 flex justify-center items-center">
        <button
          onClick={handleEditTodo}
          className="bg-white p-1 rounded text-white mr-2 outline-none"
        >
          <img src={isEditable ? Save : Pencil} alt="" className="h-5 w-5" />
        </button>
        <button onClick={()=> deleteTodo(todo.id)} className="bg-white p-1 rounded outline-none">
          <img src={Cross} alt="" className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}
