import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(15);

  const addNumber = () => {
    setCount(count < 20 ? count + 1 : 20  );
  };

  const reduceNumber = () => {
    setCount(count > 0 ? count - 1 : 0 );
  };

  return (
    <>
      <h1>Simple counter app</h1>
      <h3>Count number is : {count}</h3>
      <button onClick={addNumber}>Add Number</button>
      <br />
      <br />
      <button onClick={reduceNumber}>Reduce Number</button>
      <p>Count is : {count}</p>
    </>
  );
}

export default App;
