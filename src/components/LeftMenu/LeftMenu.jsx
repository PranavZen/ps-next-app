import React from "react";
import "./LeftMenu.css";
import { IoCloseSharp } from "react-icons/io5";

function LeftMenu({ toggleLeftMenu }) {
  return (
    <div className="leftMenu">
      <div className="navMain">
        <div className="menuArea">
          <div className="menuHeader">
            <button onClick={toggleLeftMenu}>
              <IoCloseSharp />
            </button>
          </div>
          <div className="menuList">
            <ul>
              <li>
                <span>
                  <h4>Menu</h4>
                </span>
              </li>
              <li>
                <a href="#">
                  <span>Careers</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span>Enquiry</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span>Contact Us</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftMenu;
