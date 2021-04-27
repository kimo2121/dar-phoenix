import React from "react";
import { Link } from "react-router-dom";
import * as IoIcons from "react-icons/io";
import "./sliderStyles.css";
const OurServicesSlider = () => {
  const [state, setstate] = React.useState(false);
  const submenuHandler = () => {
    setstate(!state);
  };
  return (
    <div onClick={submenuHandler} class="dropdownslider">
      انشر معنا
      <IoIcons.IoIosArrowDown
        color="white"
        size={26}
        className={state ? "icons-sub active" : "icons-sub"}
      />
      <div
        class={
          state ? "dropdown-contentslider active" : "dropdown-contentslider"
        }
      >
        <Link to="#">طباعة</Link>
        <Link to="#">تجهيزات فنية</Link>
        <Link to="#">استخراج ورق كتاب</Link>
      </div>
    </div>
  );
};

export default OurServicesSlider;
