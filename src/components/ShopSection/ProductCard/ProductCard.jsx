import React from "react";
import Image from "next/image";
import "./ProductCard.css";
import { productModalActions } from "@/store/actions/productModalActions";
import Link from "next/link";

function ProductCard({ product }) {
  const { openProductModal } = productModalActions();

  return (
    <div key={product.product_id} className="singleProductContainer">
      <div className="productBody">
        <div className="productContent">
          <div className="productImgContainer">
            <Link href={`/productDetails/${product.title}`}>
              <div className="productImg">
                <Image
                  src={product.img}
                  alt={product.title}
                  width={135}
                  height={90}
                />
              </div>
            </Link>
          </div>
          <div className="productDescWrap">
            <Link href={`/productDetails/${product.title}`}>
              <span className="productTitle">{product.title}</span>
            </Link>
            <div className="productPriceDiv">
              <h5>&#8377; {product.price} /-</h5>
              <span className="productModalBtn" onClick={openProductModal}>
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
                      stroke-miterlimit="10"
                    >
                      <path
                        d="M18.968,21.587H3.132L0,9.594H22.1Z"
                        stroke="none"
                      ></path>
                      <path
                        d="M 17.4229793548584 19.58708572387695 L 19.51056098937988 11.5940465927124 L 2.58943772315979 11.5940465927124 L 4.677025318145752 19.58708572387695 L 17.4229793548584 19.58708572387695 M 18.96771812438965 21.58708572387695 L 3.132288217544556 21.58708572387695 L -1.716613724056515e-06 9.594046592712402 L 22.09999847412109 9.594046592712402 L 18.96771812438965 21.58708572387695 Z"
                        stroke="none"
                        fill="#333"
                      ></path>
                    </g>
                    <line
                      id="Line_15"
                      data-name="Line 15"
                      y1="5.327"
                      x2="4.698"
                      transform="translate(3.132 5.062)"
                      fill="none"
                      stroke="#333"
                      stroke-linecap="round"
                      stroke-miterlimit="10"
                      stroke-width="2"
                    ></line>
                    <line
                      id="Line_16"
                      data-name="Line 16"
                      x1="4.698"
                      y1="5.327"
                      transform="translate(14.269 5.062)"
                      fill="none"
                      stroke="#333"
                      stroke-linecap="round"
                      stroke-miterlimit="10"
                      stroke-width="2"
                    ></line>
                    <path
                      id="Path_577"
                      data-name="Path 577"
                      d="M2,0h8.587"
                      transform="translate(5.181 16.066)"
                      fill="none"
                      stroke="#333"
                      stroke-linecap="round"
                      stroke-width="2"
                    ></path>
                  </g>
                </svg>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
