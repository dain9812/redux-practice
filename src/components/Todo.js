import { useDispatch } from "react-redux";
import { completedTodo, deleteTodo } from "../actions";
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
  &.done {
    color: #ccc;
  }
`;

const Button = styled.button`
  font-size: 20px;
  background: none;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  padding: 0;
  &:last-child {
    margin-left: 15px;
  }
`;

const Text = styled.div`
  position: relative;
`;

const CompletedLine = styled.span`
  position: absolute;
  top: 50%;
  left: -3px;
  right: -3px;
  transform: translateY(-50%);
  height: 1px;
  background: #3367ff;
`;

const Todo = ({ id, text, completed }) => {
  const dispatch = useDispatch();

  const handleCompleted = (e) => {
    dispatch(completedTodo(id));
    e.preventDefault();
  };

  const handleDelete = (e) => {
    dispatch(deleteTodo(id));
    e.preventDefault();
  };

  return (
    <Li className={completed ? "done" : ""}>
      <Text>
        {text}
        {completed ? <CompletedLine /> : ""}
      </Text>
      <div>
        <Button onClick={handleCompleted}>✅</Button>
        <Button onClick={handleDelete}>❌</Button>
      </div>
    </Li>
  );
};

export default Todo;
