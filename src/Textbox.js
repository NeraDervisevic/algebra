import React, { useState } from "react";

const Textbox = () => {
  const [text, setText] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    // Your logic for handling form submission
    console.log("Form submitted:", text);
    setText(""); // Clear the input field after submission
  };

  const onChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div className="Input">
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={text}
          type="text"
          placeholder="Enter your message and press ENTER"
          autoFocus
        />
        <button>Send</button>
      </form>
    </div>
  );
};

export default Textbox;