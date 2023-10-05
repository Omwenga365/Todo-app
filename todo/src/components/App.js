

import TodoForm from './TodoForm';
import TodoItem from './TodoItem';
import React, { useState, useEffect } from 'react';

function App() {
  
  const [todos, setTodos] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch('http://localhost:9191/todos')
      .then(response => response.json())
      .then(data => setTodos(data));
  }, []);

  useEffect(() => {
    fetch('http://localhost:9191/categories')
      .then(response => response.json())
      .then(data => setCategories(data));
  }, []);

  const handleCheckboxChange = id => {
    const updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        todo.status = !todo.status;
        fetch(`http://localhost:9191/todos/${id}`, {
          method: 'PATCH',
          body: JSON.stringify(todo),
          headers: {
            'Content-Type': 'application/json'
          }
        });
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const handleDelete = id => {
    fetch(`http://localhost:9191/delete_todos/${id}`, {
      method: 'DELETE'
    });
    const updatedTodos = todos.filter(todo => todo.id !== id);
    setTodos(updatedTodos);
  };

  const handleAddTodo = (name, category_id) => {
    const newTodo = {
      name,
      status: false,
      category_id
    };
    fetch('http://localhost:9190/add_todo', {
      method: 'POST',
      body: JSON.stringify(newTodo),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(data => setTodos([...todos, data]));
  };

  return (
    <div className='main'>
      <h1>Todo List</h1>
      <TodoForm categories={categories} onSubmit={handleAddTodo}  />
      <ul className='list'>
        {todos.map(todo => (
          <TodoItem key={todo.id} todo={todo} onCheckboxChange={handleCheckboxChange} onDelete={handleDelete} />
        ))}
      </ul>
    </div>
  );
}

export default App;
