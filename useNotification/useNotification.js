import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";

//import {elementType} from 'prop-types';
import "./styles.css";

const useNotification = (title, options) => {
  if (!("Notification" in window)) {
    return;
  }
  const fireNotif = () => {
    if (Notification.permission !== "granted") {
      Notification.requestPermission().then(permission => {
        if (permission === "granted") {
          new Notification(title, options);
        } else {
          //user가 내가 그를 알아주길 바라지 않아
          return;
        }
      });
    } else {
      new Notification(title, options);
    }
  };
  return fireNotif;
};

const App = () => {
  const triggerNotif = useNotification("Can i steal your kimchi?", {
    body: "I love kimchi dont you"
  });
  return (
    <div className="App" style={{ height: "5000vh" }}>
      <button onClick={triggerNotif}>Hello</button>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
