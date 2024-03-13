import React from 'react';
import './Location.css';
import { useOurStore } from '@/store/OurStoreContext';

function Location({toggleLeftMenu}) {
    const { selectedStore } = useOurStore();

  return (
    <div
          className="location"
          onClick={() => toggleLeftMenu("SelectLocation")}
        >
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
  )
}

export default Location