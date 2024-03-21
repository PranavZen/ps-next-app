import React from "react";
import "./LeftMenu.css";
import { IoClose } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { setVisibility } from "@/store/slice/toggleMenuSlice"; 

function CommonLayout({ children }) {
  const dispatch = useDispatch();

  const closeMenu = () => {
    dispatch(setVisibility());
  };

  return (
    <div className="leftMenu">
      <div className="navMain">
        <div className="topBar">
          <button onClick={closeMenu}>
            <IoClose />
          </button>
        </div>
        {children}
      </div>
    </div>
  );
}

export default CommonLayout;
