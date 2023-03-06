import React, { useState } from "react";
import "./App.css";

function App() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState("");

  const handleNum1Change = (event) => {
    setNum1(event.target.value);
  };

  const handleNum2Change = (event) => {
    setNum2(event.target.value);
  };

  const handleAddition = () => {
    const sum = parseInt(num1) + parseInt(num2);
    setResult(sum);
  };

  const isInputValid = () => {
    return (
      num1 !== "" &&
      num2 !== "" &&
      !isNaN(parseInt(num1)) &&
      !isNaN(parseInt(num2))
    );
  };
  return (
    <div>
      <h1>Addition Calculator</h1>
      <label>
        First Number:
        <input type="text" value={num1} onChange={handleNum1Change} />
      </label>
      <br />
      <label>
        Second Number:
        <input type="text" value={num2} onChange={handleNum2Change} />
      </label>
      <br />
      
      <br />
      <label>
        Result:
        <input type="text" value={result} readOnly />
      </label><br></br>
      <button onClick={handleAddition} disabled={!isInputValid()}>
        Display Result
      </button>
    </div>
  );
}

export default App;
