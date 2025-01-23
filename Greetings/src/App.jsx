import React from "react";
import "./App.css";

const App = () => {
  return (
    <div className="app">
      <button
        onClick={() => {
          alert("Hello");
        }}
        style={{ width: "100px", height: "50px", fontSize: "16px", cursor: "pointer"}}
      >
        Hi
      </button>
    </div>
  );
};

export default App;
