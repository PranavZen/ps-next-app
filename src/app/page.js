"use client";
import HomeSlider from "@/components/HomeSlider/HomeSlider";
import Modal from "@/components/Modal/Modal";
import OurShops from "@/components/OurShops/OurShops";
import { useOurStore } from "@/store/OurStoreContext";
import { useState } from "react";

export default function Home() {
  const [modalItem, setModalItem] = useState(null);
  const { setSelectedStore } = useOurStore();

  const openModal = (item) => {
    setModalItem(item);
  };

  const closeModal = () => {
    setModalItem(null);
  };
  return (
    <>
      <HomeSlider />

      <OurShops openModal={openModal} />
      {modalItem && (
        <Modal key={modalItem.id} onClose={closeModal} item={modalItem} />
      )}
    </>
  );
}
