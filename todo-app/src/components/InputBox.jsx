import React, { useState } from "react";
import { useTodo } from "../contexts";

function InputBox() {
  const [todo, setTodo] = useState("");
  const { addTodo } = useTodo();

  const addMyTodo = (e) => {
    e.preventDefault();
    if (!todo) return;
    addTodo({ todoMsg: todo, completed: false });
    setTodo("");
  };

  return (
    <form action="" onSubmit={addMyTodo} className="w-full flex mb-3">
      <input
        type="text"
        className="text-white text-xl font-mono bg-slate-600 w-full px-3 outline-none rounded-l-lg"
        placeholder="What is in your mind ?"
        value={todo}
        onChange={(e)=> setTodo(e.target.value)}
      />
      <button
        type="submit"
        className="bg-green-600 px-4 py-3 rounded-r-lg text-white"
      >
        Add
      </button>
    </form>
  );
}

export default InputBox;
