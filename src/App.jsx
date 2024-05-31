/* eslint-disable no-useless-escape */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { evaluate } from 'mathjs';
import './App.css';

const App = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState(null);

  const normalizeInput = (input) => {
    return input.replace(/([\+\-\*\/\.])\1+/g, '$1');
  };

  const handleButtonClick = (value) => {
    if (value === '.') {
      setInput(input + value); 
    } else {
      setInput(input + value);
    }
  };

  const handleClear = () => {
    setInput("");
    setResult(null);
  };

  const handleEquals = () => {
    try {
      const evaluatedResult = evaluate(normalizeInput(input));
      handleResult(evaluatedResult)   
    } catch (error) {
      setResult("Erro");
    }
  };

  const handleResult = (evaluatedResult) => {
    if (evaluatedResult === Infinity) {
      setResult('Impossível dividir por zero')
    } else {
      setResult(evaluatedResult)
    }
  }

  return (
    <div className="calculator">
      <div className="display">
        <div className="input" data-testid="calculator-input">{normalizeInput(input)}</div>
        <div className="result" data-testid="calculator-result">{result}</div>
      </div>
      <div className="buttons">
        <button onClick={() => handleButtonClick("1")}>1</button>
        <button onClick={() => handleButtonClick("2")}>2</button>
        <button onClick={() => handleButtonClick("3")}>3</button>
        <button onClick={() => handleButtonClick("+")}>+</button>
        <button onClick={() => handleButtonClick("4")}>4</button>
        <button onClick={() => handleButtonClick("5")}>5</button>
        <button onClick={() => handleButtonClick("6")}>6</button>
        <button onClick={() => handleButtonClick("-")}>-</button>
        <button onClick={() => handleButtonClick("7")}>7</button>
        <button onClick={() => handleButtonClick("8")}>8</button>
        <button onClick={() => handleButtonClick("9")}>9</button>
        <button onClick={() => handleButtonClick("*")}>*</button>
        <button onClick={() => handleButtonClick("0")}>0</button>
        <button onClick={handleClear}>C</button>
        <button onClick={() => handleButtonClick("/")}>/</button>
        <button onClick={() => handleButtonClick("(")}>(</button>
        <button onClick={() => handleButtonClick(")")}>)</button>
        <button onClick={() => handleButtonClick(".")}>.</button>
        <button onClick={handleEquals}>=</button>
      </div>
    </div>
  );
};
export default App;