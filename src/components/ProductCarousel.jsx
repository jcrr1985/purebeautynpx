import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { categoriesList } from './itemsData';

import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const ProductCarousel = () => {
  const [startIndex, setStartIndex] = useState(0);

  const handlePrevClick = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  const handleNextClick = () => {
    if (startIndex + 3 < categoriesList.length) {
      setStartIndex(startIndex + 1);
    }
  };

  return (
    <div className="product-carousel-container">
      <ChevronLeftIcon
        onClick={handlePrevClick}
        className="carousel-arrow"
      />
      <div
        className="product-carousel"
        style={{ transform: `translateX(-${startIndex * 25}%)` }}>
        {categoriesList.map((category) => (
          <div
            key={category.name}
            className="product-category">
            <Link
              to={`/category/${category.name.toLowerCase()}`}
              className="category-link">
              <img
                src={category.src}
                alt={category.name}
              />
              <h4 className="category-caption">{category.name}</h4>
            </Link>
          </div>
        ))}
      </div>
      <ChevronRightIcon
        onClick={handleNextClick}
        className="carousel-arrow"
      />
    </div>
  );
};

export default ProductCarousel;
