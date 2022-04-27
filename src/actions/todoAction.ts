import { Todo } from "../models/todo";
import { ADD_TODO, DELETE_TODO, MARK_TODO, UPDATE_TODO } from "./types";

export const addTodo = (todo: Todo) => {
  return {
    type: ADD_TODO,
    payload: todo,
  };
};

export const deleteTodo = (id: string) => {
  return {
    type: DELETE_TODO,
    payload: id,
  };
};

export const updateTodo = (todo: Todo) => {
  return {
    type: UPDATE_TODO,
    payload: todo,
  };
};

export const markStatusTodo = (todo: Todo) => {
  return {
    type: MARK_TODO,
    payload: todo,
  };
};
