import "bootstrap/dist/css/bootstrap.min.css";
import { set } from "immutable";
import { useState } from "react";
import { Button, Form, FormGroup, Input, Label, ListGroup } from "reactstrap";
import DeleteBtn from "./DeleteBtn";
import TodoListItem from "./TodoListItem";

const App = () => {
  const [inputVal, setInputVal] = useState("");
  const [todos, setTodos] = useState([]);
  const [checkedTodos, setCheckedTodos] = useState([]);
  const [errors, setErrors] = useState([]);

  function addNewTodo(todo) {
    setTodos([
      ...todos,
      { text: todo, id: Math.random().toString(16).slice(2) },
    ]);
  }

  return (
    <>
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          if (inputVal.trim() === "") {
            setErrors(["Todo cannot be empty !"]);
            return;
          }
          addNewTodo(inputVal);
          setInputVal("");
          setErrors([]);
        }}
        className="container p-5"
      >
        <h1 className="text-center mb-5">Todo List App</h1>

        {/* Error display */}
        {errors.length > 0 ? (
          <div className="alert alert-danger justify-content-end">
            {errors.map((error, index) => (
              <p key={index}>{error}</p>
            ))}
          </div>
        ) : null}

        <FormGroup floating>
          <Input
            onChange={(e) => {
              setInputVal(e.target.value);
            }}
            id="todoItem"
            name="text"
            placeholder="Add a Todo"
            type="text"
            value={inputVal}
          />
          <Label for="todoItem">Add a Todo</Label>
        </FormGroup>
        <Button type="submit" color="primary" className="w-100 p-3">
          Add Todo
        </Button>
      </Form>

      <ListGroup className="container px-5">
        {todos.map((todo) => {
          return (
            <TodoListItem
              setCheckedTodos={setCheckedTodos}
              key={todo.id}
              todo={todo}
            />
          );
        })}
      </ListGroup>

      {checkedTodos.length > 0 && (
        <div className="container p-5">
          <DeleteBtn
            todos={todos}
            setTodos={setTodos}
            checkedTodos={checkedTodos}
            setCheckedTodos={setCheckedTodos}
            setErrors={setErrors}
          />
        </div>
      )}
      {/* If there are no todo list is empty */}
      {todos.length === 0 ? (
        <div className="container p-5">
          <p className="text-center">No tasks to complete</p>
        </div>
      ) : null}
    </>
  );
};
export default App;
