import { Button } from "reactstrap";

const DeleteBtn = (props) => {
  const { todos, setTodos, checkedTodos, setCheckedTodos } = props;
  return (
    <Button
      onClick={() => {
        setTodos(todos.filter((todo) => !checkedTodos.includes(todo)));
        setCheckedTodos([]);
      }}
      className="w-100 p-3"
      color="danger"
    >
      Delete Todo
    </Button>
  );
};
export default DeleteBtn;
