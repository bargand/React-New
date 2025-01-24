import React from "react";
import Text from "./components/Text";
import './App.css'

const App = () => {
  return (
    <div className="app">
      <Text visible="Text is Visible" invisible="Text is Invesible" visualize={true} nonVisualize={false} color="red"/>
    </div>
  );
};

export default App;
