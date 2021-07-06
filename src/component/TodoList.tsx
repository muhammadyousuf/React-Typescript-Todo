import React from "react";

interface TodoListProps {
    items: {
        id: string,
        text: string
    }[],
    value : ""


};


const TodoList: React.FC<TodoListProps> = (props) => {
    return (
    <ul>
        {
            props.items.map(item => {
                return (
                    <li key={item.id} >{item.text}</li>
                )
            })
        }
    </ul>
    )

}

    export default TodoList