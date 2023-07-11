import React from "react";
import "./TodoCounter.css";

function TodoCounter({ totalTodos, completedTodos, loading }) {
  return (
    <div className={`${loading && "TodoCounter--loading"}`}>
      <h1 className="TodoTitle">toDo Machine</h1>
      <h2 className="TodoCounter">
        you have completed:<br/> {completedTodos} of {totalTodos} tasks
      </h2>
    </div>
  );
}

export { TodoCounter };
