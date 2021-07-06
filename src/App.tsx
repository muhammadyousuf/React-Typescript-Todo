import React from 'react';
import './App.css';
import TodoList from './component/TodoList'
import NewTodo from './component/NewTodo';
const App: React.FC = () => {
  const todos = [{ id: "1", text: "work" }];
 
  const addTodoHandler = (text: string) => {
    console.log("text", text)
  }

  return (
    <div >
      <NewTodo onAddTodo={addTodoHandler} />
      <TodoList items={todos}  />
    </div>
  );
}

export default App;
