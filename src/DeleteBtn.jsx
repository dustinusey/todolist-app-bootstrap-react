import { Button } from "reactstrap";
import Cookies from "js-cookie";

const DeleteBtn = (props) => {
  const { todos, setTodos, checkedTodos, setCheckedTodos, setErrors } = props;
  return (
    <Button
      onClick={() => {
        checkedTodos.forEach(todo => Cookies.remove(`${todo.id}`));
        setTodos(todos.filter((todo) => !checkedTodos.includes(todo)));
        setCheckedTodos([]);
        setErrors([]);
      }}
      className="w-100 p-3"
      color="danger"
    >
      Delete Todo
    </Button>
  );
};
export default DeleteBtn;
