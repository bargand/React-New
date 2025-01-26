import React from "react";
import './Body.css'

const Body = (props) => {
  return (
    <div className="body">
      <h1 style={{color: props.mode === "dark"? "#000": "#e7e7e7"}}>Debargha Nandi</h1>
      <div className="form-check form-switch">
        <input
          className="form-check-input"
          type="checkbox"
          id="flexSwitchCheckDefault"
          onClick={props.toggelMode}
        />
      </div>
    </div>
  );
};

export default Body;
