import {
  ADD_TODO,
  DELETE_TODO,
  MARK_STATUS,
  UPDATE_TODO,
} from "../actions/types";
import { State } from "../models/state";

const initialState: State = {
  todos: [
    { id: "abcd", todoName: "Learn React", completed: false },
    { id: "abce", todoName: "Learn Redux", completed: true },
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
      const index = state.todos.findIndex(
        (todo) => todo.id === action.payload.id
      );
      state.todos[index].todoName = action.payload.todoName;
      state.todos[index].completed = action.payload.completed;
      return state;
    case MARK_STATUS:
      const itemIndex = state.todos.findIndex(
        (todo) => todo.id === action.payload.id
      );
      state.todos[itemIndex].completed = action.payload.completed;
      return state;
    default:
      return state;
  }
}
