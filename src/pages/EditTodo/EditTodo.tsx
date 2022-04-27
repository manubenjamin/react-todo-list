import React from "react";
import * as yup from "yup";
import { useFormik } from "formik";
import TodoForm from "../../components/TodoForm";
import { Button } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { State } from "../../models/state";
import { updateTodo } from "../../actions/todoAction";

const validationSchema = yup.object({
  todoName: yup.string().required("Todo name is required"),
});

const EditTodo: React.FC = () => {
  const todos = useSelector((state: State) => state.todos);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let { id } = useParams();
  const filteredTodo = todos.filter((todo) => todo.id === id);
  let todo = filteredTodo && filteredTodo[0];

  const formik = useFormik({
    initialValues: {
      todoName: todo?.todoName,
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      dispatch(
        updateTodo({
          id: todo.id,
          todoName: values.todoName,
          completed: todo.completed,
        })
      );
      navigate("/");
    },
  });

  const handleCancel = () => {
    navigate(`/`);
  };

  return (
    <div className="flex justify-center">
      <div className="w-50-l w-100">
        <div className="h3 w-100 flex justify-between items-center ph3 bg-white bb b--black-10">
          <div className="lh-title f5 b">Edit Todo</div>
          <div>
            <Button
              color="primary"
              variant="outlined"
              type="submit"
              onClick={handleCancel}
            >
              Cancel
            </Button>
          </div>
        </div>
        <TodoForm formik={formik} submitBtnText="Update Todo" />
      </div>
    </div>
  );
};

export default EditTodo;
