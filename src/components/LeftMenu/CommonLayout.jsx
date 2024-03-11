import React from "react";
import "./LeftMenu.css";
function CommonLayout({children}) {
  return (
    <div className="leftMenu">
      <div className="navMain">
        {children}
      </div>
    </div>
  );
}

export default CommonLayout;
