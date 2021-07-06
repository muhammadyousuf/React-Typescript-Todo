import { type } from 'os';
import React, { useRef } from 'react';
import "./NewTodo.css"
type addTodoProps = {
    onAddTodo: (todoText: string) => void
}

const NewTodo: React.FC<addTodoProps> = (props) => {
    const textInputRef = useRef<HTMLInputElement>(null);

    const todoSubmitHandler = (event: React.FormEvent) => {
        event.preventDefault();
        const enteredText = textInputRef.current!.value;
        console.log(enteredText)
        props.onAddTodo(enteredText)
        textInputRef.current!.value = ""

    }

    return (
        <form onSubmit={todoSubmitHandler} className="form-control" >
            <div>
                <label>Todo Text</label>
                <input type="text" id="todo-text" ref={textInputRef} />
            </div>
            <br />
            <button type="submit" >ADD TODO</button>
        </form>
    )
}

export default NewTodo;