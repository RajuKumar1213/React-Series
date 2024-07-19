import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [color, setColor] = useState("olive");

  return (
    <>
      <div className="h-screen w-full " style={{ backgroundColor: color }}>
        <div className=" inset-x-0 fixed bottom-12 flex flex-wrap px-3 justify-center w-full">
          <div className="bg-white p-2 rounded-lg flex flex-wrap gap-2 justify-center">
            <button
              onClick={() => setColor("red")}
              className="px-3 py-1.5 text-white rounded-2xl outline-none shadow-lg "
              style={{ backgroundColor: "red" }}
            >
              Red
            </button>
            <button
              onClick={() => setColor("green")}
              className="px-3 py-1.5 text-white rounded-2xl outline-none shadow-lg "
              style={{ backgroundColor: "green" }}
            >
              Green
            </button>
            <button
              onClick={() => setColor("olive")}
              className="px-3 py-1.5 text-white rounded-2xl outline-none shadow-lg "
              style={{ backgroundColor: "Olive" }}
            >
              Olive
            </button>
            <button
              onClick={() => setColor("blue")}
              className="px-3 py-1.5 text-white rounded-2xl outline-none shadow-lg "
              style={{ backgroundColor: "blue" }}
            >
              Blue
            </button>
            <button
              onClick={() => setColor("black")}
              className="px-3 py-1.5 text-white rounded-2xl outline-none shadow-lg "
              style={{ backgroundColor: "black" }}
            >
              Black
            </button>
            <button
              onClick={() => setColor("yellow")}
              className="px-3 py-1.5 text-black rounded-2xl outline-none shadow-lg "
              style={{ backgroundColor: "yellow" }}
            >
              Yellow
            </button>
            <button
              onClick={() => setColor("cyan")}
              className="px-3 py-1.5 text-white rounded-2xl outline-none shadow-lg "
              style={{ backgroundColor: "cyan" }}
            >
              Cyan
            </button>
            <button
              onClick={() => setColor("gray")}
              className="px-3 py-1.5 text-white rounded-2xl outline-none shadow-lg "
              style={{ backgroundColor: "gray" }}
            >
              Gray
            </button>
            <button
              onClick={() => setColor("white")}
              className="px-3 py-1.5 text-black rounded-2xl outline-none shadow-lg "
              style={{ backgroundColor: "white" }}
            >
              White
            </button>
            <button
              onClick={() => setColor("orange")}
              className="px-3 py-1.5 text-white rounded-2xl outline-none shadow-lg "
              style={{ backgroundColor: "orange" }}
            >
              Orange
            </button>
            <button
              onClick={() => setColor("skyblue")}
              className="px-3 py-1.5 text-white rounded-2xl outline-none shadow-lg "
              style={{ backgroundColor: "skyblue" }}
            >
              SkyBlue
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
