import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../actions";

const AddTodo = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const add = (e) => {
    if (text !== "") {
      dispatch(addTodo(text));
      setText("");
    }
    e.preventDefault();
  };

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={add}>ADD</button>
    </div>
  );
};

export default AddTodo;
