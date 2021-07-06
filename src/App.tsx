import React, { useState } from 'react';
import './App.css';
import TodoList from './component/TodoList'
import NewTodo from './component/NewTodo';
import { Todo } from "./todo.model";
const App: React.FC = () => {
  const [todos, setTodes] = useState<Todo[]>([]);
 
  const addTodoHandler = (text: string) => {
    setTodes(prevTodo => [...prevTodo, { id: Math.random().toString(), text }])
  }

  const todoDeleteHandler = (todoId: string) => {
    console.log("todoId", todoId)
    setTodes(prevTodo => {
      return prevTodo.filter(todo => todo.id !== todoId)
    })
  }

  return (
    <div >
      <NewTodo onAddTodo={addTodoHandler} />
      <TodoList items={todos} onDeleteTodo={todoDeleteHandler} />
    </div>
  );
}

export default App;
