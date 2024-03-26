import React from "react";
import "./SideCart.css";
import CartIcon from "../CartIcon/CartIcon";
import { IoClose } from "react-icons/io5";
import Image from "next/image";
import emptyCart from "../../../assets/empty_cart.jpg";
import { carttoggleActions } from "@/store/actions/cartToggleActions";
import ProductCounter from "../ProductCounter/ProductCounter";

function SideCart() {
  const { toggleSideCart } = carttoggleActions();
  return (
    <div className="sideCartWrap">
      <div className="cartTopBar">
        <span className="cartClose" onClick={toggleSideCart}>
          <IoClose />
        </span>
        <h6>Your Basket</h6>
        <CartIcon />
      </div>
      <div className="cartCollection">
        {/* <div className="cartEmpty">
          <h4>Cart Empty.</h4>
          <div className="container">
            <Image src={emptyCart} alt="cart-empty" height={500} width={500} />
          </div>
        </div> */}
        <div className="cartItemsWrap">
          <ul className="cartItemList">
            <li>
              <div className="cartItem">
                <div className="cartItemDescWrap">
                  <div className="cartItemImg">
                    <Image alt="" src height={500} width={500} />
                  </div>
                  <div className="cartItemDetails">
                    <h4 className="cartItemProductTitle">Kaju Katli</h4>
                    <h6 className="cartItemQuantity">500gms</h6>
                    <ProductCounter/>
                  </div>
                </div>
                <div className="cartItemRemoveWrap">
                  <span className="cartItemRemove">
                    <IoClose />
                  </span>
                  <h5> &#8377; 700 </h5>
                </div>
              </div>
              <div className="cartItem">
                <div className="cartItemDescWrap">
                  <div className="cartItemImg">
                    <Image alt="" src height={500} width={500} />
                  </div>
                  <div className="cartItemDetails">
                    <h4 className="cartItemProductTitle">Kaju Katli</h4>
                    <h6 className="cartItemQuantity">500gms</h6>
                    <ProductCounter/>
                  </div>
                </div>
                <div className="cartItemRemoveWrap">
                  <span className="cartItemRemove">
                    <IoClose />
                  </span>
                  <h5> &#8377; 700 </h5>
                </div>
              </div>
              <div className="cartItem">
                <div className="cartItemDescWrap">
                  <div className="cartItemImg">
                    <Image alt="" src height={500} width={500} />
                  </div>
                  <div className="cartItemDetails">
                    <h4 className="cartItemProductTitle">Kaju Katli</h4>
                    <h6 className="cartItemQuantity">500gms</h6>
                    <ProductCounter/>
                  </div>
                </div>
                <div className="cartItemRemoveWrap">
                  <span className="cartItemRemove">
                    <IoClose />
                  </span>
                  <h5> &#8377; 700 </h5>
                </div>
              </div>
              <div className="cartItem">
                <div className="cartItemDescWrap">
                  <div className="cartItemImg">
                    <Image alt="" src height={500} width={500} />
                  </div>
                  <div className="cartItemDetails">
                    <h4 className="cartItemProductTitle">Kaju Katli</h4>
                    <h6 className="cartItemQuantity">500gms</h6>
                    <ProductCounter/>
                  </div>
                </div>
                <div className="cartItemRemoveWrap">
                  <span className="cartItemRemove">
                    <IoClose />
                  </span>
                  <h5> &#8377; 700 </h5>
                </div>
              </div>
             
            </li>
          </ul>
        </div>
        <div className="cartTotalWrap">
          <div className="cartTotalData">
            <table className="cartTotal">
              <tbody>
                <tr>
                  <td style={{ width: "87%" }}>Subtotal</td>
                  <td>
                    <b>
                      ₹ <span id="subtotal">190</span>
                    </b>
                  </td>
                </tr>
                <tr>
                  <td>Delivery Charges</td>
                  <td>
                    <b>
                      ₹ <span id="delivery-charge">190</span>
                    </b>
                  </td>
                </tr>
                <tr className="cartFinalAmt">
                  <td>Total</td>
                  <td>
                    <b>
                      ₹ <span id="total">190</span>
                    </b>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <span className="cartCheckout">CHECKOUT</span>
        </div>
      </div>
    </div>
  );
}

export default SideCart;
