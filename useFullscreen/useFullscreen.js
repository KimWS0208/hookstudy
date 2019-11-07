import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";

//import {elementType} from 'prop-types';
import "./styles.css";

const useFullscreen = callback => {
  const element = useRef();
  const runCb = isFull => {
    if (callback && typeof callback === "function") {
      callback(isFull);
    }
  };
  const triggerFull = () => {
    if (element.current) {
      if (element.current.requestFullscreen) {
        element.current.requestFullscreen();
      } else if (element.current.mozRequestFullscreen) {
        element.current.mozRequestFullscreen();
      } else if (element.current.wepkitRequestFullscreen) {
        element.current.wepkitRequestFullscreen();
      } else if (element.current.msRequstFullscreen) {
        element.current.msRequstFullscreen();
      }
      runCb(true);
    }
  };

  const exitFull = () => {
    document.exitFullscreen();
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.mozRequestFullscreen) {
      document.mozRequestFullscreen();
    } else if (document.wepkitRequestFullscreen) {
      document.wepkitRequestFullscreen();
    } else if (document.msRequstFullscreen) {
      document.msRequstFullscreen();
    }
    runCb(false);
  };

  return { element, triggerFull, exitFull };
};

const App = () => {
  const onFullS = isFull => {
    console.log(isFull ? "We are full" : "We are small");
  };
  const { element, triggerFull, exitFull } = useFullscreen(onFullS);
  return (
    <div className="App" style={{ height: "5000vh" }}>
      <div ref={element}>
        <img src="http://talkimg.imbc.com/TVianUpload/tvian/TViews/image/2019/07/12/Pmrd0TwH7uJH636985348971242715.jpg" />
        <button onClick={exitFull}>Exit Full</button>
      </div>
      <button onClick={triggerFull}>Make Full</button>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
