import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../actions";
import styled from "styled-components";

const Container = styled.div`
  padding: 15px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #ccc;
`;

const Input = styled.input`
  flex-grow: 1;
  margin-right: 15px;
  padding: 10px;
  font-size: 20px;
  border: none;
  border-bottom: 1px solid #ccc;
`;

const Button = styled.button`
  font-size: 20px;
  background: #3367ff;
  border: none;
  border-radius: 5px;
  padding: 10px;
  color: #fff;
  cursor: pointer;
`;

const AddTodo = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const handleAdd = (e) => {
    if (text !== "") {
      dispatch(addTodo(text));
      setText("");
    }
    e.preventDefault();
  };

  return (
    <Container>
      <Input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <Button onClick={handleAdd}>ADD</Button>
    </Container>
  );
};

export default AddTodo;
