import React, { useState, useContext } from "react";
import TodoContext from "../../context/TodoContext";
import "./input.css";
const Input = () => {
  const { addTodoItem } = useContext(TodoContext);
  const [inputValue, setInputValue] = useState("");

  const handleInputValueChange = (e) => {
    setInputValue(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue !== "") {
      // do something add items
      addTodoItem(inputValue);
    }
  };
  return (
    <div className="input-container">
      <div className="input-icon"></div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="input"
          value={inputValue}
          placeholder="Create a new todo..."
          onChange={handleInputValueChange}
        />
      </form>
    </div>
  );
};

export default Input;
