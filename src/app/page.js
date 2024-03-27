'use client'
import React from "react";
import HomeSlider from "@/components/HomeSlider/HomeSlider";
import Modal from "@/components/Modal/Modal";
import OurShops from "@/components/OurShops/OurShops";
import ShopSection from "@/components/ShopSection/ShopSection";
import { useSelector } from "react-redux";
import SideCart from "@/components/ShopSection/SideCart/SideCart";
import CommonProductModal from "@/components/ShopSection/CommonProductModal/CommonProductModal";

export default function Home() {
  const { modalItem } = useSelector(store => store.modal);
  const { cartVisible } = useSelector(store => store.sidecart);
  const {productModalVisible} = useSelector(store => store.productModal)
  return (
    <>
      <HomeSlider />
      <ShopSection />
      { cartVisible && <SideCart/>}
     { productModalVisible && <CommonProductModal/>}
      <OurShops  /> 
      {modalItem && <Modal key={modalItem.id}  item={modalItem} />}
    </>
  );
}
