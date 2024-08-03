import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo, setCurrentTodo } from "../features/todo/todoSlice";

function Todos() {
  const todos = useSelector((state) => state.todos.todos);
  const dispatch = useDispatch();

  return (
    <ul className="w-full text-white ">
      {console.log(todos)}
      {todos.length <= 0 ? (
        <h1 className="text-purple-300 font-mono text-xl">
          There is nothing to see ... Write some todo to preview.
        </h1>
      ) : (
        todos.map((todo) => (
          <li
            key={todo.id}
            className="flex items-center justify-between mb-3 bg-slate-900  py-2 px-3 rounded-lg"
          >
            <div>{todo.text}</div>
            <div className="flex ">
              <button
                onClick={() => dispatch(setCurrentTodo(todo))}
                className="text-purple-700 mr-2 border border-slate-400 px-2 h-fit rounded-lg py-1"
              >
                Edit
              </button>
              <button
                className="text-red-600 border border-slate-400 px-2 h-fit rounded-lg py-1"
                onClick={() => dispatch(removeTodo(todo.id))}
              >
                Delete
              </button>
            </div>
          </li>
        ))
      )}
    </ul>
  );
}

export default Todos;
