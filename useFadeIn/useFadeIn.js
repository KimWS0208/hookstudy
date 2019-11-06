import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

const useFadeIn = (duration = 1, delay = 0) => {
  if (typeof duration !== "number" || typeof delay !== "number") {
    return;
  }
  const element = useRef();
  useEffect(() => {
    if (element.current) {
      const { current } = element;
      current.style.transition = `opacity ${duration}s ease-in-out ${delay}s`;
      current.style.opacity = 1;
    }
  });
  return { ref: element, style: { opacity: 0 } };
};

const useFadeIn2 = (duration = 1, delay = 0) => {
  if (typeof duration !== "number" || typeof delay !== "number") {
    return;
  }
  const element = useRef();
  useEffect(() => {
    if (element.current) {
      const { current } = element;
      current.style.transition = `opacity ${duration}s ease-in-out ${delay}s`;
      current.style.opacity = 0;
    }
  });
  return { ref: element, style: { opacity: 1 } };
};

const App = () => {
  const fadeIn1 = useFadeIn(1, 2);
  const fadeIn2 = useFadeIn(5, 5);
  const fadeIn3 = useFadeIn2(5, 7);
  return (
    <div className="App">
      <h1 {...fadeIn1}>Hello</h1>
      <p {...fadeIn2}>slslslslslsl</p>
      <h2 {...fadeIn3}>사라져라</h2>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

//
