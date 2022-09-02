import React from "react";

function Buttons({
  todos,
  addTodos,
  activeTodos,
  setActiveTodos,
  filteredTodos,
}) {
  const clearItems = () => {
    addTodos([]);
  };
  return (
    <footer class="footer">
      <span className="todo-count">
        <strong>{filteredTodos.length}</strong> items left{" "}
      </span>

      <ul className="filters">
        <li>
          <a
            onClick={(e) => {
              setActiveTodos("All");
            }}
            className={activeTodos === "All" ? "selected" : undefined}
          >
            All
          </a>
        </li>
        <li>
          <a
            onClick={(e) => {
              setActiveTodos("Active");
            }}
            className={activeTodos === "Active" ? "selected" : undefined}
          >
            Active
          </a>
        </li>
        <li>
          <a
            onClick={(e) => {
              setActiveTodos("Completed");
            }}
            className={activeTodos === "Completed" ? "selected" : undefined}
          >
            Completed
          </a>
        </li>
      </ul>

      <button className="clear-completed" onClick={clearItems}>
        Clear completed
      </button>
      <footer className="info">
        <p>Click to edit a todo</p>
        <p>Created by Dmitry Sharabin</p>
        <p>Part of TodoMVC</p>
      </footer>
    </footer>
  );
}

export default Buttons;
