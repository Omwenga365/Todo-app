import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import CategoryFilter from './components/CategoryFilter';

function Todo() {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState('all');

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, complete: !todo.complete };
        } else {
          return todo;
        }
      })
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const filterTodos = () => {
    if (filter === 'all') {
      return todos;
    } else {
      return todos.filter((todo) => todo.category === filter);
    }
  };

  return (
    <div style={{ background: 'blue', color: 'white' }}>
      <h1>Todo</h1>
      <CategoryFilter filter={filter} setFilter={setFilter} />
      <TodoList todos={filterTodos()} toggleComplete={toggleComplete} deleteTodo={deleteTodo} />
      <TodoForm addTodo={addTodo} />
    </div>
  );
}

export default Todo;

