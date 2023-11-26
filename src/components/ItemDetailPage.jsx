import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { categoriesList } from './itemsData'
import ControlledAccordions from './Accordion'
import { showAutoClosingMessage } from '../App'

import dress1 from '../assets/images/dress-1.webp'
import earrings from '../assets/images/earrings.jpg'
import flower from '../assets/images/flower.webp'

import ImageCarousel from './Carousel2'

const ItemDetailPage = ({
  addToCart,
  cart,
  removeFromCart,
  returnSelectedSizes,
}) => {
  const { itemId } = useParams()
  const [foundItem, setFoundItem] = useState(null)
  const [selectedSize, setSelectedSize] = useState([])
  const [showMoreLessButtons, setShowMoreLessButtons] = useState(false)

  const [category, setCategory] = useState(null)

  const [beBlack, setBeBlack] = useState(false)

  const handleAddToCart = () => {
    showAutoClosingMessage('Item added to cart', 1500)
    addToCart(foundItem, 'add')
    setShowMoreLessButtons(true)
  }

  const setSize = (size, index) => {
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
        setCategory(category.name)
      }
    })
  }, [itemId])

  const [buttonSizes, setButtonsbuttonSizes] = useState(floweSizes)

  //useeffect for logging category

  useEffect(() => {
    switch (category ? category.toLowerCase() : '') {
      case 'flower':
        setButtonsbuttonSizes(floweSizes)
        break
      case 'earrings':
        setButtonsbuttonSizes(earringsSizes)
        break
      case 'necklaces':
        setButtonsbuttonSizes(necklacesSizes)
        break
      default:
        setButtonsbuttonSizes(defaultSizes)
    }
  }, [category, itemId])

  useEffect(() => {
    console.log('🚀  buttonSizes:', buttonSizes)
  }, [buttonSizes, category])

  const [selectedSizeIndex, setSelectedSizeIndex] = useState(-1)

  return (
    <div className='item-detail-page'>
      <div className='left'>
        <ImageCarousel images={images} />
      </div>
      <div className='items-detail-page-container-right'>
        <h2>{foundItem?.name}</h2>
        <p>{foundItem?.description}</p>
        <p>Materials: {foundItem?.materials}</p>
        <p>Price: {foundItem?.price} $</p>
        <div className='idp-buttons--container'>
          {buttonSizes.map((size, index) => (
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
            <button
              disabled={selectedSizeIndex < 0}
              title={selectedSizeIndex === 0 ? 'Select a size' : ''}
              className={`add-to-cart${
                selectedSizeIndex < 0 ? ' disabled' : ''
              }`}
              onClick={handleAddToCart}
            >
              Add To Cart
            </button>
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

const floweSizes = [
  'xx small',
  'x small',
  'small',
  'medium',
  'large',
  'x large',
  'xx large',
]

const earringsSizes = ['small', 'medium', 'large']

const necklacesSizes = ['small', 'medium', 'large', 'x large']

const defaultSizes = ['XS', 'S', 'M', 'L', 'XL']

const images = [dress1, earrings, flower]
