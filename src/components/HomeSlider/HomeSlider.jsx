'use client';
import React, { useState, useEffect } from "react";
import "../HomeSlider/HomeSlider.css";
import slide1 from "../../assets/desk_homeSlid1.jpg";
import slide2 from "../../assets/desk_homeSlid2.jpg";
import { FaCircleChevronLeft, FaCircleChevronRight } from "react-icons/fa6";
import Image from "next/image";

function HomeSlider() {
  const [currIndex, setIndex] = useState(0);
  const [dragStart, setDragStart] = useState(0);

  const slides = [slide1, slide2];

  const goToNextSlide = () => {
    setIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
  };

  const goToPrevSlide = () => {
    setIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
  };

  const handleDragStart = (event) => {
    setDragStart(event.pageX || event.touches[0].pageX);
  };

  const handleDragEnd = (event) => {
    const dragEnd = event.pageX || event.changedTouches[0].pageX;
    const diff = dragStart - dragEnd;
    const threshold = 100; 

    if (Math.abs(diff) > threshold) {
      if (diff > 0) {
        goToNextSlide();
      } else {
        goToPrevSlide();
      }
    }
    setDragStart(0);
  };

  useEffect(() => {
    const interval = setInterval(goToNextSlide, 8000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <section
      className="bannerCarousel"
      onTouchStart={handleDragStart}
      onTouchEnd={handleDragEnd}
      onMouseDown={handleDragStart}
      onMouseUp={handleDragEnd}
    >
      <div className="imageContainer">
        {slides.map((slide, index) => (
          <div key={index} className={index === currIndex ? "slide active" : "slide"}>
            <Image src={slide} alt="Banner" width={1920} height={500} />
          </div>
        ))}
        <a className="previous" onClick={goToPrevSlide}>
          <FaCircleChevronLeft />
        </a>
        <a className="next" onClick={goToNextSlide}>
          <FaCircleChevronRight />
        </a>
      </div>

      <div className="pagination">
        {slides.map((slide, index) => (
          <span
            key={index}
            className={index === currIndex ? "footerdot active" : "footerdot"}
            onClick={() => setIndex(index)}
          ></span>
        ))}
      </div>
    </section>
  );
}

export default HomeSlider;
