import React from 'react';
import './App.css';
import TodoList from './component/TodoList'
import NewTodo from './component/NewTodo';
const App: React.FC = () => {
  const todos = [{ id: "1", text: "work" }];
 
  return (
    <div >
      <NewTodo />
      <TodoList items={todos}  />
    </div>
  );
}

export default App;
