"use client";
import React, { useState } from "react";
import './ProductImageSlider.css';
import ImageMagnifier from "./ImageMagnifier";
import { HiChevronRight, HiChevronLeft } from "react-icons/hi";

const ProductImageSlider = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [startIndex, setStartIndex] = useState(0);

  const handleThumbnailClick = (index) => {
    setCurrentImageIndex(index);
  };

  const handleNext = () => {
    if (startIndex + 4 < images.length) {
      setStartIndex(startIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  return (
    <>
      <div className="slider-container">
        <ImageMagnifier
          src={images[currentImageIndex].src}
          alt={images[currentImageIndex].alt}
        />
      </div>
      <div className="thumbnails">
        {images.slice(startIndex, startIndex + 4).map((image, index) => (
          <img
            key={startIndex + index}
            src={image.src}
            alt={image.alt}
            width={80}
            height={80}
            className={`thumbnail ${
              startIndex + index === currentImageIndex ? "active" : ""
            }`}
            onClick={() => handleThumbnailClick(startIndex + index)}
          />
        ))}
      </div>

      <button onClick={handlePrevious} disabled={startIndex === 0} className="prvBtn btn">
        <HiChevronLeft />
      </button>
      <button onClick={handleNext} disabled={startIndex + 4 >= images.length} className="nxtBtn btn">
        <HiChevronRight />
      </button>
    </>
  );
};

export default ProductImageSlider;
