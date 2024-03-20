import React from 'react';
import { useSelector } from 'react-redux';
import './ShopSideBar.css';
import Image from 'next/image';
import dummyProducts from '@/components/Data/dummyProducts';
import { selectCategoryActions } from '@/store/actions/selectCategoryActions';


function ShopSideBar() {
  const { handleCategoryClick } = selectCategoryActions();
  const selectedCategory = useSelector(state => state.selectCategory);

  return (
    <div className="shopSideBar">
      <div className="shopSideDiv">
        <ul className="sideNavTabs">
          {dummyProducts.categories.map((category) => (
            <li key={category.category_title} onClick={() => handleCategoryClick(category.category_title)} className={selectedCategory === category.category_title ? 'open' : ''}>
              <span>
                <span className="sideIMG">
                  <Image
                    src={category.category_img}
                    alt={category.category_title}
                    width={38}
                    height={38}
                  />
                </span>
                {category.category_title}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ShopSideBar;
