import { useState } from "react";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(0);

  const addValue = () => {
    if (counter === 20) {
      setCounter(20);
    } else {
      setCounter(counter + 1);
    }
  };

  const subValue = () => {
    if (counter === 0) {
      setCounter(0);
    } else {
      setCounter(counter - 1);
    }
  };
  return (
    <>
      <h1>Counter Value : {counter}</h1>
      <button onClick={addValue}>+</button>
      <button onClick={subValue}>-</button>
    </>
  );
}

export default App;
