'use client'
import React, { useRef, useEffect, useState } from "react";
import "../Modal/Modal.css";
import { useOurStore } from "@/store/OurStoreContext";

function Modal({ onClose, item }) {
  const modalRef = useRef();
  const [showModal, setShowModal] = useState(false);
  const { setSelectedStore } = useOurStore();

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowModal(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  function handleClickOutside(event) {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      setShowModal(false);
    }
  }

  function handleClose() {
    setShowModal(false);
  }

  function handleSelectLocation() {
    setSelectedStore(item.name.toUpperCase());
    setShowModal(false);
    window.scrollTo({ top: 0, behavior: "instant" });
  }

  useEffect(() => {
    window.addEventListener("mousedown", handleClickOutside);
    return () => {
      window.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (!showModal) {
      const timer = setTimeout(() => {
        onClose();
      }, 200);
      return () => clearTimeout(timer);
    }
  }, [showModal, onClose]);

  return (
    <div className={`modalBG ${showModal ? "show" : ""}`}>
      <div className={`modalContent ${showModal ? "show" : ""}`} ref={modalRef}>
        <div className="modalHeader">
          <h5>SHOP DETAILS</h5>
          <button className="closeModal" onClick={handleClose}>
            <span>&times;</span>
          </button>
        </div>
        <div className="modalMain">
          <table className="shopDetailsTable">
            <thead>
              <tr className="shopDetailsTableHeadRow">
                <th>SHOP NAME</th>
                <th>SHOP ADDRESS</th>
                <th>INCHARGE NAME</th>
                <th>MOBILE NO.</th>
              </tr>
            </thead>
            <tbody>
              <tr className="shopDetailsTableRow">
                <td>{item.name}</td>
                <td>{item.address}</td>
                <td>{item.incharge}</td>
                <td>{item.number}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="modalFooter">
          <a
            className="btn shopSelectButton"
            onClick={handleSelectLocation}
          >
            SELECT LOCATION
          </a>
        </div>
      </div>
    </div>
  );
}

export default Modal;
