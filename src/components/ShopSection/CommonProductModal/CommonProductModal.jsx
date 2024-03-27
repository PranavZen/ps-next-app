import React, { useEffect, useRef } from "react";
import "./CommonProductModal.css";
import { IoClose } from "react-icons/io5";
import Image from "next/image";
import { useSelector } from "react-redux";
import { productModalActions } from "@/store/actions/productModalActions";

function CommonProductModal() {
  const { productModalVisible } = useSelector((store) => store.productModal);
  const { closeProductModal, openProductModal } = productModalActions();
  const productModalRef = useRef();

  function handleClickOutsidePM(event) {
    if (
      productModalRef.current &&
      !productModalRef.current.contains(event.target)
    ) {
      closeProductModal();
    }
  }

  useEffect(() => {
    window.addEventListener("mousedown", handleClickOutsidePM);
    return () => {
      window.removeEventListener("mousedown", handleClickOutsidePM);
    };
  }, []);

  useEffect(() => {
    if (productModalVisible) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [productModalVisible]);

  // //close modal
  // useEffect(() => {
  //   if (!productModalVisible) {
  //     const timer = setTimeout(() => {
  //       closeProductModal();
  //     }, 300);
  //     return () => clearTimeout(timer);
  //   }
  // }, [productModalVisible, closeProductModal]);

  // //open modal
  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     openProductModal();
  //   }, 200);

  //   return () => clearTimeout(timer);
  // }, []);


  return (
    <div className={`productModalBG ${productModalVisible ? "show" : ""}`}>
      <div
        className={`productModalContent ${productModalVisible ? "show" : ""}`}
        ref={productModalRef}
      >
        <div className="productModalHeader">
          <h4 className="productModalTitle">Motichoor Ladoo</h4>
          <button className="productModalClose" onClick={closeProductModal}>
            <IoClose />
          </button>
        </div>
        <div className="productModalBody">
          <div className="productQuantityDetailsWrap">
            <div className="productQuantityItem">
              <div className="pqImage">
                <Image src alt="product-image" height={500} width={500} />
              </div>
              <div className="pqWT">
                <span>250px</span>
              </div>
              <div className="pqPrice">
                <span>200.00/-</span>
              </div>
              <div className="pqAdd">
                <button className="pqAddBtn">ADD</button>
              </div>
            </div>
            {/* Additional productQuantityItem components */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CommonProductModal;
