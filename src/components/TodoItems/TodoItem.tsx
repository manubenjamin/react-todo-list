import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import { EditOutlined, DeleteOutline } from "@mui/icons-material";
import { Todo } from "../../models/todo";
import React from "react";

interface ItemProps {
  todo: Todo;
  handleToggle(todo: Todo): void;
  handleEdit(todo: Todo): void;
  handleDelete(todo: Todo): void;
}

const TodoItem: React.FC<ItemProps> = ({
  todo,
  handleToggle,
  handleEdit,
  handleDelete,
}) => {
  return (
    <ListItem
      key={todo.id}
      secondaryAction={
        <div>
          <IconButton
            edge="end"
            aria-label="edit"
            onClick={() => handleEdit(todo)}
          >
            <EditOutlined fontSize="small" />
          </IconButton>
          <IconButton
            edge="end"
            aria-label="delete"
            onClick={() => handleDelete(todo)}
          >
            <DeleteOutline fontSize="small" />
          </IconButton>
        </div>
      }
      disablePadding
    >
      <ListItemButton role={undefined} onClick={() => handleToggle(todo)} dense>
        <ListItemIcon>
          <Checkbox
            edge="start"
            checked={todo.completed ? true : false}
            onChange={() => console.log(todo)}
            tabIndex={-1}
            disableRipple
            inputProps={{ "aria-labelledby": todo.id }}
          />
        </ListItemIcon>
        <ListItemText id={todo.id}>{todo.todoName}</ListItemText>
      </ListItemButton>
    </ListItem>
  );
};

export default TodoItem;
