import { useState } from 'react'

function List({ todos, filteredTodos, updateCompleteTodos, removeTodos }) {
  const [click, setClick] = useState(todos)



  return (
    <div>

      <ul className="todo-list">
        {
          filteredTodos.map((todos, i) => (
            <li key={i}
              className={todos.complete ? 'completed' : undefined}>
              <div className="view">
                <input
                  className="toggle"
                  type="checkbox"
                  checked={todos.complete}
                  onChange={() => updateCompleteTodos(todos.newTodo)}
                />
                <label
                  className="borderbottom">
                  {todos.newTodo}
                </label>
                <button
                  className="destroy"
                  onClick={() => removeTodos(todos.newTodo)}
                />
              </div>
            </li>
          ))
        }
      </ul>


    </div>
  )
}

export default List