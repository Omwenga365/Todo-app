import React, { useState } from 'react';
import axios from 'axios';

function TodoForm({ categories, onSubmit }) {
  const [name, setName] = useState('');
  const [categoryId, setCategoryId] = useState(categories.length > 0 ? categories[0].id : null);

  const handleSubmit = event => {
    event.preventDefault();
    axios.post('http://localhost:9191/add_todo', {
      name,
      status: false,
      category_id: categoryId
    })
      .then(response => {
        onSubmit(response.data.name, response.data.category_id);
        setName('');
        setCategoryId(categories.length > 0 ? categories[0].id : null);
      })
      .catch(error => console.log(error));
  };

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <label>
        Name:
        <input type="text" value={name} onChange={event => setName(event.target.value)} />
      </label>
      <label>
        Category:
        <select value={categoryId || ""} onChange={event => setCategoryId(event.target.value)}>
          {categories.map(category => (
            <option key={category.id} value={category.id}>{category.name}</option>
          ))}
        </select>
      </label>
      <button type="submit" >Add Todo</button>
    </form>
  );
}

export default TodoForm;
