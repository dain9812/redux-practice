import { useSelector } from "react-redux";
import Todo from "./Todo";
import styled from "styled-components";

const Ul = styled.ul`
  padding: 15px;
  margin: 0;
`;

const TodoList = () => {
  const todos = useSelector((state) => state.todos);

  return (
    <Ul>
      {todos.map((todo) => (
        <Todo key={todo.id} {...todo} />
      ))}
    </Ul>
  );
};

export default TodoList;
