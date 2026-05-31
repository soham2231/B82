import React, { useState } from "react";

export default function TextForm(props) {
  //function for button click of uppercase
  const handleUpClick = () => {
    // console.log("Uppercase was clicked " + text);
    let newText = text.toUpperCase();
    setText(newText);
  };

  //function for button click of lowercase
  const handleLowClick = () => {
    // console.log("Lowercase was clicked " + text);
    let newText = text.toLowerCase();
    setText(newText);
  };

  //function for button click of clear text
  const handleClearClick = () => {
    let newText = "";
    setText(newText);
  };

  //function for on change of text area
  const handleOnChange = (event) => {
    // console.log("On change");
    setText(event.target.value);
  };

  //state for text area
  const [text, setText] = useState("");

  return (
    <>
      <div>
        <div className="mb-3">
          <h1>{props.heading}</h1>

          <textarea
            className="form-control"
            id="myBox"
            rows="7"
            value={text}
            placeholder="Enter text here"
            onChange={handleOnChange}
          ></textarea>
        </div>
        <button className="btn btn-outline-primary" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button
          className="btn btn-outline-primary mx-2"
          onClick={handleLowClick}
        >
          Convert to Lowercase
        </button>
        <button
          className="btn btn-outline-primary mx-2"
          onClick={handleClearClick}
        >
          Clear Text
        </button>
      </div>

      <div className="container my-3">
        <h2>Your text summary</h2>
        <p>
          {text.split(" ").length} Words and {text.length} Characters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
