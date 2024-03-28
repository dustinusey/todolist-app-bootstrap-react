import { FormGroup, Input, Label, ListGroupItem } from "reactstrap";

const TodoListItem = (props) => {
  const { todo, setCheckedTodos } = props;

  return (
    <ListGroupItem>
      <FormGroup check inline>
        <Input
          onChange={(e) => {
            e.target.checked
              ? setCheckedTodos((prevTodos) => [...prevTodos, todo])
              : setCheckedTodos((prevTodos) =>
                  prevTodos.filter((t) => t !== todo)
                );
          }}
          type="checkbox"
          id={todo.id}
        />
        <Label check for={todo.id.toString()}>
          {todo.text}
        </Label>
      </FormGroup>
    </ListGroupItem>
  );
};
export default TodoListItem;
