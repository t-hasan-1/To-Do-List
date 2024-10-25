import React, { useState } from "react";
import { ToDoForm } from "./ToDoForm";
import { Todo } from "./Todo";

export const TodoWrapper = () => {
  const [todos, setTodos] = useState([]);
  // Define the addTodo function
  const addTodo = (todo) => {
    console.log("Adding a todo:", todo); // Debug log
    setTodos([
      ...todos,
      {
        id: Math.random() * 10000,
        task: todo,
        completed: false,
        isEditing: false,
      },
    ]);
  };

  // Debugging log to confirm addTodo is defined
  console.log("addTodo function in TodoWrapper:", addTodo);
  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const editTodo = (id) => {
    let editedTaskName = prompt("Please enter your edited task:");

    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, task: editedTaskName } : todo
      )
    );
  };

  return (
    <div
      className="TodoWrapper"
      style={{
        textAlign: "center",
        paddingTop: "10%",
        height: "10vh",
        backgroundColor: "white",
      }}
    >
      <h1>Get Things Done!</h1>
      <ToDoForm addTodo={addTodo} />
      <br />
      <br />
      <br />
      <br />
      {/* Render the list of todos */}
      {todos.map((todo, index) => (
        <Todo
          key={index}
          todo={todo}
          toggleComplete={toggleComplete}
          deleteTodo={deleteTodo}
          editTodo={editTodo}
        />
      ))}
    </div>
  );
};
