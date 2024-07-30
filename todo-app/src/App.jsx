import { useState, useEffect } from "react";
import "./App.css";
import InputBox from "./components/InputBox";
import TodoList from "./components/TodoList";
// import { TodoProvider } from "./contexts";

function App() {
  const [todos, setTodos] = useState([]);

  return (
    <>
      <div className="bg-slate-900 h-screen">
        <div className="w-full md:w-6/12 m-auto md:pt-16 pt-2 p-2">
          <h1 className="text-2xl font-bold text-center mb-5 text-white">
            Manage Your Todos
          </h1>
          {/* input goes here */}
          <InputBox />

          {/* todolist goes here  */}
          <TodoList value={"Go to market"} />
        </div>
      </div>
    </>
  );
}

export default App;
