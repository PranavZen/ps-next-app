'use client';
import React, { useState } from "react";
import "../Footer/Footer.css";

import OurShops from "../OurShops/OurShops";
import Modal from "../Modal/Modal";
import FooterInfo from "../FooterInfo/FooterInfo";
import { useOurStore } from "@/store/OurStoreContext";

function Footer() {
  const [modalItem, setModalItem] = useState(null);
  const { setSelectedStore } = useOurStore();

  const openModal = (item) => {
    setModalItem(item);
    
  };

  const closeModal = () => {
    setModalItem(null);
  };

  return (
    <footer className="footer">
      <OurShops openModal={openModal} />
      {modalItem && (
        <Modal key={modalItem.id} onClose={closeModal} item={modalItem} />
      )}
      <FooterInfo />
    </footer>
  );
}

export default Footer;
