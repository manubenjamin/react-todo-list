import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";

interface TodoProps {
  formik: any;
  submitBtnText: string;
}

const TodoForm: React.FC<TodoProps> = ({ formik, submitBtnText }) => {
  return (
    <form onSubmit={formik.handleSubmit} className="pa3 bg-white">
      <TextField
        fullWidth
        id="todoName"
        name="todoName"
        label="Todo Name"
        value={formik.values.todoName}
        onChange={formik.handleChange}
        error={formik.touched.todoName && Boolean(formik.errors.todoName)}
        helperText={formik.touched.todoName && formik.errors.todoName}
        className="input-textfield"
      />

      <Button color="primary" variant="contained" fullWidth type="submit">
        {submitBtnText}
      </Button>
    </form>
  );
};

export default TodoForm;
