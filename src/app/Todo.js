import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";

export const Todo = ({ todo }) => {
  return (
    <div className="Todo" style={{ display: "flex", justifyContent: "space-between", margin: "10px 0" }}>
      <p>{todo.task}</p> {/* Render the task dynamically */}
      <div>
        <FontAwesomeIcon icon={faPenToSquare} style={{ marginRight: "10px" }} />
        <FontAwesomeIcon icon={faTrash} />
      </div>
    </div>
  );
};
