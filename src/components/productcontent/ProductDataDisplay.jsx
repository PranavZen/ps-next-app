import React from "react";
import { PiCurrencyInrBold } from "react-icons/pi";
import QuantityBtn from "./quantitybutton/QuantityBtn";
import WeightSelectBox from "./weightselect/WeightSelectBox";
import CheckoutBtn from "./checkoutbutton/CheckoutBtn";
import "../productcontent/productcontent.css";
function ProductDataDisplay({productData}) {
  return (
    <div className="productcontentWraper">
      <div className="proNameWrap">
        <h4>
          {productData.title} <span>(250 gms)</span>
        </h4>
      </div>
      <div className="proPriceWrap">
        <h5>
          Price : <PiCurrencyInrBold />
          {productData.price} <span>(Inclusive of all taxes)</span>
        </h5>
      </div>
      <div className="proBtnsWrap">
        <QuantityBtn />
        <WeightSelectBox />
        <CheckoutBtn />
      </div>
      <div className="abtProductWrap">
        <h6>About the product :</h6>
        <p>
          No sugar alert! Our Khajoor Barfi, which is made from healthy honey
          and A grade khajoors, is here to keep your body in good shape and feed
          your sweet tooth.
        </p>
      </div>
    </div>
  );
}

export default ProductDataDisplay;
