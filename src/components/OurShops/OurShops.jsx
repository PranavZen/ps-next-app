import React from "react";
import shopDetails from "../Data/storeAddress";
import "../OurShops/OurShops.css";
import { useOurStore } from "../../Store/OurStoreContext";

const OurShops = ({ openModal }) => {
  // const { setSelectedStore } = useOurStore();

  return (
    <div className="ourShops">
      <div className="container">
        <div className="sectionTitle">
          <h3>OUR STORES</h3>
        </div>
        <div className="">
          <ul>
            {shopDetails.map((item) => (
              <li className="col-md-4" key={item.id}>
                <a onClick={() => openModal(item)}>{item.name}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default OurShops;
