'use client';
import React from 'react';
import './Location.css';
import { useSelector } from 'react-redux';

function Location({ toggleLeftMenu }) {
  const { selectedStore } = useSelector(store => store.location);


  return (
    <div className="location" onClick={() => toggleLeftMenu("SelectLocation")}>
      <button></button>
      <span className="locSpan">
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
      </span>
    </div>
  );
}

export default Location;
