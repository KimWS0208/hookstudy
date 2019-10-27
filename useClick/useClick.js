import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import "./styles.css";
const useClick = onClick => {
  const element = useRef();
  useEffect(() => {
    if (element.current) {
      element.current.addEventListener("click", onClick);
    }
    return () => {
      if (element.current) {
        element.current.removeEventListener("click", onClick);
      }
    };
  }, []);
  return element;
};
const App = () => {
  const sayHello = () => console.log("say hello");
  const sayBye = () => console.log("say bye");
  const title = useClick(sayHello);
  const title2 = useClick(sayBye);
  return (
    <div className="App">
      <h1 ref={title}>Hi</h1>
      <h1 ref={title2}>Bye</h1>
    </div>
  );
};
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
