import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./styles.css";
const useInput = (initialValue, validator) => {
  const click = () =>{}
  const [value, setValue] = useState(initialValue);
  const onChange = event => {
    const {
      target: {value}
    } = event;
    let willUpdate = true;
    if (typeof validator === "function"){
      willUpdate = validator(value)
    }
    if (willUpdate){
      setValue(value)
    }
  }
  return { value, onChange };
}
function App() {
  const maxLen = (value) => value.length < 10 && !value.includes('@');
  const name = useInput("Name", maxLen)
  const email = useInput('Email@domain')
  
  return (
    <div className="App">
      <h1>Hi</h1>
      <input placeholder='Name' onClick={' '} {...name}></input>
      <input placeholder='Email' {...email}></input>
    </div>
  );
};

}
const rootElement = document.getElementById("root");
ReactDOM.render(<App/>, rootElement);
