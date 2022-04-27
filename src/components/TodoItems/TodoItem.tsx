import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import { EditOutlined, DeleteOutline } from "@mui/icons-material";
import { Todo } from "../../models/todo";
import React, { useState } from "react";

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
  const [checked, setChecked] = useState(todo.completed);
  const markCompletedStyle = checked ? "strike" : "";
  return (
    <ListItem
      key={todo.id}
      secondaryAction={
        <div>
          <IconButton
            edge="end"
            aria-label="edit"
            className="item-btns"
            onClick={() => handleEdit(todo)}
          >
            <EditOutlined fontSize="small" />
          </IconButton>
          <IconButton
            edge="end"
            aria-label="delete"
            className="item-btns"
            onClick={() => handleDelete(todo)}
          >
            <DeleteOutline fontSize="small" />
          </IconButton>
        </div>
      }
      disablePadding
    >
      <ListItemButton role={undefined} dense>
        <ListItemIcon>
          <Checkbox
            edge="start"
            checked={checked}
            onChange={() => {
              handleToggle(todo);
              setChecked(!checked);
            }}
            tabIndex={-1}
            disableRipple
            inputProps={{ "aria-labelledby": todo.id }}
          />
        </ListItemIcon>
        <ListItemText
          id={todo.id}
          onClick={() => {
            handleToggle(todo);
            setChecked(!checked);
          }}
          className={`${markCompletedStyle}`}
        >
          {todo.todoName}
        </ListItemText>
      </ListItemButton>
    </ListItem>
  );
};

export default TodoItem;
