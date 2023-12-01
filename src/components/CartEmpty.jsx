import React from 'react'
import { Link } from 'react-router-dom'

const CartEmpty = () => {
  return (
    <div className='cat-page-cart-empty text-italianno'>
      <p className='sad-basket-empty centered-text' style={{}}>
        Sad your basket is empty! <br />
        <Link to='/category/all-items'>
          <button className='button'>Let's start shopping!</button>
        </Link>
      </p>
    </div>
  )
}

export default CartEmpty
