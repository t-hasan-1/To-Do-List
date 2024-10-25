import React, { useState } from "react";

export const EditTodoForm = ({ editTodo, task }) => {
  const [inputText, setInputText] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    
    editTodo(value, task.id)

    setConstantValue('')
  };

  return (
    <div style={{ height: "10%" }}>
      <form className="TodoForm" onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputText}
          placeholder="Update task?"
          required
          onChange={(event) => setInputText(event.target.value)}
          style={{
            marginRight: "10px",
            width: "",
          }}
        />
        <button
          type="submit"
          className="todo-btn bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Update Task
        </button>
      </form>
    </div>
  );
};
