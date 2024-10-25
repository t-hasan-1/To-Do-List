import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";

export const Todo = ({ todo, toggleComplete, deleteTodo, editTodo }) => {
  console.log(todo);
  return (
    <div className="Todo">
      <p>{`${todo.completed ? "completed" : ""}`}</p>
      <p onClick={() => toggleComplete(todo.id)}>{todo.task}</p>
      <div>
        <FontAwesomeIcon
          icon={faPenToSquare}
          style={{ marginRight: "10px" }}
          onClick={() => editTodo(todo.id)}
        />
        <FontAwesomeIcon icon={faTrash} onClick={() => deleteTodo(todo.id)} />
      </div>
    </div>
  );
};
