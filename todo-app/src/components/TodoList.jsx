import React, { useState } from "react";
import Cross from "./Cross.svg";
import Pencil from "./Pencil.svg";
import Save from "./Save.svg";

export default function TodoList({value, update=false}) {
 


  return (
    <div className={`bg-purple-400 px-2 py-3 rounded-lg mb-3 flex justify-between`}>
      <div className="flex items-center">
        <input
          type="checkbox"
          name=""
          id=""
          className="mr-2 border-2 border-black"
          value={""}
        />
        <input
          type="text"
          value={value}
          className="bg-transparent outline-none "
    
        />
      </div>
      <div className="h-5">
        <button className="bg-white p-1 rounded text-white mr-2">
          <img src={update ? Save : Pencil} alt="" className="h-4 w-4" />
        </button>
        <button className="bg-white p-1 rounded">
          <img src={Cross} alt="" className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
