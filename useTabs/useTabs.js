import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./styles.css";
const content = [
  {
    tab: "Section 1",
    content: "I'm the content section 1"
  },
  {
    tab: "Section 2",
    content: "I'm the content section 2"
  }
];
const useTabs = (initialTab, allTabs) => {
  if (!allTabs || !Array.isArray(allTabs)) {
    return;
  }
  const [currentIndex, setcurrentIndex] = useState(initialTab);
  return {
    currentItem: allTabs[currentIndex],
    changeItem: setcurrentIndex
  };
};
const App = () => {
  const { currentItem, changeItem } = useTabs(0, content);
  return (
    <div className="App">
      <h1>Hi</h1>
      {content.map((section, index) => (
        <button onClick={() => changeItem(index)}>{section.tab}</button>
      ))}
      <div>{currentItem.content}</div>
    </div>
  );
};
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
