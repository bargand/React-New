import React from "react";
import "./Body.css";

const Contact = ({mode}) => {
  return (
    <>
      <div
        className="body"
        style={{
          width: "100%",
          height: "91vh",
          background: mode === "dark" ? "black" : "white",
        }}
      >
        <h1 style={{ color: mode === "dark" ? "white" : "black" }}>
          Contact Page
        </h1>
      </div>
    </>
  );
};

export default Contact;
