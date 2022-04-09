import React from 'react'

function Buttons({ todos }) {
    return (
        <div>

            <label>{todos.length} items left </label>
            <button>
                All
            </button>
            <button>
                Active
            </button>
            <button>
                Completed
            </button>
            <button
                className="clear-completed"
                mv-action="delete(todo where done)">
                Clear completed
            </button>
            <p>Click to edit a todo</p>
            <p>Created by <a href="https://d12n.me/">Dmitry Sharabin</a></p>
            <p>Part of <a href="http://todomvc.com">TodoMVC</a></p>
        </div>
    )
}

export default Buttons