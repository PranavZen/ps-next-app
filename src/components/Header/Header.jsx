"use client";
import React, { useEffect } from "react";
import "../Header/Header.css";
import logo from "../../assets/punjabsindnewLogo.png";
import Image from "next/image";
import LeftMenu from "../LeftMenu/LeftMenu";
import Link from "next/link";
import Location from "../Location/Location";
import { useSelector } from "react-redux";
import { toggleMenuActions } from "@/store/actions/toggleMenuActions";

function Header() {
  const { visibleComponent } = useSelector((store) => store.sidemenu);
  const { toggleMenu } = toggleMenuActions();

  useEffect(() => {
    if (visibleComponent) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [visibleComponent]);

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
        <div className="navigation" onClick={() => toggleMenu("SideMenuNav")}>
          <span>
            <span className="top"></span>
            <span className="middle"></span>
            <span className="bottom"></span>
          </span>
        </div>
        {visibleComponent && <LeftMenu />}
        <div className="login" onClick={() => toggleMenu("LoginSideBar")}>
          <span>LOGIN</span>
        </div>
        <Location />
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
