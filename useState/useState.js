import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./styles.css";
function App() {
  const [item, setItem] = useState(1);
  const inCrementItem = () => setItem(item + 1);
  const deCrementItem = () => setItem(item - 1);
  return (
    <div className="App">
      <h1>wonsub {item}</h1>
      <button onClick={inCrementItem}>inCrementItem</button>
      <button onClick={deCrementItem}>deCrementItem</button>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);