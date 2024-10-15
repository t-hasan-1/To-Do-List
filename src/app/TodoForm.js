import React, { useState } from "react";

export const ToDoForm = ({ addTodo }) => {
  const [inputText, setInputText] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Received addTodo in ToDoForm:", addTodo); // Debug log
    if (typeof addTodo === "function") {
      addTodo(inputText); // Use addTodo to add the task
    } else {
      console.error("addTodo is not a function");
    }
    setInputText(""); // Clear the input field
  };

  return (
    <div style={{ height: "10%" }}>
      <form className="TodoForm" onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputText}
          placeholder="What is the task today?"
          required
          onChange={(event) => setInputText(event.target.value)}
          style={{ marginRight: "10px" }}
        />
        <button
          type="submit"
          className="todo-btn bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Add task
        </button>
      </form>
    </div>
  );
};
