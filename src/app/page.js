"use client";
import React, { useState } from "react";
import HomeSlider from "@/components/HomeSlider/HomeSlider";
import Modal from "@/components/Modal/Modal";
import OurShops from "@/components/OurShops/OurShops";
import ShopSearchHeader from "@/components/ShopSearchHeader/ShopSearchHeader";

export default function Home() {
  const [modalItem, setModalItem] = useState(null);

  const openModal = (item) => {
    setModalItem(item);
  };

  const closeModal = () => {
    setModalItem(null);
  };

  return (
    <>
      <HomeSlider />
      <ShopSearchHeader />
      <OurShops openModal={openModal} />
      {modalItem && <Modal key={modalItem.id} onClose={closeModal} item={modalItem} />}
    </>
  );
}
