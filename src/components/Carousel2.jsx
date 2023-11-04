import React, { useState, useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const ImageCarousel = ({ images }) => {
  const [selectedSlide, setSelectedSlide] = useState(0);

  const handleSelect = (index) => {
    setSelectedSlide(index);
  };

  return (
    <div className="image-carousel">
      <Carousel
        showStatus={false}
        showThumbs={false}
        selectedItem={selectedSlide}
        onChange={handleSelect}
        className="carousel-bezier"
        autoPlay={true}
        infiniteLoop={true}
        width="60%"
        transitionTime={1000}
        useKeyboardArrows={true}
      >
        {images.map((image, index) => (
          <div key={index}>
            <img src={image} alt={`Slide ${index}`} />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default ImageCarousel;
