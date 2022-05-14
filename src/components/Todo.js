import { useDispatch } from "react-redux";
import { deleteTodo } from "../actions";
import styled from "styled-components";

const Li = styled.li`
  list-style: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 10px;
  border-bottom: 1px solid #ccc;
  &:last-child {
    border: none;
  }
`;

const Button = styled.button`
  font-size: 20px;
  background: none;
  border: none;
  border-radius: 5px;
  color: #ff3339;
  cursor: pointer;
  padding: 0;
`;

const Todo = ({ id, text }) => {
  const dispatch = useDispatch();

  const handleDelete = (e) => {
    dispatch(deleteTodo(id));

    e.preventDefault();
  };

  return (
    <Li>
      {text}
      <Button onClick={handleDelete}>✕</Button>
    </Li>
  );
};

export default Todo;
