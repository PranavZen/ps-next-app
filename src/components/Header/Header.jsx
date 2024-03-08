"use client";
import React, { useState } from "react";
import "../Header/Header.css";
import logo from "../../assets/punjabsindnewLogo.png";
import { useOurStore } from "@/store/OurStoreContext";
import Image from "next/image";
import LeftMenu from "../LeftMenu/LeftMenu";

function Header() {
  const [isLeftMenuVisible, setLeftMenuVisible] = useState(false);

  const toggleLeftMenu = () => {
    // alert("Toggle Left Menu");
    setLeftMenuVisible(!isLeftMenuVisible);
  };
  const { selectedStore } = useOurStore();
  // console.log(selectedStore)

  return (
    <header>
      <div className="header">
        <div className="logo">
          <a href="https://punjabsind.in">
            <Image src={logo} alt="Punjab Sind" height={100} width={100} priority/>
          </a>
        </div>
        <div className="navigation" onClick={toggleLeftMenu}>
          <span>
            <span className="top"></span>
            <span className="middle"></span>
            <span className="bottom"></span>
          </span>
        </div>
        {isLeftMenuVisible && <LeftMenu toggleLeftMenu={toggleLeftMenu} />}
        <div className="login">
          <a href="#">rohan</a>
        </div>
        <div className="location">
          <button></button>
          <a href="#">
            <span>
              {selectedStore ? selectedStore : "Select"}
              {selectedStore && <br />}
              {selectedStore && "Mumbai"}
              {!selectedStore && (
                <>
                  <br />
                  Location
                </>
              )}
            </span>
          </a>
        </div>
        <div className="floatRight">
          <div className="about">
            <a href="#">About Us</a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
