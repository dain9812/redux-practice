export const ADD_TODO = "ADD_TODO";

let todoId = 0;

export const addTodo = (text) => ({
  type: ADD_TODO,
  id: todoId++,
  text,
});
