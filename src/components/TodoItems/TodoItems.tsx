import List from "@mui/material/List";
import { Todo } from "../../models/todo";
import React from "react";
import TodoItem from "./TodoItem";

interface ItemProps {
  todos: Todo[];
  handleToggle(todo: Todo): void;
  handleEdit(todo: Todo): void;
  handleDelete(todo: Todo): void;
}

const TodoItems: React.FC<ItemProps> = ({
  todos,
  handleToggle,
  handleDelete,
  handleEdit,
}) => {
  const todoItemsSection = todos.map((todo, index) => {
    return (
      <TodoItem
        key={`item-${index}`}
        todo={todo}
        handleToggle={handleToggle}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
      />
    );
  });

  const emptyList =
    todos && todos.length === 0 ? (
      <div className="pa3 f6">No items available</div>
    ) : undefined;

  return (
    <List sx={{ width: "100%", bgcolor: "background.paper" }}>
      {todoItemsSection}
      {emptyList}
    </List>
  );
};

export default TodoItems;
