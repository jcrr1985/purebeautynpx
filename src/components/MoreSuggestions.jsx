import React from 'react'
import CartCounter from './CartCounter'
import QuantityButton from './QuantityButton'
import necklace from '../assets/images/necklace.jpeg'

const MoreSuggestions = ({ removeFromCart, addToCart }) => {
  const handleAddToCart = (item, operator) => {
    addToCart(item, 'add')
  }

  return (
    <div style={{ textAlign: 'center', marginTop: '2rem', marginTop: '4%' }}>
      <hr className='more-suggestions-divider' />
      <h3 style={{ textAlign: 'center', marginBottom: '3rem' }}>
        More suggestion for you
      </h3>
      <div className='grid-container suggestions'>
        {dummySuggestedItems.map((item, index) => (
          <div key={index} className='cart-item suggestions'>
            <img src={item.imageSrc} />
            <div className='cart-legend'>
              <p>{item.name}</p>
              <p>{item.materials}</p>

              <div className='quantity-buttons'>
                <div className='cart-page--buttons--container'>
                  <button
                    className='add-to-cart'
                    onClick={() => handleAddToCart(item, 'add')}
                  >
                    Add To Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default MoreSuggestions

const dummySuggestedItems = [
  {
    id: 1,
    name: 'Valkyrie soul',
    category: 'Brooches',
    price: 50,
    imageSrc: necklace,
    materials: 'Sapphires, Vanntzium',
  },
  {
    id: 2,
    name: 'Silver Chainmail',
    category: 'Brooches',
    price: 55,
    imageSrc: necklace,
    materials: 'Lolita, Aquamarine, Zerdiviano',
  },
  {
    id: 3,
    name: 'Sword of Vermilion',
    category: 'Earrings',
    price: 25,
    imageSrc: necklace,
    materials: 'Gold, Silver, Diamond',
  },
]
