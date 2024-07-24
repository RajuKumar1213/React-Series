import { useCallback, useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(6);
  const [password, setPassword] = useState("");
  const [isNumbered, setIsNumbered] = useState(false);
  const [isCharacter, setIsCharacter] = useState(false);
  const [copyText, setCopyText] = useState(false);
  const copyRef = useRef(null);

  const generatePassword = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (isNumbered) str += "123456789";
    if (isCharacter) str += "!@#$%^&*(){}+-[]";

    for (let i = 0; i < length; i++) {
      const random = Math.floor(Math.random() * str.length);
      pass += str[random];
    }
    // setting the random password.
    setPassword(pass);
    setCopyText(false);
  }, [isCharacter, isNumbered, length, setPassword]);

  // using useEffect hook

  useEffect(() => {
    generatePassword();
  }, [isNumbered, isCharacter, setPassword, length]);

  // handeling copy text

  const handleCopy = useCallback(() => {
    copyRef.current?.select();
    setCopyText(true);
    window.navigator.clipboard
      .writeText(copyRef.current.value)
      // .then(() => {
      //   alert("Text copied to clipboard!");
      // })
      // .catch((err) => {
      //   console.error("Failed to copy text: ", err);
      // });
  }, [password]);

  return (
    <>
      <div
        className="w-full h-screen flex justify-center text-orange-600 "
        style={{ backgroundColor: "#000" }}
      >
        <div className="w-full max-w-2xl h-44 bg-blue-950 mt-10 rounded-lg p-6">
          <h2 className="text-2xl text-center text-white mt-1 mb-2">
            Password Generator
          </h2>

          <div className="w-full overflow-hidden flex">
            <input
              className="w-full p-2 rounded-l-lg text-lg text-orange-600 outline-none"
              type="text"
              value={password}
              placeholder="password"
              readOnly
              ref={copyRef}
            />
            <button
              onClick={handleCopy}
              className="bg-blue-400 px-3 rounded-r-lg text-lg outline-none shrink-0 text-white"
            >
              {copyText ? "Copied" : "Copy"}
            </button>
          </div>
          <div className="flex justify-start gap-x-3 mt-5 text-center">
            <input
              type="range"
              name="range"
              min={6}
              max={100}
              id=""
              value={length}
              onChange={(e) => setLength(e.target.value)}
            />
            <label htmlFor="range"> Number: {length}</label>

            <input
              type="checkbox"
              name="check"
              defaultChecked={isNumbered}
              onChange={() => {
                setIsNumbered((prev) => !prev);
              }}
            />
            <label htmlFor="check"> Number</label>

            <input
              type="checkbox"
              defaultChecked={isCharacter}
              onClick={() => {
                setIsCharacter((prev) => !prev);
              }}
            />
            <label htmlFor="check"> Character</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
