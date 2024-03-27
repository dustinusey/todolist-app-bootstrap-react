import { Button } from "reactstrap";
import Cookies from "js-cookie";

const DeleteBtn = (props) => {
  const { todos, setTodos, checkedTodos, setCheckedTodos, setErrors } = props;
  return (
    <Button
      onClick={() => {
        setTodos(todos.filter((todo) => !checkedTodos.includes(todo)));
        setCheckedTodos([]);
        setErrors([]);
        Cookies.remove(`${checkedTodos[0].id}`);
      }}
      className="w-100 p-3"
      color="danger"
    >
      Delete Todo
    </Button>
  );
};
export default DeleteBtn;
