import React from 'react';
import './ShopInput.css';
import { IoSearchSharp } from 'react-icons/io5';

function ShopInput({ value, onChange, shopHeaderInput }) {
  return (
    <div className="headerShopInput">
      <span>
        <IoSearchSharp />
      </span>
      <input
        type="text"
        placeholder="Search dairy products and more..."
        value={value}
        onChange={onChange}
        onClick={shopHeaderInput}
      />
    </div>
  );
}

export default ShopInput;
