import React, { useState, useRef } from "react";
import CommonLayout from "../CommonLayout";
import "./SelectLocation.css";
import { IoCloseSharp, IoSearchSharp, IoArrowForward } from "react-icons/io5";
import Image from "next/image";
import LocationPin from "../../../assets/location.svg";
import shopDetails from "../../Data/storeAddress";
import { useOurStore } from "@/store/OurStoreContext";

function SelectLocation() {
  const [searchResults, setSearchResults] = useState([]);
  const [isInputEmpty, setIsInputEmpty] = useState(true);
  const searchRef = useRef(null);
  const { setSelectedStore } = useOurStore();

  const handleSearch = () => {
    const query = searchRef.current.value.trim().toLowerCase();
    if (query === "") {
      setSearchResults([]);
      setIsInputEmpty(true);
      return;
    }

    const filteredResults = shopDetails.filter((shop) =>
      shop.name.toLowerCase().includes(query)
    );

    setSearchResults(
      filteredResults.length > 0
        ? filteredResults
        : [{ name: "Store not found" }]
    );
    setIsInputEmpty(false);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  const handleClearInput = () => {
    searchRef.current.value = "";
    setSearchResults([]);
    setIsInputEmpty(true);
  };

  return (
    <>
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
          <input
            type="text"
            placeholder="Enter Shop Name"
            ref={searchRef}
            onKeyDown={handleKeyPress}
            onChange={() =>
              setIsInputEmpty(searchRef.current.value.trim() === "")
            }
          />
          {isInputEmpty ? (
            <span className="searchGo" onClick={handleSearch}>
              <IoArrowForward />
            </span>
          ) : (
            <span className="searchGo" onClick={handleClearInput}>
              <IoCloseSharp />
            </span>
          )}
        </div>
        <div className="noLocationError">
          <span>Please Enter Your Location </span>
        </div>
      </div>
      <div className="searchResult">
        {searchResults.map((shop, index) => (
          <div
            className="resultDiv"
            key={index}
            onClick={() => setSelectedStore(shop.name.toUpperCase())}
          >
            <p className="resultTitle">{shop.name}</p>
            <p className="resultAddress">{shop.address}</p>
            <p className="resultNumber">{shop.number}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default SelectLocation;
