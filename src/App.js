//import "./App.css";
import React from "react";
import { TodoCounter } from "./TodoCounter";
import { TodoItem } from "./TodoItem";
import { TodoList } from "./TodoList";
import { TodoSearch } from "./TodoSearch";
import { CreateTodoButtom } from "./CreateTodoButtom";

const todos = [
  { text: "Cortar cebolla", completed: false },
  { text: "Aprednder REACT", completed: false },
  { text: "Dejar de beber", completed: false },
  { text: "Ir a ciclear mas seguido", completed: false },
];

function App() {
  return (
    <React.Fragment>
      <TodoCounter />

      <TodoSearch />

      <TodoList>
        {todos.map((todos) => (
          <TodoItem key={todos.text} text={todos.text} />
        ))}
      </TodoList>

      <CreateTodoButtom />
    </React.Fragment>
  );
}

export default App;
