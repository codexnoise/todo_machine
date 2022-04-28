import React from "react";
import "./ToDoForm.css";

function TodoForm({ addTodo, setOpenModal }) {
  const [newTodoValue, setNewTodovalue] = React.useState("");

  const onChange = (event) => {
    setNewTodovalue(event.target.value);
  };

  const onCancel = () => {
    setOpenModal(false);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    addTodo(newTodoValue);
    setOpenModal(false);
  };

  return (
    <form onSubmit={onSubmit}>
      <textarea
        value={newTodoValue}
        onChange={onChange}
        placeholder="add a new task"
      />
      <div className="TodoForm-buttonContainer">
        <button
          type="button"
          className="TodoForm-button TodoForm-button-cancel"
          onClick={onCancel}
        >
          Cancel
        </button>

        <button className="TodoForm-button TodoForm-button-add" type="submit">
          Add
        </button>
      </div>
    </form>
  );
}

export { TodoForm };
