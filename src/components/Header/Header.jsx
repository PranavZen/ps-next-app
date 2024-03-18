"use client";
import React, { useState, useEffect } from "react";
import "../Header/Header.css";
import logo from "../../assets/punjabsindnewLogo.png";
import Image from "next/image";
import LeftMenu from "../LeftMenu/LeftMenu";
import Link from "next/link";
import Location from "../Location/Location";

function Header() {
  const [isLeftMenuVisible, setLeftMenuVisible] = useState(false);
  const [leftMenuComponent, setLeftMenuComponent] = useState(null);

  const toggleLeftMenu = (component) => {
    setLeftMenuComponent(component);
    setLeftMenuVisible(!isLeftMenuVisible);
  };

  useEffect(() => {
    if (isLeftMenuVisible) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isLeftMenuVisible]);

  return (
    <header>
      <div className="header">
        <div className="logo">
          <Link href="/">
            <Image
              src={logo}
              alt="Punjab Sind"
              height={100}
              width={100}
              priority
            />
          </Link>
        </div>
        <div
          className="navigation"
          onClick={() => toggleLeftMenu("SideMenuNav")}
        >
          <span>
            <span className="top"></span>
            <span className="middle"></span>
            <span className="bottom"></span>
          </span>
        </div>
        {isLeftMenuVisible && (
          <LeftMenu
            toggleLeftMenu={toggleLeftMenu}
            leftMenuComponent={leftMenuComponent}
          />
        )}
        <div className="login" onClick={() => toggleLeftMenu("LoginSideBar")}>
          <span>LOGIN</span>
        </div>
        <Location toggleLeftMenu={toggleLeftMenu} />
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
