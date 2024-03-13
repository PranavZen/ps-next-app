import React from "react";
import CommonLayout from "./CommonLayout";
import SideMenuNav from "./sidemenu/SideMenuNav";
import SelectLocation from "./selectlocation/SelectLocation";
import LoginSideBar from "./loginSideBar/LoginSideBar";

function LeftMenu({ toggleLeftMenu, leftMenuComponent }) {
  let componentToRender;

  switch (leftMenuComponent) {
    case "SideMenuNav":
      componentToRender = <SideMenuNav />;
      break;
    case "SelectLocation":
      componentToRender = <SelectLocation />;
      break;
    case "LoginSideBar":
      componentToRender = <LoginSideBar />;
      break;
    default:
      componentToRender = null;
  }

  return <CommonLayout toggleLeftMenu={toggleLeftMenu}>{componentToRender}</CommonLayout>;
}

export default LeftMenu;
