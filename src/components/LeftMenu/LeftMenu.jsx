import React from "react";
import SideMenuNav from "./sidemenu/SideMenuNav";
import CommonLayout from "./CommonLayout";
import SelectLocation from "./selectlocation/SelectLocation";
import LoginSideBar from "./loginSideBar/LoginSideBar";

function LeftMenu({ toggleLeftMenu }) {
  return (
    <CommonLayout toggleLeftMenu={toggleLeftMenu} >
      <LoginSideBar />
      {/* <SelectLocation/> */}
      {/* <SideMenuNav/> */}
    </CommonLayout>
  );
}

export default LeftMenu;
