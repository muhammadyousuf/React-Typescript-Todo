import React from "react";
import "./TodoList.css";
interface TodoListProps {
    items: {
        id: string,
        text: string
    }[],
    onDeleteTodo: (id: string) => void


};


const TodoList: React.FC<TodoListProps> = (props) => {
    return (
    <ul>
        {
            props.items.map(item => {
                return (
                    <li key={item.id} >
                        <span>{item.text}</span>
                        <button onClick={() => props.onDeleteTodo(item.id)} >DELETE</button>
                    </li>
                )
            })
        }
    </ul>
    )

}

    export default TodoList