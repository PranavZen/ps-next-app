import React from "react";
import "../../productcontent/weightselect/weightselect.css";
import { IoMdArrowDropdown } from "react-icons/io";
function WeightSelectBox() {
  return (
    <div className="weightSelectBoxWrap">
      <span className="downArrow">
        <IoMdArrowDropdown />
      </span>
      <select>
        <option value="option1">250 gms</option>
        <option value="option2">500 gms</option>
        <option value="option3">1 kg</option>
      </select>
    </div>
  );
}

export default WeightSelectBox;
