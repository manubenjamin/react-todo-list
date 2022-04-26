import React, { useState } from "react";
import { Todo } from "../../models/todo";
import { TodoItems } from "../../components/TodoItems";
import { useNavigate } from "react-router-dom";
import ConfirmationWindow from "../../components/ConfirmationWindow";
import { Button } from "@mui/material";

const TodoList: React.FC = () => {
  const [todos] = useState<Todo[]>([
    {
      id: "3232",
      todoName: "New todo",
      status: "pending",
    },
    {
      id: "3d232",
      todoName: "New todo 2",
      status: "completed",
    },
    {
      id: "3d2d32",
      todoName: "New todo 2",
      status: "completed",
    },
  ]);
  const navigate = useNavigate();
  const [showDeletePrompt, setShowdeletePrompt] = useState(false);
  const [selectedTodo, setSelectedTodo] = useState<Todo>();

  const handleToggle = (todo: Todo) => {};

  const handleAddTodo = () => {
    navigate(`add-todo`);
  };

  const handleEdit = (todo: Todo) => {
    navigate(`edit-todo/${todo.id}`);
  };

  const handleDelete = (todo: Todo) => {
    setSelectedTodo(todo);
    setShowdeletePrompt(true);
  };

  const handleDeleteAction = () => {
    setShowdeletePrompt(false);
    console.log(selectedTodo);
  };

  return (
    <div className="flex justify-center">
      <div className="w-50-l w-100">
        <div className="h3 w-100 flex justify-between items-center ph3 bg-white bb b--black-10">
          <div className="lh-title f5 b">Todo List</div>
          <div>
            <Button
              color="primary"
              variant="outlined"
              type="submit"
              onClick={handleAddTodo}
            >
              Add Todo
            </Button>
          </div>
        </div>
        <TodoItems
          todos={todos}
          handleToggle={handleToggle}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
        />
        <ConfirmationWindow
          isOpen={showDeletePrompt}
          handleClose={() => setShowdeletePrompt(false)}
          handleConfirm={handleDeleteAction}
        />
      </div>
    </div>
  );
};

export default TodoList;