import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import styled from "styled-components";

const Container = styled.div`
  max-width: 50%;
  margin: 0 auto;
  border-radius: 5px;
  font-size: 20px;
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
    rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
`;

const App = () => {
  return (
    <Container>
      <AddTodo />
      <TodoList />
    </Container>
  );
};

export default App;
