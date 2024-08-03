import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addTodo,
  updateTodo,
  setCurrentTodo,
} from "../features/todo/todoSlice";

function AddTodo() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const currentTodo = useSelector((state) => state.todos.currentTodo);

  useEffect(() => {
    if (currentTodo) {
      setInput(currentTodo.text);
    }
  }, [currentTodo]);


  const handleSubmit = (e) => {
    e.preventDefault();

    if (currentTodo) {
      dispatch(updateTodo({ id: currentTodo.id, text: input }));
      dispatch(setCurrentTodo(null));
      setInput("");
    } else {
      if (input) {
        dispatch(addTodo(input));
        setInput("");
      }
    }
  };
  return (
    <>
      <h1 className="mb-4 text-white text-xl">Todo By using Redux Toolkit</h1>
      <form onSubmit={handleSubmit} action="" className="w-full flex mb-5">
        <input
          className="w-full mr-5 py-2 px-2 rounded-lg outline-none bg-slate-900 outline-purple-900 text-white"
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Write your todo."
        />
        <button
          className="bg-purple-800 px-6 text-white rounded-lg"
          type="submit"
          disabled={!input}
        >
          {currentTodo ? "Update" : "Add"}
        </button>
      </form>
    </>
  );
}

export default AddTodo;
