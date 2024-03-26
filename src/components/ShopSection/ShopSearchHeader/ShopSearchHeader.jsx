import React, { useState, useEffect, useRef } from "react";
import "./ShopSearchHeader.css";
import Image from "next/image";
import logo from "../../../assets/punjabsindnewLogo.png";
import { IoClose } from "react-icons/io5";
import ShopInput from "../shopInput/ShopInput";
import Location from "@/components/Location/Location";
import dummyProducts from "@/components/Data/dummyProducts";
import CartIcon from "../CartIcon/CartIcon";

function ShopSearchHeader() {
  const [isSearchOpen, setSearchOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [searchKeyword, setSearchKeyword] = useState("");
  const [matchingProducts, setMatchingProducts] = useState([]);
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

  useEffect(() => {
    if (searchKeyword.trim() === "") {
      setMatchingProducts([]);
      return;
    }

    const filteredProducts = dummyProducts.categories.flatMap((category) =>
      category.products.filter((product) =>
        product.title.toLowerCase().includes(searchKeyword.toLowerCase())
      )
    );

    setMatchingProducts(filteredProducts);
  }, [searchKeyword]);

  const handleInputChange = (event) => {
    setSearchKeyword(event.target.value);
  };

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
          <CartIcon/>
          
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
                  <ShopInput
                    value={searchKeyword}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              {matchingProducts.length > 0 && (
                <div className="row">
                  <div className="col-md-12">
                    <div className="showResultTitle">
                      <p>Top Results</p>
                    </div>
                  </div>
                  {matchingProducts.map((product) => (
                    <div
                      className="col-md-3 col-6 d-none d-md-block mt-4 mb-4"
                      key={product.product_id}
                    >
                      <div className="resultProductsContainer">
                        <div className="resultProduct">
                          <div className="resultProductImgDiv">
                            <Image
                              src={product.img}
                              height={150}
                              width={300}
                              alt={product.title}
                            />
                          </div>
                          <div className="resultDesc">
                            <span className="resultDescTitle">
                              {product.title}
                            </span>
                            <div className="resultQuantity">Select</div>
                            <div className="resultPriceCol">
                              <span className="resultPriceTag">
                                {" "}
                                &#8377; {product.price}{" "}
                              </span>
                              <span className="resultBasketIcon"></span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ShopSearchHeader;
