import { useState } from 'react'

function List({ todos }) {
  const [click, setClick] = useState(todos)


  return (
    <div>
      <ul className="todo-list">
        {todos.map((todo, i) => (
          <li key={i}>
            <input name="done" className="toggle" type="checkbox" />
            {todo.newTodo}
            <button className="destroy" mv-action="delete(todo)"  ></button>
          </li>
        ))}
      </ul>

    </div>
  )
}

export default List