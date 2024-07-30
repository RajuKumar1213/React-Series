import React, { useState } from "react";
import { useTodo } from "../contexts";

function InputBox() {
  const [todoContent, setTodoContent] = useState("");
  const { addTodo } = useTodo();

  const addTodoContent = (e) => {
    e.preventDefault();
    if(!todoContent) return;
    addTodo({id: Date.now(),todoMsg : todoContent, completed: false})
    setTodoContent("");
  };

  return (
    <form onSubmit={addTodoContent} action="" className="w-full flex mb-3">
      <input
        type="text"
        className="text-white text-xl font-mono bg-slate-600 w-full px-3 outline-none rounded-l-lg"
        placeholder="What is in your mind ?"
        value={todoContent}
        onChange={(e) => setTodoContent(e.target.value)}
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
