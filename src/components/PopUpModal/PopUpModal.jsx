import React, { useState, useEffect } from "react";
import "./PopUpModal.css";
import { IoCloseSharp } from "react-icons/io5";
import modalVideo from '../../assets/ps-vid-11.mp4'

function PopUpModal() {
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (!e.target.closest(".popUpModalContent") && isOpen) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [isOpen]);

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      {isOpen && (
        <div className={!isOpen ? "popUpModalBG" : 'popUpModalBG customAnimes'}>
          <div className="popUpModalBody customPopUpModalBody">
            <div className="popUpModalContent customPopUpModalContent">
              <div className="popUpModalCloseBtn customPopUpModalCloseBtn">
                <button onClick={handleClose}>
                  <IoCloseSharp />
                </button>
              </div>
              <div className="popUpVideo customPopUpVideo">
                <video id="vid" autoPlay muted loop playsInline>
                  <source
                    src={modalVideo}
                    type="video/mp4"
                  />
                </video>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default PopUpModal;
