import React from 'react';
import './ShopTab.css';
import Image from 'next/image';
import dummyProducts from '@/components/Data/dummyProducts';

function ShopTab() {
  const sweetProducts = dummyProducts.categories.find(category => category.category_title === 'Sweets').products;

  return (
    <div className='shopContentWrap'>
      <div className="tabContent">
        <div className="tabPane">
          <div className="productsWrap">
            <h3>SWEETS <span>({sweetProducts.length})</span></h3>
            <div className="categoryProductsWrap">
              {sweetProducts.map(product => (
                <div key={product.product_id} className="singleProductContainer">
                  <div className="productBody">
                    <div className="productContent">
                      <div className="productImgContainer">
                        <div className="productImg">
                          <Image src={product.img} alt={product.title} width={235} height={190}  />
                        </div>
                      </div>
                      <div className="productDescWrap">
                        <span className="productTitle">
                          {product.title}
                        </span>
                        <div className="productPriceDiv">
                          <h5>
                            &#8377; {product.price} /-
                          </h5>
                          <span className='productModalBtn'></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ShopTab;
