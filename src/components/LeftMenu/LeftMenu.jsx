import React from "react";

// import { IoCloseSharp } from "react-icons/io5";
import SideMenuNav from "./sidemenu/SideMenuNav";
import CommonLayout from "./CommonLayout";
import SelectLocation from "./selectlocation/SelectLocation";

function LeftMenu({ toggleLeftMenu }) {
  return (
    <CommonLayout>
      <SelectLocation toggleLeftMenu={toggleLeftMenu} />
    </CommonLayout>
  );
}

export default LeftMenu;
