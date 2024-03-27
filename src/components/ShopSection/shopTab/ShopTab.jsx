import React from 'react';
import { useSelector } from 'react-redux';
import './ShopTab.css';
import dummyProducts from '@/components/Data/dummyProducts';
import ProductCard from '../ProductCard/ProductCard';

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
                <ProductCard key={product.product_id} product={product} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ShopTab;
