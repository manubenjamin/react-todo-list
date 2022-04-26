import { State } from "../models/state";

const initialState = {
  todos: [
    { id: "df", todoName: "Learn React", completed: true },
    { id: "fd", todoName: "Learn Redux", completed: false },
  ],
};

export default function todoReducer(state: State = initialState, action: any) {
  switch (action.type) {
    default:
      return state;
  }
}
