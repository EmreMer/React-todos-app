import { useState, useEffect } from 'react'

const initialFormValues = { newTodo: "" };


function Form({ addTodos, todos }) {
    const [form, setForm] = useState(initialFormValues);

    useEffect(() => {
        setForm(initialFormValues)

    }, [todos])


    const onChangeInput = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const onSubmit = (e) => {
        e.preventDefault();

        if (form.newTodo === "") {
            return false;
        }
        console.log(form);

        addTodos([...todos, form])

    }
    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos))
    }, [todos])

    return (
        <header class="header">
            <h1>todos</h1>
            <form onSubmit={onSubmit}>
                <div>
                    <input
                        name="newTodo"
                        className="new-todo"
                        placeholder="What needs to be done?"
                        value={form.newTodo}
                        onChange={onChangeInput}
                    />
                </div>
            </form>
        </header>
    )
}

export default Form