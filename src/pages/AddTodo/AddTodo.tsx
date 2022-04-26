import React from "react";
import * as yup from "yup";
import { useFormik } from "formik";
import TodoForm from "../../components/TodoForm";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { addTodo } from "../../actions/todoAction";
import { useDispatch } from "react-redux";

const validationSchema = yup.object({
  todoName: yup.string().required("Todo is required"),
});

const AddTodo: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      todoName: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      dispatch(
        addTodo({
          id: Date.now().toString(),
          todoName: values.todoName,
          completed: false,
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
          <div className="lh-title f5 b">Add todo</div>
          <div>
            <Button
              color="primary"
              variant="outlined"
              type="submit"
              onClick={handleCancel}
            >
              Back
            </Button>
          </div>
        </div>
        <TodoForm formik={formik} submitBtnText="Add Todo" />
      </div>
    </div>
  );
};

export default AddTodo;
