import {
  ADD_TODO,
  DELETE_TODO,
  MARK_TODO,
  UPDATE_TODO,
} from "../actions/types";
import { State } from "../models/state";

const initialState: State = {
  todos: [
    { id: "1234567", todoName: "Electricty Bill Payment", completed: false },
    { id: "2345678", todoName: "Purchase Groceries", completed: true },
  ],
};

export default function todoReducer(state: State = initialState, action: any) {
  switch (action.type) {
    case ADD_TODO:
      const todos = state.todos.concat(action.payload);
      return { ...state, todos: todos };
    case DELETE_TODO:
      const activeTodos = state.todos.filter(
        (todo) => todo.id !== action.payload
      );
      return { ...state, todos: activeTodos };
    case UPDATE_TODO:
      const updatedTodos = state.todos.map((todo) => {
        return todo.id === action.payload.id ? action.payload : todo;
      });
      return { ...state, todos: updatedTodos };
    case MARK_TODO:
      const markedTodos = state.todos.map((todo) => {
        return todo.id === action.payload.id
          ? { ...todo, completed: action.payload.completed }
          : todo;
      });
      return { ...state, todos: markedTodos };
    default:
      return state;
  }
}
