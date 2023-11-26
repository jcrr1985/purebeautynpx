import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import categoriesList from './itemsData';

const Navbar = ({ selectedCategoria }) => {
  const [selectedCategory, setSelectedCategory] = useState('All Items');

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="navbar">
      <div style={{ width: 'max-content' }}>
        <h4 className="navbar-title">Browse by Categories</h4>
      </div>{' '}
      <div className="heart-list-container">
        <ul className="heart-list">
          <li
            onClick={() => handleCategoryClick('all-items')}
            className={
              selectedCategoria === 'all-items' ? 'active-categorie' : ''
            }>
            <Link to="/category/all-items">All &nbsp;Items</Link>
          </li>
          {categoriesList &&
            categoriesList.map((category) => (
              <li
                key={category.name}
                onClick={() => handleCategoryClick('all-items')}
                className={
                  selectedCategoria === category.name.toLowerCase()
                    ? 'active-categorie'
                    : ''
                }>
                <Link to={`/category/${category.name.toLowerCase()}`}>
                  {category.name}
                </Link>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
