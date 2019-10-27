import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "./styles.css";
const App = () => {
  const sayHello = () => {
    console.log("say hello");
  };
  const sayHello2 = () => {
    console.log("say hello2");
  };
  const [number, setNumber] = useState(0);
  const [aNumber, setAnumber] = useState(0);
  useEffect(sayHello, [number]);
  useEffect(sayHello2, [aNumber]);
  return (
    <div className="App">
      <div>Hi</div>
      <button name="b1" onClick={() => setNumber(number + 1)}>
        {number}
      </button>
      <button name="b2" onClick={() => setAnumber(aNumber - 1)}>
        {aNumber}
      </button>
    </div>
  );
};
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);