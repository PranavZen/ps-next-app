'use client';
import React from 'react';
import './Location.css';
import { useSelector } from 'react-redux';
import { toggleMenuActions } from '@/store/actions/toggleMenuActions';

function Location() {
  const { selectedStore } = useSelector(store => store.location);
  const {toggleMenu} = toggleMenuActions();


  return (
    <div className="location" onClick={() => toggleMenu("SelectLocation")}>
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
