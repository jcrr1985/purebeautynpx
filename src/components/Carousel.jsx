import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { categoriesList } from './itemsData';

import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const Carousel = () => {
  const [startIndex, setStartIndex] = useState(0);

  const handlePrevClick = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  const handleNextClick = () => {
    if (startIndex < categoriesList.length - 1) {
      setStartIndex(startIndex + 1);
      categoriesList[startIndex] = categoriesList[startIndex + 1];
    }
  };

  useEffect(() => {
    console.log('startIndex', startIndex);
  }, [startIndex]);

  return (
    <div className="carousel-container categories">
      <ChevronLeftIcon
        onClick={handlePrevClick}
        className="chevron-icon"
        style={{ position: 'relative', left: '10%' }}
      />
      <div className="categories-carousel categories">
        {categoriesList.map((category, index) => (
          <Link
            to={`/category/${category.name.toLowerCase()}`}
            key={index}
            className="category">
            <img
              src={category.src}
              alt={category.name}
            />
            <h4 className="categories-carousel--caption">{category.name}</h4>
          </Link>
        ))}
      </div>
      <ChevronRightIcon
        onClick={handleNextClick}
        className="chevron-icon"
        style={{ position: 'relative', right: '10%' }}
      />
    </div>
  );
};

export default Carousel;
