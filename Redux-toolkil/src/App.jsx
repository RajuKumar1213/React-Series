import { useEffect, useState } from "react";
import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";

function App() {
   

  return (
    <>
      <div className=" max-w-2xl mx-auto mt-10">
        <div className="flex flex-col justify-center items-center ">
          <AddTodo />
          <h1 className="mb-3 text-white text-xl">Your todos</h1>
          <Todos />
        </div>
      </div>
    </>
  );
}

export default App;



