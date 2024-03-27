"use client";
import React, { useState } from "react";
import './ProductImageSlider.css';

const ImageMagnifier = ({ src, alt }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const { left, top, width, height } = e.target.getBoundingClientRect();
    const x = (e.clientX - left) / width;
    const y = (e.clientY - top) / height;
    setPosition({ x, y });
  };
  return (
    <div className="magnifier" onMouseMove={handleMouseMove}>
      <div
        className="magnified-image"
        style={{
          backgroundImage: `url(${src})`,
          backgroundPosition: `${position.x * 100}% ${position.y * 100}%`,
        }}
      />
      <img src={src} alt={alt} className="mImg" />
    </div>
  );
};

export default ImageMagnifier;
