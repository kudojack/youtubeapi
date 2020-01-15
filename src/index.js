import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import YoutubeCounter from "./components/YouTube/YouTubeCounter";

function App() {
  return (
    <div className="App">
      <YoutubeCounter />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
