import { useDispatch } from "react-redux";
import { deleteTodo } from "../actions";

const Todo = ({ id, text }) => {
  const dispatch = useDispatch();

  const Delete = (e) => {
    dispatch(deleteTodo(id));

    e.preventDefault();
  };

  return (
    <li>
      {text}
      <button onClick={Delete}>DELETE</button>
    </li>
  );
};

export default Todo;
