import React from 'react';

function CategoryFilter({ filter, setFilter }) {
  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  return (
    <div>
      <label htmlFor="category">Filter by Category:</label>
      <select id="category" value={filter} onChange={handleFilterChange}>
        <option value="all">All</option>
        <option value="work">Work</option>
        <option value="home">Home</option>
        <option value="personal">Personal</option>
      </select>
    </div>
  );
}

export default CategoryFilter;

