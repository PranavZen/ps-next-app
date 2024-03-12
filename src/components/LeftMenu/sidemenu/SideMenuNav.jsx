import React from "react";
import './SideMenuNav.css';

function SideMenuNav() {
  return (
    <div className="menuArea">
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
  );
}

export default SideMenuNav;
