import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

const ItemElement = ({ imageSrc, name, price, addToCart, materials, id }) => {
  return (
    <Link to={`/item/${id}`} className='item-link'>
      <div className='item category'>
        <img src={imageSrc} alt={name} />
        <h5 className='item-title'>{name}</h5>
        <div className='description-container'>
          <p>{materials}</p>
          <p>{price} $</p>
        </div>
      </div>
    </Link>
  )
}

export default ItemElement
