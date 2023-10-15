import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { categoriesList } from "./itemsData";

import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const Carousel = () => {
    const [startIndex, setStartIndex] = useState(0); 
    const visibleImages = categoriesList.slice(startIndex, startIndex + 3); 
    
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

    useEffect(() => {
        visibleImages.forEach((image) => {
            console.log(image.src);
        })
    },[])

    return (
        <div className="carousel-container categories">
            <ChevronLeftIcon onClick={handlePrevClick} className="chevron-icon" />
            <div className="categories-carousel categories">
                {visibleImages.map((category, index) => (
                    <Link
                    to={`/category/${category.name.toLowerCase()}`}
                    key={category.name}
                    className="category"
                    >
                    <img src={category.src} alt={category.name} />
                    <h4 className="categories-carousel--caption">{category.name}</h4>
                    </Link>
               ))}
            </div>
            <ChevronRightIcon onClick={handleNextClick} className="chevron-icon" />
         </div>
    );
};

export default Carousel;
