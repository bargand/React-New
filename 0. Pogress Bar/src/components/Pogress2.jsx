import React, { useState } from "react";
import "./Pogress.css";

const Pogress = () => {
  const [Number, setNumber] = useState(0);
  return (
    <>
      <div className="bar">
        <div className="bar2" style={{ width: `${Number}%` }}></div>
        <button
          onClick={() => {
            setNumber((Number) => Number + 20);
          }}
        >
          Increase
        </button>
      </div>
    </>
  );
};

export default Pogress;
