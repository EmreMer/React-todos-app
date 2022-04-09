import { useState } from 'react'
import List from "./List";
import Form from "./Form";
import Buttons from "./Buttons";

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
    return (
        <div>
            <h1>todos</h1>
            <Form addTodos={setTodos} todos={todos} />
            <List todos={todos} />
            <Buttons todos={todos} />

        </div>
    )
}

export default Todos