import React from "react";

const App = () => {
  const fruits = ["Apple", "Pinapple", "Papaya", "Guava", "Grapes"];

  return (
    <>
      <h1>Fruits are</h1>
      <ul>
        {fruits.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ul>
    </>
  );
};

export default App;
