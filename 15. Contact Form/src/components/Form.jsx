import React from "react";
import "./Form.css";

const Form = () => {
  return (
    <div>
      <form action="">
        <input
          className="textForm"
          type="text"
          name="name"
          id="name"
          placeholder="Enter Your First Name"
        />{" "}
        <br />
        <input
          className="textForm"
          type="text"
          name="name"
          id="name"
          placeholder="Enter Your Second Name"
        />
        <br />
        <input
          className="textForm"
          type="email"
          name="email"
          id="email"
          placeholder="Enter Your Email"
        />
        <br />
        <input
          className="textForm"
          type="number"
          name="number"
          id="number"
          placeholder="Enter Your Mobile Number"
        />
        <br />
        <label style={{ margin: "5px", fontSize: "16px" }} htmlFor="birthday">
          Enter Your DOB:{" "}
        </label>
        <br />
        <input className="textForm" type="date" name="birthday" id="birthday" />
        <br />
        <label style={{ margin: "5px", fontSize: "16px" }} htmlFor="document">
          Upload Your Birth Certificate
        </label>
        <input type="file" name="document" id="document" />
        <br />
        <textarea
          style={{ height: "80px" }}
          className="textForm"
          name="comment"
          id="comment"
        ></textarea>
        <br />
        <input className="submitButton" type="submit" value="submit" />
      </form>
    </div>
  );
};

export default Form;
