import { useState } from 'react'
import List from "./Todos/list/List";
import Form from "./Todos/form/Form";
import Buttons from "./Todos/buttons/Button";

function Todos() {
    const [todos, setTodos] = useState([
        {
            newTodo: "Taste JavaScript"
        },
        {
            newTodo: "Code furiously"
        },
        {
            newTodo: "Promote Mavo"
        },
        {
            newTodo: "Give talks"
        },
        {
            newTodo: "Write tutorials"
        },
        {
            newTodo: "Have a life!"
        },
    ])

    const [activeTodos, setActiveTodos] = useState("All");

    const removeTodos = (newTodo) => {
        const filtered = todos.filter(item => item.newTodo !== newTodo)
        setTodos(filtered);
    }

    const filteredTodos =
        activeTodos === "All" ? todos
            : activeTodos === "Active" ? todos.filter(item => item.complete === false)
                : todos.filter(item => item.complete === true)

    const updateCompleteTodos = (newTodo) => {
        const index = todos.findIndex(item => item.newTodo === newTodo);
        const todo = todos.find(item => item.newTodo === newTodo);
        todo.complete = !todo.complete
        const newTodos = [...todos];
        newTodos[index] = todo;
        setTodos(newTodos);
    }
    return (
        <section class="todoapp">

            <Form
                addTodos={setTodos}
                todos={todos} />
            <List
                todos={todos}
                addTodos={setTodos}
                updateCompleteTodos={updateCompleteTodos}
                activeTodos={activeTodos}
                setActiveTodos={setActiveTodos}
                removeTodos={removeTodos}
                filteredTodos={filteredTodos} />
            <Buttons
                todos={todos}
                addTodos={setTodos}
                activeTodos={activeTodos}
                setActiveTodos={setActiveTodos}
                filteredTodos={filteredTodos}

            />

        </section>
    )
}

export default Todos