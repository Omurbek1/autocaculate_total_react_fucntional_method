import "./styles.css";
import { useState, useEffect } from "react";

export default function App() {
  let [firstNumber, setFirstNumber] = useState(null);
  let [secondNumber, setSecondNumber] = useState(null);
  let [result, setResult] = useState(null);

  const changeFirstNumber = (e) => {
    setFirstNumber(+e.target.value);
  };

  const changeSecondNumber = (e) => {
    setSecondNumber(+e.target.value);
  };

  useEffect(() => {
    setResult(firstNumber + secondNumber);
  }, [firstNumber, secondNumber, result]);

  return (
    <div className="App">
      First Number:{" "}
      <input
        type="number"
        value={firstNumber}
        onChange={(e) => changeFirstNumber(e)}
      />
      <br />
      Second Number:
      <input
        type="number"
        value={secondNumber}
        onChange={(e) => changeSecondNumber(e)}
      />
      <br />
      Result: {result}
    </div>
  );
}
