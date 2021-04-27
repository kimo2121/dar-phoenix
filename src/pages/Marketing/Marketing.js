import React from "react";
import { Link } from "react-router-dom";
import MarketingData from "./MarketingData.js";
// import "./styles.css";
const Marketing = () => {
  return (
    <div class="">
      {MarketingData.map((item, indx) => (
        <div class="">
          <Link to={item.to}>{item.text}</Link>
        </div>
      ))}
    </div>
  );
};

export default Marketing;
