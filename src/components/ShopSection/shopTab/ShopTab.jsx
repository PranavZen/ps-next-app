import React from 'react';
import { useSelector } from 'react-redux';
import './ShopTab.css';
import Image from 'next/image';
import dummyProducts from '@/components/Data/dummyProducts';

function ShopTab() {
  const selectedCategory = useSelector(state => state.selectCategory);

 
  const categoryProducts = dummyProducts.categories.find(category => category.category_title === selectedCategory)?.products || [];

  return (
    <div className='shopContentWrap'>
      <div className="tabContent">
        <div className="tabPane">
          <div className="productsWrap">
            <h3>{selectedCategory.toUpperCase()} <span>({categoryProducts.length})</span></h3>
            <div className="categoryProductsWrap">
              {categoryProducts.map(product => (
                <div key={product.product_id} className="singleProductContainer">
                  <div className="productBody">
                    <div className="productContent">
                      <div className="productImgContainer">
                        <div className="productImg">
                          <Image src={product.img} alt={product.title} width={135} height={90}  />
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
