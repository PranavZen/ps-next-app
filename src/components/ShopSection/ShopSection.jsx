import React from "react";
import "./ShopSection.css";
import ShopSearchHeader from "./ShopSearchHeader/ShopSearchHeader";
import ShopSideBar from "./shopSideBar/ShopSideBar";
import ShopTab from "./shopTab/ShopTab";

function ShopSection() {
  return (
    <div className="shopSectionWrap">
      <ShopSearchHeader />
      <div className="ShopBody">
        <ShopSideBar />
        <ShopTab />
      </div>
    </div>
  );
}

export default ShopSection;
