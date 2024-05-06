import React from 'react'
import earrings from '../assets/images/earrings.webp'

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
    imageSrc: earrings,
    materials: 'Sapphires, Vanntzium',
  },
  {
    id: 2,
    name: 'Silver Chainmail',
    category: 'Brooches',
    price: 55,
    imageSrc: earrings,
    materials: 'Lolita, Aquamarine, Zerdiviano',
  },
  {
    id: 3,
    name: 'Sword of Vermilion',
    category: 'Earrings',
    price: 25,
    imageSrc: earrings,
    materials: 'Gold, Silver, Diamond',
  },
]
