export const ADD_TODO = "ADD_TODO";
export const DELETE_TODO = "DELETE_TODO";

let todoId = 0;

export const addTodo = (text) => ({
  type: ADD_TODO,
  id: todoId++,
  text,
});

export const deleteTodo = (id) => ({
  type: DELETE_TODO,
  id,
});
