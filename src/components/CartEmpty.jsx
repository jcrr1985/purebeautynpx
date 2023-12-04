import React from 'react'
import { Link } from 'react-router-dom'

const CartEmpty = () => {
  return (
    <div className='cat-page-cart-empty text-italianno'>
      <p className='sad-basket-empty centered-text'>
        Sad your basket is empty! <br />
        <p
          style={{
            fontFamily: 'Italiana',
            fontSize: '20px',
            fontWeight: 'bold',
            marginTop: '0px',
          }}
        >
          Lets start shopping!
        </p>
        <Link to='/category/all-items' className='anchor-continue'>
          <button className='button' style={{ padding: '1rem 4rem' }}>
            continue!
          </button>
        </Link>
      </p>
    </div>
  )
}

export default CartEmpty
