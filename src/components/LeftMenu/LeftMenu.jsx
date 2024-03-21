import React from "react";
import CommonLayout from "./CommonLayout";
import SideMenuNav from "./sidemenu/SideMenuNav";
import SelectLocation from "./selectlocation/SelectLocation";
import LoginSideBar from "./loginSideBar/LoginSideBar";
import { useSelector } from "react-redux";

function LeftMenu() {

  const {selectedComponent} = useSelector(store => store.sidemenu)

  let componentToRender;

  switch (selectedComponent) {
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

  return <CommonLayout >{componentToRender}</CommonLayout>;
}

export default LeftMenu;
