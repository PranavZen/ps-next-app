import React from "react";
import Image from 'next/image';
import './ProductCard.css';
import { productModalActions } from "@/store/actions/productModalActions";


function ProductCard({product}) {
    const { openProductModal } = productModalActions();
    
  return (
    <div key={product.product_id} className="singleProductContainer">
      <div className="productBody">
        <div className="productContent">
          <div className="productImgContainer">
            <div className="productImg">
              <Image
                src={product.img}
                alt={product.title}
                width={135}
                height={90}
              />
            </div>
          </div>
          <div className="productDescWrap">
            <span className="productTitle">{product.title}</span>
            <div className="productPriceDiv">
              <h5>&#8377; {product.price} /-</h5>
              <span
                className="productModalBtn"
                onClick={openProductModal}
              ></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
