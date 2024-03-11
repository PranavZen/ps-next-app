import React from "react";
import "./LeftMenu.css";
import { IoClose } from "react-icons/io5";
function CommonLayout({ children, toggleLeftMenu }) {
  return (
    <div className="leftMenu">
      <div className="navMain">
        <div className="topBar">
          <button onClick={toggleLeftMenu}>
            <IoClose />
          </button>
        </div>
        {children}
      </div>
    </div>
  );
}

export default CommonLayout;
