import React, { useState } from 'react';
import './App.css';
import TodoList from './component/TodoList'
import NewTodo from './component/NewTodo';
import { Todo } from "./todo.model";
const App: React.FC = () => {
  const [todos, setTodes] = useState<Todo[]>([]);
 
  const addTodoHandler = (text: string) => {
    console.log("text", text)
    setTodes(prevTodo => [...prevTodo, { id: Math.random().toString(), text }])
  }

  return (
    <div >
      <NewTodo onAddTodo={addTodoHandler} />
      <TodoList items={todos}  />
    </div>
  );
}

export default App;
