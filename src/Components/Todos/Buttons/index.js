import React from 'react'

function Buttons({ todos, addTodos, activeTodos, setActiveTodos, filteredTodos }) {
    const clearItems = () => {
        addTodos([]);
    };
    return (
        <div>

            <span className="todo-count"><strong>{filteredTodos.length}</strong> items left </span>

            <ul className="filters">
                <li>
                    <a
                        onClick={(e) => { setActiveTodos("All") }}
                        className={activeTodos === "All" ? 'selected' : undefined}
                    >All</a>
                </li>
                <li>
                    <a
                        onClick={(e) => { setActiveTodos("Active") }}
                        className={activeTodos === "Active" ? 'selected' : undefined}
                    >Active</a>
                </li>
                <li>
                    <a
                        onClick={(e) => { setActiveTodos("Completed") }}
                        className={activeTodos === "Completed" ? 'selected' : undefined}
                    >Completed</a>
                </li>
            </ul>


            <button
                className="clear-completed"
                onClick={clearItems}>
                Clear completed
            </button>
            <p>Click to edit a todo</p>
            <p>Created by <a href="https://d12n.me/">Dmitry Sharabin</a></p>
            <p>Part of <a href="http://todomvc.com">TodoMVC</a></p>
        </div>
    )
}

export default Buttons