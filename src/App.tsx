import "./App.css";
import { Routes, Route } from "react-router-dom";
import TodoList from "./pages/TodoList";
import AddTodo from "./pages/AddTodo";
import EditTodo from "./pages/EditTodo";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<TodoList />}></Route>
        <Route path="add-todo" element={<AddTodo />}></Route>
        <Route path="edit-todo/:id" element={<EditTodo />}></Route>
      </Routes>
    </div>
  );
};

export default App;
