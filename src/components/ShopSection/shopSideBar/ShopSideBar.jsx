import React from "react";
import "./ShopSideBar.css";
import Image from "next/image";
import dummyProducts from "@/components/Data/dummyProducts"; 

function ShopSideBar() {
  return (
    <div className="shopSideBar">
      <div className="shopSideDiv">
        <ul className="sideNavTabs">
          {dummyProducts.categories.map((category) => (
            <li key={category.category_title}  >
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
