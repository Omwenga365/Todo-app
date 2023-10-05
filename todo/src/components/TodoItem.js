import React from 'react';


function TodoItem({ todo, onCheckboxChange, onDelete}) {
  const { id, name, status, category } = todo;
    const categoryName = category.name
    // console.log(categoryName)
  

  const handleCheckboxChange = () => {
    onCheckboxChange(id);
  };

  const handleDelete = () => {
    onDelete(id);
  };

  return (
    
    <li className='todo-display'>
      <input type="checkbox" checked={status} onChange={handleCheckboxChange} />
      <span>{name} - {categoryName}</span>
      <button onClick={handleDelete} className="delete">Delete</button>
    </li>
  );
}

export default TodoItem;