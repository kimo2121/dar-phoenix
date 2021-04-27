import React from "react";
import * as IoIcons from "react-icons/io";
import { Link } from "react-router-dom";
import "./sliderStyles.css";
const MarketingSlider = () => {
  const [state2, setstate2] = React.useState(false);
  const submenuHandler2 = () => {
    setstate2(!state2);
  };
  return (
    <div onClick={submenuHandler2} class="dropdownslider">
      الدعاية و التسويق
      <IoIcons.IoIosArrowDown
        color="white"
        size={26}
        className={state2 ? "icons-sub active" : "icons-sub"}
      />
      <div
        class={
          state2 ? "dropdown-contentslider active" : "dropdown-contentslider"
        }
      >
        <Link to="#">Link 1</Link>
        <Link to="#">Link 2</Link>
        <Link to="#">Link 3</Link>
      </div>
    </div>
  );
};

export default MarketingSlider;
