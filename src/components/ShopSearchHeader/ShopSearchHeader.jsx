import React from 'react';
import "./ShopSearchHeader.css";
import Image from 'next/image';
import logo from "../../assets/punjabsindnewLogo.png";
import Location from '../Location/Location';

function ShopSearchHeader() {
  return (
    <div className="shopSearchHeader">
      <div className="container headerContainer">
        <div className="headerIconSearch">
          <div className="shopHeaderLogo">
            <Image src={logo} height={60} width={60} alt='ps-logo' priority />
          </div>
          <div className="shopHeaderLocation">
            <Location/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ShopSearchHeader