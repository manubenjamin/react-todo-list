import React, { useState } from "react";
import { Todo } from "../../models/todo";
import { TodoItems } from "../../components/TodoItems";
import { useNavigate } from "react-router-dom";
import ConfirmationWindow from "../../components/ConfirmationWindow";
import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { State } from "../../models/state";
import { deleteTodo, markStatusTodo } from "../../actions/todoAction";

const TodoList: React.FC = () => {
  const todos = useSelector((state: State) => state.todos);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [showDeletePrompt, setShowdeletePrompt] = useState(false);
  const [selectedTodo, setSelectedTodo] = useState<Todo>({
    id: "",
    todoName: "",
    completed: false,
  });

  const handleToggle = (todo: Todo) => {
    const todoItem = { ...todo };
    todoItem.completed = !todoItem.completed;
    dispatch(markStatusTodo(todoItem));
  };

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
    dispatch(deleteTodo(selectedTodo && selectedTodo.id));
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
