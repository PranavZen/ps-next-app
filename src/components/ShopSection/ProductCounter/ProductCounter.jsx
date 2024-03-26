import React from 'react';
import './ProductCounter.css';

function ProductCounter() {
  return (
    <div className="productCounterWrap">
        <span className='updateQuantity minus ' >-</span>
        <input type="text" readOnly value={1} className='productQuantity' />
        <span className='updateQuantity plus ' >+</span>
    </div>
  )
}

export default ProductCounter