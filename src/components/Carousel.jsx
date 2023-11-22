import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { categoriesList } from './itemsData'

import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'

const Carousel = () => {
  const [startIndex, setStartIndex] = useState(0)

  const handleScroll = (direction) => {
    const step = 1 // Número de elementos a desplazar por cada clic
    const newStartIndex =
      direction === 'left'
        ? Math.max(startIndex - step, 0)
        : Math.min(startIndex + step, categoriesList.length - 3) // Muestra 3 elementos a la vez

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
          .slice(startIndex, startIndex + 3)
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
