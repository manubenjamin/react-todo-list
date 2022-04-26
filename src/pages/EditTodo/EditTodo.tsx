import React from "react";
import * as yup from "yup";
import { useFormik } from "formik";
import TodoForm from "../../components/TodoForm";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const validationSchema = yup.object({
  todoName: yup.string().required("Todo is required"),
});

const EditTodo: React.FC = () => {
  const formik = useFormik({
    initialValues: {
      todoName: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  const navigate = useNavigate();

  const handleCancel = () => {
    navigate(`/`);
  };

  return (
    <div className="flex justify-center">
      <div className="w-50-l w-100">
        <div className="h3 w-100 flex justify-between items-center ph3 bg-white bb b--black-10">
          <div className="lh-title f5 b">Edit todo</div>
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
