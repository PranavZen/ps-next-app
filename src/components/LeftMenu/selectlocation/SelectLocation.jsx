import React from "react";
import CommonLayout from "../CommonLayout";
import "./SelectLocation.css";
import { IoCloseSharp, IoSearchSharp, IoArrowForward } from "react-icons/io5";
import Image from "next/image";
import LocationPin from "../../../assets/location.svg";

function SelectLocation() {
  return (
    <CommonLayout>
      <div className="topBar">
        <span>
          <IoCloseSharp />
        </span>
      </div>
      <div className="locationPin">
        <Image src={LocationPin} alt="LocationPin" width={55} height={70} />
      </div>
      <div className="locationText">
        <h5>FIND A STORE</h5>
      </div>
      <div className="searchLocationDiv">
        <div className="searchBar">
          <span className="searchIcon">
            <IoSearchSharp />
          </span>
          <input type="text" placeholder="Enter City or Pincode" />
          <span className="searchGo">
          <IoArrowForward />
          </span>
        </div>
      </div>
    </CommonLayout>
  );
}

export default SelectLocation;
