import React, { useState } from 'react';

function TodoForm({ addTodo }) {
  const [text, setText] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text || !category) return;
    addTodo({
      id: Math.random(),
      text,
      category,
      complete: false,
    });
    setText('');
    setCategory('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Add Todo" />
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="">Category</option>
        <option value="work">Work</option>
        <option value="home">Home</option>
        <option value="personal">Personal</option>
      </select>
      <button type="submit">Add</button>
    </form>
  );
}

export default TodoForm;
