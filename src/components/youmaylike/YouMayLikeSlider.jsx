import React, { useState, useEffect } from "react";
import "./YouMayLikeSlider.css";
import SliderCardBox from "./slidercard/SliderCardBox";
import dummyProducts from "../Data/dummyProducts";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

function YouMayLikeSlider() {
  const [randomProducts, setRandomProducts] = useState([]);
  const [startIndex, setStartIndex] = useState(0);

  useEffect(() => {
    const getRandomProducts = () => {
      const products = [];
      const allProducts = dummyProducts.categories.flatMap(
        (category) => category.products
      );
      const totalProducts = allProducts.length;
      const selectedIndices = new Set();

      while (selectedIndices.size < 20) {
        const randomIndex = Math.floor(Math.random() * totalProducts);
        if (!selectedIndices.has(randomIndex)) {
          selectedIndices.add(randomIndex);
          products.push(allProducts[randomIndex]);
        }
      }
      return products;
    };

    setRandomProducts(getRandomProducts());
  }, []);

  const handleNext = () => {
    if (startIndex + 4 < randomProducts.length) {
      setStartIndex(startIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  return (
    <div className="youMakeLikeWrap">
      <h4 className="youMightLikeTitle">YOU MIGHT ALSO LIKE</h4>
      <div className="youMightLikeSlider">
        <div className="sliderContainer">
          {randomProducts.slice(startIndex, startIndex + 4).map((product) => (
            <SliderCardBox key={product.product_id} product={product} />
          ))}
        </div>
        <button
          onClick={handlePrevious}
          disabled={startIndex === 0}
          className="prvBtn btn"
        >
          <HiChevronLeft />
        </button>
        <button
          onClick={handleNext}
          disabled={startIndex + 4 >= randomProducts.length}
          className="nxtBtn btn"
        >
          <HiChevronRight />
        </button>
      </div>
    </div>
  );
}

export default YouMayLikeSlider;


