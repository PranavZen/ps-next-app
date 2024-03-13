"use client";
import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa6";
import "../../productcontent/quantitybutton/qtbtn.css";
function QuantityBtn() {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  return (
    <div className="qtWrap">
      <span className="decBnt" onClick={decrement}>
        <FaMinus />
      </span>
      <span className="countBox">{count}</span>
      <span className="incBnt" onClick={increment}>
        <FaPlus />
      </span>
    </div>
  );
}

export default QuantityBtn;
