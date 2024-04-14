import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { categoriesList } from './itemsData'

import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'

const Carousel = () => {
  const [itemsAtTime, setItemsAtTime] = useState(5)
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  const [numOfPicsAtTime, setNumOfPicsAtTime] = useState(3)

  const handleResize = () => {
    const newWidth = window.innerWidth
    setWindowWidth(newWidth)

    if (newWidth < 750) {
      setNumOfPicsAtTime(1)
    } else {
      setNumOfPicsAtTime(3)
    }
  }

  useEffect(() => {
    handleResize()
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  /// end of showing 1 image in the carousel in mobile view

  const [startIndex, setStartIndex] = useState(0)

  const handleScroll = (direction) => {
    const step = 1 // Número de elementos a desplazar por cada clic
    const newStartIndex =
      direction === 'left'
        ? Math.max(startIndex - step, 0)
        : Math.min(startIndex + step, categoriesList.length - numOfPicsAtTime)
    setStartIndex(newStartIndex)
  }

  return (
    <div className='carousel-container categories'>
      <ChevronLeftIcon
        className='chevron-icon'
        style={{ position: 'relative', left: '10%' }}
        onClick={() => handleScroll('left')}
      />
      <div className='categories-carousel categories'>
        {categoriesList
          .slice(startIndex, startIndex + numOfPicsAtTime)
          .map((category, index) => (
            <Link
              to={`/category/${category.name.toLowerCase()}`}
              key={index + startIndex}
            >
              <img src={category.src} alt={category.name} />
              <h4 className='categories-carousel--caption'>{category.name}</h4>
            </Link>
          ))}
      </div>
      <ChevronRightIcon
        className='chevron-icon'
        style={{ position: 'relative', right: '10%' }}
        onClick={() => handleScroll('right')}
      />
    </div>
  )
}

export default Carousel
