import { useState, useEffect, useCallback } from "react";
import "./App.css";
import TodoItem from "./components/TodoItems";
import InputBox from "./components/InputBox";
import { TodoProvider } from "./contexts";

function App() {
  const [todos, setTodos] = useState([]);

  // addTodo
  const addTodo = (todo) => {
    setTodos((prev) => [todo, ...prev]);
  };

  // updateTodo
  const updateTodo = (id, todo) => {
    setTodos((prev) =>
      prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo))
    );
  };

  // deleteTodo
  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  //toggleComplete
  const toggleComplete = (id) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // getting data from local storage.
  useEffect(() => {
    const localData = JSON.parse(localStorage.getItem("todos"));
    if (localData && localData > 0) {
      setTodos(localData);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <TodoProvider
      value={{ addTodo, deleteTodo, todos, toggleComplete, updateTodo }}
    >
      <div className="bg-slate-900 h-screen">
        <div className="w-full md:w-6/12 m-auto md:pt-16 pt-2 p-2">
          <h1 className="text-2xl font-bold text-center mb-5 text-white">
            Manage Your Todos
          </h1>
          {/* input goes here */}
          <InputBox />

          {todos.length <= 0 ? (
            <h2 className="text-xl text-center text-white">
              There is no any todo to see. Please add some todo.
            </h2>
          ) : (
            todos.map((todo) => (
              <div key={todo.id} className="w-full">
                <TodoItem todo={todo} />
              </div>
            ))
          )}
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;
