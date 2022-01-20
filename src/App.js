//import "./App.css";
import React from "react";
import { TodoCounter } from "./TodoCounter";
import { TodoItem } from "./TodoItem";
import { TodoList } from "./TodoList";
import { TodoSearch } from "./TodoSearch";
import { CreateTodoButton } from "./CreateTodoButton";

const todos = [
  { text: "Cortar cebolla", completed: true },
  { text: "Aprednder REACT", completed: false },
  { text: "Dejar de beber", completed: true },
  { text: "Ir a ciclear mas seguido", completed: false },
];

function App() {
  return (
    <React.Fragment>
      <TodoCounter />

      <TodoSearch />

      <TodoList>
        {todos.map((todos) => (
          <TodoItem
            key={todos.text}
            text={todos.text}
            completed={todos.completed}
          />
        ))}
      </TodoList>

      <CreateTodoButton />
    </React.Fragment>
  );
}

export default App;
