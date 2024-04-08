import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { categoriesList } from './itemsData'
import ControlledAccordions from './Accordion'
import { showAutoClosingMessage } from '../App'

import ImageCarousel from './Carousel2'

const ItemDetailPage = ({ addToCart, returnSelectedSizes }) => {
  const { itemId } = useParams()
  const [foundItem, setFoundItem] = useState(null)
  const [selectedSize, setSelectedSize] = useState([])
  const [showMoreLessButtons, setShowMoreLessButtons] = useState(false)

  useEffect(() => {
    console.log('selectedSize', selectedSize)
  }, [selectedSize])

  const handleAddToCart = () => {
    showAutoClosingMessage('Item added to cart', 1500, 'success')
    addToCart(
      {
        ...foundItem,
        selectedSize,
      },
      'add',
    )
    setShowMoreLessButtons(true)
  }

  const setSize = (size, index) => {
    setSelectedSize(size)
    setSelectedSizeIndex(index)
  }

  useEffect(() => {
    returnSelectedSizes(selectedSize)
    setSelectedSize(selectedSize)
  }, [returnSelectedSizes, selectedSize])

  // Buscar el ítem en la lista de categorías

  useEffect(() => {
    categoriesList.forEach((category) => {
      const foundItem = category.items.find(
        (item) => item.id === parseInt(itemId),
      )
      if (foundItem) {
        setFoundItem(foundItem)
      }
    })
    console.log('foundItem', foundItem)
  }, [itemId, foundItem])

  const [selectedSizeIndex, setSelectedSizeIndex] = useState(null)

  return (
    <div className='item-detail-page'>
      <div className='left'>
        {foundItem && foundItem.carouselImages && (
          <ImageCarousel images={foundItem.carouselImages} />
        )}
      </div>
      <div className='items-detail-page-container-right'>
        <h2>{foundItem?.name}</h2>
        <p>{foundItem?.description}</p>
        <p>Materials: {foundItem?.materials}</p>
        <p>Price: {foundItem?.price} $</p>
        <div className='idp-buttons--container'>
          {foundItem &&
            foundItem.buttonSizes &&
            foundItem.buttonSizes.map((size, index) => (
              <button
                key={size}
                className={`idp-button-size ${
                  selectedSizeIndex === index ? 'clicked' : ''
                }`}
                onClick={() => {
                  setSize(size, index)
                }}
              >
                {size}
              </button>
            ))}
        </div>
        <div
          className={`idp--add-to-cart--buttons--container ${
            showMoreLessButtons ? 'flex-column' : ''
          }`}
        >
          {' '}
          {!showMoreLessButtons ? (
            <button onClick={handleAddToCart}>Add To Cart</button>
          ) : (
            <div className='cart-page--buttons--container'>
              <button
                className={`btn-more-less ${
                  showMoreLessButtons ? 'custom-width' : ''
                }`}
                onClick={() => {
                  addToCart(foundItem, 'add')
                }}
              >
                +
              </button>
              <button
                className='btn-more-less'
                onClick={() => addToCart(foundItem, 'substract')}
              >
                -
              </button>
            </div>
          )}
          <button className='add-to-wishlist'>Add to Wish List</button>
        </div>
      </div>
      {foundItem && (
        <div className='idp--accordeon--container'>
          <ControlledAccordions foundItem={foundItem} />
        </div>
      )}
    </div>
  )
}

export default ItemDetailPage
