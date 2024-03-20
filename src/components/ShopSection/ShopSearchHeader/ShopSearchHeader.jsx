import React, { useState, useEffect, useRef } from "react";
import "./ShopSearchHeader.css";
import Image from "next/image";
import logo from "../../../assets/punjabsindnewLogo.png";
import { IoClose } from "react-icons/io5";
import ShopInput from "../shopInput/ShopInput";
import Location from "@/components/Location/Location";

function ShopSearchHeader() {
  const [isSearchOpen, setSearchOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const headerRef = useRef(null);

  const toggleSearch = () => {
    setSearchOpen(!isSearchOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (headerRef.current) {
        setIsSticky(headerRef.current.getBoundingClientRect().top <= 0);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div
        ref={headerRef}
        className={`shopSearchHeader ${isSticky ? "sticky" : ""}`}
      >
        <div className="container headerContainer">
          {isSticky && (
            <div className="headerIconSearch">
              <div className="shopHeaderLogo">
                <Image
                  src={logo}
                  height={60}
                  width={60}
                  alt="ps-logo"
                  priority
                />
              </div>
              <div className="shopHeaderLocation">
                <Location />
              </div>
            </div>
          )}
          <div className="shopSearchWrap">
            <ShopInput shopHeaderInput={toggleSearch} />
          </div>
          <div className="cartWrap">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22.1"
              height="18.411"
              viewBox="0 0 22.1 18.411"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22.1"
                height="18.411"
                viewBox="0 0 22.1 18.411"
              >
                <g
                  id="Vector_Smart_Object"
                  data-name="Vector Smart Object"
                  transform="translate(0 -3.651)"
                >
                  <g
                    id="Path_178"
                    data-name="Path 178"
                    transform="translate(0 0.475)"
                    fill="none"
                    strokeMiterlimit="10"
                  >
                    <path
                      d="M18.968,21.587H3.132L0,9.594H22.1Z"
                      stroke="none"
                    />
                    <path
                      d="M 17.4229793548584 19.58708572387695 L 19.51056098937988 11.5940465927124 L 2.58943772315979 11.5940465927124 L 4.677025318145752 19.58708572387695 L 17.4229793548584 19.58708572387695 M 18.96771812438965 21.58708572387695 L 3.132288217544556 21.58708572387695 L -1.716613724056515e-06 9.594046592712402 L 22.09999847412109 9.594046592712402 L 18.96771812438965 21.58708572387695 Z"
                      stroke="none"
                      fill="#333"
                    />
                  </g>
                  <line
                    id="Line_15"
                    data-name="Line 15"
                    y1="5.327"
                    x2="4.698"
                    transform="translate(3.132 5.062)"
                    fill="none"
                    stroke="#333"
                    strokeLinecap="round"
                    strokeMiterlimit="10"
                    strokeWidth="2"
                  />
                  <line
                    id="Line_16"
                    data-name="Line 16"
                    x1="4.698"
                    y1="5.327"
                    transform="translate(14.269 5.062)"
                    fill="none"
                    stroke="#333"
                    strokeLinecap="round"
                    strokeMiterlimit="10"
                    strokeWidth="2"
                  />
                  <path
                    id="Path_577"
                    data-name="Path 577"
                    d="M2,0h8.587"
                    transform="translate(5.181 16.066)"
                    fill="none"
                    stroke="#333"
                    strokeLinecap="round"
                    strokeWidth="2"
                  />
                </g>
              </svg>
            </svg>
            <span className="cart-count">0</span>
          </div>
        </div>
      </div>
      <div className={`searchBody ${isSearchOpen ? "open" : ""}`}>
        <div className="searchContainer">
          <span className="searchBodyClose" onClick={toggleSearch}>
            <IoClose />
          </span>
          <div className="searchContainerBody">
            <div className="container">
              <div className="row">
                <div className="col-md-10 mt-4">
                  <ShopInput />
                </div>
              </div>
              <div className="row"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ShopSearchHeader;
