import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import useAxios from "./useAxios";

const App = () => {
  const { loading, data, refetch } = useAxios({
    url: "https://yts.lt/api/v2/list_movies.json"
  });
  //console.log(`Loading:${loading} \nError:${error} \n Data:${JSON.stringify(data)}`);//그게 이부분
  return (
    <div className="App" style={{ height: "5000vh" }}>
      <h1>{data && data.status}</h1>
      <h2>{loading && "Loading"}</h2>
      <button onClick={refetch}>Refetch</button>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
