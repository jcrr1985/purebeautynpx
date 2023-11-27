import React from 'react'
import MoreSuggestions from './MoreSuggestions'

const Havealook = ({ cart, removeFromCart, addToCart }) => {
  return (
    <div className='have-a-look'>
      <MoreSuggestions
        cart={cart}
        removeFromCart={removeFromCart}
        addToCart={addToCart}
      />
    </div>
  )
}

export default Havealook
