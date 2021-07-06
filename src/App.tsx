import React from 'react';
import './App.css';
import TodoList from './component/TodoList'

const App: React.FC = () => {
  const todos = [{ id: "1", text: "work" }];
  const data = ""
  return (
    <div >
      <TodoList items={todos} value={data} />
    </div>
  );
}

export default App;
