import React, { useState } from "react";
import { ToDoForm } from "./ToDoForm";
import { Todo } from "./Todo";

export const TodoWrapper = () => {
  const [todos, setTodos] = useState([]);
  // Define the addTodo function
  const addTodo = (todo) => {
    console.log("Adding a todo:", todo); // Debug log
    setTodos([...todos, { task: todo, completed: false, isEditing: false }]);
  };

  // Debugging log to confirm addTodo is defined
  console.log("addTodo function in TodoWrapper:", addTodo);

  return (
    <div
      className="TodoWrapper"
      style={{
        textAlign: "center",
        paddingTop: "10%",
        height: "10vh",
        backgroundColor: "black",
      }}
    >
      {/* Pass the addTodo function as a prop to ToDoForm */}
      <ToDoForm addTodo={addTodo} />
      {/* Render the list of todos */}
      {todos.map((todo, index) => (
        <Todo key={index} todo={todo} />
      ))}
    </div>
  );
};
