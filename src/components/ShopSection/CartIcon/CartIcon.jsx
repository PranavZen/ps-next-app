import React from "react";
import "./CartIcon.css";
import { carttoggleActions } from "@/store/actions/cartToggleActions";

function CartIcon() {

  const {toggleSideCart} = carttoggleActions();

  return (
    <div className="cartWrap" onClick={toggleSideCart} >
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
            <path d="M18.968,21.587H3.132L0,9.594H22.1Z" stroke="none" />
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
      <span className="cart-count">0</span>
    </div>
  );
}

export default CartIcon;
