import React from "react";
import { TodoCounter } from "../TodoCounter";
import { TodoItem } from "../TodoItem";
import { TodoList } from "../TodoList";
import { TodoSearch } from "../TodoSearch";
import { CreateTodoButton } from "../CreateTodoButton";
import { TodoContext } from "../TodoContext";
import { Modal } from "../Modal";
import { TodoForm } from "../TodoForm";

function AppUI() {
  const {
    error,
    loading,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
  } = React.useContext(TodoContext);

  return (
    <React.Fragment>
      <TodoCounter />
      <TodoSearch />

      <TodoList>
        {error && <p>HUBO UN ERROR AL CARGAR</p>}
        {loading && <p>LOADING ... 99.9%</p>}
        {!loading && !searchedTodos.length && <p>CREA TU PRIMER TODO</p>}
        {searchedTodos.map((todox) => (
          <TodoItem
            key={todox.text}
            text={todox.text}
            completed={todox.completed}
            onComplete={() => completeTodo(todox.text)}
            onDelete={() => deleteTodo(todox.text)}
          />
        ))}
      </TodoList>

      {openModal && (
        <Modal>
          <TodoForm />
        </Modal>
      )}

      <CreateTodoButton setOpenModal={setOpenModal} />
    </React.Fragment>
  );
}

export { AppUI };
