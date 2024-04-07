import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import categoriesList from './itemsData'

const Navbar = ({ selectedCategoria }) => {
  return (
    <div className='navbar'>
      <div style={{ width: 'max-content' }}>
        <h4 className='navbar-title'>Browse by Categories</h4>
      </div>{' '}
      <div className='heart-list-container'>
        <ul className='heart-list'>
          <li
            className={
              selectedCategoria === 'all-items' ? 'active-categorie' : ''
            }
          >
            <Link to='/category/all-items'>All &nbsp;Items</Link>
          </li>
          {categoriesList.map((category) => (
            <li
              key={category.name}
              className={
                selectedCategoria === category.name.toLowerCase()
                  ? 'active-categorie'
                  : ''
              }
            >
              <Link to={`/category/${category.name.toLowerCase()}`}>
                {category.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Navbar
