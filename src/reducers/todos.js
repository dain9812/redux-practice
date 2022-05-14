import { ADD_TODO, COMPLETED_TODO, DELETE_TODO } from "../actions";

const todos = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false,
        },
      ];
    case DELETE_TODO:
      return [...state.filter((todo) => todo.id !== action.id)];
    case COMPLETED_TODO:
      return [
        ...state.map((todo) =>
          todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
        ),
      ];
    default:
      return state;
  }
};

export default todos;
