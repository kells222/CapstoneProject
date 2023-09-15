import React from 'react';

function Filter({ categories, selectedCategory, onSelectCategory }) {
  return (
    <div className="Filter">
      <h3>Filter by Category:</h3>
      <select value={selectedCategory} onChange={(e) => onSelectCategory(e.target.value)}>
        <option value="">All Categories</option>
        <option value="men's clothing">Men's Clothing</option>
        <option value="women's clothing">Women's Clothing</option>
        <option value="electronics">Electronics</option>
        <option value="jewelery">Jewelery</option>


        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Filter;