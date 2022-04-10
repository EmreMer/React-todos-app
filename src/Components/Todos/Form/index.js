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
    )
}

export default Form